import React, {Component, createRef} from 'react';
import { Table, Select } from 'semantic-ui-react';
import Calendar from '../Calendar';
import ClearInputBoxSearch from '../ClearInputBoxSearch';


class NoteSearch extends Component {
    contextRef = createRef()
    state = {activeItem: 'NoteAll'}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})
    
    handleNote = (e, titleProps) => {
        const { index } = titleProps;
        const { activeIndex } = this.state;
        const newIndex = activeIndex === index ?  activeIndex - 1: index;
        this.setState({ activeIndex: newIndex });
    };

    render() {

        const CategoryOptions = [
            { key: '전체', value: '전체', text: '전체' },
            { key: '카테1', value: '카테1', text: '카테1' },
        ]
        const CategoryOptionsDetail = [
            { key: 'AI Trend Watch', value: 'AI Trend Watch', text: 'AI Trend Watch' },
            { key: '카테1', value: '카테1', text: '카테1' },
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
                            <Table.HeaderCell>Note 작성일자</Table.HeaderCell>
                            <Table.Cell> <Calendar /> </Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.HeaderCell>Category</Table.HeaderCell>
                            <Table.Cell>
                                <div className="option_box">
                                    <Select placeholder="전체"  options={CategoryOptions} />
                                </div>
                                <div className="option_box">
                                    <Select className="option_detail" placeholder="AI Trend Watch"  options={CategoryOptionsDetail} />
                                </div>
                            </Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.HeaderCell>검색어</Table.HeaderCell>
                            <Table.Cell>
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


export default NoteSearch
