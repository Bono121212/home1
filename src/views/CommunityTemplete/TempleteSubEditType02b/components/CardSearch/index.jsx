import React, {Component} from 'react';
import { Table, Select } from 'semantic-ui-react';
import Calendar from '../Calendar';
import ClearInputBoxSearch from '../ClearInputBoxSearch';

class CardSearch extends Component {
    render() {
        
        const CollegeOptions = [
            { key: 'AI', value: 'AI', text: 'AI' },
            { key: '컬리지1', value: '컬리지1', text: '컬리지1' },
        ]
        const SearchOptions = [
            { key: '전체', value: '전체', text: '전체' },
            { key: '카테1', value: '카테1', text: '카테1' },
        ]

        return (
            <div className="search_box">
                <Table>                           
                    <Table.Body>
                        <Table.Row>
                            <Table.HeaderCell>등록일자</Table.HeaderCell>
                            <Table.Cell  colspan="3"> <Calendar /> </Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.HeaderCell>College</Table.HeaderCell>
                            <Table.Cell>
                                <div className="option_box">
                                    <Select placeholder="AI"  options={CollegeOptions} />
                                </div>                                
                            </Table.Cell>
                            <Table.HeaderCell>Channel</Table.HeaderCell>
                            <Table.Cell>
                                <div className="option_box">
                                    <Select placeholder="AI"  options={CollegeOptions} />
                                </div>
                            </Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.HeaderCell>과정명</Table.HeaderCell>
                            <Table.Cell  colspan="3">
                                <div className="option_box">
                                    <Select placeholder="전체"  options={SearchOptions} />
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


export default CardSearch
