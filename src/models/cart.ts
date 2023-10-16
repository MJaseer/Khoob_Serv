import mongoose, { Document, Schema, Types } from "mongoose";

export interface Cart {
    user: Types.ObjectId;
    product: [{
        productDetail: Types.ObjectId,
        quantity: Number,
        total: Number,
    }];
    total: Number;
    createdAt?: Number;
}


export interface ICart extends Document {
    user: Types.ObjectId;
    product: [{
        productDetail: Types.ObjectId,
        quantity: Number,
        total: Number,
    }];
    total: Number;
    createdAt: Number;
}

const cartSchema = new Schema<ICart>({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    product: [{
        productDetail: {
            type: Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        quantity: { type: Number },
        total: { type: Number },
    }],
    createdAt: { default: Date.now() }
})

export default mongoose.model<ICart>("cart", cartSchema);