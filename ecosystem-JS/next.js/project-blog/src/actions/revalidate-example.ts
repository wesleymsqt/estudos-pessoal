"use server";

import { revalidatePath } from "next/cache";

export async function revalidateExampleAction(formData: FormData) {
  const path = formData.get("path")?.toString() || "/exemplo";

  revalidatePath(path);
}
