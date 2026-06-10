import mongoose from "mongoose";

const videoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    videoUrl: { type: String, required: true },
    thumbnailUrl: { type: String },
    featured: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export const Video = mongoose.model("Video", videoSchema);
