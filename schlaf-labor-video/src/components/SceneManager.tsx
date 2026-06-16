import React from 'react';
import { Series, Audio, staticFile } from 'remotion';
import { Hook } from './Hook';
import { Problem } from './Problem';
import { AhaMoment } from './AhaMoment';
import { Solution } from './Solution';
import { Authority } from './Authority';
import { CTA } from './CTA';

export const SceneManager: React.FC = () => {
  return (
    <Series>
      <Series.Sequence durationInFrames={3 * 30}>
        <Hook />
        <Audio src={staticFile('audio/vo1.wav')} />
      </Series.Sequence>
      <Series.Sequence durationInFrames={5 * 30}>
        <Problem />
        <Audio src={staticFile('audio/whoosh.wav')} />
        <Audio src={staticFile('audio/vo2.wav')} />
      </Series.Sequence>
      <Series.Sequence durationInFrames={6 * 30}>
        <AhaMoment />
        <Audio src={staticFile('audio/whoosh.wav')} />
        <Audio src={staticFile('audio/vo3.wav')} />
      </Series.Sequence>
      <Series.Sequence durationInFrames={6 * 30}>
        <Solution />
        <Audio src={staticFile('audio/whoosh.wav')} />
        <Audio src={staticFile('audio/vo4.wav')} />
      </Series.Sequence>
      <Series.Sequence durationInFrames={6 * 30}>
        <Authority />
        <Audio src={staticFile('audio/vo5.wav')} />
      </Series.Sequence>
      <Series.Sequence durationInFrames={5 * 30}>
        <CTA />
        <Audio src={staticFile('audio/vo6.wav')} />
      </Series.Sequence>
    </Series>
  );
};
