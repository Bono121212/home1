import React, {Component, createRef} from 'react'
import {
    Button
} from 'semantic-ui-react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Calendar extends Component {
    state = {
        // startDate: new Date(),
        // endDate: new Date(),
    };

    handleChange = date => {
        this.setState({
            startDate: date,
            endDate: date
        });
    };

    contextRef = createRef()

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        // const {component: Component, ...rest} = this.props;
        return (
            <div className="ui h40 admin_calendar" id="rangestart">
                <div className="ui input right icon">
                    <DatePicker
                        selected={this.state.startDate}
                        onChange={this.handleChange}
                        selectsStart
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        dateFormat='yy.MM.d'
                    />
                    <i className="calendar24 icon"><span className="blind">date</span></i>
                </div>
                <span>~</span>
                <div className="ui input right icon">
                    <DatePicker
                        selected={this.state.startDate}
                        onChange={this.handleChange}
                        selectsStart
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        dateFormat='yy.MM.d'
                    />
                    <i className="calendar24 icon"><span className="blind">date</span></i>
                </div>
                <div class="admin_date">
                    <Button tabIndex>오늘</Button>
                    <Button tabIndex>최근 1주</Button>
                    <Button tabIndex>최근 1개월</Button>
                    <Button tabIndex>최근 3개월</Button>
                </div>

            </div>
        )
    }
}


export default Calendar
