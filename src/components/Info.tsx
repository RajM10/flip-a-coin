"use client";

import { useEffect, useState } from "react";
import { fetchStats } from "@/helper/api";

export default function Info() {
  const [total, setTotal] = useState(0);
  const [heads, setHeads] = useState(0);
  const [tails, setTails] = useState(0);

  useEffect(() => {
    let cancelled = false;
    fetchStats()
      .then((s) => {
        if (cancelled) return;
        setTotal(s.toss);
        setHeads(s.head);
        setTails(s.tail);
      })
      .catch(() => {});
    const id = setInterval(() => {
      fetchStats()
        .then((s) => {
          if (cancelled) return;
          setTotal(s.toss);
          setHeads(s.head);
          setTails(s.tail);
        })
        .catch(() => {});
    }, 2500);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, []);

  const headPct = total > 0 ? Math.round((heads / total) * 100) : 0;
  const tailPct = total > 0 ? Math.round((tails / total) * 100) : 0;

  return (
    <div className='  p-6'>
      <div className='flex items-center justify-between mb-3'>
        <h2 className='text-2xl paper-text bg-accent'>Real-time Statistics</h2>
      </div>
      <div className='grid grid-cols-2 gap-4'>
        <div className='stat-item  rounded-lg p-4 surface'>
          <span className=' block text-xs '>Total Flips:</span>
          <span className='stat-value text-3xl'>{total}</span>
        </div>
        <div className='stat-item rounded-lg p-4 surface'>
          <span className=' block text-xs '>Heads:</span>
          <span className='stat-value text-3xl'>{heads}</span>
        </div>
        <div className='stat-item  rounded-lg p-4 surface'>
          <span className=' block text-xs '>Tails:</span>
          <span className='stat-value text-3xl'>{tails}</span>
        </div>
        <div className='stat-item  rounded-lg p-4 surface'>
          <span className=' block text-xs '>Heads %:</span>
          <span className='stat-value text-3xl'>{headPct}%</span>
        </div>
        <div className='stat-item  rounded-lg p-4 surface'>
          <span className=' block text-xs '>Tails %:</span>
          <span className='stat-value text-3xl'>{tailPct}%</span>
        </div>
      </div>
    </div>
  );
}
