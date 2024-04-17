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
Appointment.belongsTo(User);

// Relaciones entre Brand y Model
Brand.hasMany(Model);
Model.belongsTo(Brand);

Schedule.hasOne(Appointment);
Appointment.belongsTo(Schedule);

//* / Relaciones entre Schedule y Day
/* Schedule.belongsTo(Day); */ // Un horario pertenece a un día
/* Day.hasMany(Schedule); */ // Un día puede tener muchos horarios */

export { User, Device, Brand, Model, Appointment, Schedule, Day };
