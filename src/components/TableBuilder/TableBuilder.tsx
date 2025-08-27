import {Table, type TableProps} from "antd";
import {useMemo, useState} from "react";
import * as React from "react";


type TableBuilderType = {} & TableProps

function TableBuilder(props: TableBuilderType) {
    const {columns} = props
    const [selectedColumns, setSelectedColumns] = useState<(React.Key | undefined)[]>(() => {
        if (!columns) return []
        return columns.map(col => col.key!)
    })

    const visibleColumns = useMemo(() => {
        return columns?.filter(col => selectedColumns.includes(col.key))
    }, [columns, selectedColumns])

    return (
        <Table {...props} columns={visibleColumns}>
        </Table>
    );
}

export default TableBuilder;

