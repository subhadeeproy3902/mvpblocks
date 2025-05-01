import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      className="z-50 rounded-full text-primary"
      onClick={() => setTheme((theme) => (theme === "dark" ? "light" : "dark"))}
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </Button>
  );
}
