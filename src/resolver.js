import { Cat } from "./models/Cat";

export const resolvers = {
  Query: {
    hello: () => "hi",
    cats: () => Cat.find({}),
    cats2: () => Cat.find({ name: "qweqweq" }),
  },
  Mutation: {
    createCat: async (_, { name, test, alias }) => {
      const kitty = new Cat({ name, test, alias });

      await kitty.save();

      return kitty;
    },
    deleteMessage: {
      resolve(parent, args) {
        console.log(args);
        return Cat.findByIdAndDelete(args.id);
      },
    },
    updateMessage: {
      resolve(parent, args) {
        return Cat.findByIdAndUpdate(args.id, {
          $set: { name: args.name },
        }).exec();
      },
    },
    deleteALL: {
      resolve(parent, args) {
        return Cat.deleteMany();
      },
    },
  },
};
