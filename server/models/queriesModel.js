import mongoose from "mongoose";

const QueriesSchema = new mongoose.Schema(
  {
    firstName:{type:String , required:true},
    lastName:{type:String , required:true},
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

const queriesModel = mongoose.model("queries", QueriesSchema);

export default queriesModel;
