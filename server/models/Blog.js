import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true },
    excerpt: { type: String, trim: true },
    content: { type: String, required: true },
    tags: [{ type: String, trim: true }],
    published: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export const Blog = mongoose.model("Blog", blogSchema);
