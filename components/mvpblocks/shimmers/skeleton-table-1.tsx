export interface SkeletonTableProps {
  rowCount?: number;
  columnCount?: number;
  showTopBar?: boolean;
  showFilter?: boolean;
  showColumnToggle?: boolean;
  bodyClassName?: string;
  showTableHeading?: boolean;
  tableHeadings?: string[];
  columnWidthArray?: string[];
}

interface ShimmerComponentProps {
  className?: string;
}

interface ShimmerTableProps {
  rowCount?: number;
  columnCount?: number;
  renderHeading?: React.ReactNode;
  columnWidthArray?: string[];
}

export const ShimmerComponent: React.FC<ShimmerComponentProps> = ({ className = "" }) => {
  return <div className={`animate-pulse rounded bg-gray-500 ${className}`} />;
};

export const ShimmerTable: React.FC<ShimmerTableProps> = ({
  rowCount = 5,
  columnCount = 5,
  renderHeading,
  columnWidthArray = ["w-2/12", "w-4/12", "w-2/12", "w-3/12", "w-1/12"]
}) => {

  if (columnWidthArray && (columnCount !== columnWidthArray.length)) {
    return (
      <h3 className="text-center text-red-400">Please ensure that columnCount and columnWidthArray length is equal</h3>
    )
  };

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-full flex flex-col rounded-md overflow-hidden border-2">
        {renderHeading}
        {Array.from({ length: rowCount }).map((_, rowIdx) => (
          <div
            key={rowIdx}
            className={`h-10 flex items-center mb-1 ${rowCount - rowIdx === 1 ? "border-b-0" : "border-b-2"
              }`}
          >
            {Array.from({ length: columnCount }).map((_, colIdx) => (
              <div key={colIdx} className={`h-full flex items-center ${columnWidthArray ? columnWidthArray[colIdx] : "w-full"} ${colIdx !== columnCount - 1 && "border-r-2"}`}>
                <ShimmerComponent key={colIdx} className={`h-3 w-full mx-2`} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const ShimmerTopBar: React.FC<{ showFilter: boolean; showColumnToggle: boolean }> = ({
  showFilter,
  showColumnToggle,
}) => (
  <div className="flex flex-col rounded-md overflow-hidden mb-2 w-full">
    <div className="h-15 flex items-center justify-between gap-4">
      {showFilter && (<ShimmerComponent className="h-6 md:h-8 w-6/12 lg:w-3/12" />)}
      {showColumnToggle && (<ShimmerComponent className="h-6 md:h-8 w-2/12 lg:w-1/12 ml-auto" />)}
    </div>
  </div>
);

export default function SkeletonTableOneWrapper({
  rowCount = 5,
  columnCount = 5,
  showTopBar = true,
  showFilter = true,
  showColumnToggle = true,
  bodyClassName = "px-10",
}: SkeletonTableProps) {

  return (
    <div className={`w-full ${bodyClassName}`}>
      {showTopBar && <ShimmerTopBar
        showFilter={showFilter}
        showColumnToggle={showColumnToggle}
      />}
      <ShimmerTable
        rowCount={rowCount}
        columnCount={columnCount}
      />
    </div>
  );
}
