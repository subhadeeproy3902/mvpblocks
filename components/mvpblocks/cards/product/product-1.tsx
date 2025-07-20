'use client';

import React, { useEffect } from 'react';

const LearnAndGrowCard: React.FC = () => {
  useEffect(() => {
    const phoneGradient = document.getElementById('glowingGradient');
    let angle = 0;
    let animationFrameId: number;

    const animateGradients = () => {
      angle = (angle + 1) % 360;
      const x1 = 50 + 45 * Math.cos((angle * Math.PI) / 180);
      const y1 = 50 + 45 * Math.sin((angle * Math.PI) / 180);
      const x2 = 50 + 45 * Math.cos(((angle + 180) * Math.PI) / 180);
      const y2 = 50 + 45 * Math.sin(((angle + 180) * Math.PI) / 180);

      if (phoneGradient) {
        phoneGradient.setAttribute('x1', `${x1}%`);
        phoneGradient.setAttribute('y1', `${y1}%`);
        phoneGradient.setAttribute('x2', `${x2}%`);
        phoneGradient.setAttribute('y2', `${y2}%`);
      }

      animationFrameId = requestAnimationFrame(animateGradients);
    };

    animateGradients();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div className="card-container">
        <div className="flex w-[296px] max-w-[320px] min-w-[230px] flex-col overflow-hidden rounded-[20px] border border-white/10 bg-[#1a1b22] shadow-xl shadow-black/30">
          <div className="relative flex h-[180px] w-full items-center justify-center overflow-hidden bg-[#1E2130]">
            <div className="relative w-[180px]">
              {/* Phone body */}
              <div className="phone-body absolute top-[-70px] left-0 h-[320px] w-[180px] rounded-[28px] border border-white/20 bg-gradient-to-br from-white/15 to-white/5"></div>

              {/* Screen shape */}
              <div className="screen-shape absolute top-[-63px] left-[7px] h-[306px] w-[166px] rounded-[20px] border border-white/10 bg-gradient-to-b from-[#2A2D3A] to-[#1a1c20]">
                {/* Screen content */}
                <div className="screen-content h-full w-full overflow-hidden rounded-[18px] bg-gradient-to-br from-[#3B4058] to-[#1E2130]">
                  {/* Status bar */}
                  <div className="relative flex h-[26px] w-full items-center justify-between rounded-t-[18px] bg-black px-3">
                    <div className="absolute top-0 left-1/2 flex h-[18px] w-[40%] -translate-x-1/2 items-center justify-center space-x-1 rounded-b-[12px] bg-black">
                      <div className="h-[4px] w-[4px] rounded-full bg-gray-500"></div>
                      <div className="h-[4px] w-[4px] rounded-full bg-gray-300"></div>
                    </div>
                    <div className="z-10 ml-3 text-[10px] font-medium text-white">
                      9:41
                    </div>
                    <div className="z-10 mr-3 flex space-x-2">
                      <svg
                        className="h-3.5 w-3.5"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
                          fill="white"
                          fillOpacity="0.8"
                        />
                      </svg>
                      <svg
                        className="h-3.5 w-3.5"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"
                          fill="white"
                          fillOpacity="0.8"
                        />
                      </svg>
                      <svg
                        className="h-3.5 w-3.5"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M7 17h10V7H7v10zm2-8h6v6H9V9z"
                          fill="white"
                          fillOpacity="0.8"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="relative px-3 pt-2">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="text-[10px] font-semibold text-white">
                        Design Courses
                      </div>
                      <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-white/10">
                        <svg
                          className="h-2.5 w-2.5"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="relative grid grid-cols-2 gap-2">
                      <div className="h-[40px] rounded-md bg-white/10"></div>
                      <div className="h-[40px] rounded-md bg-white/10"></div>
                      <div className="h-[40px] rounded-md bg-white/10"></div>
                      <div className="h-[40px] rounded-md bg-white/10"></div>

                      {/* Play button positioned in the middle of the 4 rectangles with animated blobs */}
                      <div
                        className="play-button absolute z-20 flex h-[48px] w-[48px] items-center justify-center overflow-hidden rounded-[14px] border border-white/15 bg-[rgba(26,28,32,0.7)] shadow-lg backdrop-blur-md"
                        style={{
                          left: 'calc(50% - 24px)',
                          top: 'calc(50% - 24px)',
                        }}
                      >
                        {/* Animated blobs */}
                        <div className="blob blob-1"></div>
                        <div className="blob blob-2"></div>
                        <div className="blob blob-3"></div>

                        {/* Play icon */}
                        <div className="relative z-10 flex h-6 w-6 items-center justify-center">
                          <svg
                            className="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path d="M8 5v14l11-7L8 5z" fill="white" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone outline with animated stroke */}
              <svg
                className="absolute top-[-70px] left-0 z-30 h-[320px] w-[180px]"
                viewBox="0 0 180 320"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="glowingGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="rgba(77, 124, 254, 0)" />
                    <stop offset="30%" stopColor="rgba(77, 124, 254, 0.2)" />
                    <stop offset="45%" stopColor="rgba(77, 124, 254, 0.8)" />
                    <stop offset="50%" stopColor="rgba(77, 124, 254, 1)" />
                    <stop offset="55%" stopColor="rgba(77, 124, 254, 0.8)" />
                    <stop offset="70%" stopColor="rgba(77, 124, 254, 0.2)" />
                    <stop offset="100%" stopColor="rgba(77, 124, 254, 0)" />
                  </linearGradient>
                </defs>
                <path
                  className="phone-path"
                  fill="none"
                  stroke="url(#glowingGradient)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter="drop-shadow(0 0 3px rgba(77, 124, 254, 0.6))"
                  d="M 28,1 H 152 C 166.9,1 179,13.1 179,28 V 292 C 179,306.9 166.9,319 152,319 H 28 C 13.1,319 1,306.9 1,292 V 28 C 1,13.1 13.1,1 28,1 Z"
                />
              </svg>
            </div>

            <div className="absolute right-0 bottom-0 left-0 h-[60px] bg-gradient-to-t from-[#1a1b22] to-transparent"></div>
          </div>

          <div className="flex flex-col items-center space-y-5 border-t border-white/5 bg-[#1a1b22] px-5 pt-5 pb-6">
            <div className="card-text flex flex-col items-center space-y-2">
              <h3 className="text-center text-lg font-semibold text-white">
                Learn and Grow
              </h3>
              <p className="text-center text-sm leading-snug text-white opacity-70">
                Access guides and resources to enhance your design skills and
                advance your career
              </p>
            </div>

            <div className="card-button w-full">
              <button className="flex w-full items-center justify-center rounded-[14px] bg-gradient-to-r from-[#4D7CFE] to-[#3361D8] py-3 shadow-lg shadow-blue-900/20 transition-all duration-300 hover:from-[#5A89FF] hover:to-[#3D6BE0]">
                <span className="text-sm font-medium text-white">
                  Explore Resources
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .card-container {
          opacity: 0;
          transform: scale(0.95);
          animation: fadeInScale 0.8s ease-out forwards;
        }
        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes tracePath {
          0% {
            stroke-dashoffset: 1000;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
        .phone-body {
          animation: slideUp 0.8s ease-out 0.3s forwards;
          opacity: 0;
          transform: translateY(100%);
        }
        .screen-shape {
          animation: slideUp 0.8s ease-out 0.5s forwards;
          opacity: 0;
          transform: translateY(100%);
        }
        .screen-content {
          animation: slideUp 0.8s ease-out 0.7s forwards;
          opacity: 0;
          transform: translateY(100%);
        }
        .play-button {
          animation: slideUp 0.8s ease-out 0.9s forwards;
          opacity: 0;
          transform: translateY(100%);
        }
        .card-text {
          animation: slideUp 0.6s ease-out 1s forwards;
          opacity: 0;
          transform: translateY(20px);
        }
        .card-button {
          animation: slideUp 0.6s ease-out 1.2s forwards;
          opacity: 0;
          transform: translateY(20px);
        }
        .phone-path {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: tracePath 4s linear 1.1s infinite;
        }
        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(10px);
          opacity: 0.6;
          mix-blend-mode: screen;
        }
        .blob-1 {
          width: 60%;
          height: 60%;
          background: #7b5ee0;
          animation: blob1 15s ease-in-out infinite alternate;
        }
        .blob-2 {
          width: 45%;
          height: 45%;
          background: #4d7cfe;
          animation: blob2 18s ease-in-out infinite alternate;
        }
        .blob-3 {
          width: 40%;
          height: 40%;
          background: #9364f7;
          animation: blob3 20s ease-in-out infinite alternate;
        }
        @keyframes blob1 {
          0%,
          100% {
            transform: translate(-20%, -20%);
          }
          25% {
            transform: translate(10%, 15%);
          }
          50% {
            transform: translate(20%, -10%);
          }
          75% {
            transform: translate(-10%, 20%);
          }
        }
        @keyframes blob2 {
          0%,
          100% {
            transform: translate(20%, 20%);
          }
          25% {
            transform: translate(-15%, 10%);
          }
          50% {
            transform: translate(-20%, -15%);
          }
          75% {
            transform: translate(15%, -20%);
          }
        }
        @keyframes blob3 {
          0%,
          100% {
            transform: translate(0%, 0%);
          }
          25% {
            transform: translate(-20%, -15%);
          }
          50% {
            transform: translate(15%, 20%);
          }
          75% {
            transform: translate(20%, -20%);
          }
        }
      `}</style>
    </>
  );
};

export default LearnAndGrowCard;
