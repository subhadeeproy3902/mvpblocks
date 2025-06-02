import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

interface SkeletonTableInterface {
  rowCount?: number;
  columnCount?: number;
  showRealTopBar?: boolean;
  showShimmerTopBar?: boolean;
  bodyClassName?: string;
}

interface ShimmerComponentProps {
  className?: string;
}

const ShimmerComponent = ({ className = "" }: ShimmerComponentProps) => {
  return (
    <div className={`animate-pulse rounded bg-gray-500 ${className}`}></div>
  );
};

// This skeleton is designed for the ShadCN data table, which includes a filter box and a column visibility toggle menu. 
// It is highly customizable and can also be used with other tables as needed.

export default function SkeletonTable({
  rowCount = 3,
  columnCount = 4,
  showRealTopBar = true,
  showShimmerTopBar = true,
  bodyClassName = "px-10",
}: SkeletonTableInterface) {
  return (
    <div className={`w-full ${bodyClassName}`}>
      
      {showRealTopBar && (
        <div className="flex items-center py-4">
          <Input
            placeholder="Filter values"
            className="max-w-sm"
          />
          <DropdownMenu>
            <div className="ml-auto">
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  Columns
                </Button>
              </DropdownMenuTrigger>
            </div>
          </DropdownMenu>
        </div>
      )}

      {showShimmerTopBar && (
        <div className="flex flex-col rounded-md overflow-hidden mb-2 w-full">
          <div className="h-15 flex items-center justify-between gap-4">
            {/* Filterbox */}
            <ShimmerComponent className="h-6 md:h-8 w-6/12 lg:w-3/12" />
            {/* Column visibility toggle menu*/}
            <ShimmerComponent className="h-6 md:h-8 w-2/12 lg:w-1/12" />
          </div>
        </div>
      )}

      <div className="flex flex-col rounded-md overflow-hidden border-2 w-full">
        {Array.from({ length: rowCount }).map((_, rowIdx) => (
          <div key={rowIdx} className={`h-10 flex items-center mb-1 px-2 ${rowCount - rowIdx === 1 ? "border-b-0" : "border-b-2"}`}>
            {Array.from({ length: columnCount }).map((_, colIdx) => (
              <ShimmerComponent key={colIdx} className="h-4 w-full mx-2" />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
