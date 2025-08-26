import type {ColumnProps} from "antd/es/table";
type ColumnFactory = (...args: never[]) => ColumnProps;

export const TableColumns   = {
    documentNumber:(id?:number)=>({
        dataIndex:'documentNumber',
        title:`Sənəd nömrəsi ${id}`,
        key:'documentNumber',
    }),


} satisfies Record<string, ColumnFactory>;