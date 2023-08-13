"use client";
import React, { useState } from "react";
import Button from "./common/Button";
import { useRouter } from "next/navigation";

const AddTopicForm = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const router = useRouter();

  // topic handler
  const addTopicHandler = async (e) => {
    e.preventDefault();
    // console.log(topic, desc);

    if (!title || !desc) {
      alert("title and desc ard required!");
      return;
    }
    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
          title,
          desc,
        }),
      });
      if (res.ok) {
        router.push("/");
        router.refresh();
      } else {
        throw new Error("Failed to cerate topics.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={addTopicHandler} className="mt-8">
      <div className="flex flex-col gap-4">
        {/* topic title input */}
        <input onChange={(e) => setTitle(e.target.value)} className="py-2 px-4 border" type="text" name="" id="" placeholder="Topic title" />

        {/* topic description input */}
        <input onChange={(e) => setDesc(e.target.value)} className="py-2 px-4 border" type="text" name="" id="" placeholder="Topic description" />

        {/* topic action button */}
        <div className="bg-red-200 w-fit">
          <Button>Add topic</Button>
        </div>
      </div>
    </form>
  );
};

export default AddTopicForm;
