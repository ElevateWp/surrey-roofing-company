import React from 'react';
import Link from 'next/link';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import { CLINIC_INFO, CUSTOMER_REVIEWS } from '@/lib/clinic-data';

export default function HomeReviews() {
  return (
    <section className="w-full bg-paper-secondary py-20 md:py-28 border-t border-mist">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <AnimateOnScroll animation="fade-up" duration={0.8} className="mb-12 text-center">
          <span className="font-body text-13 text-forest-light block mb-2 font-medium uppercase tracking-wider">Customer reviews</span>
          <h2 className="font-display text-33 md:text-41 text-forest-ink">Roof work recommended by local customers</h2>
          <p className="mx-auto mt-3 font-body text-15 text-forest-ink/75">Customer feedback for The Surrey Roofing Company</p>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {CUSTOMER_REVIEWS.map((avaliação, index) => (
            <AnimateOnScroll key={avaliação.name} animation="fade-up" delay={index * 0.1} duration={0.8}>
              <article className="h-full bg-paper border border-mist p-6 md:p-7 shadow-sm">
                <div className="mb-4 flex items-center gap-1 text-[#C99A45]" aria-label="Customer review">Recommended</div>
                <p className="font-body text-15 text-forest-ink/85 leading-relaxed">{avaliação.text}</p>
                <div className="mt-6 border-t border-mist pt-4">
                  <h3 className="font-display text-17 text-forest-ink">{avaliação.name}</h3>
                  <span className="font-body text-13 text-forest-light">{avaliação.date}</span>
                </div>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
        <div className="mt-9 text-center">
          <Link href="/avaliacoes/" className="inline-flex items-center gap-2 font-body text-15 font-semibold text-forest hover:text-forest-light underline underline-offset-4 transition-colors">Read reviews <span aria-hidden="true">→</span></Link>
        </div>
      </div>
    </section>
  );
}
