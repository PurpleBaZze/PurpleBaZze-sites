import React from 'react';
import useStore from '../store';
import { Mic, MicOff, Download, Upload, Trash2 } from 'lucide-react';
import { exportToPNG } from '../utils/exporter';

const EditorUI = () => {
  const { activeItem, setActiveItem, color, setColor, logos, addLogo, removeLogo, isListening, voiceStatus } = useStore();

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      addLogo(url);
    }
  };

  const items = ['tshirt', 'jacket', 'pants', 'shoes', 'cap', 'mug', 'mousepad'];

  return (
    <div className="ui-container">
      <div className="panel">
        <h3>Produktauswahl</h3>
        <div className="grid">
          {items.map((item) => (
            <button
              key={item}
              className={activeItem === item ? 'active' : ''}
              onClick={() => setActiveItem(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="panel">
        <h3>Farbe</h3>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>

      <div className="panel">
        <h3>Logos & Designs</h3>
        <label className="upload-btn">
          <Upload size={16} /> Logo hochladen
          <input type="file" hidden onChange={handleLogoUpload} accept="image/*" />
        </label>
        <div className="logo-list">
          {logos.map((logo) => (
            <div key={logo.id} className="logo-item">
              <img src={logo.url} alt="Logo" width="40" />
              <button onClick={() => removeLogo(logo.id)}><Trash2 size={14} /></button>
            </div>
          ))}
        </div>
      </div>

      <div className="panel voice-panel">
        <h3>Sprachsteuerung</h3>
        <div className="voice-status">
          <button onClick={() => setIsListening(!isListening)}>
            {isListening ? <Mic className="pulse" color="red" /> : <MicOff />}
          </button>
          <span>{voiceStatus}</span>
        </div>
        <p className="hint">Aktivieren Sie das Mikrofon und sagen Sie z.B. "Farbe Rot" oder "T-Shirt"</p>
      </div>

      <div className="panel">
        <button className="export-btn" onClick={exportToPNG}>
          <Download size={16} /> Export für Print-on-Demand
        </button>
      </div>
    </div>
  );
};

export default EditorUI;
