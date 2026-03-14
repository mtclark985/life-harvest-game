import React from 'react';
import './Dashboard.css';

function StatRow({ label, value, color, icon, big }) {
  return (
    <div className={`stat-row ${big ? 'stat-big' : ''}`}>
      <span className="stat-icon">{icon}</span>
      <div className="stat-body">
        <span className="stat-label">{label}</span>
        <span className="stat-value" style={{ color }}>
          {value}
        </span>
      </div>
    </div>
  );
}

function Dashboard({ gameState }) {
  const {
    isKidMode, savings, debt, income, netWorth, farmHealth,
    eventHistory, lastLesson, turn,
  } = gameState;

  const fmt = (n) => isKidMode ? `${n} coins` : `$${Math.abs(n).toLocaleString()}`;
  const fmtIncome = (n) => isKidMode ? `${n} coins/round` : `$${Math.abs(n).toLocaleString()}/mo`;

  const netColor = netWorth >= 0 ? '#2e7d32' : '#c62828';
  const healthColor = farmHealth >= 76 ? '#2e7d32' : farmHealth >= 51 ? '#558b2f' : farmHealth >= 26 ? '#e65100' : '#b71c1c';

  const recentEvents = [...eventHistory].reverse().slice(0, 5);

  return (
    <div className="dashboard">
      {/* Net Worth Hero */}
      <div className="dash-card dash-networth">
        <div className="nw-label">{isKidMode ? '🐷 Piggy Bank Total' : '💰 Net Worth'}</div>
        <div className="nw-value" style={{ color: netColor }}>
          {netWorth < 0 ? '-' : ''}{fmt(netWorth)}
        </div>
        <div className="nw-sub">{isKidMode ? 'Savings minus what you owe' : 'Savings minus all debt'}</div>
      </div>

      {/* Financial Stats */}
      <div className="dash-card">
        <div className="dash-section-title">
          {isKidMode ? '💰 Your Money' : '📊 Finances'}
        </div>

        <StatRow
          label={isKidMode ? 'Piggy Bank' : 'Savings'}
          value={fmt(savings)}
          color="#2e7d32"
          icon="🏦"
        />

        {debt > 0 && (
          <StatRow
            label={isKidMode ? 'Owed to Others' : 'Total Debt'}
            value={fmt(debt)}
            color="#c62828"
            icon="💳"
          />
        )}

        <StatRow
          label={isKidMode ? 'Allowance' : 'Monthly Income'}
          value={fmtIncome(income)}
          color="#1565c0"
          icon="💵"
        />

        <StatRow
          label={isKidMode ? 'Farm Happiness' : 'Farm Health'}
          value={`${farmHealth}%`}
          color={healthColor}
          icon={farmHealth >= 76 ? '🌟' : farmHealth >= 51 ? '🌿' : farmHealth >= 26 ? '😟' : '💀'}
        />
      </div>

      {/* Debt Warning */}
      {debt > (isKidMode ? 10 : 5000) && (
        <div className="dash-warning">
          ⚠️ {isKidMode ? 'You owe money! Debt makes your farm sad.' : `Debt is costing you interest every turn! Pay it down.`}
        </div>
      )}

      {/* Last Lesson */}
      {lastLesson && (
        <div className="dash-lesson">
          <span>📚</span>
          <p>{lastLesson}</p>
        </div>
      )}

      {/* Event History */}
      {recentEvents.length > 0 && (
        <div className="dash-card dash-history">
          <div className="dash-section-title">📋 Recent Events</div>
          <div className="history-list">
            {recentEvents.map((ev, i) => (
              <div key={i} className="history-item">
                <span className="history-turn">Turn {ev.turn + 1}</span>
                <span className="history-title">{ev.title}</span>
                <span className={`history-farm ${ev.farmChange >= 0 ? 'pos' : 'neg'}`}>
                  {ev.farmChange > 0 ? '+' : ''}{ev.farmChange}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Progress to retirement */}
      <div className="dash-card dash-progress">
        <div className="dash-section-title">🏁 Progress to Retirement</div>
        <div className="progress-track">
          <div
            className="progress-fill"
            style={{ width: `${(turn / 20) * 100}%` }}
          />
          <span className="progress-label">{20 - turn} turns left</span>
        </div>
        <div className="progress-icons">
          <span>🌱</span>
          <span style={{ marginLeft: 'auto' }}>🏡</span>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
