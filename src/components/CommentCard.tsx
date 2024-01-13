"use client";

import { TComment, TData } from "@/types/comments";
import Image from "next/image";
import React, { useState } from "react";

type CommentCardProps = {
  data: TData;
};

export default function CommentCard({ data }: CommentCardProps) {
  console.log(data);

  const [addReply, setAddReply] = useState(false);

  function handleReplyClick() {
    setAddReply((prev) => !prev);
  }

  return (
    <div className="text-gray-700">
      {data.comments.map((comment: TComment, idx: number) => {
        return (
          <section className="max-w-3xl bg-slate-200 shadow flex items-center gap-6 mb-6 p-6">
            <div className="flex flex-col items-center gap-1 bg-red-200 w-10 h-20 rounded-full">
              <span>+</span>
              <p>{comment.score}</p>
              <span>-</span>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <Image
                  src={comment.user.image.webp}
                  alt="user avatar"
                  width={100}
                  height={100}
                  className="w-8 h-8 rounded-full"
                />
                <p>{comment.user.username}</p>
                <p>{comment.createdAt}</p>
                <button onClick={handleReplyClick}>Reply</button>
              </div>
              <p>{comment.content}</p>
            </div>
          </section>
        );
      })}
      {addReply && (
        <div className="flex items-center gap-6 max-w-3xl bg-slate-200 shadow  mb-6 p-6">
          <Image
            src={data.currentUser.image.webp}
            alt="user avatar"
            width={100}
            height={100}
            className="w-10 h-10 rounded-full"
          />
          <input
            type="text"
            className="w-full bg-slate-200 border border-gray-400 min-h-20 focus:border-gray-600 focus:outline-none"
            defaultValue={"@hello"}
          />
          <button>Reply</button>
        </div>
      )}
    </div>
  );
}
