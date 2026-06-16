import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { MoonLogo } from './MoonLogo';

export const Hook: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = interpolate(frame, [0, 30], [0, 1]);
  const moonScale = spring({
    frame,
    fps,
    config: { damping: 10 },
  });

  const text1Pop = spring({
    frame: frame - 15,
    fps,
  });

  const text2Pop = spring({
    frame: frame - 30,
    fps,
  });

  const zoom = interpolate(frame, [75, 90], [1, 2], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
      transform: `scale(${zoom})`
    }}>
      <div style={{ opacity, transform: `scale(${moonScale})` }}>
        <MoonLogo size={300} />
      </div>

      <div style={{
        position: 'absolute',
        top: '60%',
        textAlign: 'center',
        width: '100%',
      }}>
        <h1 style={{
          fontSize: 80,
          fontWeight: 'bold',
          margin: 0,
          opacity: text1Pop,
          transform: `scale(${text1Pop})`
        }}>
          8 stunden geschlafen
        </h1>
        <h1 style={{
          fontSize: 80,
          fontWeight: 'bold',
          margin: 0,
          opacity: text2Pop,
          transform: `scale(${text2Pop})`
        }}>
          und trotzdem müde?
        </h1>
      </div>
    </AbsoluteFill>
  );
};
