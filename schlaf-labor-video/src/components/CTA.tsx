import React from 'react';
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig, interpolate } from 'remotion';
import { MoonLogo } from './MoonLogo';
import { COLORS } from '../constants/style';

export const CTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const s1 = spring({ frame, fps });
  const s2 = spring({ frame: frame - 20, fps });

  if (frame > durationInFrames - 30) {
    return (
      <AbsoluteFill style={{ backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' }}>
        <MoonLogo size={150} />
        <div style={{ marginTop: 20, fontSize: 40, fontWeight: 'bold' }}>schlaf.labor.</div>
      </AbsoluteFill>
    );
  }

  const y = interpolate(s2, [0, 1], [50, 0]);

  return (
    <AbsoluteFill style={{ backgroundColor: 'black', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
      <div style={{ opacity: s1, transform: `scale(${s1})`, fontSize: 100, fontWeight: 'bold', marginBottom: 40, width: '100%', padding: '0 50px' }}>
        speichern für heute nacht.
      </div>
      <div style={{ opacity: s2, transform: `translateY(${y}px)`, fontSize: 60, color: COLORS.accent }}>
        folge für tag 2
      </div>
    </AbsoluteFill>
  );
};
