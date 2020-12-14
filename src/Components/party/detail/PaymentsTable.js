import * as React from 'react';
import ReactDataGrid from '@inovua/reactdatagrid-community'
import '@inovua/reactdatagrid-community/index.css'

const gridStyle = {minWidth: '100%'}

const columns = [
    {name: 'name_source', header: 'Кто', defaultFlex: 1},
    {name: 'name_target', header: 'Кому', defaultFlex: 1},
    {name: 'amount', header: 'Сколько', defaultFlex: 1, type: 'number'}
];

export default function PaymentsTable(props) {
    return (
        <ReactDataGrid
            // idProperty="id"
            style={gridStyle}
            columns={columns}
            dataSource={props.source}
        />
    );
}