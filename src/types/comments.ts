export type TData = {
  currentUser: TUser;
  comments: Array<TComment>;
};

export type TUser = {
  image: {
    png: string;
    webp: string;
  };
  username: string;
};
// export type TUser = {
//     image: {
//       format: "png" | "webp";
//       src: string;
//     };
//     username: string;
//   };

export type TComment = {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: TUser;
  replies: Array<TReply>;
};

export type TReply = {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  replyingTo: string;
  user: TUser;
};
