import mongoose from "mongoose";
const { Schema } = mongoose;

const topicSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  desc: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const TopicModel = mongoose.models.topics || mongoose.model("topics", topicSchema);

export default TopicModel;
