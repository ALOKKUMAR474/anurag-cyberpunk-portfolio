import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    summary: { type: String, required: true, trim: true },
    stack: [{ type: String, trim: true }],
    githubUrl: { type: String },
    liveUrl: { type: String }
  },
  { timestamps: true }
);

export const Project = mongoose.model("Project", projectSchema);
