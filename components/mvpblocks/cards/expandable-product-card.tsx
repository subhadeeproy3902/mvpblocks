'use client';

import {
  Battery,
  Bluetooth,
  Fingerprint,
  Mic,
  ShoppingCart,
  Star,
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Expandable,
  ExpandableCard,
  ExpandableCardContent,
  ExpandableCardFooter,
  ExpandableCardHeader,
  ExpandableContent,
  ExpandableTrigger,
} from '@/components/ui/expandable';

export default function ExpandableProductCard() {
  return (
    <Expandable expandDirection="both" expandBehavior="replace">
      {({ isExpanded }) => (
        <ExpandableTrigger>
          <ExpandableCard
            className="relative w-full"
            collapsedSize={{ width: 330, height: 220 }}
            expandedSize={{ width: 500, height: 520 }}
            hoverToExpand={false}
            expandDelay={500}
            collapseDelay={700}
          >
            <ExpandableCardHeader>
              <div className="flex items-center justify-between">
                <Badge
                  variant="secondary"
                  className="bg-blue-100 text-blue-800"
                >
                  New Arrival
                </Badge>
                <Badge variant="outline" className="ml-2">
                  $129.99
                </Badge>
              </div>
            </ExpandableCardHeader>

            <ExpandableCardContent>
              <div className="mb-4 flex items-start">
                <img
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6505/6505727_rd.jpg;maxHeight=640;maxWidth=550;format=webp"
                  alt="Product"
                  className="mr-4 rounded-md object-cover"
                  style={{
                    width: isExpanded ? '120px' : '80px',
                    height: isExpanded ? '120px' : '80px',
                    transition: 'width 0.3s, height 0.3s',
                  }}
                />
                <div className="flex-1">
                  <h3
                    className="font-medium tracking-tight text-gray-800 transition-all duration-300 dark:text-white"
                    style={{
                      fontSize: isExpanded ? '24px' : '18px',
                      fontWeight: isExpanded ? '700' : '400',
                    }}
                  >
                    Sony Headphones
                  </h3>
                  <div className="mt-1 flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-4 w-4 fill-current text-yellow-400"
                      />
                    ))}
                    <AnimatePresence mode="wait">
                      {isExpanded ? (
                        <motion.span
                          key="expanded"
                          initial={{ opacity: 0, width: 0 }}
                          animate={{ opacity: 1, width: 'auto' }}
                          exit={{ opacity: 0, width: 0 }}
                          transition={{ duration: 0.2 }}
                          className="ml-2 overflow-hidden text-sm whitespace-nowrap text-gray-600 dark:text-gray-400"
                        >
                          (128 reviews)
                        </motion.span>
                      ) : (
                        <motion.span
                          key="collapsed"
                          initial={{ opacity: 0, width: 0 }}
                          animate={{ opacity: 1, width: 'auto' }}
                          exit={{ opacity: 0, width: 0 }}
                          transition={{ duration: 0.2 }}
                          className="ml-2 overflow-hidden text-sm whitespace-nowrap text-gray-600 dark:text-gray-400"
                        >
                          (128)
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
              <ExpandableContent
                preset="fade"
                keepMounted={false}
                animateIn={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { type: 'spring', stiffness: 300, damping: 20 },
                }}
              >
                <p className="mb-4 max-w-xs text-sm text-gray-600 dark:text-gray-400">
                  Experience crystal-clear audio with our latest
                  noise-cancelling technology. Perfect for work, travel, or
                  relaxation.
                </p>

                <div className="space-y-4">
                  {[
                    {
                      icon: Battery,
                      text: '30-hour battery life',
                      id: 'battery',
                    },
                    { icon: Bluetooth, text: 'Bluetooth 5.0', id: 'bluetooth' },
                    {
                      icon: Fingerprint,
                      text: 'Touch controls',
                      id: 'fingerprint',
                    },
                    {
                      icon: Mic,
                      text: 'Voice assistant compatible',
                      id: 'mic',
                    },
                  ].map((feature) => (
                    <div
                      key={feature.id}
                      className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                    >
                      <feature.icon className="mr-2 h-4 w-4" />
                      <span>{feature.text}</span>
                    </div>
                  ))}

                  <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                </div>
              </ExpandableContent>
            </ExpandableCardContent>
            <ExpandableContent preset="slide-up">
              <ExpandableCardFooter>
                <div className="flex w-full justify-between text-sm text-gray-600 dark:text-gray-400">
                  <span>Free shipping</span>
                  <span>30-day return policy</span>
                </div>
              </ExpandableCardFooter>
            </ExpandableContent>
          </ExpandableCard>
        </ExpandableTrigger>
      )}
    </Expandable>
  );
}
