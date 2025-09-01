import { ImageResponse } from 'next/og';
import type { ReactElement, ReactNode } from 'react';
import type { ImageResponseOptions } from 'next/dist/compiled/@vercel/og/types';

interface GenerateProps {
  title: ReactNode;
  description?: ReactNode;
}

export function generateOGImage(
  options: GenerateProps & ImageResponseOptions,
): ImageResponse {
  const { description, title, ...rest } = options;

  return new ImageResponse(
    generate({
      description,
      title,
    }),
    {
      height: 630,
      width: 1200,
      ...rest,
    },
  );
}

export function generate({ ...props }: GenerateProps): ReactElement {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0A0A0A',
        backgroundImage:
          'radial-gradient(circle at 15% 15%, rgba(244, 63, 94, 0.2) 0%, transparent 35%), ' +
          'radial-gradient(circle at 85% 85%, rgba(244, 63, 94, 0.2) 0%, transparent 35%), ' +
          'radial-gradient(circle at 50% 50%, rgba(225, 29, 72, 0.15) 0%, transparent 50%), ' +
          'radial-gradient(circle at 80% 20%, rgba(253, 164, 175, 0.1) 0%, transparent 40%)',
        padding: '40px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '5%',
          left: '5%',
          width: '400px',
          height: '400px',
          background:
            'radial-gradient(circle, rgba(244, 63, 94, 0.25) 0%, transparent 70%)',
          filter: 'blur(60px)',
          borderRadius: '100%',
          opacity: 0.8,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '10%',
          width: '350px',
          height: '350px',
          background:
            'radial-gradient(circle, rgba(225, 29, 72, 0.2) 0%, transparent 70%)',
          filter: 'blur(50px)',
          borderRadius: '100%',
          opacity: 0.8,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '40%',
          right: '20%',
          width: '300px',
          height: '300px',
          background:
            'radial-gradient(circle, rgba(253, 164, 175, 0.15) 0%, transparent 70%)',
          filter: 'blur(45px)',
          borderRadius: '100%',
          opacity: 0.7,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '30%',
          left: '15%',
          width: '250px',
          height: '250px',
          background:
            'radial-gradient(circle, rgba(251, 113, 133, 0.15) 0%, transparent 70%)',
          filter: 'blur(40px)',
          borderRadius: '100%',
          opacity: 0.7,
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
              linear-gradient(rgba(244, 63, 94, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(244, 63, 94, 0.03) 1px, transparent 1px)
            `,
          backgroundSize: '20px 20px',
          opacity: 0.5,
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '20%',
          width: '4px',
          height: '4px',
          borderRadius: '50%',
          backgroundColor: 'rgba(244, 63, 94, 0.8)',
          boxShadow: '0 0 8px rgba(244, 63, 94, 0.8)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '70%',
          left: '80%',
          width: '4px',
          height: '4px',
          borderRadius: '50%',
          backgroundColor: 'rgba(244, 63, 94, 0.8)',
          boxShadow: '0 0 8px rgba(244, 63, 94, 0.8)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '60%',
          width: '3px',
          height: '3px',
          borderRadius: '50%',
          backgroundColor: 'rgba(244, 63, 94, 0.8)',
          boxShadow: '0 0 8px rgba(244, 63, 94, 0.8)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '80%',
          left: '30%',
          width: '3px',
          height: '3px',
          borderRadius: '50%',
          backgroundColor: 'rgba(244, 63, 94, 0.8)',
          boxShadow: '0 0 8px rgba(244, 63, 94, 0.8)',
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: '20px',
          left: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
        }}
      >
        <svg
          version="1.0"
          width="64"
          height="64"
          viewBox="0 0 300.000000 300.000000"
        >
          <g
            transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
            fill="#e60a64"
            stroke="none"
          >
            <path d="M1401 2791 c-135 -114 -246 -212 -248 -217 -1 -5 31 -49 72 -99 l75 -90 -248 -7 c-232 -7 -423 2 -461 22 -7 4 -34 45 -60 91 -42 76 -49 84 -76 84 l-30 0 3 -235 c1 -129 5 -288 8 -352 l6 -117 114 -3 113 -3 -154 -203 c-85 -112 -186 -238 -226 -279 l-72 -76 -98 17 c-54 9 -103 16 -109 16 -5 0 -10 -15 -10 -34 0 -37 -21 -20 342 -294 103 -78 191 -142 195 -142 5 0 33 34 63 76 91 125 77 140 150 -159 35 -144 68 -300 73 -346 l11 -85 -83 -77 c-77 -71 -82 -78 -69 -98 7 -11 19 -21 27 -21 12 0 480 120 609 157 28 8 52 19 52 24 0 6 -11 56 -25 111 -14 55 -24 102 -22 104 7 7 469 -215 554 -267 l88 -54 6 -97 c8 -118 11 -128 44 -128 22 0 30 8 47 48 11 26 42 97 69 157 26 61 80 182 119 270 l70 160 -105 50 c-58 28 -105 52 -105 55 0 10 515 258 582 281 l67 22 88 -61 c88 -60 89 -60 112 -42 l24 17 -123 239 c-67 132 -140 272 -162 311 l-39 73 -101 -51 c-55 -28 -102 -49 -104 -46 -2 2 19 113 46 248 46 221 100 420 120 443 5 4 53 20 107 35 96 27 98 28 101 59 2 18 0 32 -5 32 -4 1 -159 32 -343 69 -232 47 -337 65 -341 57 -4 -6 -14 -54 -24 -106 -10 -52 -21 -98 -24 -102 -10 -12 -336 388 -391 479 l-48 82 39 101 c21 55 39 103 39 105 0 3 -19 5 -42 4 -41 -1 -55 -11 -287 -208z m191 -779 l50 -83 -37 -100 -38 -100 21 -21 21 -21 68 55 c37 31 138 114 223 186 85 71 156 129 157 128 6 -5 -53 -246 -78 -317 l-31 -87 -102 -30 c-97 -28 -101 -30 -104 -59 l-3 -30 238 -47 c131 -26 260 -52 288 -58 l49 -11 -114 -57 c-63 -31 -152 -70 -198 -85 l-83 -29 -88 62 c-83 57 -90 60 -110 46 -11 -8 -21 -19 -21 -23 0 -4 52 -106 116 -227 64 -120 125 -236 135 -256 l19 -37 -42 18 c-127 56 -168 76 -247 123 -47 28 -87 53 -89 54 -2 1 -7 50 -11 108 -4 58 -9 108 -12 110 -2 2 -16 6 -30 9 -24 6 -27 1 -76 -111 -27 -64 -79 -183 -114 -264 -35 -83 -66 -142 -70 -135 -13 24 -68 273 -74 337 l-7 66 69 59 c37 32 74 64 81 71 11 9 12 16 2 35 -7 13 -14 25 -15 27 -1 2 -125 -29 -276 -67 -150 -39 -274 -69 -275 -68 -7 7 143 191 202 248 l69 67 80 -14 c44 -7 92 -16 106 -18 21 -4 29 0 38 22 15 31 41 8 -250 230 l-206 157 101 3 c55 2 151 -2 213 -9 l112 -12 42 -79 c59 -110 61 -112 93 -104 l27 7 -7 292 -7 292 72 -85 c40 -47 95 -122 123 -168z" />
          </g>
        </svg>

        <div
          style={{
            fontSize: 48,
            fontWeight: 'bold',
            color: 'white',
            textShadow: '0 0 10px rgba(244, 63, 94, 0.3)',
          }}
        >
          Mvpblocks
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          width: '180px',
          height: '180px',
          opacity: 0.1,
          display: 'flex',
        }}
      >
        <svg
          width="180"
          height="180"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10,10 L90,10 L90,90 L10,90 Z"
            stroke="rgba(244, 63, 94, 0.8)"
            strokeWidth="0.5"
            fill="none"
          />
          <path
            d="M30,10 L30,90"
            stroke="rgba(244, 63, 94, 0.8)"
            strokeWidth="0.5"
          />
          <path
            d="M50,10 L50,90"
            stroke="rgba(244, 63, 94, 0.8)"
            strokeWidth="0.5"
          />
          <path
            d="M70,10 L70,90"
            stroke="rgba(244, 63, 94, 0.8)"
            strokeWidth="0.5"
          />
          <path
            d="M10,30 L90,30"
            stroke="rgba(244, 63, 94, 0.8)"
            strokeWidth="0.5"
          />
          <path
            d="M10,50 L90,50"
            stroke="rgba(244, 63, 94, 0.8)"
            strokeWidth="0.5"
          />
          <path
            d="M10,70 L90,70"
            stroke="rgba(244, 63, 94, 0.8)"
            strokeWidth="0.5"
          />
          <circle cx="30" cy="30" r="3" fill="rgba(244, 63, 94, 0.8)" />
          <circle cx="50" cy="50" r="3" fill="rgba(244, 63, 94, 0.8)" />
          <circle cx="70" cy="70" r="3" fill="rgba(244, 63, 94, 0.8)" />
          <circle cx="30" cy="70" r="3" fill="rgba(244, 63, 94, 0.8)" />
          <circle cx="70" cy="30" r="3" fill="rgba(244, 63, 94, 0.8)" />
        </svg>
      </div>

      <div
        style={{
          fontSize: 80,
          fontWeight: 'bold',
          background:
            'linear-gradient(to right, rgba(255, 255, 255, 1), rgba(244, 63, 94, 0.8))',
          backgroundClip: 'text',
          color: 'transparent',
          marginBottom: '24px',
          textShadow: '0 0 20px rgba(244, 63, 94, 0.3)',
          textAlign: 'center',
          width: '100%',
          position: 'relative',
          zIndex: 10,
          margin: '3rem auto',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {props.title}
      </div>

      <div
        style={{
          fontSize: 36,
          color: 'rgba(255, 255, 255, 0.85)',
          marginTop: '10px',
          textAlign: 'center',
          maxWidth: '900px',
          lineHeight: 1.4,
          position: 'relative',
          zIndex: 10,
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
        }}
      >
        {props.description}
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: '30px',
          left: '30px',
          opacity: 0.2,
          display: 'flex',
        }}
      >
        <svg
          width="200"
          height="200"
          viewBox="0 0 180 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50,10 L85,30 L85,70 L50,90 L15,70 L15,30 Z"
            stroke="rgba(244, 63, 94, 0.8)"
            strokeWidth="0.5"
            fill="none"
          />
          <path
            d="M50,30 L67.5,40 L67.5,60 L50,70 L32.5,60 L32.5,40 Z"
            stroke="rgba(244, 63, 94, 0.8)"
            strokeWidth="0.5"
            fill="none"
          />
          <circle cx="50" cy="10" r="2" fill="rgba(244, 63, 94, 0.8)" />
          <circle cx="85" cy="30" r="2" fill="rgba(244, 63, 94, 0.8)" />
          <circle cx="85" cy="70" r="2" fill="rgba(244, 63, 94, 0.8)" />
          <circle cx="50" cy="90" r="2" fill="rgba(244, 63, 94, 0.8)" />
          <circle cx="15" cy="70" r="2" fill="rgba(244, 63, 94, 0.8)" />
          <circle cx="15" cy="30" r="2" fill="rgba(244, 63, 94, 0.8)" />
        </svg>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
          fontSize: '32px',
          color: 'rgba(244, 63, 94, 0.4)',
        }}
      >
        @mvp_Subha
      </div>

      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: 0,
          width: '100%',
          height: '1px',
          background:
            'linear-gradient(90deg, transparent, rgba(244, 63, 94, 0.8), transparent)',
          opacity: 0.3,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '60%',
          left: 0,
          width: '100%',
          height: '1px',
          background:
            'linear-gradient(90deg, transparent, rgba(244, 63, 94, 0.8), transparent)',
          opacity: 0.3,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '40%',
          width: '1px',
          height: '100%',
          background:
            'linear-gradient(180deg, transparent, rgba(244, 63, 94, 0.8), transparent)',
          opacity: 0.3,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '70%',
          width: '1px',
          height: '100%',
          background:
            'linear-gradient(180deg, transparent, rgba(244, 63, 94, 0.8), transparent)',
          opacity: 0.3,
        }}
      />
    </div>
  );
}
