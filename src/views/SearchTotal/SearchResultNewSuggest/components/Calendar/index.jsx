import React, { useState } from 'react';
import { Button, Image } from 'semantic-ui-react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import btnSearch from "../../../../../images/all/search-small.png"
import btnSearchBefore from "../../../../../images/all/search-small_before.png"

const Calendar = () => {    
    
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();

    const handleChangeStart = (date) => {
        setStartDate(date);
    };
    const handleChangeEnd = (date) => {
        setEndDate(date);
    };
    return (
        // <div className="search_calender">에  disabled클래스 추가될 경우 시작일 선택/종료일 선택/ 불가합니다
        <div className="search_calender">
            <div className="date_picker">
                <DatePicker
                    selected={startDate}
                    onChange={(date) => handleChangeStart(date)}
                    dateFormat='yy.MM.dd'
                    placeholderText="시작일 선택"
                />
            </div>
            <span>~</span>
            <div className="date_picker">
                <DatePicker
                    selected={endDate}
                    onChange={(date) => handleChangeEnd(date)}
                    dateFormat='yy.MM.dd'
                    placeholderText="종료일 선택"
                    minDate={startDate}
                />
                <Button className="btn_dateP"><Image src={btnSearchBefore} alt="검색버튼" className="before"/></Button>
                <Button className="btn_dateP"><Image src={btnSearch} alt="검색버튼" className="after"/></Button>
            </div>
        </div>
    )
}


export default Calendar