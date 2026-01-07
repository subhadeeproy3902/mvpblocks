import { Slack } from 'lucide-react';
import { Button } from '../ui/button';

export function Login({ onSlackLogin }: { onSlackLogin: () => void }) {
  return (
    <div className="px-16 pb-6">
      <div className="flex flex-col justify-center pt-8">
        <Button
          onClick={onSlackLogin}
          className="mx-auto flex w-fit items-center rounded-lg px-6 font-medium transition"
        >
          <Slack className="h-5 w-5" />
          Continue with Slack
        </Button>
        <div className="text-muted-foreground mt-4 max-w-xs text-center text-sm">
          By continuing, you agree to our{' '}
          <a href="#" className="text-primary hover:underline">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  );
}
