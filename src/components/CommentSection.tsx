import React from "react";
import { promises as fs } from "fs";
import CommentCard from "./CommentCard";
import { TData } from "@/types/comments";

export default async function CommentSection() {
  const file = await fs.readFile(process.cwd() + "/public/data.json", "utf8");
  const data = JSON.parse(file);

  return (
    <div>
      <CommentCard data={data} />
    </div>
  );
}
