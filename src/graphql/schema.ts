import { makeSchema, queryType, objectType } from "@nexus/schema";
import UserSchema from "src/models/users";
import TickerSchema from "src/models/tickers";
import { User } from './types/user';
import { Ticker } from './types/ticker';
import TickerKenguru from "src/components/views/TickerKenguru";
// import { resolve } from "path/posix";

const Query = queryType({
  definition(t) {
    t.string("name", () => "Leigh Halliday");
    t.list.field('users', {
      type: 'User',
      resolve: async () => {
        // console.log(UserSchema);
        // const user = new UserSchema({ name: "nik tv"});
        // await user.save();
        // console.log(user);

        return await UserSchema.find();
      }
    });
    t.list.field('tickers', {
      type: 'Ticker',
      resolve: async () => {
        // const ticker = new TickerSchema({ ticker: "BRN", exchange: 'ASX', lastPrice: 123.456, name: 'ticker name'});
        // await ticker.save();
        return await TickerSchema.find();
      }
    })
  },
});

const types = { Query, User, Ticker };

export const schema = makeSchema({
  types,
});