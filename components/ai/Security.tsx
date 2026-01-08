import { Bell, Fingerprint, Lock } from 'lucide-react';
import { Button } from '../ui/button';
import { Switch } from '../ui/switch';

export function Security({ onContinue }: { onContinue: () => void }) {
  return (
    <div className="px-6 pb-6">
      <h3 className="text-foreground mb-4 text-lg font-medium">
        Set Up Your Security Preferences
      </h3>
      <p className="mb-6 text-neutral-400">
        Enhance your account security by configuring these important settings.
      </p>

      <div className="bg-secondary/40 mb-5 rounded-lg p-4">
        <div className="flex items-start">
          <div className="mt-1 flex-shrink-0">
            <Fingerprint className="text-primary h-5 w-5" />
          </div>
          <div className="ml-3 flex-1">
            <div className="flex items-center justify-between">
              <h4 className="text-foreground font-medium">
                Two-Factor Authentication
              </h4>
              <Switch className="relative inline-flex cursor-pointer items-center" />
            </div>
            <p className="text-muted-foreground mt-1 text-sm">
              Add an extra layer of security to your account by requiring a
              verification code in addition to your password.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-secondary/40 mb-5 rounded-lg p-4">
        <div className="flex items-start">
          <div className="mt-1 flex-shrink-0">
            <Lock className="text-primary h-5 w-5" />
          </div>
          <div className="ml-3 flex-1">
            <div className="flex items-center justify-between">
              <h4 className="text-foreground font-medium">
                Strong Password Requirements
              </h4>
              <Switch
                defaultChecked
                className="relative inline-flex cursor-pointer items-center"
              />
            </div>
            <p className="text-muted-foreground mt-1 text-sm">
              Enforce strong password policies including minimum length, special
              characters, and regular password changes.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-secondary/40 mb-5 rounded-lg p-4">
        <div className="flex items-start">
          <div className="mt-1 flex-shrink-0">
            <Bell className="text-primary h-5 w-5" />
          </div>
          <div className="ml-3 flex-1">
            <div className="flex items-center justify-between">
              <h4 className="text-foreground font-medium">Notification</h4>
              <Switch className="relative inline-flex cursor-pointer items-center" />
            </div>
            <p className="mt-1 text-sm text-neutral-400">
              Receive email notifications when there are new login attempts from
              unrecognized devices.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <Button
          onClick={onContinue}
          className="rounded-lg px-6 py-2 font-medium transition"
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
