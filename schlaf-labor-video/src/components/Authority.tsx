import React from 'react';
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig, interpolate } from 'remotion';
import { MoonLogo } from './MoonLogo';
import { COLORS } from '../constants/style';

export const Authority: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const lines = [
    "tag 1 der challenge:",
    "finde dein fenster",
    "schlaf.labor."
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.background, padding: 100 }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {lines.map((line, i) => {
          const s = spring({
            frame: frame - (i * 20),
            fps,
          });
          const x = interpolate(s, [0, 1], [-100, 0]);
          return (
            <div key={i} style={{
              fontSize: i === 2 ? 100 : 70,
              fontWeight: 'bold',
              marginBottom: 20,
              opacity: s,
              transform: `translateX(${x}px)`
            }}>
              {line}
            </div>
          );
        })}
      </div>

      <div style={{
        position: 'absolute',
        bottom: 50,
        right: 50,
      }}>
        <MoonLogo size={100} />
      </div>
    </AbsoluteFill>
  );
};
