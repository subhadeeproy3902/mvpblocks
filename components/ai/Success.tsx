import React, { useEffect } from 'react';
import { confetti } from 'tsparticles-confetti';
import { Button } from '../ui/button';

type CompleteProps = {
  onClose: () => void;
};

const Complete: React.FC<CompleteProps> = ({ onClose }) => {
  const launchConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#f63b83', '#fa608c', '#fd93b8', '#FFFFFF', '#e60a64'],
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
      <div className="mt-4 mb-6 flex justify-center">
        <img src="/success.gif" alt="Success" className="w-56" />
      </div>

      <h3 className="mb-2 text-center text-lg font-medium text-white">
        Account Setup Complete!
      </h3>
      <p className="mb-6 text-center text-neutral-400">
        Your account has been successfully configured and is ready to use.
      </p>

      <div className="flex flex-col space-y-3">
        <Button
          onClick={launchConfetti}
          className="w-full rounded-lg px-4 py-2 font-medium"
        >
          Celebrate Again
        </Button>
        <Button
          variant="secondary"
          onClick={onClose}
          className="w-full rounded-lg px-4 py-2 font-medium"
        >
          Close
        </Button>
      </div>
    </div>
  );
};

export default Complete;
