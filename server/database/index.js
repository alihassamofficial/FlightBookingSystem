const sequelize = require("./dbConnection");
//All tables will be imported here
const users = require("./tables/users");
const sessions = require("./tables/sessions");
const orders = require("./tables/orders");

const models = { users, sessions, orders }; //const model = {users, admin, emoloyee} // other table will be combined here later on.

//db_relations
users.hasOne(sessions, { foreignKey: "userId", as: "session" });
sessions.belongsTo(users, { foreignKey: "userId", as: "user" });

users.hasMany(orders, { foreignKey: "userId", as: "orders" });
orders.belongsTo(users, { foreignKey: "userId", as: "users" });
sequelize.models = models;
module.exports = { sequelize, models };
