import { objectType } from "@nexus/schema";

export const User = objectType({
    name: 'User',
    definition(t) {
        t.string('name');
        t.string('_id');
        t.string('pin');
    }
});
