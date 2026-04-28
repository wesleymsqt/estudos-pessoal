"use client";

import { formatHour } from "@/utils/format-datetime";
import { useEffect, useState } from "react";

export const dynamic = "force-dynamic";

export default function ExemploPage() {
  const [hour, setHour] = useState("");

  useEffect(() => {
    const timerId = setTimeout(() => {
      setHour(formatHour(Date.now()));
    }, 0);

    return () => clearTimeout(timerId);
  }, []);

  return (
    <main className="min-h-150 text-4xl font-bold">
      <div>Hora: {hour}</div>
    </main>
  );
}
