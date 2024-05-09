
import jsonwebToken from "jsonwebtoken"
import dotenv from 'dotenv';
dotenv.config();

const secretKey=process.env.SE;
const generateToken=(email)=>{
    return jsonwebToken.sign({data:email},secretKey,{expiresIn :"1d"});
}
export default generateToken;
