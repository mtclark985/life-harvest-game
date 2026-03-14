import React, { useState } from 'react';
import { wheelSegments } from '../data/gameData';
import './SpinWheel.css';

const NUM_SEG = wheelSegments.length; // 8
const SEG_ANGLE = 360 / NUM_SEG;      // 45°
const SPIN_DURATION = 3500;

function SpinWheel({ onStop }) {
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [landedIndex, setLandedIndex] = useState(null);

  const spin = () => {
    if (spinning) return;
    setSpinning(true);
    setLandedIndex(null);

    const targetIndex = Math.floor(Math.random() * NUM_SEG);

    // Calculate rotation so that center of targetIndex ends up at top (pointer)
    // Center of segment i is at angle: i * SEG_ANGLE + SEG_ANGLE/2 from 12 o'clock (clockwise)
    // To bring it to top: rotate wheel clockwise by that angle (+ extra full rotations)
    const targetAngle = targetIndex * SEG_ANGLE + SEG_ANGLE / 2;
    const currentNorm = rotation % 360;
    const angleDiff = (targetAngle - currentNorm + 360) % 360;
    const extraTurns = 4 + Math.floor(Math.random() * 3); // 4-6 full spins
    const totalRotation = rotation + angleDiff + extraTurns * 360;

    setRotation(totalRotation);

    setTimeout(() => {
      setSpinning(false);
      setLandedIndex(targetIndex);
      setTimeout(() => onStop(targetIndex), 1000);
    }, SPIN_DURATION);
  };

  // Build SVG wheel paths
  const R = 130;
  const segments = wheelSegments.map((seg, i) => {
    const startRad = (i * SEG_ANGLE - 90) * (Math.PI / 180);
    const endRad   = ((i + 1) * SEG_ANGLE - 90) * (Math.PI / 180);
    const x1 = R * Math.cos(startRad);
    const y1 = R * Math.sin(startRad);
    const x2 = R * Math.cos(endRad);
    const y2 = R * Math.sin(endRad);
    const midRad = ((i + 0.5) * SEG_ANGLE - 90) * (Math.PI / 180);
    const lx = (R * 0.65) * Math.cos(midRad);
    const ly = (R * 0.65) * Math.sin(midRad);
    const textRot = (i + 0.5) * SEG_ANGLE; // degrees clockwise from top

    return (
      <g key={i}>
        <path
          d={`M 0 0 L ${x1.toFixed(2)} ${y1.toFixed(2)} A ${R} ${R} 0 0 1 ${x2.toFixed(2)} ${y2.toFixed(2)} Z`}
          fill={seg.color}
          stroke="white"
          strokeWidth="2"
        />
        {/* Separator line glow */}
        <line
          x1="0" y1="0"
          x2={x1.toFixed(2)} y2={y1.toFixed(2)}
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="1.5"
        />
        {/* Emoji label */}
        <text
          x={lx.toFixed(2)}
          y={ly.toFixed(2)}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="22"
          transform={`rotate(${textRot}, ${lx.toFixed(2)}, ${ly.toFixed(2)})`}
        >
          {seg.emoji}
        </text>
      </g>
    );
  });

  const landed = landedIndex !== null ? wheelSegments[landedIndex] : null;

  return (
    <div className="spin-wheel-wrap">
      <h2 className="wheel-title">Spin the Wheel!</h2>
      <p className="wheel-subtitle">What will life bring you this turn?</p>

      <div className="wheel-container">
        {/* Pointer */}
        <div className="wheel-pointer">▼</div>

        {/* Wheel */}
        <div
          className="wheel-svg-wrap"
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: spinning
              ? `transform ${SPIN_DURATION}ms cubic-bezier(0.15, 0.85, 0.35, 1)`
              : 'none',
          }}
        >
          <svg
            width="280"
            height="280"
            viewBox="-140 -140 280 280"
            className="wheel-svg"
          >
            {segments}
            {/* Outer ring */}
            <circle cx="0" cy="0" r={R} fill="none" stroke="white" strokeWidth="4" />
            {/* Center hub */}
            <circle cx="0" cy="0" r="22" fill="white" stroke="#ddd" strokeWidth="3" />
            <text x="0" y="1" textAnchor="middle" dominantBaseline="middle" fontSize="14">🎡</text>
          </svg>
        </div>

        {/* Outer ring labels (fixed, don't rotate) */}
        {wheelSegments.map((seg, i) => {
          const midRad = ((i + 0.5) * SEG_ANGLE - 90) * (Math.PI / 180);
          const lr = 155;
          const lx = lr * Math.cos(midRad);
          const ly = lr * Math.sin(midRad);
          return (
            <div
              key={i}
              className={`wheel-outer-label ${landedIndex === i ? 'active' : ''}`}
              style={{
                left: `calc(50% + ${lx}px)`,
                top: `calc(50% + ${ly}px)`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              {seg.label}
            </div>
          );
        })}
      </div>

      {/* Action area */}
      {!spinning && landedIndex === null && (
        <button className="wheel-spin-btn" onClick={spin}>
          SPIN! 🎰
        </button>
      )}

      {spinning && (
        <div className="wheel-status spinning-msg">
          <span className="spin-dots">Spinning</span>
          <span className="spin-ellipsis">...</span>
        </div>
      )}

      {landed && !spinning && (
        <div className="wheel-landed" style={{ background: landed.color }}>
          <span className="landed-emoji">{landed.emoji}</span>
          <span className="landed-text">You landed on <strong>{landed.label}</strong>!</span>
        </div>
      )}
    </div>
  );
}

export default SpinWheel;
