import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CLINIC_INFO, SERVICES, DENTISTS } from '@/lib/clinic-data';

export default function Footer() {
  return (
    <footer className="w-full bg-forest text-paper border-t border-mist/20 pt-16 md:pt-24 pb-12">
      <div className="max-w-site mx-auto px-6 md:px-12">
        {/* Top section: company summary and project enquiry contact */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-mist/20">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-40 h-14 sm:w-48 sm:h-[70px] bg-paper rounded-xl p-2 flex items-center justify-center flex-shrink-0 shadow-md">
                <Image
                  src="/surrey-roofing-logo.png"
                  alt="The Surrey Roofing Company logo"
                  width={220}
                  height={80}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-24 md:text-30 font-medium leading-tight">
                  The Surrey Roofing Company
                </span>
                <span className="font-body text-13 text-paper/70 font-medium">
                  Roof repairs · Chimney work · Lead flashing
                </span>
              </div>
            </div>
            <p className="font-body text-16 text-paper/80 leading-relaxed max-w-xl">
              Roof repairs, chimney work and restoration in Croydon and nearby areas.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-13 text-paper/60">
              <a href="tel:+447729174423" className="hover:text-paper">+44 7729 174423</a>{CLINIC_INFO.contact.website && <a href={CLINIC_INFO.contact.website} target="_blank" rel="noopener noreferrer" className="hover:text-paper">The Surrey Roofing Company</a>}
              {CLINIC_INFO.contact.email && <a href={`mailto:${CLINIC_INFO.contact.email}`} className="hover:text-paper">{CLINIC_INFO.contact.email}</a>}
            </div>
          </div>

          <div className="lg:col-span-6 lg:pl-12 flex flex-col justify-between">
            <div className="p-6 bg-paper/5 border border-mist/20 rounded-none shadow-sm">
              <span className="font-body text-13 text-lime block mb-2 font-semibold uppercase tracking-wider">
                Roofing services
              </span>
              <p className="font-body text-15 text-paper/90 mb-4">
                Planning roof work? Call The Surrey Roofing Company.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={`tel:${CLINIC_INFO.contact.phone.replace(/[^0-9+]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-15 font-semibold text-lime hover:underline"
                >
                  Call: {CLINIC_INFO.contact.phone}
                </a>
                <Link
                  href="/quote/"
                  className="font-body text-13 text-paper/80 underline underline-offset-4 hover:text-paper"
                >
                  Request a quote
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section: Complete Internal Linking Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-16 border-b border-mist/20">
          {/* Column 1: technical Treatments */}
          <div className="col-span-1">
            <span className="font-body text-13 text-paper/40 uppercase tracking-wider block mb-4 font-semibold">
              Services
            </span>
            <ul className="space-y-2.5 font-body text-15">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/${s.slug}/`}
                    className="text-paper/80 hover:text-lime transition-colors"
                  >
                    {s.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: technical Team */}
          <div className="col-span-1">
            <span className="font-body text-13 text-paper/40 uppercase tracking-wider block mb-4 font-semibold">
              Meet the team
            </span>
            <ul className="space-y-2.5 font-body text-15">
              <li>
                <Link href="/equipe/" className="text-paper/80 hover:text-lime transition-colors">
                  Meet Mark at The Surrey Roofing Company
                </Link>
              </li>
              {DENTISTS.map((d) => (
                <li key={d.slug}>
                  <Link
                    href={`/equipe/${d.slug}/`}
                    className="text-paper/80 hover:text-lime transition-colors"
                  >
                    {d.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: The company */}
          <div className="col-span-1">
            <span className="font-body text-13 text-paper/40 uppercase tracking-wider block mb-4 font-semibold">
              Company
            </span>
            <ul className="space-y-2.5 font-body text-15">
              <li>
                <Link href="/about/" className="text-paper/80 hover:text-lime transition-colors">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/services/" className="text-paper/80 hover:text-lime transition-colors">
                  Roofing services
                </Link>
              </li>
              <li>
                <Link href="/dicas/" className="text-paper/80 hover:text-lime transition-colors">
                  Roofing advice
                </Link>
              </li>
              <li>
                <Link href="/quote/" className="text-paper/80 hover:text-lime transition-colors">
                  Request a quote
                </Link>
              </li>
              <li>
                <Link href="/contato/" className="text-paper/80 hover:text-lime transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/quote/" className="text-paper/80 hover:text-lime transition-colors">
                  Request a quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2">
            <span className="font-body text-13 text-paper/40 uppercase tracking-wider block mb-4 font-semibold">
              Contact
            </span>
            <div className="space-y-3 font-body text-15 text-paper/80">
              <div>
                <span className="text-paper/50 block text-13">Phone:</span>
                <a
                  href={`tel:${CLINIC_INFO.contact.phone.replace(/[^0-9+]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-lime transition-colors font-medium"
                >
                  {CLINIC_INFO.contact.phone}
                </a>
              </div>
              <div>
                <span className="text-paper/50 block text-13">Service area:</span>
                <address className="not-italic leading-relaxed text-13 text-paper/70">
                  {CLINIC_INFO.primaryLocation.street}, {CLINIC_INFO.primaryLocation.city} {CLINIC_INFO.primaryLocation.postalCode}
                </address>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Legal & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-body text-13 text-paper/60">
          <div>
            © {new Date().getFullYear()} {CLINIC_INFO.legalName}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="/" className="hover:text-paper">The Surrey Roofing Company</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
