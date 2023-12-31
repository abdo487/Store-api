import mongoose from 'mongoose'
const { Schema, model, models, ObjectId } = mongoose

const schema = new Schema({
    amount: Number,
    quantity: Number,
    product: {
        type: ObjectId,
        ref: "Product"
    }
},
{
    timestamps: true
})
export default models.Item || model("Item", schema)