import connectMongodb from "@/libs/mongodb";
import TopicModel from "@/models/topic";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newDesc: desc } = await request.json();
  await connectMongodb();
  await TopicModel.findByIdAndUpdate(id, { title, desc });
  return NextResponse.json({ message: "Topic is updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongodb();
  const topic = await TopicModel.findOne({ _id: id });
  return NextResponse.json({ topic }, { status: 200 });
}
