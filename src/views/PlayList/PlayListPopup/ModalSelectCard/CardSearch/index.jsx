import React, {Component} from 'react';
import { Table, Select } from 'semantic-ui-react';
import ClearInputBoxSearch from '../ClearInputBoxSearch';


class CardSearch extends Component {
    render() {
        
        const CollegeOptions = [
            { key: 'AI', value: 'AI', text: 'AI' },
            { key: '컬리지1', value: '컬리지1', text: '컬리지1' },
        ]

        return (
            <div className="search_box box2">
                <Table>                           
                    <Table.Body>
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
                            <Table.Cell colspan="3">
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
