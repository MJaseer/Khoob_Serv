import mongoose, { Document, Schema, Types } from "mongoose";

export interface Product {
    name: string;
    description: string;
    returnPolicy: string;
    tags: string;
    category: Types.ObjectId;
    quantity: number;
    image: string[],
    reviews?: Types.ObjectId,
    createdAt?: Date
}


export interface IProduct extends Document {
    name: string;
    description: string;
    returnPolicy: string;
    tags: string;
    category: Types.ObjectId;
    quantity: number;
    image: string[],
    reviews: Types.ObjectId,
    createdAt: Date
}

const productSchema = new Schema<IProduct>({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    returnPolicy: {
        type: String,
        required: true
    },
    tags: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    image: {
        type: [String],
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    reviews: {
        type: Schema.Types.ObjectId,
        ref: 'Reviews',
    },
}, {
    timestamps: true
})

export default mongoose.model<IProduct>("Product", productSchema);