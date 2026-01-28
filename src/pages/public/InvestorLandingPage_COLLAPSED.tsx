'use client';

import { useEffect, useRef, useState } from 'react';

export default function InvestorLandingPage() {
  /* ────────────────────────────────
     STATE (collapsed)
     ──────────────────────────────── */

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
  const [waitlistFormData, setWaitlistFormData] = useState({
    name: '',
    email: '',
  });

  /* ────────────────────────────────
     EFFECTS (collapsed)
     (leave empty for now)
     ──────────────────────────────── */

  return (
    <>
      {/* NAVIGATION */}
      {/* HERO */}
      {/* FEATURED INVESTMENTS */}
      {/* HOW IT WORKS */}
      {/* TRUST & SECURITY */}
      {/* TESTIMONIALS */}
      {/* FAQ */}
      {/* FINAL CTA */}
      {/* FOOTER */}
      {/* WAITLIST MODAL */}
    </>
  );
}
