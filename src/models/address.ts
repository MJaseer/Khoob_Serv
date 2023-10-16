import mongoose, { Document, Schema, Types } from "mongoose";

export interface UserAddress {
    landMark: string;
    houseName: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    createdAt?: Number
}

export interface IUserAddress extends Document {
    landMark: string;
    houseName: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    createdAt: Number
}

export interface Address extends UserAddress {
    userId: Types.ObjectId;
    savedArray: IUserAddress[];
}

export interface IAddress extends IUserAddress {
    userId: Types.ObjectId;
    savedArray: IUserAddress[];
}

export const addressObjSchema: Schema<IUserAddress> = new Schema({
    street: String,
    city: String,
    state: String,
    zip: String,
    houseName: String,
    landMark: String,
    createdAt: { default: Date.now() }
});

const addressSchema: Schema<IAddress> = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    savedArray: [addressObjSchema],
}, {
    timestamps: true
})

export default mongoose.model<IAddress>("Address", addressSchema);