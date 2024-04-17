import { Request, Response } from "express";
import User from "../models/User";
import { generateToken } from "../config/token";
import { LoginRequestBody, CreateUserRequestBody } from "../types/userTypes";
import validate from "../utils/validations";
import { Payload } from "../types/userTypes";
import jwt from "jsonwebtoken";
import Sequelize, { Op } from "sequelize";

interface CustomRequest extends Request {
  user?: {
    id: number;
  };
}

const userController = {
  register: async (req: Request, res: Response): Promise<Response> => {
    try {
      const {
        name,
        surname,
        email,
        password,
        isAdmin,
        profileImage,
      }: CreateUserRequestBody = req.body;

      if (!validate.email(email)) {
        return res
          .status(400)
          .json({ message: "El email tiene un formato incorrecto." });
      }

      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        return res
          .status(409)
          .json({ error: "El correo electrónico ya está registrado." });
      }
      const newUser = await User.create({
        name,
        surname,
        email,
        password,
        isAdmin,
        profileImage,
      });
      const userResponse = { ...newUser.toJSON(), password: undefined };
      //const mailOptions = emailTemplates.welcome(userResponse);
      //await transporter.sendMail(mailOptions);
      return res.status(201).json(userResponse);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Error interno del servidor." });
    }
  },
  login: async (req: Request, res: Response): Promise<Response> => {
    const { email, password }: LoginRequestBody = req.body;
    if (!email) {
      return res.status(400).json({ message: "Email no proporcionado." });
    }
    if (!validate.email(email)) {
      return res
        .status(400)
        .json({ message: "El formato del correo electrónico es inválido." });
    }
    if (!password) {
      return res.status(400).json({ message: "Contraseña no proporcionada." });
    }
    try {
      const existingUser = await User.findOne({ where: { email } });
      if (!existingUser) {
        return res
          .status(400)
          .json({ error: "Correo electrónico no registrado!!" });
      }

      const isOk = await existingUser.validatePassword(password);
      if (!isOk)
        return res.status(401).json({ error: "Su contraseña es incorrecta" });

      const existingUserToJson = existingUser.toJSON();

      const token = generateToken({
        id: existingUserToJson.id,
        isAdmin: existingUserToJson.isAdmin,
      });
      res.cookie("token", token, { httpOnly: true });
      res.status(200).json({
        message: "Usuario logeado con éxito.",
        isAdmin: existingUserToJson.isAdmin,
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Error interno del servidor." });
    }
  },
  getAllUsers: async (req: Request, res: Response) => {
    try {
      const users = await User.findAll({
        where: { isAdmin: false },
        attributes: [
          "id",
          "name",
          "surname",
          "isAdmin",
          "email",
          "profileImage",
        ],
        /* order: [["createdAt", "DESC"]],
        limit: 20, */
      });
      res.json(users).status(200);
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  },
  logout: async (req: Request, res: Response): Promise<Response> => {
    if (!req.cookies || !req.cookies.token) {
      return res.status(400).json({ message: "No hay sesión iniciada." });
    }
    res.clearCookie("token");
    return res
      .status(204)
      .json({ message: "Sesión cerrada satisfactoriamente." });
  },
  me: async (req: CustomRequest, res: Response): Promise<Response> => {
    const userId = req.user.id;
    if (!userId) {
      return res.status(400).json({ message: "id no encontrado en el token." });
    }
    try {
      const user = await User.findOne({
        where: { id: userId },
        attributes: ["name", "surname", "email", "isAdmin", "profileImage"],
      });
      if (!user) {
        return res.status(404).json({ message: "Usuario no encontrado." });
      }
      return res
        .json({
          id: userId,
          ...user.get({ plain: true }),
        })
        .status(200);
    } catch (error) {
      console.error(error);
      return res.status(500).send("Error de servidor");
    }
  },
};

export default userController;
