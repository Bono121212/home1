import React from "react";
import EmptyBtn from '../../../../../images/all/btn-radio-type-2-nomal.svg';
import RadioBtn from '../../../../../images/all/btn-radio-type-2-selected.svg';

const CountRadioChart02 = () => {
	return (
		<div className="survey-count-chart-wrap">
			<div className="survey-count-index">
				<div className='survey-count-col'>1</div>
				<div className='survey-count-col'>2</div>
				<div className='survey-count-col'>3</div>
				<div className='survey-count-col'>4</div>
				<div className='survey-count-col'>5</div>
			</div>
			<div className="survey-count-radio">
				<div className='survey-count-col'>
					<div className='radio-img'>
						<img src={EmptyBtn} alt="" />
						<span className='txt'>26</span>
					</div>
				</div>
				<div className='survey-count-col'>
					<div className='radio-img'>
						<img src={EmptyBtn} alt="" />
						<span className='txt'>26</span>
					</div>
				</div>
				<div className='survey-count-col'>
					<div className='radio-img'>
						<img src={EmptyBtn} alt="" />
						<span className='txt'>28</span>
					</div>
				</div>
				<div className='survey-count-col'>
					<div className='radio-img'>
						<img src={EmptyBtn} alt="" />
						<span className='txt'>66</span>
					</div>
				</div>
				<div className='survey-count-col'>
					<div className='radio-img'>
						<img src={RadioBtn} alt="" />
						<span className='txt'>261</span>
					</div>
				</div>
			</div>
		</div>

	);
}

export default CountRadioChart02;
