import React, { useState } from 'react';
import StartScreen from './components/StartScreen';
import GameScreen from './components/GameScreen';
import EndScreen from './components/EndScreen';
import { getInitialState } from './data/gameData';
import './App.css';

function App() {
  const [screen, setScreen] = useState('start');
  const [gameState, setGameState] = useState(null);

  const handleStart = (playerName, age) => {
    setGameState(getInitialState(playerName, age));
    setScreen('game');
  };

  const handleEnd = (finalState) => {
    setGameState(finalState);
    setScreen('end');
  };

  const handleRestart = () => {
    setScreen('start');
    setGameState(null);
  };

  if (screen === 'start') return <StartScreen onStart={handleStart} />;
  if (screen === 'end') return <EndScreen gameState={gameState} onRestart={handleRestart} />;
  return <GameScreen gameState={gameState} setGameState={setGameState} onEnd={handleEnd} />;
}

export default App;
