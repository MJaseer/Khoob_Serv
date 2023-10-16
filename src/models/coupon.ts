import mongoose, { Document, Schema, Types } from "mongoose";

export interface Coupon {
    code: String;
    discount: Number;
    title: String;
    createdAt: Number;
    image: String;
    minAmount: Number;
    maxDiscountAmount: Number;
    expireAt: Date;
    users?: [{
        userId: Types.ObjectId,
    }]
}

export interface ICoupon extends Document {
    code: String;
    discount: Number;
    title: String;
    createdAt: Number;
    image: String;
    minAmount: Number;
    maxDiscountAmount: Number;
    expireAt: Date;
    users: [{
        userId: Types.ObjectId,
    }]
}

const couponSchema = new Schema<ICoupon>({
    code: { type: String, unique: true, required: true },
    title: { type: String, required: true },
    discount: { type: Number, required: true },
    minAmount: { type: Number, required: true },
    maxDiscountAmount: { type: Number, required: true },
    users: [{
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    }],
    expireAt: { type: Date, required: true },
    createdAt: { default: Date.now() },
    image: { type: String },
})

export default mongoose.model<ICoupon>("Coupon", couponSchema);