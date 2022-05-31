import { objectType } from "@nexus/schema";


export const Ticker = objectType({
    name: 'Ticker',
    definition(t) {
      t.id('_id');
      t.string('ticker');
      t.string('exchange');
      t.float('lastPrice');
      t.string('name');
      t.string('shortDescription');
    }
  })