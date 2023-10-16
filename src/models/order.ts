import mongoose, { Document, Schema, Types } from "mongoose";
import { IUserAddress, addressObjSchema } from "./address";

export interface Order {
    user: Types.ObjectId;
    product: [{
        productDetail: Types.ObjectId,
        quantity: Number,
        total: Number,
        orderStatus: String
    }];
    address: IUserAddress;
    total: Number;
    paymentStatus: Boolean;
    paymentMethod: String;
    createdAt?: Number;
    isCanceled: Boolean;
    cancelReason: String;
}

export interface IOrder extends Document {
    user: Types.ObjectId;
    product: [{
        productDetail: Types.ObjectId,
        quantity: Number,
        total: Number,
        orderStatus: String
    }];
    address: IUserAddress;
    total: Number;
    paymentStatus: Boolean;
    paymentMethod: String;
    createdAt: Number;
    isCanceled: Boolean;
    cancelReason: String;
}

const orderSchema = new Schema<IOrder>({
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
        orderStatus: {
            type: String,
            default: 'Pending'
        }
    }],
    total: {
        type: Number,
        required: true,
    },
    address: {
        type: addressObjSchema
    },
    paymentStatus: { type: Boolean, default: false },
    paymentMethod: { type: String },
    isCanceled: { type: Boolean, default: false },
    cancelReason: { type: String },
    createdAt: { default: Date.now() }
})

export default mongoose.model<IOrder>("Order", orderSchema);