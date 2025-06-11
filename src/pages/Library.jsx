import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import SoftButton from '../components/SoftButton';

const Library = () => (
  <div>
    <SectionWrapper title="SoftOps Rituals">
      <p className="text-[var(--color-text)]/80">
        Your redesigned daily infrastructure—calm, minimal, useful.
      </p>
      <SoftButton to="/library/loopbreak">LoopBreak</SoftButton>
    </SectionWrapper>
    {/* …list your rituals or links here… */}
  </div>
);

export default Library;
