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

export const ShimmerComponent: React.FC<ShimmerComponentProps> = ({
  className = '',
}) => {
  return <div className={`animate-pulse rounded bg-gray-500 ${className}`} />;
};

export const ErrorMessage: React.FC<{ message: string }> = ({ message }) => {
  return <h3 className="text-center text-red-400">{message}</h3>;
};

export const ShimmerTable: React.FC<ShimmerTableProps> = ({
  rowCount = 5,
  columnCount = 5,
  renderHeading,
  columnWidthArray,
}) => {
  if (columnWidthArray && columnCount !== columnWidthArray.length) {
    return (
      <ErrorMessage
        message={
          'Please ensure that columnCount and columnWidthArray length is equal'
        }
      />
    );
  }

  return (
    <div className="w-full overflow-x-auto">
      <div className="flex min-w-full flex-col overflow-hidden rounded-md border-2">
        {renderHeading}
        {Array.from({ length: rowCount }).map((_, rowIdx) => (
          <div
            key={rowIdx}
            className={`mb-1 flex h-10 items-center ${
              rowCount - rowIdx === 1 ? 'border-b-0' : 'border-b-2'
            }`}
          >
            {Array.from({ length: columnCount }).map((_, colIdx) => (
              <div
                key={colIdx}
                className={`flex h-full items-center ${columnWidthArray ? columnWidthArray[colIdx] : 'w-full'} ${colIdx !== columnCount - 1 && 'border-r-2'}`}
              >
                <ShimmerComponent key={colIdx} className={`mx-2 h-3 w-full`} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const ShimmerTopBar: React.FC<{
  showFilter: boolean;
  showColumnToggle: boolean;
}> = ({ showFilter, showColumnToggle }) => (
  <div className="mb-2 flex w-full flex-col overflow-hidden rounded-md">
    <div className="flex h-15 items-center justify-between gap-4">
      {showFilter && (
        <ShimmerComponent className="h-6 w-6/12 md:h-8 lg:w-3/12" />
      )}
      {showColumnToggle && (
        <ShimmerComponent className="ml-auto h-6 w-2/12 md:h-8 lg:w-1/12" />
      )}
    </div>
  </div>
);

export default function SkeletonTableOneWrapper({
  rowCount = 5,
  columnCount = 5,
  showTopBar = true,
  showFilter = true,
  showColumnToggle = true,
  bodyClassName = 'px-10',
  columnWidthArray,
}: SkeletonTableProps) {
  return (
    <div className={`w-full ${bodyClassName}`}>
      {showTopBar && (
        <ShimmerTopBar
          showFilter={showFilter}
          showColumnToggle={showColumnToggle}
        />
      )}
      <ShimmerTable
        rowCount={rowCount}
        columnCount={columnCount}
        columnWidthArray={columnWidthArray}
      />
    </div>
  );
}
