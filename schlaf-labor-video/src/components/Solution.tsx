import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { COLORS } from '../constants/style';

export const Solution: React.FC = () => {
  const frame = useCurrentFrame();

  const typing = Math.floor(interpolate(frame, [30, 60], [0, 5], { extrapolateRight: 'clamp' }));
  const time = "06:30".substring(0, typing);

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.background, justifyContent: 'center', alignItems: 'center' }}>
      <div style={{
        width: 400,
        height: 700,
        backgroundColor: '#333',
        borderRadius: 40,
        border: '8px solid #555',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 40
      }}>
        <div style={{ fontSize: 30, color: '#aaa', marginBottom: 20 }}>Wecker</div>
        <div style={{ fontSize: 80, fontWeight: 'bold' }}>{time}</div>
        <div style={{ marginTop: 'auto', width: '100%', height: 60, backgroundColor: COLORS.accent, borderRadius: 30 }} />
      </div>

      {frame > 80 && (
        <div style={{
          position: 'absolute',
          top: '50%',
          backgroundColor: 'rgba(0,0,0,0.8)',
          padding: 40,
          borderRadius: 20,
          fontSize: 60,
          fontWeight: 'bold',
          textAlign: 'center'
        }}>
          6:30 minus 7,5h = 23:00
          <div style={{ marginTop: 20, color: COLORS.accent }}>rechne rückwärts.</div>
        </div>
      )}
    </AbsoluteFill>
  );
};
