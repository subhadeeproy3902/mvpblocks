'use client';

import { Cloud, Droplets, Sun, Wind } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import {
  Expandable,
  ExpandableCard,
  ExpandableCardContent,
  ExpandableCardFooter,
  ExpandableCardHeader,
  ExpandableContent,
  ExpandableTrigger,
} from '@/components/ui/expandable';

export default function ExpandableWeatherCard() {
  return (
    <Expandable expandDirection="both" expandBehavior="replace">
      <ExpandableTrigger>
        <ExpandableCard
          collapsedSize={{ width: 300, height: 220 }}
          expandedSize={{ width: 500, height: 420 }}
          hoverToExpand={false}
          expandDelay={100}
          collapseDelay={400}
        >
          <ExpandableCardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Sun className="mr-2 h-8 w-8 text-yellow-400" />
                <ExpandableContent preset="blur-sm" keepMounted={true}>
                  <h3 className="text-lg font-medium">Today&apos;s Weather</h3>
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-800"
                  >
                    72°F
                  </Badge>
                </ExpandableContent>
              </div>
            </div>
          </ExpandableCardHeader>

          <ExpandableCardContent>
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold">72°F</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Feels like 75°F
                </p>
              </div>
              <div className="text-right">
                <p className="font-medium">Sunny</p>
                <ExpandableContent
                  preset="blur-sm"
                  stagger
                  staggerChildren={0.1}
                  keepMounted={true}
                  animateIn={{
                    initial: { opacity: 0, y: 20, rotate: -5 },
                    animate: { opacity: 1, y: 0, rotate: 0 },
                    transition: { type: 'spring', stiffness: 300, damping: 20 },
                  }}
                >
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    High 78° / Low 65°
                  </p>
                </ExpandableContent>
              </div>
            </div>
            <ExpandableContent
              preset="blur-sm"
              stagger
              staggerChildren={0.1}
              keepMounted={true}
              animateIn={{
                initial: { opacity: 0, y: 20, rotate: -5 },
                animate: { opacity: 1, y: 0, rotate: 0 },
                transition: { type: 'spring', stiffness: 300, damping: 20 },
              }}
            >
              <div className="mb-4 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Cloud className="mr-2 h-5 w-5 text-gray-400" />
                    <span>Humidity</span>
                  </div>
                  <span>45%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Wind className="mr-2 h-5 w-5 text-gray-400" />
                    <span>Wind</span>
                  </div>
                  <span>8 mph</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Droplets className="mr-2 h-5 w-5 text-gray-400" />
                    <span>Precipitation</span>
                  </div>
                  <span>0%</span>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">5-Day Forecast</h4>
                {[
                  { day: 'Mon', temp: 70 },
                  { day: 'Tue', temp: 71 },
                  { day: 'Wed', temp: 72 },
                  { day: 'Thu', temp: 73 },
                  { day: 'Fri', temp: 74 },
                ].map((forecast) => (
                  <div
                    key={forecast.day}
                    className="flex items-center justify-between"
                  >
                    <span>{forecast.day}</span>
                    <div className="flex items-center">
                      <Sun className="mr-2 h-4 w-4 text-yellow-400" />
                      <span>{forecast.temp}°F</span>
                    </div>
                  </div>
                ))}
              </div>
            </ExpandableContent>
          </ExpandableCardContent>
          <ExpandableCardFooter>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Last updated: 5 minutes ago
            </p>
          </ExpandableCardFooter>
        </ExpandableCard>
      </ExpandableTrigger>
    </Expandable>
  );
}
