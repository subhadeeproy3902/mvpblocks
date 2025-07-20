import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  ErrorMessage,
  ShimmerTable,
  SkeletonTableProps,
} from './skeleton-table-1';

const RealTopBar: React.FC<SkeletonTableProps> = ({
  showFilter,
  showColumnToggle,
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

const TableHeading: React.FC<SkeletonTableProps> = ({
  columnCount,
  showTableHeading,
  tableHeadings,
  columnWidthArray,
}) => {
  if (!columnCount || columnCount === 0)
    return (
      <ErrorMessage
        message={'Please ensure that columnCount is greater than 0'}
      />
    );

  if (columnWidthArray && columnCount !== columnWidthArray.length) {
    return (
      <ErrorMessage
        message={
          'Please ensure that columnCount and columnWidthArray length is equal'
        }
      />
    );
  }

  const headings = showTableHeading
    ? tableHeadings?.length === columnCount
      ? tableHeadings
      : Array.from({ length: columnCount }, () => '—')
    : [];

  return (
    <div
      className={`mb-1 flex h-10 items-center border-b-2 ${showTableHeading ? 'block' : 'hidden'}`}
    >
      {headings.map((heading, idx) => (
        <div
          key={idx}
          className={`flex justify-center ${columnWidthArray ? columnWidthArray[idx] : 'w-full'} ${idx !== headings.length && 'border-l-2'}`}
        >
          <h3 className="truncate overflow-hidden text-xs font-semibold whitespace-nowrap md:text-[15px]">
            {heading}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default function SkeletonTableTwoWrapper({
  rowCount = 5,
  columnCount = 5,
  showTopBar = true,
  showFilter = true,
  showColumnToggle = true,
  bodyClassName = 'px-10',
  tableHeadings = ['Name', 'Email', 'Phone', 'Verified', 'Options'],
  columnWidthArray = ['w-2/12', 'w-4/12', 'w-3/12', 'w-2/12', 'w-1/12'],
}: SkeletonTableProps) {
  return (
    <div className={`w-full ${bodyClassName}`}>
      {showTopBar && (
        <RealTopBar
          showFilter={showFilter}
          showColumnToggle={showColumnToggle}
        />
      )}

      <ShimmerTable
        rowCount={rowCount}
        columnCount={columnCount}
        columnWidthArray={columnWidthArray}
        renderHeading={
          <TableHeading
            columnCount={columnCount}
            showTableHeading={true}
            tableHeadings={tableHeadings}
            columnWidthArray={columnWidthArray}
          />
        }
      />
    </div>
  );
}
