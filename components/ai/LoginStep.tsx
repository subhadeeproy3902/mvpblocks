import { Slack } from "lucide-react";
import { Button } from "../ui/button";

export function Login({ onSlackLogin }:{
  onSlackLogin: () => void;
}) {
  return (
    <div className="px-16 pb-6 ">
      <div className="flex flex-col justify-center pt-8">
        <Button 
          onClick={onSlackLogin}
          className="flex items-center px-6 w-fit mx-auto rounded-lg transition font-medium"
        >
          <Slack className="h-5 w-5" />
          Continue with Slack
        </Button>
        <div className="text-center text-sm max-w-xs text-muted-foreground mt-4">
          By continuing, you agree to our <a href="#" className="text-primary hover:underline">Terms of Service</a>
        </div>
      </div>
    </div>
  );
}