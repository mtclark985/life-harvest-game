import React from 'react';
import './EventCard.css';

const CATEGORY_COLORS = {
  income:     { bg: '#e8f5e9', border: '#4caf50', badge: '#4caf50' },
  business:   { bg: '#e8f5e9', border: '#66bb6a', badge: '#66bb6a' },
  expense:    { bg: '#fff3e0', border: '#ff9800', badge: '#ff9800' },
  emergency:  { bg: '#ffebee', border: '#f44336', badge: '#f44336' },
  windfall:   { bg: '#f3e5f5', border: '#9c27b0', badge: '#9c27b0' },
  goal:       { bg: '#f3e5f5', border: '#7b1fa2', badge: '#7b1fa2' },
  investment: { bg: '#e3f2fd', border: '#2196f3', badge: '#2196f3' },
  retirement: { bg: '#e3f2fd', border: '#1976d2', badge: '#1976d2' },
  debt:       { bg: '#fce4ec', border: '#e91e63', badge: '#e91e63' },
  risk:       { bg: '#fbe9e7', border: '#ff5722', badge: '#ff5722' },
  major:      { bg: '#e8eaf6', border: '#3f51b5', badge: '#3f51b5' },
  spending:   { bg: '#fff8e1', border: '#ffc107', badge: '#ffc107' },
  career:     { bg: '#e0f7fa', border: '#00bcd4', badge: '#00bcd4' },
};

function impactLabel(val, isKid, field) {
  if (!val || val === 0) return null;
  const isPos = val > 0;
  const abs = Math.abs(val);
  const prefix = isPos ? '+' : '-';
  if (field === 'savings') {
    const label = isKid ? 'coins' : '$';
    return { text: `${prefix}${label}${isKid ? abs : abs.toLocaleString()} savings`, positive: isPos };
  }
  if (field === 'debt') {
    return { text: `${isPos ? '+' : '-'}${isKid ? '' : '$'}${abs.toLocaleString()} debt`, positive: !isPos };
  }
  if (field === 'income') {
    const label = isKid ? 'coins/round' : '/mo income';
    return { text: `${prefix}${isKid ? '' : '$'}${abs.toLocaleString()}${label}`, positive: isPos };
  }
  if (field === 'farm') {
    return { text: `${prefix}${abs} farm health`, positive: isPos };
  }
  return null;
}

function OptionImpacts({ option, isKidMode }) {
  const impacts = [
    impactLabel(option.savingsChange, isKidMode, 'savings'),
    impactLabel(option.debtChange, isKidMode, 'debt'),
    impactLabel(option.incomeChange, isKidMode, 'income'),
    impactLabel(option.farmChange, isKidMode, 'farm'),
  ].filter(Boolean);

  if (!impacts.length) return null;

  return (
    <div className="option-impacts">
      {impacts.map((imp, i) => (
        <span key={i} className={`impact-chip ${imp.positive ? 'pos' : 'neg'}`}>
          {imp.text}
        </span>
      ))}
    </div>
  );
}

function EventCard({ event, phase, selectedOption, isKidMode, onChoice, onNext, lastFeedback, lastLesson, lastFarmChange }) {
  const colors = CATEGORY_COLORS[event.category] || CATEGORY_COLORS.expense;
  const isResult = phase === 'result';

  return (
    <div
      className={`event-card ${isResult ? 'result-mode' : ''}`}
      style={{ borderColor: colors.border, background: colors.bg }}
    >
      {/* Category badge */}
      <div className="event-badge" style={{ background: colors.badge }}>
        {event.category.toUpperCase()}
      </div>

      {/* Title */}
      <h2 className="event-title">{event.title}</h2>

      {!isResult ? (
        <>
          <p className="event-desc">{event.description}</p>

          <div className="event-options">
            {event.options.map((opt, i) => (
              <button
                key={i}
                className="option-btn"
                onClick={() => onChoice(opt)}
              >
                <span className="option-label">{opt.label}</span>
                <OptionImpacts option={opt} isKidMode={isKidMode} />
              </button>
            ))}
          </div>

          <p className="event-hint">
            {isKidMode ? '🤔 Pick what you would do!' : '💡 Think carefully — your farm will react!'}
          </p>
        </>
      ) : (
        <>
          {/* Result view */}
          <div className="result-choice">
            <span className="result-choice-label">You chose:</span>
            <strong>{selectedOption?.label}</strong>
          </div>

          <div className={`result-feedback ${lastFarmChange >= 0 ? 'fb-positive' : 'fb-negative'}`}>
            <span className="fb-icon">{lastFarmChange > 5 ? '🎉' : lastFarmChange < -5 ? '😬' : '💬'}</span>
            <p>{lastFeedback}</p>
          </div>

          <div className="result-farm-change">
            <span>Farm impact:</span>
            <span className={`farm-change-val ${lastFarmChange >= 0 ? 'pos' : 'neg'}`}>
              {lastFarmChange > 0 ? '+' : ''}{lastFarmChange} health
            </span>
          </div>

          <div className="result-lesson">
            <span className="lesson-icon">📚</span>
            <div>
              <strong>Lesson Learned:</strong>
              <p>{lastLesson}</p>
            </div>
          </div>

          <button className="btn-next" onClick={onNext}>
            Next Turn →
          </button>
        </>
      )}
    </div>
  );
}

export default EventCard;
