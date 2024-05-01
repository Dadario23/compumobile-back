import User from "./User";
import Device from "./Device";
import Brand from "./Brand";
import Model from "./Model";
import Appointment from "./Appointment";
import Schedule from "./Schedule";
import Day from "./Day";

// Relaciones entre User y Device
User.hasMany(Device);
Device.belongsTo(User);
User.hasMany(Appointment); //ok
Appointment.belongsTo(User);

// Relaciones entre Brand y Model
Brand.hasMany(Model);
Model.belongsTo(Brand);

//Schedule.belongsTo(Appointment); // Un horario pertenece a un turno
Appointment.hasOne(Schedule); // Un turno tiene un horario

export { User, Device, Brand, Model, Appointment, Schedule, Day };
