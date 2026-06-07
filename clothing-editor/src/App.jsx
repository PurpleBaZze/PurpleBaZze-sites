import React from 'react';
import Scene from './components/Scene';
import EditorUI from './components/EditorUI';
import useVoiceCommands from './hooks/useVoiceCommands';

function App() {
  // Activate voice commands
  useVoiceCommands();

  return (
    <div className="app-container">
      <header>
        <h1>Clothing Brand Editor</h1>
      </header>

      <main>
        <div className="canvas-container">
          <Scene />
        </div>
        <EditorUI />
      </main>
    </div>
  );
}

export default App;
