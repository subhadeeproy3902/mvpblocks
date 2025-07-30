'use client';

export default function GlowingCard() {
  return (
    <>
      <div className="card">
        I glow :)
        <div className="glow" />
      </div>

      <style jsx>{`
        @property --a {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }

        @keyframes a {
          to {
            --a: 1turn;
          }
        }

        .card {
          position: relative;
          overflow: hidden;
          width: min(12.5em, 80vmin);
          aspect-ratio: 1;
          border-radius: 0.5em;

          display: grid;
          place-self: center;
          place-content: center;
          padding: 0.5em;
          color: #ededed;
          font: clamp(1em, 2vw + 2vh, 2em) sans-serif;
          text-align: center;
          text-transform: uppercase;
          text-wrap: balance;
        }

        .glow {
          content: '';
          position: absolute;
          z-index: -1;
          inset: -1em;
          border: solid 1.25em;
          border-image: conic-gradient(
              from var(--a),
              #669900,
              #99cc33,
              #ccee66,
              #006699,
              #3399cc,
              #990066,
              #cc3399,
              #ff6600,
              #ff9900,
              #ffcc00,
              #669900
            )
            1;
          filter: blur(0.75em);
          animation: a 4s linear infinite;
          pointer-events: none;
        }
      `}</style>
    </>
  );
}
