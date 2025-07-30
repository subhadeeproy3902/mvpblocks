import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

type KeyType = {
  label: string;
  width: string;
  row: string;
  flexGrow?: boolean;
  code?: string; // Keyboard event code
};

const Keyboard: React.FC = () => {
  const keys: KeyType[] = [
    { label: '`', width: '12', row: '1', code: 'Backquote' },
    { label: '1', width: '10', row: '1', code: 'Digit1' },
    { label: '2', width: '10', row: '1', code: 'Digit2' },
    { label: '3', width: '10', row: '1', code: 'Digit3' },
    { label: '4', width: '10', row: '1', code: 'Digit4' },
    { label: '5', width: '10', row: '1', code: 'Digit5' },
    { label: '6', width: '10', row: '1', code: 'Digit6' },
    { label: '7', width: '10', row: '1', code: 'Digit7' },
    { label: '8', width: '10', row: '1', code: 'Digit8' },
    { label: '9', width: '10', row: '1', code: 'Digit9' },
    { label: '0', width: '10', row: '1', code: 'Digit0' },
    { label: '-', width: '10', row: '1', code: 'Minus' },
    { label: '=', width: 'full', row: '1', flexGrow: true, code: 'Equal' },
    {
      label: 'Delete',
      width: 'full',
      row: '1',
      flexGrow: true,
      code: 'Backspace',
    },
    { label: 'Tab', width: '14', row: '2', code: 'Tab' },
    { label: 'Q', width: '10', row: '2', code: 'KeyQ' },
    { label: 'W', width: '10', row: '2', code: 'KeyW' },
    { label: 'E', width: '10', row: '2', code: 'KeyE' },
    { label: 'R', width: '10', row: '2', code: 'KeyR' },
    { label: 'T', width: '10', row: '2', code: 'KeyT' },
    { label: 'Y', width: '10', row: '2', code: 'KeyY' },
    { label: 'U', width: '10', row: '2', code: 'KeyU' },
    { label: 'I', width: '10', row: '2', code: 'KeyI' },
    { label: 'O', width: '10', row: '2', code: 'KeyO' },
    { label: 'P', width: '10', row: '2', code: 'KeyP' },
    { label: '[', width: '12', row: '2', code: 'BracketLeft' },
    { label: ']', width: '12', row: '2', code: 'BracketRight' },
    { label: '|', width: 'full', row: '2', flexGrow: true, code: 'Backslash' },
    { label: 'Caps', width: '18', row: '3', code: 'CapsLock' },
    { label: 'A', width: '10', row: '3', code: 'KeyA' },
    { label: 'S', width: '10', row: '3', code: 'KeyS' },
    { label: 'D', width: '10', row: '3', code: 'KeyD' },
    { label: 'F', width: '10', row: '3', code: 'KeyF' },
    { label: 'G', width: '10', row: '3', code: 'KeyG' },
    { label: 'H', width: '10', row: '3', code: 'KeyH' },
    { label: 'J', width: '10', row: '3', code: 'KeyJ' },
    { label: 'K', width: '10', row: '3', code: 'KeyK' },
    { label: 'L', width: '10', row: '3', code: 'KeyL' },
    { label: ';', width: '10', row: '3', code: 'Semicolon' },
    { label: "'", width: '10', row: '3', code: 'Quote' },
    { label: 'Enter', width: 'full', row: '3', flexGrow: true, code: 'Enter' },
    { label: 'Shift', width: '20', row: '4', code: 'ShiftLeft' },
    { label: 'Z', width: '10', row: '4', code: 'KeyZ' },
    { label: 'X', width: '10', row: '4', code: 'KeyX' },
    { label: 'C', width: '10', row: '4', code: 'KeyC' },
    { label: 'V', width: '10', row: '4', code: 'KeyV' },
    { label: 'B', width: '10', row: '4', code: 'KeyB' },
    { label: 'N', width: '10', row: '4', code: 'KeyN' },
    { label: 'M', width: '10', row: '4', code: 'KeyM' },
    { label: ',', width: '10', row: '4', code: 'Comma' },
    { label: '.', width: '10', row: '4', code: 'Period' },
    { label: '/', width: '10', row: '4', code: 'Slash' },
    {
      label: 'Shift',
      width: '16',
      row: '4',
      flexGrow: true,
      code: 'ShiftRight',
    },
    { label: '▲', width: '10', row: '4', code: 'ArrowUp' },
    { label: 'Prt', width: '10', row: '4', code: 'PrintScreen' },
    { label: 'Fn', width: '10', row: '5', code: 'Fn' },
    { label: 'Ctrl', width: '10', row: '5', code: 'ControlLeft' },
    { label: '⊞', width: '10', row: '5', code: 'MetaLeft' },
    { label: 'Alt', width: '10', row: '5', code: 'AltLeft' },
    { label: '', width: 'full', row: '5', flexGrow: true, code: 'Space' },
    { label: 'Alt', width: '10', row: '5', code: 'AltRight' },
    { label: 'Esc', width: '10', row: '5', code: 'Escape' },
    { label: '◄', width: '10', row: '5', code: 'ArrowLeft' },
    { label: '▼', width: '10', row: '5', code: 'ArrowDown' },
    { label: '►', width: '10', row: '5', code: 'ArrowRight' },
  ];

  // Track pressed keys
  const [pressedKeys, setPressedKeys] = useState<Set<string>>(new Set());

  // Keep the demo animation for when no keys are pressed
  const [demoMode, setDemoMode] = useState(true);
  const [highlightCombo, setHighlightCombo] = useState<
    'CTRL' | 'C' | 'V' | 'NONE'
  >('CTRL');

  useEffect(() => {
    // Handle key press events
    const handleKeyDown = (e: KeyboardEvent) => {
      e.preventDefault();
      setDemoMode(false); // Disable demo mode when user starts typing
      setPressedKeys((prev) => {
        const newSet = new Set(prev);
        newSet.add(e.code);
        return newSet;
      });
    };

    // Handle key release events
    const handleKeyUp = (e: KeyboardEvent) => {
      setPressedKeys((prev) => {
        const newSet = new Set(prev);
        newSet.delete(e.code);

        // If no keys are pressed, return to demo mode
        if (newSet.size === 0) {
          setDemoMode(true);
        }

        return newSet;
      });
    };

    // Add event listeners
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    // Demo animation when no keys are pressed
    let step = 0;
    let animationTimer: NodeJS.Timeout | null = null;

    if (demoMode) {
      const steps = [
        { combo: 'CTRL', delay: 500 },
        { combo: 'C', delay: 1500 },
        { combo: 'NONE', delay: 1000 },
        { combo: 'CTRL', delay: 500 },
        { combo: 'V', delay: 1500 },
        { combo: 'NONE', delay: 1000 },
      ];

      const runStep = () => {
        const current = steps[step];
        setHighlightCombo(current.combo as any);
        step = (step + 1) % steps.length;
        animationTimer = setTimeout(runStep, current.delay);
      };

      animationTimer = setTimeout(runStep, 0);
    }

    // Cleanup
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      if (animationTimer) clearTimeout(animationTimer);
    };
  }, [demoMode]);

  const renderRow = (row: string) => (
    <div className="mt-[2px] flex space-x-[2px]">
      {keys
        .filter((key) => key.row === row)
        .map((key, index) => {
          const isCtrl = key.label.toLowerCase() === 'ctrl';
          const isC = key.label === 'C';
          const isV = key.label === 'V';

          // Determine if key should be highlighted
          let isHighlighted = false;

          if (demoMode) {
            // Demo mode highlighting (original behavior)
            if (highlightCombo === 'CTRL' && isCtrl) isHighlighted = true;
            if (highlightCombo === 'C' && (isCtrl || isC)) isHighlighted = true;
            if (highlightCombo === 'V' && (isCtrl || isV)) isHighlighted = true;
          } else {
            // Real keyboard input highlighting
            isHighlighted = key.code ? pressedKeys.has(key.code) : false;
          }

          return (
            <div
              key={key.code || `${key.row}-${key.label}-${index}`}
              className={`group h-10 min-w-10 ${key.flexGrow ? 'flex-grow' : ''} ${key.label === 'Caps' && 'w-16'} ${key.label === 'Tab' && 'w-14'}`}
            >
              <button
                className={cn(
                  `align-center relative top-0 flex h-10 justify-center overflow-hidden rounded px-1 pt-[2px] transition-all duration-75 active:top-1 ${key.label === 'Caps' ? 'w-full' : `w-${key.width}`}`,
                  isHighlighted
                    ? demoMode
                      ? 'from-primary/0 border-green-500 bg-gradient-to-b to-rose-400/50 shadow-xl shadow-green-400'
                      : 'from-primary/0 border-yellow-500 bg-gradient-to-b to-rose-400/50 shadow-xl shadow-yellow-400'
                    : 'from-primary/20 bg-gradient-to-b to-rose-400',
                )}
              >
                <div className="absolute -top-[2px] left-0 flex h-10 w-full items-center justify-between blur-sm">
                  <div className="bg-primary/40 relative -left-5 h-8 w-8 flex-shrink-0 rotate-45"></div>
                  <div className="bg-primary/40 relative -right-5 h-8 w-8 flex-shrink-0 rotate-45"></div>
                </div>
                <div className="border-secondary/0 from-secondary/0 to-secondary/20 relative flex h-7 flex-grow rounded border bg-gradient-to-b pt-1 pl-1 shadow-[0px_0px_10px_0px_rgba(255,255,255,0.1)_inset]">
                  <span className="group-hover:text-foreground leading-none">
                    {key.label}
                  </span>
                </div>
              </button>
            </div>
          );
        })}
    </div>
  );

  return (
    <div className="text-foreground/70 z-10 flex scale-[0.55] items-center justify-center text-xs md:mt-16 md:scale-100 lg:scale-125 xl:mt-0 xl:-ml-12">
      <div className="border-border bg-secondary/80 rounded-lg border-2 p-3 shadow-lg">
        <div className="bg-background overflow-hidden rounded p-1">
          {['1', '2', '3', '4', '5'].map((row) => (
            <div key={row}>{renderRow(row)}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
