import { User } from "../models";
import { users } from "./seed";

const seedUsers = async () => {
  try {
    for (const user of users) {
      await User.create(user);
    }
    console.log("Usuarios sembrados exitosamente");
  } catch (error) {
    console.error("Error al sembrar usuarios:", error);
  }
};

export default seedUsers;
