import { useEffect } from 'react';
import useStore from '../store';

const useVoiceCommands = () => {
  const { setActiveItem, setColor, isListening, setIsListening, setVoiceStatus } = useStore();

  useEffect(() => {
    if (!isListening) return;

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setVoiceStatus('Spracherkennung wird nicht unterstützt');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = 'de-DE';

    recognition.onstart = () => {
      setIsListening(true);
      setVoiceStatus('Zuhören...');
    };

    recognition.onerror = (event) => {
      setVoiceStatus('Fehler: ' + event.error);
    };

    recognition.onend = () => {
      if (isListening) {
        recognition.start();
      } else {
        setVoiceStatus('Aus');
      }
    };

    recognition.onresult = (event) => {
      const command = event.results[event.results.length - 1][0].transcript.toLowerCase();
      console.log('Voice Command:', command);
      setVoiceStatus('Befehl: ' + command);

      // Simple keyword matching
      if (command.includes('t-shirt')) setActiveItem('tshirt');
      if (command.includes('jacke')) setActiveItem('jacket');
      if (command.includes('hose')) setActiveItem('pants');
      if (command.includes('schuhe')) setActiveItem('shoes');
      if (command.includes('kappe')) setActiveItem('cap');
      if (command.includes('tasse')) setActiveItem('mug');
      if (command.includes('mauspad')) setActiveItem('mousepad');

      // Color matching
      if (command.includes('rot')) setColor('#ff0000');
      if (command.includes('blau')) setColor('#0000ff');
      if (command.includes('grün')) setColor('#00ff00');
      if (command.includes('gelb')) setColor('#ffff00');
      if (command.includes('schwarz')) setColor('#000000');
      if (command.includes('weiß')) setColor('#ffffff');
    };

    recognition.start();

    return () => {
      recognition.stop();
    };
  }, [setActiveItem, setColor, setIsListening, setVoiceStatus]);
};

export default useVoiceCommands;
