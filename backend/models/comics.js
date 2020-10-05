import mongoose from 'mongoose';

const comicSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
  },
  available: {
    type: Boolean,
    required: true,
    default: false
  },
  description: {
    type: String,
    required: true
  },
  imageURL: {
    type: String,
    required: false
  },
  talent: {
    artby: [{
      type: String
    }],
    writtenby: [{
      type: String
    }]
  },
  starring: [{
    type: String
  }],
  series: {
    type: String
  },
  saledate: {
    type: String
  },
  issueno: {
    type: Number
  },
  pages: {
    type: Number
  },
  rating: {
    type: String
  },
  size: {
    type: String
  },
  review: {
    type: Number,
    default: 0.0
  },
  numReviews: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
})

const Comic = mongoose.model('Comic', comicSchema);

export default Comic