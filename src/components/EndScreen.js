import React from 'react';
import './EndScreen.css';

function getGrade(netWorth, farmHealth, isKidMode) {
  const nwScore = isKidMode
    ? Math.min(100, (netWorth / 200) * 100)
    : Math.min(100, (netWorth / 50000) * 100);
  const combined = (nwScore + farmHealth) / 2;
  if (combined >= 80) return { grade: 'S', label: 'Financial Wizard!', emoji: '🏆', color: '#f9a825' };
  if (combined >= 65) return { grade: 'A', label: 'Money Master!',     emoji: '🌟', color: '#4caf50' };
  if (combined >= 50) return { grade: 'B', label: 'Smart Saver!',      emoji: '😊', color: '#2196f3' };
  if (combined >= 35) return { grade: 'C', label: 'Getting There!',    emoji: '🌱', color: '#ff9800' };
  return                     { grade: 'D', label: 'Keep Learning!',    emoji: '📚', color: '#f44336' };
}

function StatBox({ label, value, emoji, color }) {
  return (
    <div className="end-stat-box" style={{ borderColor: color }}>
      <div className="end-stat-emoji">{emoji}</div>
      <div className="end-stat-label">{label}</div>
      <div className="end-stat-value" style={{ color }}>{value}</div>
    </div>
  );
}

function EndScreen({ gameState, onRestart }) {
  const {
    playerName, isKidMode, netWorth, savings, debt,
    farmHealth, eventHistory,
  } = gameState;

  const result = getGrade(netWorth, farmHealth, isKidMode);
  const fmt = (n) => isKidMode ? `${Math.abs(n)} coins` : `$${Math.abs(n).toLocaleString()}`;

  const bestDecisions = eventHistory.filter(e => e.farmChange > 0).slice(0, 3);
  const worstDecisions = eventHistory.filter(e => e.farmChange < -5).slice(0, 2);

  const farmTier =
    farmHealth >= 76 ? { label: 'Flourishing', emoji: '🌟', desc: 'Your farm is a paradise!' } :
    farmHealth >= 51 ? { label: 'Healthy',     emoji: '🌿', desc: 'Your farm is doing great.' } :
    farmHealth >= 26 ? { label: 'Struggling',  emoji: '😟', desc: 'Your farm needs more care.' } :
                       { label: 'Withered',    emoji: '💀', desc: 'Your farm needs a fresh start.' };

  return (
    <div className="end-screen">
      {/* Background decorations */}
      <div className="end-bg">
        {farmHealth >= 51 && (
          <>
            <div className="end-decoration d1">🌻</div>
            <div className="end-decoration d2">🌾</div>
            <div className="end-decoration d3">🌳</div>
            <div className="end-decoration d4">🌸</div>
          </>
        )}
        {farmHealth < 51 && (
          <>
            <div className="end-decoration d1">🌵</div>
            <div className="end-decoration d2">🍂</div>
          </>
        )}
      </div>

      <div className="end-content">
        {/* Header */}
        <div className="end-header">
          <div className="end-farm-emoji">{farmTier.emoji}</div>
          <h1>You Retired!</h1>
          <p className="end-player">Congratulations, <strong>{playerName}</strong>!</p>
          <p className="end-farm-desc">{farmTier.desc}</p>
        </div>

        {/* Grade card */}
        <div className="end-grade-card" style={{ borderColor: result.color }}>
          <div className="grade-badge" style={{ background: result.color }}>
            {result.grade}
          </div>
          <div className="grade-info">
            <div className="grade-emoji">{result.emoji}</div>
            <div>
              <div className="grade-label">{result.label}</div>
              <div className="grade-sub">
                {isKidMode
                  ? `Farm happiness ${farmHealth}% • Piggy bank: ${fmt(savings)}`
                  : `Farm health ${farmHealth}% • Net worth: ${fmt(netWorth)}`}
              </div>
            </div>
          </div>
        </div>

        {/* Stats grid */}
        <div className="end-stats-grid">
          <StatBox
            label={isKidMode ? 'Piggy Bank' : 'Final Savings'}
            value={fmt(savings)}
            emoji="💰"
            color="#2e7d32"
          />
          <StatBox
            label="Farm Health"
            value={`${farmHealth}%`}
            emoji={farmTier.emoji}
            color={farmHealth >= 51 ? '#4caf50' : '#f44336'}
          />
          <StatBox
            label={isKidMode ? 'Total Owed' : 'Total Debt'}
            value={fmt(debt)}
            emoji="💳"
            color={debt > 0 ? '#c62828' : '#2e7d32'}
          />
          <StatBox
            label={isKidMode ? 'Farm Status' : 'Net Worth'}
            value={isKidMode ? farmTier.label : (netWorth < 0 ? '-' : '') + fmt(netWorth)}
            emoji={isKidMode ? '🌾' : '📊'}
            color={result.color}
          />
        </div>

        {/* Decision history highlights */}
        {bestDecisions.length > 0 && (
          <div className="end-section">
            <h3 className="end-section-title">🌟 Best Decisions</h3>
            <div className="decision-list">
              {bestDecisions.map((d, i) => (
                <div key={i} className="decision-item good">
                  <span className="dec-title">{d.title}</span>
                  <span className="dec-change">+{d.farmChange} health</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {worstDecisions.length > 0 && (
          <div className="end-section">
            <h3 className="end-section-title">📉 Toughest Moments</h3>
            <div className="decision-list">
              {worstDecisions.map((d, i) => (
                <div key={i} className="decision-item bad">
                  <span className="dec-title">{d.title}</span>
                  <span className="dec-change">{d.farmChange} health</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key takeaway */}
        <div className="end-takeaway">
          <span>💡</span>
          <p>
            {isKidMode
              ? 'Great job learning about money! Saving a little every day adds up to something BIG over time. 🐷'
              : 'Real wealth is built through consistent saving, smart investing, and avoiding high-interest debt. Every good financial decision compounds — just like your farm!'
            }
          </p>
        </div>

        {/* Restart */}
        <button className="btn-restart" onClick={onRestart}>
          🌱 Play Again
        </button>
      </div>
    </div>
  );
}

export default EndScreen;
