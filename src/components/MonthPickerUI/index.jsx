import React, { useRef, useState } from "react";
import { Input } from "semantic-ui-react";
import MonthPicker from "react-month-picker";
import "react-month-picker/css/month-picker.css";

const MonthPickerUI = (props) => {
	const [value, setValue] = useState({ year: props.dataYear, month: props.dataMonth, strMonth: props.dataStrMonth });
	const monthPickerRef = useRef(null);

	const showPicker = () => {
		if (monthPickerRef && monthPickerRef.current) {
			console.log(monthPickerRef.current);
			monthPickerRef.current.show();
		}
	};

	const hidePicker = () => {
		if (monthPickerRef && monthPickerRef.current) {
			monthPickerRef.current.dismiss();
		}
	};

	const handlePickerChange = (...args) => {
		// 노출되는 월 표시
		let argsStrMonth = args[1];
		if (args[1] < 10) { argsStrMonth = "0"+args[1] }
		setValue({ year: args[0], month: args[1], strMonth: argsStrMonth });
		hidePicker(); // this works!
	};

	const lang = {
		months: [
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"12"
		],
		from: "From",
		to: "To"
	};
	return (
		<MonthPicker
			lang={lang.months}
			ref={monthPickerRef}
			value={value}
			onChange={handlePickerChange}
			className="ui-month-picker"
		>
			<Input onClick={showPicker} placeholder="" value={value.year + '-' + value.strMonth} readonly={true} />
		</MonthPicker>

	)
}
export default MonthPickerUI;
