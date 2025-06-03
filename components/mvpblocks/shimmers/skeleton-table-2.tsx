import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ShimmerTable, SkeletonTableProps } from "./skeleton-table-1";
import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const RealTopBar:React.FC<SkeletonTableProps> = ({
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
}) => {
    if(!columnCount || columnCount === 0) return null;
    
    const headings = showTableHeading
        ? (tableHeadings?.length === columnCount
            ? tableHeadings
            : Array.from({ length: columnCount }, () => "—"))
        : [];

    return (
        <div className={`flex items-center border-b-2 h-10 mb-1 px-2 ${showTableHeading ? "block" : "hidden"}`}>
            {headings.map((heading, idx) => (
                <div key={idx} className="w-full flex justify-center">
                    <h3 className="font-semibold">{heading}</h3>
                </div>
            ))}
        </div>
    )
}

export default function SkeletonTableTwoWrapper({
    rowCount = 5,
    columnCount = 5,
    showTopBar = true,
    showFilter = true,
    showColumnToggle = true,
    bodyClassName = "px-10",
    tableHeadings = ["Name", "Email", "Phone", "Verified", "Options"],
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
                renderHeading={
                    <TableHeading 
                        columnCount={columnCount}
                        showTableHeading={true}
                        tableHeadings={tableHeadings}
                    />
                }
            />
        </div>
    );
}
