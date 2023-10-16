import mongoose, { Document, Schema, Types } from "mongoose";

export interface Review {
    productId: Types.ObjectId,
    title: String;
    description: String;
    createdAt?: Number;
    rating: Number
}


export interface IReview extends Document {
    productId: Types.ObjectId,
    title: String;
    description: String;
    createdAt: Number;
    rating: Number
}

const reviewSchema = new Schema<IReview>({
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    title: { type: String, required: true },
    description: { type: String, required: true },
    createdAt: { default: Date.now() },
    rating: { type: Number }
})

export default mongoose.model<IReview>("Review", reviewSchema);