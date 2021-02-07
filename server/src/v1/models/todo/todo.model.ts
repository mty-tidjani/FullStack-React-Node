import { Schema, model, Document, Types } from "mongoose";
import { MODEL } from "../../constant";

export interface ITodo extends Document {
  crtBy /* CREATED_BY */: Types.ObjectId|string,
  nbk /* NOTE_BOOK */: Types.ObjectId|string,
  scd /* STATUS_CODE */: string,
  ttle /* Title */: string,
  desc /* DESCRIPTION */: string,
  assg /* ASSIGNED TO */: Types.ObjectId[]|string[]
}

const TodoSchema:Schema<ITodo> = new Schema({
  crtBy /* CREATED_BY */: { type: Types.ObjectId, ref: MODEL.USER},
  nbk /* NOTE_BOOK */: { type: Types.ObjectId, ref: MODEL.NOTE_BOOK},
  scd /* STATUS_CODE */: { type: String },
  ttle /* Title */: { type: String },
  desc /* DESCRIPTION */: {type: String },
  assg /* ASSIGNED TO */: [{ type: Types.ObjectId, ref: MODEL.USER }]
}, {
  versionKey: false,
  collection: MODEL.TODO
});

// Export Todo
export const Todo = model<ITodo>(MODEL.TODO, TodoSchema);
