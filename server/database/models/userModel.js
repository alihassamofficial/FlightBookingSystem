const { models } = require("../index");
module.exports = {
  createUser: async (body) => {
    try {
      const data = await models.users.create({ ...body });
      return { data: data };
    } catch (error) {
      return { error: error.errors[0].message };
    }
  },

  getAllUser: async () => {
    try {
      const data = await models.users.findAndCountAll({
        attributes: {
          exclude: ["password", "deletedAt"],
        },
        paranoid: false,
      });
      return { data };
    } catch (error) {
      return { error: error.errors[0].message };
    }
  },
  getUser: async ({ username, userId }) => {
    try {
      const data = await models.users.findOne({
        where: { ...(username === "false" ? { userId } : { username }) },
        // attributes: {
        //   exclude: ["password", "deletedAt"],
        // },
        paranoid: false,
      });
      return { data };
    } catch (error) {
      return { error };
    }
  },
  //{ userId, ...body } here we are destructuring, separating userId to apply where condition ,
  //and then applying rest operator with body to pass the rest of data for iupdation
  updateUser: async ({ userId, ...body }) => {
    try {
      const data = await models.users.update(
        { ...body },
        { where: { userId: userId } }
      );
      return {
        data: data,
      };
    } catch (error) {
      return { error };
    }
  },
  deleteUser: async ({ userId }) => {
    try {
      const data = await models.users.destroy({ where: { userId: userId } });
      return {
        data: data,
      };
    } catch (error) {
      return { error };
    }
  },
};
