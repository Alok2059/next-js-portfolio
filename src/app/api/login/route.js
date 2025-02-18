import connectToDB from "@/database";
import User from "@/models/User";
import { NextResponse } from "next/server";
import { compare, hash } from "bcryptjs";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    await connectToDB();
    const { username, password } = await req.json();
    const checkUser = await User.findOne({ username });
    console.log("In login route.js")
    if (!checkUser) {
      return NextResponse.json({
        success: false,
        message: "User name is not present. Please try again",
      });
    }
    const hashPassword = await hash(checkUser.password, 12);
    const checkPassword = await compare(password, hashPassword);
    if(!checkPassword){
        return NextResponse.json({
            success: false,
            message: "Wrong password. Please try again",
          });
    }

    return NextResponse.json({
        success:true,
        message:"Login Successfull"
    })
  } catch (e) {
    console.log(e);
  }
}
