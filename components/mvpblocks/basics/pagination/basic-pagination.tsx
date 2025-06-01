'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

interface BasicPaginationProps {
  totalPages: number;
  initialPage?: number;
  siblingsCount?: number;
  onPageChange?: (page: number) => void;
  className?: string;
  variant?: 'default' | 'outline' | 'rounded';
  showDemo?: boolean;
}

export default function BasicPagination({
  totalPages = 10,
  initialPage = 1,
  siblingsCount = 1,
  onPageChange,
  className,
  variant = 'default',
  showDemo = false,
}: BasicPaginationProps) {
  const [currentPage, setCurrentPage] = useState(initialPage);

  // Generate page numbers array
  const generatePagination = () => {
    // Always show first and last page
    const firstPage = 1;
    const lastPage = totalPages;

    // Calculate range of pages to show around current page
    const leftSiblingIndex = Math.max(currentPage - siblingsCount, firstPage);
    const rightSiblingIndex = Math.min(currentPage + siblingsCount, lastPage);

    // Determine whether to show ellipses
    const shouldShowLeftDots = leftSiblingIndex > firstPage + 1;
    const shouldShowRightDots = rightSiblingIndex < lastPage - 1;

    // Initialize the array of page numbers
    const pageNumbers: (number | string)[] = [];

    // Always add first page
    pageNumbers.push(firstPage);

    // Add left ellipsis if needed
    if (shouldShowLeftDots) {
      pageNumbers.push('leftEllipsis');
    }

    // Add page numbers between ellipses
    for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) {
      if (i !== firstPage && i !== lastPage) {
        pageNumbers.push(i);
      }
    }

    // Add right ellipsis if needed
    if (shouldShowRightDots) {
      pageNumbers.push('rightEllipsis');
    }

    // Always add last page if it's not the same as first page
    if (lastPage !== firstPage) {
      pageNumbers.push(lastPage);
    }

    return pageNumbers;
  };

  const handlePageChange = (page: number) => {
    if (page === currentPage) return;

    setCurrentPage(page);
    onPageChange?.(page);
  };

  const pageNumbers = generatePagination();

  // Variants for motion animations
  const itemVariants = {
    initial: { opacity: 0, y: 5 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -5 },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  // Get button style based on variant
  const getButtonStyle = (isActive: boolean) => {
    if (variant === 'outline') {
      return isActive
        ? 'border-primary text-primary hover:bg-primary/10'
        : 'border-border hover:border-primary/50 hover:text-primary';
    }

    if (variant === 'rounded') {
      return isActive
        ? 'bg-primary text-primary-foreground rounded-full'
        : 'hover:bg-muted rounded-full';
    }

    // Default variant
    return isActive ? 'bg-primary text-primary-foreground' : 'hover:bg-muted';
  };

  const PaginationComponent = (
    <Pagination className={cn('py-4', className)}>
      <PaginationContent>
        <PaginationItem>
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            whileHover="hover"
            variants={itemVariants}
            transition={{ duration: 0.3 }}
          >
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (currentPage > 1) {
                  handlePageChange(currentPage - 1);
                }
              }}
              className={cn(
                currentPage <= 1 ? 'pointer-events-none opacity-50' : '',
                variant === 'rounded' ? 'rounded-full' : '',
              )}
            />
          </motion.div>
        </PaginationItem>

        {pageNumbers.map((page, index) => {
          if (page === 'leftEllipsis' || page === 'rightEllipsis') {
            return (
              <PaginationItem key={`ellipsis-${index}`}>
                <motion.div
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={itemVariants}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <PaginationEllipsis />
                </motion.div>
              </PaginationItem>
            );
          }

          const pageNum = page as number;
          const isActive = pageNum === currentPage;

          return (
            <PaginationItem key={pageNum}>
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                whileHover="hover"
                variants={itemVariants}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <PaginationLink
                  href="#"
                  isActive={isActive}
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(pageNum);
                  }}
                  className={cn(
                    getButtonStyle(isActive),
                    variant === 'outline' && 'border',
                    'transition-all duration-200',
                  )}
                >
                  {pageNum}
                </PaginationLink>
              </motion.div>
            </PaginationItem>
          );
        })}

        <PaginationItem>
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            whileHover="hover"
            variants={itemVariants}
            transition={{ duration: 0.3 }}
          >
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (currentPage < totalPages) {
                  handlePageChange(currentPage + 1);
                }
              }}
              className={cn(
                currentPage >= totalPages
                  ? 'pointer-events-none opacity-50'
                  : '',
                variant === 'rounded' ? 'rounded-full' : '',
              )}
            />
          </motion.div>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );

  // If showDemo is true, render the demo with all variants
  if (showDemo) {
    // Sample data for pagination demo
    const demoItems = [
      {
        id: 1,
        title: 'Getting Started with MVPBlocks',
        category: 'Tutorial',
        date: 'Jan 15, 2023',
      },
      {
        id: 2,
        title: 'Building Responsive UIs',
        category: 'Design',
        date: 'Feb 3, 2023',
      },
      {
        id: 3,
        title: 'Advanced Animation Techniques',
        category: 'Animation',
        date: 'Mar 12, 2023',
      },
      {
        id: 4,
        title: 'State Management Patterns',
        category: 'Development',
        date: 'Apr 5, 2023',
      },
      {
        id: 5,
        title: 'Optimizing Performance',
        category: 'Performance',
        date: 'May 20, 2023',
      },
      {
        id: 6,
        title: 'Accessibility Best Practices',
        category: 'Accessibility',
        date: 'Jun 8, 2023',
      },
      {
        id: 7,
        title: 'Component Composition',
        category: 'Architecture',
        date: 'Jul 17, 2023',
      },
      {
        id: 8,
        title: 'Testing Strategies',
        category: 'Testing',
        date: 'Aug 22, 2023',
      },
      {
        id: 9,
        title: 'Deployment Workflows',
        category: 'DevOps',
        date: 'Sep 14, 2023',
      },
      {
        id: 10,
        title: 'Theme Customization',
        category: 'Design',
        date: 'Oct 30, 2023',
      },
      {
        id: 11,
        title: 'API Integration Patterns',
        category: 'Development',
        date: 'Nov 11, 2023',
      },
      {
        id: 12,
        title: 'Building Design Systems',
        category: 'Design',
        date: 'Dec 5, 2023',
      },
      {
        id: 13,
        title: 'Mobile-First Approach',
        category: 'Design',
        date: 'Jan 19, 2024',
      },
      {
        id: 14,
        title: 'Server-Side Rendering',
        category: 'Performance',
        date: 'Feb 8, 2024',
      },
      {
        id: 15,
        title: 'Authentication Flows',
        category: 'Security',
        date: 'Mar 22, 2024',
      },
    ];

    // Items per page
    const itemsPerPage = 3;

    // Enhanced pagination component with content
    const EnhancedPagination = ({
      variant = 'default',
    }: {
      variant?: 'default' | 'outline' | 'rounded';
    }) => {
      const [page, setPage] = useState(1);

      // Calculate total pages
      const totalPages = Math.ceil(demoItems.length / itemsPerPage);

      // Get current items
      const startIndex = (page - 1) * itemsPerPage;
      const currentItems = demoItems.slice(
        startIndex,
        startIndex + itemsPerPage,
      );

      return (
        <div className="space-y-6">
          {/* Content area */}
          <motion.div
            className="rounded-md border bg-card/50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            key={`page-${page}`} // Key changes force re-animation
            transition={{ duration: 0.3 }}
          >
            <div className="mb-4 flex items-center justify-between border-b pb-2">
              <h4 className="text-sm font-medium text-muted-foreground">
                Showing {startIndex + 1}-
                {Math.min(startIndex + itemsPerPage, demoItems.length)} of{' '}
                {demoItems.length} items
              </h4>
              <span className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                Page {page} of {totalPages}
              </span>
            </div>

            <div className="space-y-4">
              {currentItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: (item.id % itemsPerPage) * 0.1,
                  }}
                  className="flex items-center justify-between rounded-md border p-3 hover:bg-muted/50"
                >
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                        {item.category}
                      </span>
                      <span>{item.date}</span>
                    </div>
                  </div>
                  <button className="rounded-full p-2 hover:bg-muted">
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Pagination controls */}
          <Pagination className="py-2">
            <PaginationContent>
              <PaginationItem>
                <motion.div
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  whileHover="hover"
                  variants={itemVariants}
                  transition={{ duration: 0.3 }}
                >
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (page > 1) setPage(page - 1);
                    }}
                    className={cn(
                      page <= 1 ? 'pointer-events-none opacity-50' : '',
                      variant === 'rounded' ? 'rounded-full' : '',
                    )}
                  />
                </motion.div>
              </PaginationItem>

              {Array.from({ length: totalPages }).map((_, i) => {
                const pageNum = i + 1;
                const isActive = pageNum === page;

                // Show ellipsis for many pages
                if (totalPages > 5) {
                  // Always show first and last page
                  if (pageNum === 1 || pageNum === totalPages) {
                    return (
                      <PaginationItem key={pageNum}>
                        <motion.div
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          whileHover="hover"
                          variants={itemVariants}
                          transition={{ duration: 0.3 }}
                        >
                          <PaginationLink
                            href="#"
                            isActive={isActive}
                            onClick={(e) => {
                              e.preventDefault();
                              setPage(pageNum);
                            }}
                            className={cn(
                              getButtonStyle(isActive),
                              variant === 'outline' && 'border',
                              'transition-all duration-200',
                            )}
                          >
                            {pageNum}
                          </PaginationLink>
                        </motion.div>
                      </PaginationItem>
                    );
                  }

                  // Show current page and adjacent pages
                  if (
                    pageNum === page ||
                    pageNum === page - 1 ||
                    pageNum === page + 1
                  ) {
                    return (
                      <PaginationItem key={pageNum}>
                        <motion.div
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          whileHover="hover"
                          variants={itemVariants}
                          transition={{ duration: 0.3 }}
                        >
                          <PaginationLink
                            href="#"
                            isActive={isActive}
                            onClick={(e) => {
                              e.preventDefault();
                              setPage(pageNum);
                            }}
                            className={cn(
                              getButtonStyle(isActive),
                              variant === 'outline' && 'border',
                              'transition-all duration-200',
                            )}
                          >
                            {pageNum}
                          </PaginationLink>
                        </motion.div>
                      </PaginationItem>
                    );
                  }

                  // Show ellipsis
                  if (
                    (pageNum === 2 && page > 3) ||
                    (pageNum === totalPages - 1 && page < totalPages - 2)
                  ) {
                    return (
                      <PaginationItem key={`ellipsis-${pageNum}`}>
                        <motion.div
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          variants={itemVariants}
                          transition={{ duration: 0.3 }}
                        >
                          <PaginationEllipsis />
                        </motion.div>
                      </PaginationItem>
                    );
                  }

                  return null;
                }

                // Show all pages if total pages <= 5
                return (
                  <PaginationItem key={pageNum}>
                    <motion.div
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      whileHover="hover"
                      variants={itemVariants}
                      transition={{ duration: 0.3 }}
                    >
                      <PaginationLink
                        href="#"
                        isActive={isActive}
                        onClick={(e) => {
                          e.preventDefault();
                          setPage(pageNum);
                        }}
                        className={cn(
                          getButtonStyle(isActive),
                          variant === 'outline' && 'border',
                          'transition-all duration-200',
                        )}
                      >
                        {pageNum}
                      </PaginationLink>
                    </motion.div>
                  </PaginationItem>
                );
              })}

              <PaginationItem>
                <motion.div
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  whileHover="hover"
                  variants={itemVariants}
                  transition={{ duration: 0.3 }}
                >
                  <PaginationNext
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (page < totalPages) setPage(page + 1);
                    }}
                    className={cn(
                      page >= totalPages
                        ? 'pointer-events-none opacity-50'
                        : '',
                      variant === 'rounded' ? 'rounded-full' : '',
                    )}
                  />
                </motion.div>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      );
    };

    return (
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold tracking-tight">
            Pagination Examples
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Interactive pagination components that demonstrate real content
            navigation. Each example shows how pagination can be used to
            navigate through a collection of items.
          </p>
        </div>

        <div className="space-y-16">
          {/* Default Variant */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-lg border bg-card p-6 shadow-sm"
          >
            <h3 className="mb-6 text-xl font-semibold">Default Style</h3>
            <EnhancedPagination />
          </motion.div>

          {/* Outline Variant */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-lg border bg-card p-6 shadow-sm"
          >
            <h3 className="mb-6 text-xl font-semibold">Outline Style</h3>
            <EnhancedPagination variant="outline" />
          </motion.div>

          {/* Rounded Variant */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-lg border bg-card p-6 shadow-sm"
          >
            <h3 className="mb-6 text-xl font-semibold">Rounded Style</h3>
            <EnhancedPagination variant="rounded" />
          </motion.div>
        </div>
      </div>
    );
  }

  // Otherwise, just return the pagination component
  return PaginationComponent;
}
