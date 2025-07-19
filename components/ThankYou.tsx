'use client';

import { X } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from './ui/alert-dialog';
import { Button } from './ui/button';
import { confetti } from 'tsparticles-confetti';
import { useEffect } from 'react';

export default function ThankYou({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const launchConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#F43F5E', '#FB7185', '#FDA4AF', '#FFF1F2', '#9F1239'],
    });
  };

  useEffect(() => {
    if (!isOpen) return;
    const timer = setTimeout(() => {
      launchConfetti();
    }, 100);
    return () => clearTimeout(timer);
  }, [isOpen]);

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent className="border-border max-w-md overflow-hidden rounded-xl bg-neutral-100 shadow-2xl dark:bg-neutral-900">
        <div className="relative">
          <div className="bg-primary/30 absolute -top-10 left-0 h-16 w-full blur-2xl"></div>
          <div className="mt-4 mb-6 flex justify-center">
            <img src="/success.gif" alt="Success" className="w-56" />
          </div>
          <AlertDialogHeader className="relative">
            <AlertDialogTitle className="bg-primary from-foreground via-rose-200 to-primary bg-clip-text text-transparent dark:bg-gradient-to-b mb-2 text-center text-3xl font-medium">
              Thank you for your purchase!
            </AlertDialogTitle>
          </AlertDialogHeader>

          <div className="p-6 text-center">
            <p className="text-muted-foreground text-sm">
              Your purchase was successful and your order is being processed.
              Please check your email for confirmation and further instructions.
            </p>
          </div>

          <div className="flex flex-col space-y-3">
            <Button
              onClick={() => setIsOpen(false)}
              className="bg-secondary hover:bg-secondary/90 text-foreground w-full rounded-lg px-4 py-2 font-medium"
            >
              Close
            </Button>
            <p className="text-muted-foreground mt-4 text-xs text-center">
              Please check your inbox (and spam folder if you don&apos;t see
              it).
            </p>
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
