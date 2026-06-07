import { create } from 'zustand';

const useStore = create((set) => ({
  activeItem: 'tshirt',
  color: '#ffffff',
  logos: [], // Array of { id, url, position, scale }
  isListening: false,
  voiceStatus: 'Ready',

  setActiveItem: (item) => set({ activeItem: item }),
  setColor: (color) => set({ color }),
  addLogo: (logoUrl) => set((state) => ({
    logos: [...state.logos, { id: Date.now(), url: logoUrl, position: [0, 0, 0.5], scale: 0.2 }]
  })),
  updateLogoPosition: (id, position) => set((state) => ({
    logos: state.logos.map((l) => l.id === id ? { ...l, position } : l)
  })),
  removeLogo: (id) => set((state) => ({
    logos: state.logos.filter((l) => l.id !== id)
  })),
  setIsListening: (status) => set({ isListening: status }),
  setVoiceStatus: (status) => set({ voiceStatus: status }),
}));

export default useStore;
