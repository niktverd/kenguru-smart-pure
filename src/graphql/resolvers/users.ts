import db from '../../../firebase';
import {collection, doc, getDoc, getDocs, query, where} from "firebase/firestore/lite";

export const getUsers = async () => {
    const users = await getDocs(collection(db, 'users'));

    if (users.empty) {
        return [];
    }

    return users.docs.map((doc) => Object.assign(doc.data()));
}
;
export const getUser = async (_root, args, ctx) => {
    const userQuery = query(collection(db, 'users'), where('name', '==', args.name));
    const userSnap = await getDocs(userQuery);
    
    if (userSnap.empty) {
        return null;
    }

    console.log('getUser', userSnap.docs.map((doc) => doc.data()).find(Boolean))

    return userSnap.docs.map((doc) => doc.data()).find(Boolean);
};