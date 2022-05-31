import { objectType } from "@nexus/schema";


export const User = objectType({
    name: 'User',
    definition(t) {
      // t.string('name', { resolve: () => ({ name: 'nik tverd' }) });
      t.string('name');
    }
  })