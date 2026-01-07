export function Steps({ currentStep }: { currentStep: number }) {
  return (
    <div className="px-6 pt-6">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex flex-col items-center">
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full ${currentStep >= 1 ? 'bg-emerald-500' : 'bg-secondary'}`}
          >
            {currentStep > 1 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              '1'
            )}
          </div>
          <span
            className={`text-xs ${currentStep >= 1 ? 'text-foreground' : 'text-neutral-500'} mt-2`}
          >
            Login
          </span>
        </div>

        <div className="bg-secondary mx-2 h-0.5 w-full">
          {currentStep > 1 && <div className="bg-primary h-0.5 w-full"></div>}
        </div>

        <div className="flex flex-col items-center">
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full ${currentStep >= 2 ? 'bg-primary' : 'bg-secondary'}`}
          >
            {currentStep > 2 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              '2'
            )}
          </div>
          <span
            className={`text-xs ${currentStep >= 2 ? 'text-foreground' : 'text-neutral-500'} mt-2`}
          >
            Processing
          </span>
        </div>

        <div className="bg-secondary mx-2 h-0.5 w-full">
          {currentStep > 2 && <div className="bg-primary h-0.5 w-full"></div>}
        </div>

        <div className="flex flex-col items-center">
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full ${currentStep >= 3 ? 'bg-primary' : 'bg-secondary'}`}
          >
            3
          </div>
          <span
            className={`text-xs ${currentStep >= 3 ? 'text-foreground' : 'text-neutral-500'} mt-2`}
          >
            Security
          </span>
        </div>

        <div className="bg-secondary mx-2 h-0.5 w-full">
          {currentStep > 3 && <div className="bg-primary h-0.5 w-full"></div>}
        </div>

        <div className="flex flex-col items-center">
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full ${currentStep >= 4 ? 'bg-primary' : 'bg-secondary'}`}
          >
            4
          </div>
          <span
            className={`text-xs ${currentStep >= 4 ? 'text-foreground' : 'text-neutral-500'} mt-2`}
          >
            Complete
          </span>
        </div>
      </div>
    </div>
  );
}
