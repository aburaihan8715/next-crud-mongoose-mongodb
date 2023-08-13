"use client";
import { useRouter } from "next/navigation";
import { FaTrashAlt } from "react-icons/fa";
const DeleteTopicBtn = ({ id }) => {
  const router = useRouter();
  const deleteTopicHandler = async () => {
    try {
      const agree = confirm("Are you sure?");
      if (agree) {
        const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
          method: "DELETE",
        });

        if (res.ok) {
          router.refresh();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button onClick={deleteTopicHandler} className="text-red-700">
      <FaTrashAlt size={24} />
    </button>
  );
};

export default DeleteTopicBtn;
