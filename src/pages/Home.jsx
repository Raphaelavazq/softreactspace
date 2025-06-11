// Import global styles
import '../styles/ui-style-guide.css';
import '../index.css';
import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import SoftButton from '../components/SoftButton';
import FloatingEmotion from '../components/FloatingEmotion';

const emotions = [
  { name: 'Calm', img: '/emotions/calm.png' },
  { name: 'Joy', img: '/emotions/joy.png' },
  { name: 'Sadness', img: '/emotions/sadness.png' },
  { name: 'Anger', img: '/emotions/anger.png' },
  { name: 'Disgust', img: '/emotions/disgust.png' },
];

const Home = () => (
  <div className="fade-in">
    {/* Hero Section */}
    <SectionWrapper title="Not an app. Not a hack. A soft operating system for your mind.">
      <SoftButton to="/library">LoopBreak</SoftButton>
    </SectionWrapper>

    {/* Emotions Gallery */}
    <section className="flex flex-wrap justify-center py-10 bg-[var(--color-bg-alt)]">
      {emotions.map((e) => (
        <FloatingEmotion key={e.name} emotion={e.name} image={e.img} />
      ))}
    </section>

    {/* Explore Further */}
    <SectionWrapper title="Choose your next protocol">
      <p className="text-lg text-[var(--color-text)]/80 leading-relaxed mb-8">
        Soft systems for daily rituals, real-time reflection, practical tools, and meaningful impact.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <SoftButton to="/library">LoopBreak</SoftButton>
        <SoftButton to="/softcare/check-in">Today’s Signal</SoftButton>
        <SoftButton to="/softfinds/reset-protocol">ResetProtocol</SoftButton>
        <SoftButton to="/softimpact/send-care">SendCare</SoftButton>
      </div>
    </SectionWrapper>
  </div>
);

export default Home;
