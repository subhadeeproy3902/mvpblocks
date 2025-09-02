import React, { useEffect } from "react";
import { confetti } from "tsparticles-confetti";
import { Button } from "../ui/button";

type CompleteProps = {
  onClose: () => void;
};

const Complete: React.FC<CompleteProps> = ({ onClose }) => {
  const launchConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#f63b83", "#fa608c", "#fd93b8", "#FFFFFF", "#e60a64"],
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      launchConfetti();
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="px-6 pb-6">
      <div className="flex justify-center mb-6 mt-4">
        <img 
          src="/success.gif"
          alt="Success"
          className="w-56" />
      </div>

      <h3 className="text-lg font-medium text-white text-center mb-2">
        Account Setup Complete!
      </h3>
      <p className="text-neutral-400 text-center mb-6">
        Your account has been successfully configured and is ready to use.
      </p>

      <div className="flex flex-col space-y-3">
        <Button
          onClick={launchConfetti}
          className="w-full px-4 py-2 rounded-lg font-medium"
        >
          Celebrate Again
        </Button>
        <Button
          variant="secondary"
          onClick={onClose}
          className="w-full px-4 py-2 rounded-lg font-medium"
        >
          Close
        </Button>
      </div>
    </div>
  );
};

export default Complete;