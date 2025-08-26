import {Table, type TableProps} from "antd";


type TableBuilderType = {} & TableProps

function TableBuilder ({...props}: TableBuilderType) {
    return (
        <Table {...props}>
        </Table>
    );
}

export default TableBuilder;

