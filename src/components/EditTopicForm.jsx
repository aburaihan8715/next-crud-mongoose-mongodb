"use client";
import React, { useState } from "react";
import Button from "./common/Button";
import { useRouter } from "next/navigation";

const EditTopicForm = ({ title, desc, id }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDesc, setNewDesc] = useState(desc);
  const router = useRouter();

  const editTopicHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDesc }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={editTopicHandler} className="mt-8">
      <div className="flex flex-col gap-4">
        <input
          onChange={(e) => setNewTitle(e.target.value)}
          value={newTitle}
          className="py-2 px-4 border"
          type="text"
          name=""
          id=""
          placeholder="Topic title"
        />

        <input
          onChange={(e) => setNewDesc(e.target.value)}
          value={newDesc}
          className="py-2 px-4 border"
          type="text"
          name=""
          id=""
          placeholder="Topic description"
        />

        <div className="bg-red-200 w-fit">
          <Button>Update topic</Button>
        </div>
      </div>
    </form>
  );
};

export default EditTopicForm;
