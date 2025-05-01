import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

type KeyType = {
  label: string;
  width: string;
  row: string;
  flexGrow?: boolean;
};

const Keyboard: React.FC = () => {
  const keys: KeyType[] = [
    { label: "`", width: "12", row: "1" },
    { label: "1", width: "10", row: "1" },
    { label: "2", width: "10", row: "1" },
    { label: "3", width: "10", row: "1" },
    { label: "4", width: "10", row: "1" },
    { label: "5", width: "10", row: "1" },
    { label: "6", width: "10", row: "1" },
    { label: "7", width: "10", row: "1" },
    { label: "8", width: "10", row: "1" },
    { label: "9", width: "10", row: "1" },
    { label: "0", width: "10", row: "1" },
    { label: "-", width: "10", row: "1" },
    { label: "=", width: "full", row: "1", flexGrow: true },
    { label: "Delete", width: "full", row: "1", flexGrow: true },
    { label: "Tab", width: "14", row: "2" },
    { label: "Q", width: "10", row: "2" },
    { label: "W", width: "10", row: "2" },
    { label: "E", width: "10", row: "2" },
    { label: "R", width: "10", row: "2" },
    { label: "T", width: "10", row: "2" },
    { label: "Y", width: "10", row: "2" },
    { label: "U", width: "10", row: "2" },
    { label: "I", width: "10", row: "2" },
    { label: "O", width: "10", row: "2" },
    { label: "P", width: "10", row: "2" },
    { label: "[", width: "12", row: "2" },
    { label: "]", width: "12", row: "2" },
    { label: "|", width: "full", row: "2", flexGrow: true },
    { label: "Caps", width: "18", row: "3" },
    { label: "A", width: "10", row: "3" },
    { label: "S", width: "10", row: "3" },
    { label: "D", width: "10", row: "3" },
    { label: "F", width: "10", row: "3" },
    { label: "G", width: "10", row: "3" },
    { label: "H", width: "10", row: "3" },
    { label: "J", width: "10", row: "3" },
    { label: "K", width: "10", row: "3" },
    { label: "L", width: "10", row: "3" },
    { label: ";", width: "10", row: "3" },
    { label: "'", width: "10", row: "3" },
    { label: "Enter", width: "full", row: "3", flexGrow: true },
    { label: "Shift", width: "20", row: "4" },
    { label: "Z", width: "10", row: "4" },
    { label: "X", width: "10", row: "4" },
    { label: "C", width: "10", row: "4" },
    { label: "V", width: "10", row: "4" },
    { label: "B", width: "10", row: "4" },
    { label: "N", width: "10", row: "4" },
    { label: "M", width: "10", row: "4" },
    { label: ",", width: "10", row: "4" },
    { label: ".", width: "10", row: "4" },
    { label: "/", width: "10", row: "4" },
    { label: "Shift", width: "16", row: "4", flexGrow: true },
    { label: "▲", width: "10", row: "4" },
    { label: "Prt", width: "10", row: "4" },
    { label: "Fn", width: "10", row: "5" },
    { label: "Ctrl", width: "10", row: "5" },
    { label: "⊞", width: "10", row: "5" },
    { label: "Alt", width: "10", row: "5" },
    { label: "", width: "full", row: "5", flexGrow: true },
    { label: "Alt", width: "10", row: "5" },
    { label: "Esc", width: "10", row: "5" },
    { label: "◄", width: "10", row: "5" },
    { label: "▼", width: "10", row: "5" },
    { label: "►", width: "10", row: "5" },
  ];

  const [highlightCombo, setHighlightCombo] = useState<
    "CTRL" | "C" | "V" | "NONE"
  >("CTRL");

  useEffect(() => {
    let step = 0;
    const steps = [
      { combo: "CTRL", delay: 500 },
      { combo: "C", delay: 1500 },
      { combo: "NONE", delay: 1000 },
      { combo: "CTRL", delay: 500 },
      { combo: "V", delay: 1500 },
      { combo: "NONE", delay: 1000 },
    ];

    const runStep = () => {
      const current = steps[step];
      setHighlightCombo(current.combo as any);
      step = (step + 1) % steps.length;
      setTimeout(runStep, current.delay);
    };

    const timeout = setTimeout(runStep, 0);
    return () => clearTimeout(timeout);
  }, []);

  const renderRow = (row: string) => (
    <div className="mt-[2px] flex space-x-[2px]">
      {keys
        .filter((key) => key.row === row)
        .map((key, index) => {
          const isCtrl = key.label.toLowerCase() === "ctrl";
          const isC = key.label === "C";
          const isV = key.label === "V";

          let isHighlighted = false;
          if (highlightCombo === "CTRL" && isCtrl) isHighlighted = true;
          if (highlightCombo === "C" && (isCtrl || isC)) isHighlighted = true;
          if (highlightCombo === "V" && (isCtrl || isV)) isHighlighted = true;

          return (
            <div
              key={index}
              className={`group h-10 min-w-10 ${key.flexGrow ? "flex-grow" : ""} ${key.label === "Caps" && "w-16"} ${key.label === "Tab" && "w-14"}`}
            >
              <button
                className={cn(
                  `align-center relative top-0 flex h-10 justify-center overflow-hidden rounded px-1 pt-[2px] transition-all duration-75 active:top-1 ${key.label === "Caps" ? "w-full" : `w-${key.width}`}`,
                  isHighlighted
                    ? "border-green-500 bg-gradient-to-b from-primary/0 to-rose-400/50 shadow-xl shadow-green-400"
                    : "bg-gradient-to-b from-primary/20 to-rose-400",
                )}
              >
                <div className="absolute -top-[2px] left-0 flex h-10 w-full items-center justify-between blur-sm">
                  <div className="relative -left-5 h-8 w-8 flex-shrink-0 rotate-45 bg-primary/40"></div>
                  <div className="relative -right-5 h-8 w-8 flex-shrink-0 rotate-45 bg-primary/40"></div>
                </div>
                <div className="relative flex h-7 flex-grow rounded border border-secondary/0 bg-gradient-to-b from-secondary/0 to-secondary/20 pl-1 pt-1 shadow-[0px_0px_10px_0px_rgba(255,255,255,0.1)_inset]">
                  <span className="leading-none group-hover:text-foreground">
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
    <div className="z-10 flex scale-[0.55] items-center justify-center text-xs text-foreground/70 md:mt-16 md:scale-100 lg:scale-125 xl:-ml-12 xl:mt-0">
      <div className="rounded-lg border-2 border-border bg-secondary/80 p-3 shadow-lg">
        <div className="overflow-hidden rounded bg-background p-1">
          {["1", "2", "3", "4", "5"].map((row) => renderRow(row))}
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
