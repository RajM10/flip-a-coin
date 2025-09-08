export type Stats = { head: number; tail: number; toss: number };

export async function fetchStats(): Promise<Stats> {
  const res = await fetch("/api/stats", { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch stats");
  const data = (await res.json()) as {
    head: string | number;
    tail: string | number;
    toss: string | number;
  };
  return {
    head: Number(data.head ?? 0),
    tail: Number(data.tail ?? 0),
    toss: Number(data.toss ?? 0),
  };
}

export async function recordToss(): Promise<{
  result: "heads" | "tails";
  stats: Stats;
}> {
  const res = await fetch("/api/toss", { method: "POST" });
  if (!res.ok) throw new Error("Failed to record toss");
  const data = await res.json();
  return {
    result: data.result,
    stats: {
      head: Number(data.stats.head ?? 0),
      tail: Number(data.stats.tail ?? 0),
      toss: Number(data.stats.toss ?? 0),
    },
  };
}
