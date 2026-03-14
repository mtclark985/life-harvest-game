import React from 'react';
import './Farm.css';

// Determine farm tier from health 0-100
function getTier(health) {
  if (health >= 76) return 4;
  if (health >= 51) return 3;
  if (health >= 26) return 2;
  return 1;
}

const TIER_CONFIG = {
  1: {
    skyClass: 'sky-stormy',
    groundClass: 'ground-dry',
    label: 'Withered',
    labelClass: 'tier-1',
    showSun: false,
    showRainbow: false,
    crops: [],
    animals: [],
    building: '🛖',
    buildingLabel: 'Shack',
    trees: ['🌵', '🌵'],
    extras: ['💀'],
  },
  2: {
    skyClass: 'sky-cloudy',
    groundClass: 'ground-patchy',
    label: 'Struggling',
    labelClass: 'tier-2',
    showSun: false,
    showRainbow: false,
    crops: ['🌾'],
    animals: ['🐔'],
    building: '🏚️',
    buildingLabel: 'Old Barn',
    trees: ['🌲', '🌿'],
    extras: [],
  },
  3: {
    skyClass: 'sky-sunny',
    groundClass: 'ground-green',
    label: 'Healthy',
    labelClass: 'tier-3',
    showSun: true,
    showRainbow: false,
    crops: ['🌾', '🌽', '🍅'],
    animals: ['🐔', '🐷'],
    building: '🏠',
    buildingLabel: 'Farmhouse',
    trees: ['🌲', '🌳', '🌿'],
    extras: ['🌻'],
  },
  4: {
    skyClass: 'sky-bright',
    groundClass: 'ground-lush',
    label: 'Flourishing',
    labelClass: 'tier-4',
    showSun: true,
    showRainbow: true,
    crops: ['🌾', '🌽', '🍅', '🎃', '🌻'],
    animals: ['🐔', '🐷', '🐄', '🐴'],
    building: '🏡',
    buildingLabel: 'Dream Farm',
    trees: ['🌲', '🌳', '🌳', '🌿'],
    extras: ['🦋', '🌈', '🐝'],
  },
};

function FarmHealthBar({ health }) {
  const color = health >= 76 ? '#4caf50' : health >= 51 ? '#8bc34a' : health >= 26 ? '#ff9800' : '#f44336';
  return (
    <div className="farm-health-bar">
      <span className="health-label">Farm Health</span>
      <div className="health-track">
        <div
          className="health-fill"
          style={{ width: `${health}%`, background: color }}
        />
      </div>
      <span className="health-value">{health}%</span>
    </div>
  );
}

function Farm({ farmHealth, isKidMode, lastFarmChange }) {
  const tier = getTier(farmHealth);
  const cfg = TIER_CONFIG[tier];
  const showPositive = lastFarmChange > 0;
  const showNegative = lastFarmChange < 0;

  return (
    <div className="farm-wrapper">
      <div className={`farm-scene ${cfg.skyClass}`}>
        {/* Sky layer */}
        <div className="farm-sky">
          {cfg.showSun && <div className="farm-sun">☀️</div>}
          {cfg.showRainbow && <div className="farm-rainbow">🌈</div>}
          <div className="farm-clouds">
            <span className={`cloud ${tier <= 2 ? 'cloud-dark' : ''}`}>
              {tier <= 2 ? '🌧️' : '☁️'}
            </span>
            <span className={`cloud cloud-2 ${tier <= 2 ? 'cloud-dark' : ''}`}>
              {tier <= 2 ? '⛈️' : '⛅'}
            </span>
          </div>
        </div>

        {/* Hills */}
        <div className={`farm-hills ${cfg.groundClass}`}>
          <div className="hill hill-back" />
          <div className="hill hill-mid" />
        </div>

        {/* Main farm ground */}
        <div className={`farm-ground ${cfg.groundClass}`}>
          {/* Left: building + trees */}
          <div className="farm-left">
            <div className="farm-building" title={cfg.buildingLabel}>
              <span className="building-emoji">{cfg.building}</span>
              <span className="building-label">{cfg.buildingLabel}</span>
            </div>
            <div className="farm-trees">
              {cfg.trees.map((t, i) => (
                <span key={i} className="farm-tree" style={{ animationDelay: `${i * 0.4}s` }}>{t}</span>
              ))}
            </div>
          </div>

          {/* Center: fields */}
          <div className="farm-fields">
            {tier === 1 && (
              <div className="field field-dead">
                <div className="field-label">💀 Dead soil</div>
              </div>
            )}
            {tier >= 2 && (
              <div className="farm-crop-rows">
                {cfg.crops.map((crop, i) => (
                  <div key={i} className="crop-row">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <span
                        key={j}
                        className="crop-emoji"
                        style={{ animationDelay: `${(i * 5 + j) * 0.1}s` }}
                      >
                        {crop}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right: animals + extras */}
          <div className="farm-right">
            <div className="farm-animals">
              {cfg.animals.map((a, i) => (
                <span key={i} className="farm-animal" style={{ animationDelay: `${i * 0.6}s` }}>{a}</span>
              ))}
            </div>
            <div className="farm-extras">
              {cfg.extras.map((e, i) => (
                <span key={i} className="farm-extra" style={{ animationDelay: `${i * 0.3}s` }}>{e}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Fence */}
        {tier >= 2 && (
          <div className="farm-fence">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="fence-post" />
            ))}
          </div>
        )}

        {/* Health change feedback */}
        {showPositive && (
          <div className="farm-feedback positive">+{lastFarmChange} ✨</div>
        )}
        {showNegative && (
          <div className="farm-feedback negative">{lastFarmChange} 💔</div>
        )}

        {/* Tier label */}
        <div className={`farm-tier-badge ${cfg.labelClass}`}>
          {tier === 1 ? '💀' : tier === 2 ? '😟' : tier === 3 ? '😊' : '🌟'} {cfg.label}
        </div>
      </div>

      <FarmHealthBar health={farmHealth} />

      {isKidMode && (
        <div className="farm-tip">
          {tier === 1 ? '😢 Your farm needs help! Save your coins!' :
           tier === 2 ? '🌱 Getting better! Keep saving!' :
           tier === 3 ? '😊 Great job! Your farm loves your choices!' :
           '🌟 Amazing! Your farm is super happy!'}
        </div>
      )}
    </div>
  );
}

export default Farm;
