'use client';

import { cn } from '@/lib/utils';
import { AnimatePresence, easeInOut, motion } from 'motion/react';
import * as React from 'react';

interface ExpandableContextValue {
  isExpanded: boolean;
  setIsExpanded: (expanded: boolean) => void;
}

const ExpandableContext = React.createContext<ExpandableContextValue | null>(
  null,
);

interface ExpandableProps {
  readonly children:
  | React.ReactNode
  | ((props: { isExpanded: boolean }) => React.ReactNode);
  readonly expandDirection?: 'both' | 'horizontal' | 'vertical';
  readonly expandBehavior?: 'replace' | 'push';
  readonly initialDelay?: number;
  readonly onExpandStart?: () => void;
  readonly onExpandEnd?: () => void;
}

export function Expandable({
  children,
  expandDirection = 'both',
  expandBehavior = 'replace',
  initialDelay = 0,
  onExpandStart,
  onExpandEnd,
}: ExpandableProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleExpand = React.useCallback(
    (expanded: boolean) => {
      if (expanded && onExpandStart) {
        onExpandStart();
      }
      setIsExpanded(expanded);
      if (expanded && onExpandEnd) {
        setTimeout(() => onExpandEnd(), initialDelay);
      }
    },
    [onExpandStart, onExpandEnd, initialDelay],
  );

  const value = React.useMemo(
    () => ({
      isExpanded,
      setIsExpanded: handleExpand,
    }),
    [isExpanded, handleExpand],
  );

  return (
    <ExpandableContext.Provider value={value}>
      {typeof children === 'function' ? children({ isExpanded }) : children}
    </ExpandableContext.Provider>
  );
}

function useExpandable() {
  const context = React.useContext(ExpandableContext);
  if (!context) {
    throw new Error('useExpandable must be used within Expandable');
  }
  return context;
}

interface ExpandableTriggerProps {
  readonly children: React.ReactNode;
  readonly className?: string;
}

export function ExpandableTrigger({
  children,
  className,
}: ExpandableTriggerProps) {
  const { isExpanded, setIsExpanded } = useExpandable();

  const handleClick = () => setIsExpanded(!isExpanded);

  return (
    <button
      type="button"
      className={cn('cursor-pointer', className)}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

interface ExpandableCardProps {
  readonly children?: React.ReactNode;
  readonly className?: string;
  readonly collapsedSize: { width: number; height: number };
  readonly expandedSize: { width: number; height: number };
  readonly hoverToExpand?: boolean;
  readonly expandDelay?: number;
  readonly collapseDelay?: number;
}

export function ExpandableCard({
  children,
  className,
  collapsedSize,
  expandedSize,
  hoverToExpand = false,
  expandDelay = 0,
  collapseDelay = 0,
}: ExpandableCardProps) {
  const { isExpanded } = useExpandable();

  return (
    <motion.div
      className={cn(
        'bg-card relative overflow-hidden rounded-lg border',
        className,
      )}
      initial={false}
      animate={{
        width: isExpanded ? expandedSize.width : collapsedSize.width,
        height: isExpanded ? expandedSize.height : collapsedSize.height,
      }}
      transition={{
        duration: 0.3,
        delay: isExpanded ? expandDelay / 1000 : collapseDelay / 1000,
        ease: easeInOut,
      }}
    >
      {children}
    </motion.div>
  );
}

const cardSectionClassName = 'p-4';

function CardSection({
  children,
  className,
  ...props
}: Readonly<React.HTMLAttributes<HTMLDivElement>>) {
  return (
    <div className={cn(cardSectionClassName, className)} {...props}>
      {children}
    </div>
  );
}

export function ExpandableCardHeader(
  props: Readonly<React.HTMLAttributes<HTMLDivElement>>,
) {
  return <CardSection {...props} />;
}

export function ExpandableCardContent(
  props: Readonly<React.HTMLAttributes<HTMLDivElement>>,
) {
  return <CardSection {...props} />;
}

export function ExpandableCardFooter(
  props: Readonly<React.HTMLAttributes<HTMLDivElement>>,
) {
  return <CardSection className="border-t" {...props} />;
}

interface ExpandableContentProps {
  readonly children?: React.ReactNode;
  readonly className?: string;
  readonly preset?: 'fade' | 'blur-sm' | 'blur-md' | 'slide-up' | 'slide-down';
  readonly stagger?: boolean;
  readonly staggerChildren?: number;
  readonly keepMounted?: boolean;
  readonly animateIn?: {
    initial?: Record<string, any>;
    animate?: Record<string, any>;
    exit?: Record<string, any>;
    transition?: Record<string, any>;
  };
}

export function ExpandableContent({
  children,
  className,
  preset = 'fade',
  stagger = false,
  staggerChildren = 0.1,
  keepMounted = false,
  animateIn,
}: ExpandableContentProps) {
  const { isExpanded } = useExpandable();

  const getPresetStyles = () => {
    const baseStyles = {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    };

    switch (preset) {
      case 'fade':
        return baseStyles;
      case 'blur-sm':
        return {
          ...baseStyles,
          initial: { ...baseStyles.initial, filter: 'blur(4px)' },
          animate: { ...baseStyles.animate, filter: 'blur(0px)' },
          exit: { ...baseStyles.exit, filter: 'blur(4px)' },
        };
      case 'blur-md':
        return {
          ...baseStyles,
          initial: { ...baseStyles.initial, filter: 'blur(8px)' },
          animate: { ...baseStyles.animate, filter: 'blur(0px)' },
          exit: { ...baseStyles.exit, filter: 'blur(8px)' },
        };
      case 'slide-up':
        return {
          ...baseStyles,
          initial: { ...baseStyles.initial, y: 20 },
          animate: { ...baseStyles.animate, y: 0 },
          exit: { ...baseStyles.exit, y: 20 },
        };
      case 'slide-down':
        return {
          ...baseStyles,
          initial: { ...baseStyles.initial, y: -20 },
          animate: { ...baseStyles.animate, y: 0 },
          exit: { ...baseStyles.exit, y: -20 },
        };
      default:
        return baseStyles;
    }
  };

  const styles = animateIn || getPresetStyles();

  if (!isExpanded && !keepMounted) {
    return null;
  }

  return (
    <AnimatePresence mode="wait">
      {isExpanded && (
        <motion.div
          className={className}
          initial={styles.initial}
          animate={styles.animate}
          exit={styles.exit}
          transition={'transition' in styles ? styles.transition : { duration: 0.3 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
