import React, {Component} from 'react'
import {
    Segment, Button, Radio,
} from 'semantic-ui-react'
import 'react-datepicker/dist/react-datepicker.css';
import classNames from 'classnames';
import {SearchFilter} from '../../../../../components';


class TitleArea extends Component {
    //
    state = {
        isOnFilter: false
    }

    onClickFilter = () =>  this.setState((prevState) => ({isOnFilter: !prevState.isOnFilter}));

    render() {
        //
        const { isOnFilter } = this.state;

        return (
            <div className="sort-condition">

                <Segment className="full">
                    <div className="keyword">
                        <span>'Big Data 설계'</span>에 대한 검색 결과 입니다.
                    </div>
                    <div className="right-area">
                        <div className="sort">
                            <Radio className="base" label="과정명으로 검색" name="search01" defaultChecked/>
                            <Radio className="base" label="상세 검색" name="search01"/>
                            <Radio className="base" label="Tag 검색" name="search01"/>
                        </div>
                        <Button className={classNames('btn-filter-blue', isOnFilter ? 'on' : '')} onClick={this.onClickFilter}>
                            <span>Filter(05)</span>
                        </Button>
                    </div>
                    {/*Filter*/}
                    <SearchFilter isOnFilter={isOnFilter}/>
                </Segment>
            </div>
        )
    }
}


export default TitleArea
