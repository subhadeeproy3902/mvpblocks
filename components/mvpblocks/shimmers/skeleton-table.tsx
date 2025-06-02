import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

interface SkeletonTableProps {
  rowCount?: number;
  columnCount?: number;
  showRealTopBar?: boolean;
  showRealFilter?: boolean;
  showRealColumButton?: boolean;
  showShimmerTopBar?: boolean;
  bodyClassName?: string;
  showTableHeading?: boolean;
  tableHeadings?: string[];
}

interface ShimmerComponentProps {
  className?: string;
}

const ShimmerComponent = ({ className = "" }: ShimmerComponentProps) => {
  return <div className={`animate-pulse rounded bg-gray-500 ${className}`} />;
};

const RealTopBar = ({
  showFilter,
  showColumnToggle,
}: {
  showFilter: boolean;
  showColumnToggle: boolean;
}) => (
  <div className="flex items-center py-4">
    {showFilter && <Input placeholder="Filter values" className="max-w-sm" />}
    {showColumnToggle && (
      <DropdownMenu>
        <div className="ml-auto">
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Columns</Button>
          </DropdownMenuTrigger>
        </div>
      </DropdownMenu>
    )}
  </div>
);

const ShimmerTopBar = () => (
  <div className="flex flex-col rounded-md overflow-hidden mb-2 w-full">
    <div className="h-15 flex items-center justify-between gap-4">
      <ShimmerComponent className="h-6 md:h-8 w-6/12 lg:w-3/12" />
      <ShimmerComponent className="h-6 md:h-8 w-2/12 lg:w-1/12" />
    </div>
  </div>
);

const ShimmerTable = ({
  rowCount,
  columnCount,
  showTableHeading,
  tableHeadings,
}: {
  rowCount: number;
  columnCount: number;
  showTableHeading: boolean;
  tableHeadings?: string[];
}) => {
  const headings = showTableHeading
    ? tableHeadings?.length === columnCount
      ? tableHeadings
      : Array.from({ length: columnCount }, () => "—")
    : [];

  return (
    <div className="flex flex-col rounded-md overflow-hidden border-2 w-full">
      {showTableHeading && (
        <div className="flex items-center border-b-2 h-10 mb-1 px-2">
          {headings.map((heading, idx) => (
            <div key={idx} className="w-full flex justify-center">
              <h3 className="font-semibold">{heading}</h3>
            </div>
          ))}
        </div>
      )}

      {Array.from({ length: rowCount }).map((_, rowIdx) => (
        <div
          key={rowIdx}
          className={`h-10 flex items-center mb-1 px-2 ${
            rowCount - rowIdx === 1 ? "border-b-0" : "border-b-2"
          }`}
        >
          {Array.from({ length: columnCount }).map((_, colIdx) => (
            <ShimmerComponent key={colIdx} className="h-4 w-full mx-2" />
          ))}
        </div>
      ))}
    </div>
  );
};

export default function SkeletonTableWrapper({
  rowCount = 5,
  columnCount = 5,
  showRealTopBar = false,
  showRealFilter = true,
  showRealColumButton = true,
  showShimmerTopBar = true,
  bodyClassName = "px-10",
  showTableHeading = false,
  tableHeadings,
}: SkeletonTableProps) {
  if (showRealTopBar && showShimmerTopBar) {
    console.warn(
      "Only one of 'showRealTopBar' or 'showShimmerTopBar' should be true. Defaulting to 'showRealTopBar'."
    );
  }

  const showTopBarReal = showRealTopBar && !showShimmerTopBar;
  const showTopBarShimmer = showShimmerTopBar && !showRealTopBar;

  return (
    <div className={`w-full ${bodyClassName}`}>
      {showTopBarReal && (
        <RealTopBar
          showFilter={showRealFilter}
          showColumnToggle={showRealColumButton}
        />
      )}

      {showTopBarShimmer && <ShimmerTopBar />}

      <ShimmerTable
        rowCount={rowCount}
        columnCount={columnCount}
        showTableHeading={showTableHeading}
        tableHeadings={tableHeadings}
      />
    </div>
  );
}
