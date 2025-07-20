'use client';

import { useState } from 'react';

export default function TechnicalPricing() {
  const [isAnnual, setIsAnnual] = useState(true);
  const prices = isAnnual ? ['$15', '$39', '$159'] : ['$19', '$49', '$199'];

  return (
    <>
      <style jsx global>{`
        body {
          margin: 0;
          background: #ffffff;
          font-family: 'Courier New', monospace;
        }
        .dimension-line {
          position: relative;
        }
        .dimension-line::before {
          content: '';
          position: absolute;
          background: #000;
          z-index: 1;
        }
        .dimension-h::before {
          height: 1px;
          width: 20px;
          top: 50%;
          left: -30px;
        }
        .dimension-v::before {
          width: 1px;
          height: 20px;
          left: 50%;
          top: -30px;
        }
        .dimension-bracket {
          position: relative;
        }
        .dimension-bracket::after {
          content: '';
          position: absolute;
          border: 1px solid #000;
          z-index: 1;
        }
        .bracket-top::after {
          top: -15px;
          left: 0;
          right: 0;
          height: 10px;
          border-bottom: none;
        }
        .bracket-left::after {
          left: -15px;
          top: 0;
          bottom: 0;
          width: 10px;
          border-right: none;
        }
        .tech-card {
          border: 2px solid #000;
          background: #fff;
          position: relative;
        }
        .tech-card::before {
          content: '';
          position: absolute;
          top: 10px;
          right: 10px;
          width: 8px;
          height: 8px;
          border: 1px solid #000;
          background: #fff;
        }
        .popular-card {
          border: 3px solid #000;
          background: #000;
          color: #fff;
        }
        .popular-card::before {
          background: #000;
          border-color: #fff;
        }
        .grid-bg {
          background-image:
            linear-gradient(to right, #e5e5e5 1px, transparent 1px),
            linear-gradient(to bottom, #e5e5e5 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>

      <div className="grid-bg relative flex min-h-screen w-full flex-col items-center justify-center px-4 py-8">
        <div className="dimension-line dimension-v mb-8 text-center">
          <div className="mb-4 inline-block border border-black px-4 py-2">
            <span className="text-xs tracking-wider">SPECIFICATION SHEET</span>
          </div>
          <h1 className="mb-3 text-4xl font-bold tracking-wider text-black">
            PRICING MATRIX
          </h1>
          <p className="mx-auto max-w-xl px-4 font-mono text-base text-black">
            TECHNICAL CONFIGURATIONS &amp; RESOURCE ALLOCATION
          </p>
        </div>

        <div className="dimension-line dimension-h mb-10 flex items-center justify-center gap-4">
          <span className="font-mono text-sm text-black">MONTHLY</span>
          <button
            type="button"
            aria-label="Toggle monthly / annual pricing"
            onClick={() => setIsAnnual((prev) => !prev)}
            className="relative inline-block h-6 w-12 cursor-pointer border-2 border-black bg-white focus:outline-none"
          >
            <span
              className="absolute top-0 h-6 w-6 border border-black bg-white transition-transform duration-300"
              style={{
                transform: isAnnual ? 'translateX(24px)' : 'translateX(0)',
              }}
            />
          </button>
          <span className="font-mono text-sm text-black">
            ANNUAL <span className="text-xs">[-20%]</span>
          </span>
        </div>

        <div className="dimension-bracket bracket-top grid w-full max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="tech-card dimension-line dimension-h flex flex-col p-6">
            <div className="mb-6 flex items-center">
              <div className="flex h-10 w-10 items-center justify-center border border-black bg-white">
                <i className="fas fa-rocket text-sm text-black" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold tracking-wider text-black">
                  STARTER
                </h3>
                <span className="font-mono text-xs">CONFIG-001</span>
              </div>
            </div>
            <div className="mb-6 border-b border-black pb-4">
              <div className="flex items-baseline">
                <span className="price font-mono text-4xl font-bold text-black">
                  {prices[0]}
                </span>
                <span className="ml-2 font-mono text-sm text-black">
                  /MONTH
                </span>
              </div>
              <p className="mt-1 font-mono text-sm text-black">
                INDIVIDUAL DEPLOYMENT
              </p>
            </div>
            <ul className="mb-8 flex-grow space-y-3 font-mono text-sm">
              <li className="flex items-center text-black">
                <span className="mr-3 w-3 text-xs">▪</span>1M TOKENS/MONTH
              </li>
              <li className="flex items-center text-black">
                <span className="mr-3 w-3 text-xs">▪</span>5 CUSTOM MODELS
              </li>
              <li className="flex items-center text-black">
                <span className="mr-3 w-3 text-xs">▪</span>BASIC API ACCESS
              </li>
              <li className="flex items-center text-black">
                <span className="mr-3 w-3 text-xs">▪</span>EMAIL SUPPORT
              </li>
            </ul>
            <button className="w-full border-2 border-black py-3 font-mono text-sm tracking-wider text-black transition-colors duration-300 hover:bg-black hover:text-white">
              INITIALIZE
            </button>
            <p className="mt-2 text-center font-mono text-xs text-black">
              NO PAYMENT REQUIRED
            </p>
          </div>

          <div className="popular-card dimension-line dimension-v relative flex transform flex-col p-6 lg:scale-105">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 border border-white bg-black px-4 py-1 font-mono text-xs tracking-wider text-white">
              RECOMMENDED
            </span>
            <div className="mb-6 flex items-center">
              <div className="flex h-10 w-10 items-center justify-center border border-white bg-black">
                <i className="fas fa-bolt text-sm text-white" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold tracking-wider text-white">
                  PROFESSIONAL
                </h3>
                <span className="font-mono text-xs text-gray-300">
                  CONFIG-002
                </span>
              </div>
            </div>
            <div className="mb-6 border-b border-white pb-4">
              <div className="flex items-baseline">
                <span className="price font-mono text-4xl font-bold text-white">
                  {prices[1]}
                </span>
                <span className="ml-2 font-mono text-sm text-white">
                  /MONTH
                </span>
              </div>
              <p className="mt-1 font-mono text-sm text-white">
                TEAM DEPLOYMENT
              </p>
            </div>
            <ul className="mb-8 flex-grow space-y-3 font-mono text-sm text-white">
              <li className="flex items-center">
                <span className="mr-3 w-3 text-xs">▪</span>10M TOKENS/MONTH
              </li>
              <li className="flex items-center">
                <span className="mr-3 w-3 text-xs">▪</span>20 CUSTOM MODELS
              </li>
              <li className="flex items-center">
                <span className="mr-3 w-3 text-xs">▪</span>ADVANCED API
              </li>
              <li className="flex items-center">
                <span className="mr-3 w-3 text-xs">▪</span>PRIORITY SUPPORT
              </li>
              <li className="flex items-center">
                <span className="mr-3 w-3 text-xs">▪</span>CUSTOM TRAINING
              </li>
            </ul>
            <button className="w-full border-2 border-white bg-white py-3 font-mono text-sm tracking-wider text-black transition-colors duration-300 hover:border-black hover:bg-black hover:text-white">
              DEPLOY
            </button>
            <p className="mt-2 text-center font-mono text-xs text-gray-300">
              14-DAY TRIAL PERIOD
            </p>
          </div>

          <div className="tech-card dimension-line dimension-h flex flex-col p-6">
            <div className="mb-6 flex items-center">
              <div className="flex h-10 w-10 items-center justify-center border border-black bg-white">
                <i className="fas fa-building text-sm text-black" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold tracking-wider text-black">
                  ENTERPRISE
                </h3>
                <span className="font-mono text-xs">CONFIG-003</span>
              </div>
            </div>
            <div className="mb-6 border-b border-black pb-4">
              <div className="flex items-baseline">
                <span className="price font-mono text-4xl font-bold text-black">
                  {prices[2]}
                </span>
                <span className="ml-2 font-mono text-sm text-black">
                  /MONTH
                </span>
              </div>
              <p className="mt-1 font-mono text-sm text-black">
                ENTERPRISE DEPLOYMENT
              </p>
            </div>
            <ul className="mb-8 flex-grow space-y-3 font-mono text-sm">
              <li className="flex items-center text-black">
                <span className="mr-3 w-3 text-xs">▪</span>UNLIMITED TOKENS
              </li>
              <li className="flex items-center text-black">
                <span className="mr-3 w-3 text-xs">▪</span>UNLIMITED MODELS
              </li>
              <li className="flex items-center text-black">
                <span className="mr-3 w-3 text-xs">▪</span>FULL API ECOSYSTEM
              </li>
              <li className="flex items-center text-black">
                <span className="mr-3 w-3 text-xs">▪</span>24/7 SUPPORT
              </li>
              <li className="flex items-center text-black">
                <span className="mr-3 w-3 text-xs">▪</span>DEDICATED RESOURCES
              </li>
            </ul>
            <button className="w-full border-2 border-black py-3 font-mono text-sm tracking-wider text-black transition-colors duration-300 hover:bg-black hover:text-white">
              CONTACT ENGINEERING
            </button>
            <p className="mt-2 text-center font-mono text-xs text-black">
              CUSTOM ARCHITECTURE
            </p>
          </div>
        </div>

        <div className="dimension-bracket bracket-left mt-12 max-w-4xl px-4 text-center">
          <div className="border border-black bg-white p-4">
            <p className="mb-4 font-mono text-sm text-black">
              ALL CONFIGURATIONS INCLUDE: 99.9% UPTIME SLA • ENTERPRISE SECURITY
              • COMMUNITY ACCESS
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="border border-black px-3 py-1 font-mono text-xs text-black">
                GDPR-COMPLIANT
              </span>
              <span className="border border-black px-3 py-1 font-mono text-xs text-black">
                SOC-2-CERTIFIED
              </span>
              <span className="border border-black px-3 py-1 font-mono text-xs text-black">
                HIPAA-READY
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
