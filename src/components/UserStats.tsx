"use client";

import { useEffect, useMemo, useState } from "react";
import { formatCount } from "@/helper/number";

type TossSide = "heads" | "tails";

type StoredStats = {
  heads: number;
  tails: number;
  history: TossSide[];
};

function loadStats(): StoredStats {
  if (typeof window === "undefined") return { heads: 0, tails: 0, history: [] };
  try {
    const raw = window.localStorage.getItem("user_toss_stats");
    if (!raw) return { heads: 0, tails: 0, history: [] };
    const parsed = JSON.parse(raw) as StoredStats;
    return {
      heads: Number(parsed.heads || 0),
      tails: Number(parsed.tails || 0),
      history: Array.isArray(parsed.history) ? parsed.history.slice(-200) : [],
    };
  } catch {
    return { heads: 0, tails: 0, history: [] };
  }
}

function saveStats(stats: StoredStats) {
  try {
    window.localStorage.setItem("user_toss_stats", JSON.stringify(stats));
  } catch {}
}

export default function UserStats() {
  const [heads, setHeads] = useState(0);
  const [tails, setTails] = useState(0);
  const [history, setHistory] = useState<TossSide[]>([]);

  useEffect(() => {
    const init = loadStats();
    setHeads(init.heads);
    setTails(init.tails);
    setHistory(init.history);

    const onToss = (e: Event) => {
      const detail = (e as CustomEvent<{ result: TossSide }>).detail;
      if (!detail) return;
      const result = detail.result;
      setHeads((prev) => prev + (result === "heads" ? 1 : 0));
      setTails((prev) => prev + (result === "tails" ? 1 : 0));
      setHistory((prev) => [...prev, result].slice(-200));
    };

    window.addEventListener("user-toss", onToss as EventListener);
    return () =>
      window.removeEventListener("user-toss", onToss as EventListener);
  }, []);

  useEffect(() => {
    saveStats({ heads, tails, history });
  }, [heads, tails, history]);

  const total = heads + tails;
  const headPct = total > 0 ? Math.round((heads / total) * 100) : 0;
  const tailPct = total > 0 ? Math.round((tails / total) * 100) : 0;

  const series = useMemo(() => {
    const pts: number[] = [];
    let h = 0;
    let t = 0;
    history.forEach((r) => {
      if (r === "heads") h += 1;
      else t += 1;
      const n = h + t;
      pts.push(n > 0 ? (h / n) * 100 : 0);
    });
    return pts;
  }, [history]);

  return (
    <div className='px-6'>
      <h2 className='text-2xl mb-2 paper-text'>Your Probability</h2>
      <div className='mb-4'>
        <div className='flex items-center gap-3 mb-1'>
          <span className='paper-text'>Heads</span>
          <span className='text-2xl bg-primary text-accent px-2 py-1 rounded-md'>
            {formatCount(heads, total)}
          </span>
          <span className='paper-text'>{headPct}%</span>
        </div>
        <div className='h-3 w-full rounded bg-[oklch(0.92_0.02_95)] overflow-hidden'>
          <div
            className='h-full bg-accent'
            style={{ width: `${headPct}%` }}
          />
        </div>
      </div>

      <div className='mb-6'>
        <div className='flex items-center gap-3 mb-1'>
          <span className='paper-text'>Tails</span>
          <span className='text-2xl bg-primary text-accent px-2 py-1 rounded-md'>
            {formatCount(tails, total)}
          </span>
          <span className='paper-text'>{tailPct}%</span>
        </div>
        <div className='h-3 w-full rounded bg-[oklch(0.92_0.02_95)] overflow-hidden'>
          <div
            className='h-full bg-primary'
            style={{ width: `${tailPct}%` }}
          />
        </div>
      </div>

      <h3 className='paper-text inline-block mb-2'>Head% over time</h3>
      <div className='w-full h-28 bg-[oklch(0.98_0.02_95)] rounded-md relative overflow-hidden'>
        <svg
          viewBox='0 0 100 100'
          preserveAspectRatio='none'
          className='w-full h-full'>
          <polyline
            fill='none'
            stroke='currentColor'
            className='text-primary'
            strokeWidth='1.5'
            points={series
              .map((v, i) => {
                const x = (i / Math.max(series.length - 1, 1)) * 100;
                const y = 100 - v;
                return `${x},${y}`;
              })
              .join(" ")}
          />
        </svg>
      </div>

      <div className='mt-3 paper-text'>Total flips: {formatCount(total)}</div>
    </div>
  );
}
