import mongoose, { Document, Schema, Types } from "mongoose";

export interface Category {
    products: [{
        productId: Types.ObjectId,
    }];
    title: String
    total: Number;
    createdAt: Number;
    image: String
}

export interface ICategory extends Document {
    products: [{
        productId: Types.ObjectId,
    }];
    title: String
    total: Number;
    createdAt: Number;
    image: String
}

const categorySchema = new Schema<ICategory>({
    products: [{
        productId: {
            type: Schema.Types.ObjectId,
            ref: 'Product',
        },
    }],
    title: { type: String, required: true },
    createdAt: { default: Date.now() },
    image: { type: String },
})

export default mongoose.model<ICategory>("Category", categorySchema);