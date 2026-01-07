'use client';
export default function BallBouncingLoader() {
  return (
    <div className="relative h-[100px] w-[75px]">
      {/* Bars */}
      <div className="animate-barUp1 absolute bottom-0 left-0 h-1/2 w-[10px] origin-bottom bg-red-500 shadow-[1px_1px_0_rgba(0,0,0,0.2)]"></div>
      <div className="animate-barUp2 absolute bottom-0 left-[15px] h-1/2 w-[10px] origin-bottom bg-red-500 shadow-[1px_1px_0_rgba(0,0,0,0.2)]"></div>
      <div className="animate-barUp3 absolute bottom-0 left-[30px] h-1/2 w-[10px] origin-bottom bg-red-500 shadow-[1px_1px_0_rgba(0,0,0,0.2)]"></div>
      <div className="animate-barUp4 absolute bottom-0 left-[45px] h-1/2 w-[10px] origin-bottom bg-red-500 shadow-[1px_1px_0_rgba(0,0,0,0.2)]"></div>
      <div className="animate-barUp5 absolute bottom-0 left-[60px] h-1/2 w-[10px] origin-bottom bg-red-500 shadow-[1px_1px_0_rgba(0,0,0,0.2)]"></div>

      {/* Ball */}
      <div className="animate-ball absolute bottom-[10px] left-0 h-[10px] w-[10px] rounded-full bg-[#2C8FFF]"></div>

      <style jsx>{`
        @keyframes barUp1 {
          0%,
          40%,
          100% {
            transform: scaleY(0.2);
          }
          50%,
          90% {
            transform: scaleY(1);
          }
        }

        @keyframes barUp2 {
          0%,
          40%,
          100% {
            transform: scaleY(0.4);
          }
          50%,
          90% {
            transform: scaleY(0.8);
          }
        }

        @keyframes barUp3 {
          0%,
          100% {
            transform: scaleY(0.6);
          }
        }

        @keyframes barUp4 {
          0%,
          40%,
          100% {
            transform: scaleY(0.8);
          }
          50%,
          90% {
            transform: scaleY(0.4);
          }
        }

        @keyframes barUp5 {
          0%,
          40%,
          100% {
            transform: scaleY(1);
          }
          50%,
          90% {
            transform: scaleY(0.2);
          }
        }

        @keyframes ball {
          0% {
            transform: translate(0, 0);
          }
          5% {
            transform: translate(8px, -14px);
          }
          10% {
            transform: translate(15px, -10px);
          }
          17% {
            transform: translate(23px, -24px);
          }
          20% {
            transform: translate(30px, -20px);
          }
          27% {
            transform: translate(38px, -34px);
          }
          30% {
            transform: translate(45px, -30px);
          }
          37% {
            transform: translate(53px, -44px);
          }
          40% {
            transform: translate(60px, -40px);
          }
          50% {
            transform: translate(60px, 0);
          }
          57% {
            transform: translate(53px, -14px);
          }
          60% {
            transform: translate(45px, -10px);
          }
          67% {
            transform: translate(37px, -24px);
          }
          70% {
            transform: translate(30px, -20px);
          }
          77% {
            transform: translate(22px, -34px);
          }
          80% {
            transform: translate(15px, -30px);
          }
          87% {
            transform: translate(7px, -44px);
          }
          90% {
            transform: translate(0, -40px);
          }
          100% {
            transform: translate(0, 0);
          }
        }

        .animate-barUp1 {
          animation: barUp1 4s infinite;
          transform-origin: bottom;
        }
        .animate-barUp2 {
          animation: barUp2 4s infinite;
          transform-origin: bottom;
        }
        .animate-barUp3 {
          animation: barUp3 4s infinite;
          transform-origin: bottom;
        }
        .animate-barUp4 {
          animation: barUp4 4s infinite;
          transform-origin: bottom;
        }
        .animate-barUp5 {
          animation: barUp5 4s infinite;
          transform-origin: bottom;
        }
        .animate-ball {
          animation: ball 4s infinite;
        }
      `}</style>
    </div>
  );
}
