const { AuthenticationError } = require("apollo-server-express");

const user = {
  _id: "1",
  name: "Jose",
  email: "test@mail.com",
  picture: "picture_url",
};

const authenticated = (next) => (root, args, ctx, info) => {
  const { user } = ctx;
  if (!user) {
    throw new AuthenticationError("You must be logged in");
  }
  return next(root, args, ctx, info);
};

module.exports = {
  Query: {
    me: authenticated((root, args, ctx) => ctx.user),
  },
};
