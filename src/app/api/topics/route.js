import connectMongodb from "@/libs/mongodb";
import TopicModel from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, desc } = await request.json();
  await connectMongodb();
  await TopicModel.create({ title, desc });
  return NextResponse.json({ message: "Topic is created" }, { status: 200 });
}

export async function GET() {
  await connectMongodb();
  const topics = await TopicModel.find();
  return NextResponse.json({ topics });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongodb();
  await TopicModel.findByIdAndDelete(id);
  return NextResponse.json({ message: "Topic is deleted" }, { status: 200 });
}
// ===========end=============
