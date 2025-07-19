import mongoose from 'mongoose';

const QueueSchema = new mongoose.Schema({
  name: { type: String, required: true },
  status: {
    type: String,
    status: {
        type: String,
        enum: ['waiting', 'pending', 'done'],
        default: 'waiting'
      },
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export const Queue = mongoose.model('Queue', QueueSchema);
