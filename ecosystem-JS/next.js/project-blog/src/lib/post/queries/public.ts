import { postRepository } from "@/repositories/post";
import { notFound } from "next/navigation";

export async function findAllPublicPostsCached() {
  return postRepository.findAllPublic();
}

export async function findPublicPostBySlugCached(slug: string) {
  const post = await postRepository
    .findBySlugPublic(slug)
    .catch(() => undefined);

  if (!post) notFound();

  return post;
}
