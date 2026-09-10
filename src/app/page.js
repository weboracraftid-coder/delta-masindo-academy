"use client";

import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import EnrollmentModal from '@/components/layout/EnrollmentModal';
import Hero from '@/components/home/Hero';
import Stats from '@/components/home/Stats';
import AboutPreview from '@/components/home/AboutPreview';
import ProgramPreview from '@/components/home/ProgramPreview';
import CertificationsPreview from '@/components/home/CertificationsPreview';
import Process from '@/components/home/Process';
import Keunggulan from '@/components/home/Keunggulan';
import Testimonials from '@/components/home/Testimonials';
import ArticlesPreview from '@/components/home/ArticlesPreview';
import FAQAccordion from '@/components/home/FAQAccordion';
import CTA from '@/components/home/CTA';

export default function Home() {
  const [enrollmentModalOpen, setEnrollmentModalOpen] = useState(false);
  const [selectedProgramTitle, setSelectedProgramTitle] = useState('');

  const handleOpenEnrollment = (programTitle = '') => {
    setSelectedProgramTitle(programTitle);
    setEnrollmentModalOpen(true);
  };

  return (
    <>
      <Navbar onOpenEnrollment={() => handleOpenEnrollment()} />
      <main>
        <Hero onOpenEnrollment={handleOpenEnrollment} />
        <Stats />
        <AboutPreview />
        <ProgramPreview onOpenEnrollment={handleOpenEnrollment} />
        <CertificationsPreview />
        <Process />
        <Keunggulan />
        <Testimonials />
        <ArticlesPreview />
        <FAQAccordion />
        <CTA onOpenEnrollment={handleOpenEnrollment} />
      </main>
      <Footer />

      <EnrollmentModal
        isOpen={enrollmentModalOpen}
        onClose={() => setEnrollmentModalOpen(false)}
        selectedProgramTitle={selectedProgramTitle}
      />
    </>
  );
}
