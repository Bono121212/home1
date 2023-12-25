import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "./react-datepicker.css";

const DatePickerMonth = (props) => {
	const [startDate, setStartDate] = useState(new Date());
	return (
		<div className="ui h40 calendar">
			<div className="ui input right icon">
				<ReactDatePicker
					popperClassName="react-datepicker-month"
					selected={startDate}
					onChange={(date) => setStartDate(date)}
					dateFormat="yyyy-MM"
					showMonthYearPicker
				/>
				<i className="calendar24 icon">
					<span className="blind">date</span>
				</i>
			</div>
		</div>
	)
}
export default DatePickerMonth;
