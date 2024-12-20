const { Model, DataTypes } = require("sequelize");
const sequelize = require("../dbConnection");
const { v4: uuid } = require("uuid");
//there are so many version but we would use v4
const users = require("./users");

//ORM Converts class into table and this is been done by model, and table data datatypes are provide by DataTypes

//https://www.npmjs.com/package/bcryptjs

var { hash } = require("bcryptjs"); //hash is a promise function

class sessions extends Model {}

sessions.init(
  {
    sessionId: {
      type: DataTypes.STRING(80), // max length woould be 80 // this will be generated through some tool/logic that take 64 length
      primaryKey: true, //FAQ unique key vs primary key ---- here there is no need of unique key flag, as primary key itself make sure uniqueness.
      //autoIncrement: true // it's considered a bad praactice.
    },

    token: {
      // username can not be primary key as it may contain spaces, or it can be of any length, its better to avoid
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    userId: {
      type: DataTypes.STRING(80),
      unque: true,
      allowNull: false,
      references: {
        model: users,
        key: "userId",
      },
    },
  },
  {
    timestamps: true, // by default it is true (so we can also remove it from here),
    //this is creating two additional column (createdtime, updatedTime) in db, it against each records add created time,
    //and updated time, initially updated time is as same as creation time but later on, when we update record created stays the same,
    //but update is updated with change time
    paranoid: true, //by default it is false. // add deleted at NULL to each record
    // such records that deleted at === null, mean those record that are not deleted
    sequelize,
  }
);
//Whenever we have to decide attributes, think for a while either we actually need them in current scenarion or not
users.beforeCreate(async (sessions) => {
  //beforeCreate is a hook, as hook has before and after effects
  sessions.sessionId = uuid();
});

module.exports = sessions;
