import mongos from 'mongoose'
import validator from 'mongoose-unique-validator'

const CartSchema = new mongos.Schema({
    id:{
        type:String,
        unique: true,
        required:true,
    },
    category:{
        type: String,
    },
    description:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    title:{
        type: String,
        required: true,
    },
    price:{
        type:Number,
        required: true,
    },
    amount:{
        type: Number,
        required: true,
    }
},{
    timestamps: false,
});

CartSchema.plugin(validator);

const CartModel = mongos.model('CartItems',CartSchema);

export default CartModel;