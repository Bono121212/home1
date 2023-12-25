import React, {Component} from 'react';
import {  Table, Select } from 'semantic-ui-react';
import Calendar from '../Calendar';
import ClearInputBoxSearch from '../ClearInputBoxSearch';


class SearchBox extends Component {

    render() {
        const SearchOptions = [
            { key: '전체', value: '전체', text: '전체' },
            { key: '카테1', value: '카테1', text: '카테1' },
        ]

        return (
            <div className="ct_search_box">
                <Table>                           
                    <Table.Body>
                        <Table.Row>
                            <Table.HeaderCell>기간</Table.HeaderCell>
                            <Table.Cell> <Calendar /> </Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.HeaderCell>검색어</Table.HeaderCell>
                            <Table.Cell>
                                <div className="option_box">
                                    <Select placeholder="전체" options={SearchOptions} />
                                </div>
                                <ClearInputBoxSearch />
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>   
            </div>
        )
    }
}


export default SearchBox
