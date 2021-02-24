import { Schema, model, Document, Types } from "mongoose";
import { MODEL } from "../../constant";

export interface IProjectMember extends Document {
  nbk: string|Types.ObjectId,
  user: string|Types.ObjectId,
}

const ProjectSchema:Schema<IProjectMember> = new Schema({
  nbk: { type: Types.ObjectId, ref: MODEL.NOTE_BOOK},
  user: { type: Types.ObjectId, ref: MODEL.USER },
  scd /* Mebership_Status */: { type: String },
  chng: [{
    dt /* DATE */: { type: Date },
    scd: { type: String }
  }]
}, {
  versionKey: false,
  collection: MODEL.NOTE_BOOK
});

// Export Project
export const ProjectMember = model<IProjectMember>(MODEL.NOTE_BOOK, ProjectSchema);
