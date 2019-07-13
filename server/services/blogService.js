import mongoose from 'mongoose'
let ObjectId = mongoose.Schema.Types.ObjectId //FIXME ObjectId error

let _schema = new mongoose.Schema({
  title: { type: String, unique: true, lowercase: true, maxlength: 60 },
  slug: { type: String, unique: true, lowercase: true },
  summary: { type: String, maxlength: 120, unique: true, lowercase: true },
  author: { type: String, unique: true, required: true, lowercase: true },
  body: { type: String, unique: true, lowercase: true },
  tags: [{ type: String, unique: true, lowercase: true }]
}, { timestamps: true })

export default mongoose.model('blogger', _schema) 