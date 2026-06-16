import React from 'react';
import { COLORS } from '../constants/style';

export const MoonLogo: React.FC<{ size?: number; style?: React.CSSProperties }> = ({
  size = 200,
  style
}) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        backgroundColor: COLORS.accent,
        borderRadius: '50%',
        boxShadow: `0 0 ${size / 4}px ${COLORS.accent}88`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...style,
      }}
    />
  );
};
