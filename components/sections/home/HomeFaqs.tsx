import React from 'react';
import Accordion, { AccordionItem } from '@/components/ui/Accordion';
import JsonLd from '@/components/ui/JsonLd';
import { generateFaqSchema } from '@/lib/seo';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import { CLINIC_INFO } from '@/lib/clinic-data';

const HOME_FAQS: AccordionItem[] = [
  {
    question: 'What roofing services do you provide?',
    answer: 'The Surrey Roofing Company provides roof repairs, chimney repointing, lead flashing and ridge tile repairs.',
    relatedLink: { href: '/services/', label: 'Explore our services →' },
  },
  {
    question: 'Does The Surrey Roofing Company serve my area?',
    answer: 'The Surrey Roofing Company serves Croydon and surrounding areas.',
    relatedLink: { href: '/contato/', label: 'Contact our team →' },
  },
  {
    question: 'What roofing work do you do?',
    answer: 'We repair roofs, repoint chimneys, replace lead flashing and repair ridge tiles. Contact us to discuss your property.',
    relatedLink: { href: '/services/', label: 'Explore our services →' },
  },
  {
    question: 'How do I request a quote?',
    answer: `Call ${CLINIC_INFO.contact.phone} or send an enquiry using the quote form.`,
    relatedLink: { href: '/quote/', label: 'Request a quote →' },
  },
  {
    question: 'How do I check availability?',
    answer: `Call ${CLINIC_INFO.contact.phone} to discuss your roof restoration and check availability.`,
    relatedLink: { href: '/contato/', label: 'Contact our team →' },
  },
];

export default function HomeFaqs() {
  return (
    <section className="relative z-20 w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <JsonLd data={generateFaqSchema(HOME_FAQS)} />
      <div className="max-w-site mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <AnimateOnScroll animation="fade-right" duration={0.85} className="lg:col-span-5">
            <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
              Frequently asked questions
            </span>
            <h2 className="font-display text-33 md:text-41 text-forest-ink mb-6">
              Questions about your project
            </h2>
            <p className="font-body text-15 md:text-17 text-forest-ink/80 leading-relaxed mb-6">
                Find out about our services, quotes and availability.
            </p>
            <div className="p-6 bg-mist/40 border border-mist">
              <span className="font-body text-13 text-forest font-medium block mb-1">
                Have a question?
              </span>
              <p className="font-body text-13 text-forest-ink/70 mb-3">
                Call or message our team and we will be happy to help.
              </p>
              <a
                href={`tel:${CLINIC_INFO.contact.phone.replace(/[^0-9+]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-13 text-forest font-medium underline underline-offset-4"
              >
                Call our team
              </a>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-left" duration={0.85} className="lg:col-span-7">
            <Accordion items={HOME_FAQS} />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
