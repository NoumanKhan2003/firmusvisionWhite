import queriesModel from "../models/queriesModel.js";

const queriesPostController = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, message } = req.body;
    const newQuery = new queriesModel({
      firstName,
      lastName,
      email,
      phone,
      message,
    });
    await newQuery.save();
    res.status(201).json({
      message: "Query uploaded successfully",
      success: true,
      data: newQuery,
    });
  } catch (err) {
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

export { queriesPostController };
