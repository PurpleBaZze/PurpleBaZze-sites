import React from 'react';
import { AbsoluteFill, useCurrentFrame } from 'remotion';
import { COLORS, SAFE_ZONE } from '../constants/style';

export const Problem: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.background }}>
      <div style={{ display: 'flex', height: '100%' }}>
        {/* Left Side: Mock Person wälzt sich */}
        <div style={{
          flex: 1,
          backgroundColor: '#0a0a0a',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRight: '2px solid #333'
        }}>
          <div style={{
            width: 200,
            height: 100,
            backgroundColor: '#222',
            borderRadius: 50,
            transform: `translateX(${Math.sin(frame / 5) * 20}px)`,
          }} />
        </div>

        {/* Right Side: Clock */}
        <div style={{
          flex: 1,
          backgroundColor: '#111',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={{ fontSize: 100, fontWeight: 'bold', color: COLORS.text }}>
            8:00
          </div>
        </div>
      </div>

      <div style={{
        position: 'absolute',
        top: SAFE_ZONE,
        width: '100%',
        textAlign: 'center',
        fontSize: 60,
        fontWeight: 'bold'
      }}>
        du schläfst nicht in stunden
      </div>

      <div style={{
        position: 'absolute',
        bottom: SAFE_ZONE,
        width: '100%',
        textAlign: 'center',
        fontSize: 80,
        fontWeight: 'bold',
        color: COLORS.accent
      }}>
        du schläfst in zyklen.
      </div>
    </AbsoluteFill>
  );
};
