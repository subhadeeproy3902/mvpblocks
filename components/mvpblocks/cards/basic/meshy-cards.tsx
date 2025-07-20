export default function MeshyCards() {
  return (
    <div className="mx-auto my-8 grid w-full max-w-7xl grid-cols-2 gap-6 p-4 lg:grid-cols-4">
      <div
        className="scale-in group visible cursor-pointer"
        style={{ transform: 'translateY(0px) scale(1)' }}
      >
        <div
          className="relative transform overflow-hidden rounded-2xl p-6 shadow-lg transition-all duration-300 group-hover:scale-105 hover:shadow-xl"
          style={{
            background:
              'url(https://images.unsplash.com/photo-1635776062360-af423602aff3?w=800&amp;q=80)',
            backgroundSize: 'cover',
          }}
        >
          <div className="relative">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                data-lucide="code"
                className="lucide lucide-code h-6 w-6 text-white"
              >
                <path d="m16 18 6-6-6-6"></path>
                <path d="m8 6-6 6 6 6"></path>
              </svg>
            </div>
            <h3 className="mb-2 font-sans text-lg font-medium text-white">
              Code Assistant
            </h3>
            <p className="mb-4 font-sans text-sm text-white/80">
              Generate, optimize, and debug code across 50+ languages
            </p>
            <div className="flex items-center text-white/60">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                data-lucide="trending-up"
                className="lucide lucide-trending-up mr-1 h-4 w-4"
              >
                <path d="M16 7h6v6"></path>
                <path d="m22 7-8.5 8.5-5-5L2 17"></path>
              </svg>
              <span className="font-sans text-xs">95% accuracy rate</span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="scale-in group visible cursor-pointer"
        style={{ transform: 'transform: translateY(0px) scale(1)' }}
      >
        <div
          className="relative transform overflow-hidden rounded-2xl p-6 shadow-lg transition-all duration-300 group-hover:scale-105 hover:shadow-xl"
          style={{
            background:
              'url(https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?w=800&amp;q=80)',
            backgroundSize: 'cover',
          }}
        >
          <div className="relative">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                data-lucide="pen-tool"
                className="lucide lucide-pen-tool h-6 w-6 text-white"
              >
                <path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path>
                <path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path>
                <path d="m2.3 2.3 7.286 7.286"></path>
                <circle cx="11" cy="11" r="2"></circle>
              </svg>
            </div>
            <h3 className="mb-2 font-sans text-lg font-medium text-white">
              Content Creator
            </h3>
            <p className="mb-4 font-sans text-sm text-white/80">
              Write, edit, and optimize content with AI precision
            </p>
            <div className="flex items-center text-white/60">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                data-lucide="sparkles"
                className="lucide lucide-sparkles mr-1 h-4 w-4"
              >
                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                <path d="M20 3v4"></path>
                <path d="M22 5h-4"></path>
                <path d="M4 17v2"></path>
                <path d="M5 18H3"></path>
              </svg>
              <span className="font-sans text-xs">Human-like quality</span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="scale-in group visible cursor-pointer"
        style={{ transform: 'transform: translateY(0px) scale(1)' }}
      >
        <div
          className="relative transform overflow-hidden rounded-2xl bg-gradient-to-br from-green-600 to-green-800 p-6 shadow-lg transition-all duration-300 group-hover:scale-105 hover:shadow-xl"
          style={{
            background:
              'url(https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?w=800&amp;q=80)',
            backgroundSize: 'cover',
          }}
        >
          <div className="relative">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                data-lucide="bar-chart"
                className="lucide lucide-bar-chart h-6 w-6 text-white"
              >
                <line x1="12" x2="12" y1="20" y2="10"></line>
                <line x1="18" x2="18" y1="20" y2="4"></line>
                <line x1="6" x2="6" y1="20" y2="16"></line>
              </svg>
            </div>
            <h3 className="mb-2 font-sans text-lg font-medium text-white">
              Data Analyst
            </h3>
            <p className="mb-4 font-sans text-sm text-white/80">
              Extract insights from complex datasets instantly
            </p>
            <div className="flex items-center text-white/60">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                data-lucide="eye"
                className="lucide lucide-eye mr-1 h-4 w-4"
              >
                <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              <span className="font-sans text-xs">Real-time insights</span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="scale-in group visible cursor-pointer"
        style={{ transform: 'transform: translateY(0px) scale(1)' }}
      >
        <div
          className="relative transform overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-600 to-cyan-800 p-6 shadow-lg transition-all duration-300 group-hover:scale-105 hover:shadow-xl"
          style={{
            background:
              'url(https://images.unsplash.com/photo-1635776063328-153b13e3c245?w=800&amp;q=80)',
            backgroundSize: 'cover',
          }}
        >
          <div className="relative">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                data-lucide="workflow"
                className="lucide lucide-workflow h-6 w-6 text-white"
              >
                <rect width="8" height="8" x="3" y="3" rx="2"></rect>
                <path d="M7 11v4a2 2 0 0 0 2 2h4"></path>
                <rect width="8" height="8" x="13" y="13" rx="2"></rect>
              </svg>
            </div>
            <h3 className="mb-2 font-sans text-lg font-medium text-white">
              Workflow Automation
            </h3>
            <p className="mb-4 font-sans text-sm text-white/80">
              Automate repetitive tasks and processes
            </p>
            <div className="flex items-center text-white/60">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                data-lucide="clock"
                className="lucide lucide-clock mr-1 h-4 w-4"
              >
                <path d="M12 6v6l4 2"></path>
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
              <span className="font-sans text-xs">Save 40+ hours/week</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
