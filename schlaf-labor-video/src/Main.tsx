import React from 'react';
import { AbsoluteFill, Audio, staticFile } from 'remotion';
import { COLORS } from './constants/style';
import { SceneManager } from './components/SceneManager';

export const Main: React.FC = () => {
  // -22dB is approximately 0.079 volume (10^(-22/20))
  const musicVolume = 0.08;

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.background, color: COLORS.text, fontFamily: 'Inter, sans-serif' }}>
      <Audio src={staticFile('audio/lofi.wav')} volume={musicVolume} />
      <SceneManager />
    </AbsoluteFill>
  );
};
