import * as React from 'react';
import {useCallback} from 'react';
import ReactDataGrid from '@inovua/reactdatagrid-community'
import '@inovua/reactdatagrid-community/index.css'

const gridStyle = {minWidth: '100%'}


export default function DutiesTable(props) {
    const onSelectionChange = useCallback(({selected}) => {
        props.onRowSelected(selected);
    }, [])

    const columns = [
        {name: 'id', type: 'number', defaultWidth: 80, header: 'Id', defaultVisible: false},
        {name: 'whoPaid', header: 'Кто', defaultFlex: 1},
        {name: 'forWhat', header: 'За что', defaultFlex: 1},
        {name: 'amount', header: 'Сколько', defaultFlex: 1, type: 'number'},
        {name: 'currency', header: 'Валюта', defaultFlex: 1, editable: false},
    ];

    return (
        <ReactDataGrid
            idProperty="id"
            enableSelection
            onSelectionChange={onSelectionChange}
            style={gridStyle}
            columns={columns}
            dataSource={props.source}
            editable={props.editable}
            onEditComplete={props.onEditComplete}
        />
    );
}
