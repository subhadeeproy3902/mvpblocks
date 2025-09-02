'use client';

import { DollarSign } from 'lucide-react';
import Link from 'next/link';

export default function InternationalBuyButton() {
  return (
    <Link
      prefetch={false}
      href="https://pro.mvp-subha.me"
      className="golden-button"
    >
      <span className="golden-text">
        International
        <DollarSign className="inline-block text-xs" />
      </span>
    </Link>
  );
}
