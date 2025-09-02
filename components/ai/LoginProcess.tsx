import { useState } from "react";
import { Steps } from "./Steps";
import { Login } from "./LoginStep";
import { Processing } from "./Processing";
import { Security } from "./Security";
import Complete from "./Success";

export default function LoginContainer({
  setLoggedIn,
  setShowModal,
  showModal = true,
}: {
  setLoggedIn: (loggedIn: boolean) => void;
  setShowModal: (show: boolean) => void;
  showModal?: boolean;
}) {
  const [currentStep, setCurrentStep] = useState(1);
  const [showCloseButton, setShowCloseButton] = useState(false);

  const handleSlackLogin = () => {
    setCurrentStep(2);
    // Simulate processing delay
    setTimeout(() => {
      setCurrentStep(3);
    }, 2000);
  };

  const handleContinue = () => {
    setCurrentStep(4);
    setShowCloseButton(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setLoggedIn(true);
  };

  return (
    <>
      {showModal && (
        <div className="absolute w-full z-50 h-screen flex items-center justify-center bg-black/80">
          <div className="relative rounded-xl before:absolute before:inset-[-1px] before:rounded-xl before:bg-[linear-gradient(to_bottom_right,_#525252,_transparent,_#262626)] before:z-[-1] max-w-2xl z-20 min-w-md">
            <div className="rounded-xl overflow-hidden bg-background shadow-xl">
              <div className="p-6 border-b">
                <div className="flex justify-between items-center">
                  <h2
                    className={`text-xl font-semibold text-foreground
              ${currentStep === 1 ? "mx-auto" : ""}
              `}
                  >
                    {currentStep === 1 && "Login with Slack"}
                    {currentStep === 3 && "Complete Your Account Setup"}
                    {currentStep === 4 && "Setup Complete"}
                  </h2>
                  {showCloseButton && (
                    <button
                      onClick={handleClose}
                      className="text-neutral-400 hover:text-foreground transition"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  )}
                </div>
              </div>

              {currentStep !== 1 && currentStep !== 2 && currentStep !== 4 && (
                <Steps currentStep={currentStep} />
              )}

              {currentStep === 1 && <Login onSlackLogin={handleSlackLogin} />}
              {currentStep === 2 && <Processing />}
              {currentStep === 3 && <Security onContinue={handleContinue} />}
              {currentStep === 4 && <Complete onClose={handleClose} />}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
