import { PostFeatured } from "@/components/PostFeatured/index";
import { PostsList } from "@/components/PostsList/index";
import { SpinLoader } from "@/components/SpinLoader/index";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <>
      <Suspense fallback={<SpinLoader containerClasses="min-h-20 mb-16" />}>
        <PostFeatured />

        <PostsList />
      </Suspense>
    </>
  );
}
