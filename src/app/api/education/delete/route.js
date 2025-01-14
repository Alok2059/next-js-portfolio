import connectToDB from "@/database";
import Education from "@/models/Education";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

export const dynamic = "force-dynamic";

export async function DELETE(req) {
  try {
    console.log("Delete request received", req);
    await connectToDB();
    const { id } = await req.json();
    if (!ObjectId.isValid(id)) {
      return NextResponse.json({
        success: false,
        message: "Invalid Id provided",
      });
    }
    const result = await Education.deleteOne({ _id: new ObjectId(id) });
    if (result.deletedCount === 1) {
      return NextResponse.json({
        success: true,
        message: "Education deleted Successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Education not found or already deleted",
      });
    }
  } catch (e) {
    console.log(e);
  }
}
