'use client';
import { useEffect, useState } from 'react';
import { Bell, User, Calendar, Moon, Sun, DollarSign } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

export default function Header() {
  const [currentDate, setCurrentDate] = useState<string>('');
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const formattedDate = new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    setCurrentDate(formattedDate);
  }, []);

  return (
    <header className="bg-background/80 fixed top-0 left-0 z-50 w-full border-b backdrop-blur-md">
      <div className="flex w-full items-center justify-between px-3 py-3 md:px-6">
        {/* Desktop and tablet layout */}
        <div className="m-auto flex w-full items-center justify-center text-center">
          {currentDate && (
            <div className="text-muted-foreground hidden w-full items-center gap-2 text-xs md:flex md:text-sm">
              <Calendar className="size-4" />
              <span>{currentDate}</span>
            </div>
          )}
          <div
            className={cn(
              'm-auto flex w-full items-center justify-center gap-1.5 text-center md:hidden',
            )}
          >
            <DollarSign className="text-primary" />
            <h1 className="text-xl font-medium">FinDash Pro</h1>
          </div>
          <div className="block w-auto md:hidden">
            <Button
              size="icon"
              className="!bg-primary rounded-sm text-white hover:!bg-rose-600"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
            >
              {mounted &&
                (theme === 'dark' ? (
                  <Sun className="size-5" />
                ) : (
                  <Moon className="size-5" />
                ))}
            </Button>
          </div>
        </div>
        <div className="ml-auto hidden w-auto items-center justify-end gap-2 md:flex md:w-full md:max-w-xs">
          <Button variant="outline" size="icon" className="relative rounded-sm">
            <Bell className="size-5" />
            <span className="bg-primary absolute -top-1 -right-1 size-3 rounded-full border border-white" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="relative rounded-sm"
              >
                <User className="size-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="rounded-sm">
              <DropdownMenuItem className="hover:!bg-primary rounded hover:!text-white">
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:!bg-primary rounded hover:!text-white">
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:!bg-primary rounded hover:!text-white">
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            variant="outline"
            size="icon"
            className="rounded-sm"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            {mounted &&
              (theme === 'dark' ? (
                <Sun className="size-5" />
              ) : (
                <Moon className="size-5" />
              ))}
          </Button>
        </div>
      </div>
    </header>
  );
}
