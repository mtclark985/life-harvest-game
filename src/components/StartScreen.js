import React, { useState } from 'react';
import './StartScreen.css';

function StartScreen({ onStart }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [step, setStep] = useState(1);

  const parsedAge = parseInt(age);
  const isKidMode = age && parsedAge < 10;
  const valid = name.trim() && age && parsedAge >= 4 && parsedAge <= 100;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!valid) return;
    onStart(name.trim(), parsedAge);
  };

  return (
    <div className="start-screen">
      <div className="start-sky">
        <div className="ss-sun">☀️</div>
        <div className="ss-cloud c1">☁️</div>
        <div className="ss-cloud c2">⛅</div>
        <div className="ss-cloud c3">☁️</div>
      </div>

      <div className="start-content">
        <div className="start-logo">
          <div className="logo-icon">🌾</div>
          <h1>Life Harvest</h1>
          <p className="logo-tagline">Grow your farm. Grow your wealth.</p>
        </div>

        {step === 1 ? (
          <div className="start-card" style={{ animation: 'fadeIn 0.5s ease' }}>
            <div className="feature-icons">
              <span title="Spin">🎡</span>
              <span title="Money">💰</span>
              <span title="Farm">🌱</span>
              <span title="Invest">📈</span>
              <span title="Home">🏡</span>
            </div>
            <p className="start-desc">
              Spin the wheel, face real-life money moments, and watch your farm
              flourish — or wither — based on your financial choices!
            </p>
            <div className="feature-list">
              <div className="feature-item">🎡 Spin to trigger life events</div>
              <div className="feature-item">💼 Make real financial decisions</div>
              <div className="feature-item">🌾 See your farm react to your choices</div>
              <div className="feature-item">🏆 Retire with the best farm &amp; net worth!</div>
            </div>
            <button className="btn-primary btn-large" onClick={() => setStep(2)}>
              Start Your Journey! 🚀
            </button>
          </div>
        ) : (
          <form className="start-card setup-form" onSubmit={handleSubmit} style={{ animation: 'fadeIn 0.4s ease' }}>
            <h2>Tell us about yourself</h2>

            <div className="form-group">
              <label htmlFor="player-name">What's your name?</label>
              <input
                id="player-name"
                type="text"
                placeholder="Enter your name..."
                value={name}
                onChange={e => setName(e.target.value)}
                maxLength={20}
                autoFocus
              />
            </div>

            <div className="form-group">
              <label htmlFor="player-age">How old are you?</label>
              <input
                id="player-age"
                type="number"
                placeholder="Enter your age..."
                value={age}
                onChange={e => setAge(e.target.value)}
                min="4"
                max="100"
              />
            </div>

            {age && parsedAge >= 4 && (
              <div className={`mode-badge ${isKidMode ? 'kid' : 'adult'}`}>
                <span className="mode-icon">{isKidMode ? '🐣' : '💼'}</span>
                <div>
                  <strong>{isKidMode ? 'Explorer Mode' : 'Pro Mode'}</strong>
                  <p>{isKidMode
                    ? 'Coins, piggy banks & fun money adventures!'
                    : 'Budgets, investments, mortgages & careers!'
                  }</p>
                </div>
              </div>
            )}

            <button type="submit" className="btn-primary btn-large" disabled={!valid}>
              Plant the First Seed! 🌱
            </button>
            <button type="button" className="btn-ghost" onClick={() => setStep(1)}>
              ← Back
            </button>
          </form>
        )}
      </div>

      <div className="start-farm-row">
        {['🌾','🏡','🌲','🐄','🌻','🚜','🐔','🌽','🌾','🌿','🐷','🌾'].map((e, i) => (
          <span key={i} style={{ animationDelay: `${i * 0.15}s` }}>{e}</span>
        ))}
      </div>
    </div>
  );
}

export default StartScreen;
