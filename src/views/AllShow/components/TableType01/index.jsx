import React from 'react';
import { Table } from 'semantic-ui-react'
import './TableType01.css';


const TableType01 = () => (
    <Table>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>header</Table.HeaderCell>
                <Table.HeaderCell>header</Table.HeaderCell>
                <Table.HeaderCell>header</Table.HeaderCell>
                <Table.HeaderCell>header</Table.HeaderCell>
                <Table.HeaderCell>header</Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
            <Table.Row>
                <Table.Cell>cell</Table.Cell>
                <Table.Cell>cell</Table.Cell>
                <Table.Cell>cell</Table.Cell>
                <Table.Cell>cell</Table.Cell>
                <Table.Cell>cell</Table.Cell>
            </Table.Row>

            <Table.Row>
                <Table.Cell>cell</Table.Cell>
                <Table.Cell>cell</Table.Cell>
                <Table.Cell>cell</Table.Cell>
                <Table.Cell>cell</Table.Cell>
                <Table.Cell>cell</Table.Cell>
            </Table.Row>

            <Table.Row>
                <Table.Cell>cell</Table.Cell>
                <Table.Cell>cell</Table.Cell>
                <Table.Cell>cell</Table.Cell>
                <Table.Cell>cell</Table.Cell>
                <Table.Cell>cell</Table.Cell>
            </Table.Row>
        </Table.Body>

        <Table.Footer>
            <Table.Row>
                <Table.HeaderCell colspan="5">footer</Table.HeaderCell>
            </Table.Row>
        </Table.Footer>
    </Table>
);

export default TableType01