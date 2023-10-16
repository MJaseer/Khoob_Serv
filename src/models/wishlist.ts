import mongoose, { Document, Schema, Types } from "mongoose";

export interface Wishlist {
    products: [{
        productId: Types.ObjectId,
    }];
    user: Types.ObjectId,
}

export interface IWishlist extends Document {
    products: [{
        productId: Types.ObjectId,
    }];
    user: Types.ObjectId,
}

const wishlistSchema = new Schema<IWishlist>({
    products: [{
        productId: {
            type: Schema.Types.ObjectId,
            ref: 'Product',
        },
    }],
    user: { type: Schema.Types.ObjectId }
})

export default mongoose.model<IWishlist>("Wishlist", wishlistSchema);