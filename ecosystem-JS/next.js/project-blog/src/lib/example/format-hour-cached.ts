import { unstable_cache } from "next/cache";
import { formatHour } from "@/utils/format-datetime";

const getCurrentHourCached = unstable_cache(
  async () => formatHour(Date.now()),
  ["formatHourCached"],
  {
    revalidate: 1,
    tags: ["formatHourCached"],
  },
);

export async function formatHourCached() {
  return getCurrentHourCached();
}
