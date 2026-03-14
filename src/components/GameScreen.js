import React, { useState } from 'react';
import Farm from './Farm';
import Dashboard from './Dashboard';
import SpinWheel from './SpinWheel';
import EventCard from './EventCard';
import { kidEvents, adultEvents, wheelSegments, TOTAL_TURNS } from '../data/gameData';
import './GameScreen.css';

// Map wheel segment labels → event categories
const CATEGORY_MAP = {
  Income:     ['income', 'business', 'career'],
  Expense:    ['expense', 'spending'],
  Emergency:  ['emergency'],
  Windfall:   ['windfall', 'goal'],
  Investment: ['investment', 'retirement'],
  Risk:       ['risk'],
  Career:     ['income', 'debt', 'retirement'],
  Lifestyle:  ['spending', 'lifestyle', 'major', 'goal'],
};

function TurnProgress({ turn, total }) {
  return (
    <div className="turn-progress">
      <div className="turn-dots">
        {Array.from({ length: total }, (_, i) => (
          <div
            key={i}
            className={`turn-dot ${i < turn ? 'done' : i === turn ? 'current' : ''}`}
          />
        ))}
      </div>
      <span className="turn-text">Turn {turn + 1} / {total}</span>
    </div>
  );
}

function GameScreen({ gameState, setGameState, onEnd }) {
  const [phase, setPhase] = useState('idle'); // idle | spinning | event | result
  const [selectedOption, setSelectedOption] = useState(null);

  const {
    isKidMode, playerName, turn, netWorth,
    farmHealth, currentEvent, lastLesson, lastFeedback, lastFarmChange, eventHistory,
  } = gameState;

  const events = isKidMode ? kidEvents : adultEvents;

  const getEventsForSegment = (segmentLabel) => {
    const cats = CATEGORY_MAP[segmentLabel] || [segmentLabel.toLowerCase()];
    const usedIds = new Set(eventHistory.map(h => h.eventId));
    let pool = events.filter(e => cats.includes(e.category) && !usedIds.has(e.id));
    if (!pool.length) pool = events.filter(e => cats.includes(e.category));
    if (!pool.length) pool = events.filter(e => !usedIds.has(e.id));
    if (!pool.length) pool = events;
    return pool;
  };

  const handleWheelStop = (segmentIdx) => {
    const seg = wheelSegments[segmentIdx];
    const pool = getEventsForSegment(seg.label);
    const event = pool[Math.floor(Math.random() * pool.length)];
    setGameState(prev => ({ ...prev, currentEvent: event, lastFarmChange: 0 }));
    setTimeout(() => setPhase('event'), 700);
  };

  const handleChoice = (option) => {
    setSelectedOption(option);
    setGameState(prev => {
      const newSavings   = Math.max(0, prev.savings + (option.savingsChange || 0));
      const newDebt      = Math.max(0, prev.debt + (option.debtChange || 0));
      const newIncome    = Math.max(0, prev.income + (option.incomeChange || 0));
      const newHealth    = Math.max(0, Math.min(100, prev.farmHealth + (option.farmChange || 0)));
      const newNetWorth  = newSavings - newDebt;
      return {
        ...prev,
        savings: newSavings,
        debt: newDebt,
        income: newIncome,
        farmHealth: newHealth,
        netWorth: newNetWorth,
        lastLesson: option.lesson,
        lastFeedback: option.feedback,
        lastFarmChange: option.farmChange || 0,
        eventHistory: [
          ...prev.eventHistory,
          {
            eventId: prev.currentEvent.id,
            title: prev.currentEvent.title,
            choice: option.label,
            farmChange: option.farmChange || 0,
            turn: prev.turn,
          },
        ],
      };
    });
    setPhase('result');
  };

  const handleNextTurn = () => {
    setGameState(prev => {
      const newTurn = prev.turn + 1;

      // Passive per-turn effects
      const passiveGain    = prev.isKidMode ? 0 : Math.floor(prev.income * 0.12);
      const interest       = Math.floor(prev.debt * 0.04);
      const debtHPenalty   = prev.debt > (prev.isKidMode ? 10 : 2000) ? -1 : 0;

      const newSavings  = Math.max(0, prev.savings + passiveGain - interest);
      const newDebt     = Math.max(0, prev.debt + interest);
      const newHealth   = Math.max(0, Math.min(100, prev.farmHealth + debtHPenalty));
      const newNetWorth = newSavings - newDebt;

      const next = {
        ...prev,
        turn: newTurn,
        savings: newSavings,
        debt: newDebt,
        farmHealth: newHealth,
        netWorth: newNetWorth,
        currentEvent: null,
        lastLesson: null,
        lastFeedback: null,
        lastFarmChange: 0,
      };

      if (newTurn >= TOTAL_TURNS) {
        setTimeout(() => onEnd(next), 0);
      }
      return next;
    });
    setPhase('idle');
    setSelectedOption(null);
  };

  const fmt = (n) =>
    isKidMode ? `🪙 ${Math.abs(n)} coins` : `$${Math.abs(n).toLocaleString()}`;

  return (
    <div className="game-screen">
      {/* Header */}
      <header className="gs-header">
        <div className="gs-header-left">
          <span className="gs-logo">🌾</span>
          <span className="gs-title">Life Harvest</span>
        </div>

        <TurnProgress turn={turn} total={TOTAL_TURNS} />

        <div className="gs-header-right">
          <span className="gs-player">👤 {playerName}</span>
          <span className={`gs-nw ${netWorth < 0 ? 'negative' : ''}`}>
            {netWorth < 0 ? '-' : ''}{fmt(netWorth)}
          </span>
        </div>
      </header>

      {/* Main layout */}
      <main className="gs-main">
        <section className="gs-farm-section">
          <Farm
            farmHealth={farmHealth}
            isKidMode={isKidMode}
            lastFarmChange={lastFarmChange}
          />

          {phase === 'idle' && (
            <button className="spin-trigger-btn" onClick={() => setPhase('spinning')}>
              🎡 {isKidMode ? 'Spin the Wheel!' : 'Spin for Your Next Life Event!'}
            </button>
          )}

          {phase === 'spinning' && (
            <div className="phase-hint">🎡 Spinning…</div>
          )}
          {phase === 'event' && (
            <div className="phase-hint">💬 Make your decision!</div>
          )}
          {phase === 'result' && (
            <div className="phase-hint">📖 See what happened…</div>
          )}
        </section>

        <aside className="gs-sidebar">
          <Dashboard gameState={gameState} />
        </aside>
      </main>

      {/* Overlay: Spinning */}
      {phase === 'spinning' && (
        <div className="overlay" onClick={e => e.target === e.currentTarget && null}>
          <div className="overlay-box">
            <SpinWheel onStop={handleWheelStop} />
          </div>
        </div>
      )}

      {/* Overlay: Event / Result */}
      {(phase === 'event' || phase === 'result') && currentEvent && (
        <div className="overlay">
          <div className="overlay-box">
            <EventCard
              event={currentEvent}
              phase={phase}
              selectedOption={selectedOption}
              isKidMode={isKidMode}
              onChoice={handleChoice}
              onNext={handleNextTurn}
              lastFeedback={lastFeedback}
              lastLesson={lastLesson}
              lastFarmChange={lastFarmChange}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default GameScreen;
