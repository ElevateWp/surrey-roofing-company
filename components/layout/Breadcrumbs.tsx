import React from 'react';
import Link from 'next/link';
import JsonLd from '@/components/ui/JsonLd';
import { generateBreadcrumbSchema } from '@/lib/seo';

interface BreadcrumbsProps {
  items: { name: string; path: string }[];
  className?: string;
}

export default function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  const fullItems = [{ name: 'Home', path: '/' }, ...items];

  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(fullItems)} />
      <nav aria-label="Breadcrumb" className={`py-4 ${className}`}>
        <ol className="flex items-center flex-wrap gap-2 font-body text-13 text-forest-ink/60">
          {fullItems.map((item, idx) => {
            const isLast = idx === fullItems.length - 1;
            return (
              <li key={item.path} className="flex items-center gap-2">
                {idx > 0 && <span className="text-forest-ink/30 select-none">/</span>}
                {isLast ? (
                  <span className="text-forest-ink font-medium" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.path}
                    className="hover:text-forest transition-colors no-underline"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
