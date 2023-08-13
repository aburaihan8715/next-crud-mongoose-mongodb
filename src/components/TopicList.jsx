import { FaEdit } from "react-icons/fa";
import Link from "next/link";
import DeleteTopicBtn from "./DeleteTopicBtn";

const getTopicsData = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", { cache: "no-store" });
    if (!res.ok) {
      throw new Error("Failed to fetch topics data.");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading topics", error);
  }
};

const TopicList = async () => {
  const { topics } = await getTopicsData();
  return (
    <ul className="mt-6 flex flex-col gap-4">
      {topics.map((topic) => (
        <li key={topic._id} className="border py-6 px-4  flex justify-between">
          <div>
            <h2 className="text-2xl font-medium capitalize">{topic.title}</h2>
            <p>{topic.desc}</p>
          </div>
          <div className="flex gap-2 items-start">
            <DeleteTopicBtn id={topic._id} />
            <Link href={`/editTopic/${topic._id}`}>
              <FaEdit size={24}></FaEdit>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TopicList;
