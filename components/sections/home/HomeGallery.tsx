import React from 'react';
import Image from 'next/image';
import MediaParallax from '@/components/motion/MediaParallax';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

const GALLERY_IMAGES = [
  ...Array.from({ length: 14 }, (_, index) => {
    const images = [
      '/images/roof-with-tiles.png', '/images/roof-saffron-walden-1024x768-1.jpg', '/images/roofb3-1.jpg',
      '/images/roofing-hero.png', '/images/roof-with-tiles.png',
    ];
    return { src: images[index % images.length], alt: 'Roof repairs at a residential property' };
  }),
];

export default function HomeGallery() {
  return (
    <section id="service-gallery" className="relative z-20 w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <AnimateOnScroll animation="fade-up" duration={0.8} className="mb-16">
          <span className="font-body text-13 text-[#C99A45] block mb-2 font-medium uppercase tracking-wider">
            The Surrey Roofing Company
          </span>
          <h2 className="font-display text-33 md:text-41 text-[#252122]">Roofing services</h2>
          <p className="mt-3 max-w-2xl font-body text-15 leading-relaxed text-forest-light">View roof restoration images and contact us to discuss your home.</p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch mb-6">
          {GALLERY_IMAGES.slice(0, 2).map((item, index) => (
            <AnimateOnScroll
              key={`${item.src}-${index}`}
              animation={index === 0 ? 'fade-right' : 'fade-down'}
              duration={0.85}
              className={`${index === 0 ? 'md:col-span-5' : 'md:col-span-7'} min-h-[300px] md:min-h-[420px] relative bg-[#F8F6F2] overflow-hidden border border-[#E5DCCB] shadow-sm`}
            >
              <MediaParallax speed={index === 0 ? 0.06 : 0.08} className="w-full h-full">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </MediaParallax>
            </AnimateOnScroll>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {GALLERY_IMAGES.slice(2).map((item, index) => (
            <AnimateOnScroll
              key={`${item.src}-${index}`}
              animation="zoom-in"
              duration={0.8}
              delay={(index % 3) * 0.1}
              className="aspect-[4/3] relative bg-[#F8F6F2] overflow-hidden border border-[#E5DCCB] shadow-sm"
            >
              <MediaParallax speed={0.05 + (index % 3) * 0.01} className="w-full h-full">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </MediaParallax>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
