"use client";

import { useCountUp } from "@/hooks/useCountUp";

interface StatCardProps {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export default function StatCard({ value, prefix, suffix, label }: StatCardProps) {
  const { ref, displayValue } = useCountUp(value, { prefix, suffix });

  return (
    <div className="stat-card" ref={ref}>
      <div className="stat-val">{displayValue}</div>
      <div className="stat-lbl">{label}</div>
    </div>
  );
}
