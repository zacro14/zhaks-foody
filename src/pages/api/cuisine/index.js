import { cuisines } from "../../../data/cuisines";
import { db } from "../../../lib/firebase.config";

export const getCuisines = async (req, res) => {
  try {
    const cuisine = await db.collection("cuisines").get();
    const cuisinesData = cuisine.docs.map((entry) => ({
      id: entry.id,
      ...entry.data(),
    }));
    res.status(200).json({ cuisinesData });
  } catch (e) {
    res.status(400).end();
  }
};
