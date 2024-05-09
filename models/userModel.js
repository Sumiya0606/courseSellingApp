import mongoose  from "mongoose";
const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minlength:3,
        maxlength:20,
    },
    lastName:{
        type:String,
        required:true,
        minlength:3,
        maxlength:20,
    },
   
    hashPassword: {
        type: String,
        required: true,
        minLength: 6,
      },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true,
    },
    courses: [{ type: mongoose.Types.ObjectId, ref: "Course" }],
},
{ timestamps: true }
    
);
const User=mongoose.model("User",userSchema)
export default User;