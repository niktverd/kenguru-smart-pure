import createHandler from "../../../middleware/middleware";
import User from "src/models/user";

const handler = createHandler();

handler.get(async (req, res) => {
    // poluchit spisok ob'ektov
    console.log("get object/");
    try {
        const buildings = await Building.find().populate({
            path: "offers",
            model: "Offer",
        });
        res.json({
            message: "list of buildings loaded successfully",
            result: buildings,
        });
    } catch (error) {
        console.log(error);

        res.json({ message: err, status: "error" });
    }
});



handler.post(async (req, res) => {
    const buildings = await Building.find();
    res.status(200).json({ bldgs: buildings });
});

export const resolvers = {
    Query: {
        users: () => [{name: 'Igor'}, {name: 'Vasiliy'}],
    }
};

export default handler;
