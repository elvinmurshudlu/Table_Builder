import type {ColumnProps} from "antd/es/table";
type ColumnFactory = (...args: never[]) => ColumnProps;

export const TableColumns   = {
    documentNumber:()=>({
        dataIndex:'documentNumber',
        title:`Sənəd nömrəsi `,
        key:'documentNumber',
    }),
    documentContent:()=>({
        dataIndex:'content',
        title:"Məzmun",
        key:'content',
    }),
    conditionContent:()=>({
        dataIndex:'content',
        title:'Sert',
        render:(value, _record, index)=><>{value} & {index}</>
    })


} satisfies Record<string, ColumnFactory>;