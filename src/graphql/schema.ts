import { makeSchema, queryType, objectType } from "@nexus/schema";
import { User } from './types/user';
import { Ticker } from './types/ticker';

// import db from '../../firebase';
// import { collection, getDocs } from "firebase/firestore/lite";
import { getUser, getUsers } from "./resolvers/users";
import { getTickers } from "./resolvers/tickers";

const Query = queryType({
    definition(t) {
        t.string("name", () => "Leigh Halliday");
        t.list.field('users', {
            type: 'User',
            resolve: getUsers,
        });
        t.field('user', {
            type: 'User',
            args: {name: 'String'},
            nullable: true,
            resolve: getUser,
        });
        t.list.field('tickers', {
            type: 'Ticker',
            resolve: getTickers,
        })
    },
});

const types = { Query, User, Ticker };

export const schema = makeSchema({
  types,
});