"use client";

import { ReactNode, useEffect, useState } from "react";
import { formatCount } from "@/helper/number";
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

  const headPct = total > 0 ? ((heads / total) * 100).toPrecision(7) : 0;
  const tailPct = total > 0 ? ((tails / total) * 100).toPrecision(7) : 0;

  return (
    <div className='  p-6'>
      <div className='flex items-center justify-between mb-3'>
        <h2 className='text-2xl paper-text bg-accent'>Global Statistics</h2>
      </div>
      <div className='grid grid-cols-2 gap-4 last:col-span-2'>
        <InfoSection>
          <InfoHeading>Heads:</InfoHeading>
          <InfoDetail>{formatCount(heads, total)}</InfoDetail>
        </InfoSection>
        <InfoSection>
          <InfoHeading>Tails:</InfoHeading>
          <InfoDetail>{formatCount(tails, total)}</InfoDetail>
        </InfoSection>
        <InfoSection>
          <InfoHeading>Heads %:</InfoHeading>
          <InfoDetail>{headPct}%</InfoDetail>
        </InfoSection>
        <InfoSection>
          <InfoHeading>Tails %:</InfoHeading>
          <InfoDetail>{tailPct}%</InfoDetail>
        </InfoSection>
        <InfoSection>
          <InfoHeading>Total Flips:</InfoHeading>
          <InfoDetail>{formatCount(total)}</InfoDetail>
        </InfoSection>
      </div>
    </div>
  );
}
function InfoHeading({ children }: { children: ReactNode }) {
  return <span className='block paper-text'>{children}</span>;
}
function InfoDetail({ children }: { children: ReactNode }) {
  return (
    <span className='text-3xl w-fit px-2 py-1 rounded-md text-accent bg-primary font-semibold'>
      {children}
    </span>
  );
}
function InfoSection({ children }: { children: ReactNode }) {
  return <div className='  rounded-lg p-2 flex gap-1'>{children}</div>;
}
