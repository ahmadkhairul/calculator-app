require('dotenv').config();
const bcrypt = require("bcrypt");
const Login = require("./models/login");
const User = require("./models/users");

const hash = i => {
  return bcrypt.hashSync(i, 10);
};

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoString = process.env.DATABASE_URL;

const seeder = [
  new User({
    username: "ahmad",
    password: hash("12345"),
  }),
  new User({
    username: "khairul",
    password: hash("54321"),
  }),
  new Login({
    username: "ahmad",
    status: false,
    createdAt: new Date("2023-01-10T13:36:47.561+00:00"),
    logoutTime: new Date("2023-01-10T16:32:17.561+00:00"),
  }),
  new Login({
    username: "khairul",
    status: false,
    createdAt: new Date("2023-01-10T12:36:19.561+00:00"),
    logoutTime: new Date("2023-01-10T17:39:17.561+00:00"),
  }),
]

mongoose
  .connect(mongoString, { useNewUrlParser: true })
  .catch(err => {
    console.log(err.stack);
    process.exit(1);
  })
  .then(() => {
    console.log("Database Connected");
  });

seeder.map(async (p, index) => {
  await p.save((err, result) => {
    if (index === seeder.length - 1) {
      console.log("SEEDING DONE!");
      mongoose.disconnect();
    }
  });
});
