import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import React from 'react';
import App from './App';

// Mocking Three.js and Canvas since they won't run in a standard jsdom environment easily
vi.mock('@react-three/fiber', () => ({
  Canvas: ({ children }) => <div data-testid="canvas">{children}</div>,
  useThree: () => ({}),
}));

vi.mock('@react-three/drei', () => ({
  OrbitControls: () => null,
  ContactShadows: () => null,
  Environment: () => null,
  Center: ({ children }) => <div>{children}</div>,
  useTexture: () => ({}),
  Decal: () => null,
  useCursor: () => null,
}));

describe('App', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders the header title', () => {
    render(<App />);
    expect(screen.getByText(/Clothing Brand Editor/i)).toBeDefined();
  });

  it('renders the editor UI components', () => {
    render(<App />);
    // Check for headings
    const headings = screen.getAllByRole('heading');
    const headingTexts = headings.map(h => h.textContent);

    expect(headingTexts).toContain('Produktauswahl');
    expect(headingTexts).toContain('Farbe');
    expect(headingTexts).toContain('Sprachsteuerung');
  });
});
