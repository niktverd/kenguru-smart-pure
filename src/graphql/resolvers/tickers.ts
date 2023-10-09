import db from '../../../firebase';
import {collection, getDocs} from "firebase/firestore/lite";

export const getTickers = async () => {
    const tickers = await getDocs(collection(db, 'tickers'));

    if (tickers.empty) {
        return [];
    }

    return tickers.docs.map((doc) => Object.assign(doc.data(), {_id: doc.id}));
}