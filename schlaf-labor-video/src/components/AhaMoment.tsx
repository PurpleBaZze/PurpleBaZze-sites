import React from 'react';
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { COLORS } from '../constants/style';

export const AhaMoment: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const blocks = ["1,5h", "3h", "4,5h", "6h", "7,5h"];

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.background, justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', gap: 20, marginBottom: 100 }}>
        {blocks.map((label, i) => {
          const s = spring({
            frame: frame - (i * 15),
            fps,
          });
          return (
            <div key={i} style={{
              width: 150,
              height: 150,
              backgroundColor: COLORS.accent,
              color: COLORS.background,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: 40,
              fontWeight: 'bold',
              borderRadius: 10,
              transform: `scale(${s})`,
              opacity: s,
            }}>
              {label}
            </div>
          );
        })}
      </div>

      {frame > 90 && (
        <div style={{ position: 'relative' }}>
          <div style={{
            width: 150,
            height: 150,
            backgroundColor: COLORS.red,
            color: COLORS.text,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 40,
            fontWeight: 'bold',
            borderRadius: 10,
          }}>
            8h
          </div>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: -10,
            width: 170,
            height: 10,
            backgroundColor: 'white',
            transform: 'rotate(-45deg)',
          }} />
        </div>
      )}

      {frame > 120 && (
        <div style={{ marginTop: 50, fontSize: 100, fontWeight: 'bold' }}>
          7,5h &gt; 8h
        </div>
      )}
    </AbsoluteFill>
  );
};
