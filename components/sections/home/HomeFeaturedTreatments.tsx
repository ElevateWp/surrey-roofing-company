import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

export default function HomeFeaturedTreatments() {
  return (
    <section className="relative z-20 w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <AnimateOnScroll animation="fade-up" duration={0.8} className="mb-16">
          <span className="font-body text-13 text-[#252122] block mb-2 font-medium uppercase tracking-wider">Roofing services</span>
          <h2 className="font-display text-33 md:text-41 text-[#252122]">Roofing services to look after your home</h2>
        </AnimateOnScroll>
        <div className="flex flex-col space-y-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <AnimateOnScroll animation="fade-right" duration={0.9} className="lg:col-span-6 order-2 lg:order-1">
              <span className="font-body text-13 text-[#252122] uppercase tracking-wider block mb-2 font-medium">Roofing services</span>
              <h3 className="font-display text-26 md:text-33 text-[#252122] mb-4">Roof restoration</h3>
              <p className="font-body text-15 md:text-17 text-[#252122]/80 leading-relaxed mb-6">Roof repairs and restoration completed with care and attention to detail.</p>
              <div className="p-4 bg-[#F8F6F2] border-l-4 border-[#C99A45] mb-6 rounded-sm"><span className="font-body text-13 text-[#252122]/80"><strong className="text-[#252122] font-semibold">Before work begins:</strong> Discuss the scope and timing with our team.</span></div>
              <Button href="/chimney-repairs/" variant="ghost" size="md">Explore tile repairs and repointing</Button>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-left" duration={0.9} className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm"><Image src="/images/roof-with-tiles.png" alt="Roof restoration work" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-top" /></div>
            </AnimateOnScroll>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <AnimateOnScroll animation="fade-right" duration={0.9} className="lg:col-span-6"><div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm"><Image src="/images/roofing-hero.png" alt="Roof repairs" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" /></div></AnimateOnScroll>
            <AnimateOnScroll animation="fade-left" duration={0.9} className="lg:col-span-6">
              <span className="font-body text-13 text-[#252122] uppercase tracking-wider block mb-2 font-medium">Roofing services</span>
              <h3 className="font-display text-26 md:text-33 text-[#252122] mb-4">Roof repairs and restoration</h3>
              <p className="font-body text-15 md:text-17 text-[#252122]/80 leading-relaxed mb-6">Get in touch to discuss roof repairs, chimney work and restoration for your property.</p>
              <div className="p-4 bg-[#F8F6F2] border-l-4 border-[#C99A45] mb-6 rounded-sm"><span className="font-body text-13 text-[#252122]/80"><strong className="text-[#252122] font-semibold">Talk to our team:</strong> We will discuss the work and next steps with you.</span></div>
              <Button href="/roof-restoration/" variant="ghost" size="md">Explore our services</Button>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
