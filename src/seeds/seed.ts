//npm run seed

export const users = [
  {
    name: "Dario",
    surname: "Andrada",
    email: "dandrada23@gmail.com",
    password: "Da42741852",
  },
  {
    name: "Admin",
    surname: "Unico",
    email: "admin@admin.com",
    password: "admin",
    isAdmin: true,
  },
];

export const devices = [
  {
    marca: "Samsung",
    modelo: "A30",
    falla: "NO CARGA",
  },
  {
    marca: "Motorola",
    modelo: "G8 Power Lite",
    falla: "NO DA IMAGEN",
  },
  {
    marca: "Iphone",
    modelo: "14 Pro max",
    falla: "SE REINICIA",
  },
  {
    marca: "Huawei",
    modelo: "P9",
    falla: "PANTALLA ROTA",
  },
];

export const brands = [
  { name: "Samsung" },
  { name: "Motorola" },
  { name: "iPhone" },
  { name: "LG" },
  { name: "Xiaomi" },
  { name: "Sony" },
  { name: "Huawei" },
  { name: "Google" },
];

export const models = [
  // Samsung
  { name: "Galaxy S20", brandId: 1 },
  { name: "Galaxy Note 20", brandId: 1 },
  { name: "Galaxy A51", brandId: 1 },
  { name: "Galaxy A71", brandId: 1 },
  { name: "Galaxy S10", brandId: 1 },
  { name: "Galaxy Note 10", brandId: 1 },
  { name: "Galaxy A21", brandId: 1 },
  { name: "Galaxy A31", brandId: 1 },
  { name: "Galaxy A41", brandId: 1 },
  { name: "Galaxy A11", brandId: 1 },
  // Motorola
  { name: "Moto G Power", brandId: 2 },
  { name: "Moto G Stylus", brandId: 2 },
  { name: "Moto G Fast", brandId: 2 },
  { name: "Moto E", brandId: 2 },
  { name: "Moto G9 Plus", brandId: 2 },
  { name: "Moto G9 Play", brandId: 2 },
  { name: "Moto G Pro", brandId: 2 },
  { name: "Moto G 5G Plus", brandId: 2 },
  { name: "Moto G8", brandId: 2 },
  { name: "Moto E6 Plus", brandId: 2 },
  // iPhone
  { name: "iPhone 12", brandId: 3 },
  { name: "iPhone 12 Pro", brandId: 3 },
  { name: "iPhone 11", brandId: 3 },
  { name: "iPhone SE", brandId: 3 },
  { name: "iPhone XR", brandId: 3 },
  { name: "iPhone XS", brandId: 3 },
  { name: "iPhone 8", brandId: 3 },
  { name: "iPhone 7", brandId: 3 },
  { name: "iPhone 6s", brandId: 3 },
  { name: "iPhone SE (1st gen)", brandId: 3 },
  // LG
  { name: "LG Velvet", brandId: 4 },
  { name: "LG G8 ThinQ", brandId: 4 },
  { name: "LG V60 ThinQ", brandId: 4 },
  { name: "LG Stylo 6", brandId: 4 },
  { name: "LG K51", brandId: 4 },
  { name: "LG V40 ThinQ", brandId: 4 },
  { name: "LG G7 ThinQ", brandId: 4 },
  { name: "LG Stylo 5", brandId: 4 },
  { name: "LG Q7+", brandId: 4 },
  { name: "LG V35 ThinQ", brandId: 4 },
  // Xiaomi
  { name: "Redmi Note 9 Pro", brandId: 5 },
  { name: "Redmi Note 8 Pro", brandId: 5 },
  { name: "Mi 10", brandId: 5 },
  { name: "Mi 9T Pro", brandId: 5 },
  { name: "Redmi Note 7", brandId: 5 },
  { name: "Redmi 9", brandId: 5 },
  { name: "Redmi Note 8", brandId: 5 },
  { name: "Mi Note 10", brandId: 5 },
  { name: "Mi 9 Lite", brandId: 5 },
  { name: "Poco X3", brandId: 5 },
  // Sony
  { name: "Xperia 1 II", brandId: 6 },
  { name: "Xperia 5 II", brandId: 6 },
  { name: "Xperia 10 II", brandId: 6 },
  { name: "Xperia L4", brandId: 6 },
  { name: "Xperia 1", brandId: 6 },
  { name: "Xperia 10", brandId: 6 },
  { name: "Xperia XZ3", brandId: 6 },
  { name: "Xperia XA2", brandId: 6 },
  { name: "Xperia XZ2", brandId: 6 },
  { name: "Xperia XA1", brandId: 6 },
  // Huawei
  { name: "P40 Pro", brandId: 7 },
  { name: "P30 Pro", brandId: 7 },
  { name: "P30 Lite", brandId: 7 },
  { name: "P Smart 2021", brandId: 7 },
  { name: "Mate 20 Pro", brandId: 7 },
  { name: "Mate 30 Pro", brandId: 7 },
  { name: "Nova 5T", brandId: 7 },
  { name: "Y9 Prime 2019", brandId: 7 },
  { name: "Y6p", brandId: 7 },
  { name: "Y7p", brandId: 7 },
  // Google
  { name: "Pixel 5", brandId: 8 },
  { name: "Pixel 4a", brandId: 8 },
  { name: "Pixel 4 XL", brandId: 8 },
  { name: "Pixel 3a", brandId: 8 },
  { name: "Pixel 3 XL", brandId: 8 },
  { name: "Pixel 3", brandId: 8 },
  { name: "Pixel 2 XL", brandId: 8 },
  { name: "Pixel 2", brandId: 8 },
  { name: "Pixel XL", brandId: 8 },
  { name: "Pixel", brandId: 8 },
];

export const days = [
  { name: "Lunes" },
  { name: "Martes" },
  { name: "Miércoles" },
  { name: "Jueves" },
  { name: "Viernes" },
  { name: "Sábado" },
  { name: "Domingo" },
];
/* export const schedules: { dayId: number; hour: string; available: boolean }[] =
  []; */
