export const exportToPNG = () => {
  const canvas = document.querySelector('canvas');
  if (canvas) {
    const dataURL = canvas.toDataURL('image/png', 1.0);
    const link = document.createElement('a');
    link.download = `design-${Date.now()}.png`;
    link.href = dataURL;
    link.click();
  } else {
    console.error('Canvas not found');
  }
};
