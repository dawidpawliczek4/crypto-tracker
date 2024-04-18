import "server-only";
import { db } from "./db";

export const getPosts = async () => {
  const posts = await db.query.posts.findMany({
    orderBy: (model, { asc }) => asc(model.id),
  });

  return posts;
};
