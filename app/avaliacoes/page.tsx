import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import TextureBackground from '@/components/layout/TextureBackground';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import WordRevealH1 from '@/components/motion/WordRevealH1';
import { CLINIC_INFO, CUSTOMER_REVIEWS } from '@/lib/clinic-data';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Customer reviews',
  description: 'Read customer reviews for The Surrey Roofing Company.',
  pathname: '/avaliacoes/',
});

export default function TestimonialsPage() {
  return (
    <div className="flex w-full flex-col bg-paper">
      <section className="relative overflow-hidden border-b border-mist py-16 md:py-24">
        <TextureBackground variant="blog" className="opacity-20" />
        <div className="relative z-10 mx-auto max-w-site px-6 md:px-12">
          <Breadcrumbs items={[{ name: 'Reviews', path: '/avaliacoes/' }]} />
          <div className="mt-8 max-w-3xl">
            <AnimateOnScroll animation="fade-right" duration={0.8}>
              <span className="mb-3 block font-body text-13 font-medium uppercase tracking-wider text-forest-ink/60">The Surrey Roofing Company</span>
              <WordRevealH1 text="Customer reviews" />
              <p className="mt-6 max-w-2xl font-body text-17 leading-relaxed text-forest-ink/90 md:text-21">Selected positive feedback from The Surrey Roofing Company customers.</p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
      <section className="border-b border-mist bg-paper-secondary py-16 md:py-24">
        <div className="mx-auto max-w-site px-6 md:px-12">
          <div className="mb-10 flex flex-col gap-4 border-b border-mist pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="mb-2 block font-body text-13 font-medium uppercase tracking-wider text-forest-light">Customer recommendations</span>
              <h2 className="font-display text-26 text-forest-ink md:text-33">What customers say</h2>
            </div>
            <div className="border-l-2 border-brand pl-4">
              <span className="block font-body text-13 font-medium uppercase tracking-wider text-forest-light">Customer feedback</span>
              <span className="mt-1 block font-body text-12 text-forest-light">Positive customer feedback</span>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {CUSTOMER_REVIEWS.map((avaliação, index) => (
              <AnimateOnScroll key={avaliação.name} animation="fade-up" delay={index * 0.08} duration={0.8}>
                <article className="h-full border border-mist bg-paper p-6 shadow-sm md:p-7">
                  <div className="mb-4 flex items-center gap-1 text-[#C99A45]" aria-label="Customer recommendation">Recommended</div>
                  <p className="font-body text-15 leading-relaxed text-forest-ink/85">{avaliação.text}</p>
                  <div className="mt-6 border-t border-mist pt-4">
                    <h3 className="font-display text-21 text-forest-ink">{avaliação.name}</h3>
                    <span className="font-body text-13 text-forest-light">{avaliação.date}</span>
                  </div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-forest py-14 text-paper md:py-20">
        <div className="mx-auto flex max-w-site flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center md:px-12">
          <div><span className="mb-2 block font-body text-13 font-semibold uppercase tracking-wider text-paper/65">The Surrey Roofing Company</span><h2 className="font-display text-26 md:text-33">Lets talk about your project</h2></div>
          <Link href="/quote/" className="inline-flex min-h-12 items-center justify-center border border-paper bg-paper px-6 font-body text-15 font-semibold text-forest transition-colors hover:bg-softBlue">Request a quote</Link>
        </div>
      </section>
    </div>
  );
}
