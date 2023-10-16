import mongoose, { Document, Schema, Types } from "mongoose";

export interface Wallet {
    user: Types.ObjectId;
    createdAt: Number;
    paymentDetail: [{
        paidAmount: Number;
        payableAmount: Number;
        paidDate: Number;
        createdAt: Number;
        orderId: Types.ObjectId
    }]
}


export interface IWallet extends Document {
    user: Types.ObjectId;
    createdAt: Number;
    paymentDetail: [{
        paidAmount: Number;
        payableAmount: Number;
        paidDate: Number;
        createdAt: Number;
        orderId: Types.ObjectId
    }]
}

const walletSchema = new Schema<IWallet>({
    user: { type: Schema.Types.ObjectId },
    createdAt: { default: Date.now() },
    paymentDetail: [{
        paidAmount: { type: Number },
        payableAmount: { type: Number },
        paidDate: { type: Date, default: Date.now() },
        createdAt: { default: Date.now() },
        orderId: {
            type: Schema.Types.ObjectId,
            ref: 'Order'
        }
    }],
})

export default mongoose.model<IWallet>("Wallet", walletSchema);