import mongoose from 'mongoose'
const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    uid:{
        type:String,
        required:true
    },
    phoneUrl:{
        type:String,
        default:""
    },
    email:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['Admin','Student'],
        default:'Student',
        required:true
    }
},
{
     timestamps: true
}
)
const Auth=mongoose.model('Auth',UserSchema)
export default Auth