import React from "react";
import EmptyBtn from '../../../../../images/all/btn-radio-type-2-nomal.svg';
import RadioBtn from '../../../../../images/all/btn-radio-type-2-selected.svg';

const CountRadioChart01 = () => {
	return (
		<div className="survey-count-chart-wrap">
			<div className="survey-count-index">
				<div className='survey-count-col'>1</div>
				<div className='survey-count-col'>2</div>
				<div className='survey-count-col'>3</div>
				<div className='survey-count-col'>4</div>
				<div className='survey-count-col'>5</div>
				<div className='survey-count-col'>6</div>
				<div className='survey-count-col'>7</div>
				<div className='survey-count-col'>8</div>
				<div className='survey-count-col'>9</div>
				<div className='survey-count-col'>10</div>
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
				<div className='survey-count-col'>
					<div className='radio-img'>
						<img src={EmptyBtn} alt="" />
						<span className='txt'>26</span>
					</div>
				</div>
				<div className='survey-count-col'>
					<div className='radio-img'>
						<img src={EmptyBtn} alt="" />
						<span className='txt'>0</span>
					</div>
				</div>
				<div className='survey-count-col'>
					<div className='radio-img'>
						<img src={EmptyBtn} alt="" />
						<span className='txt'>0</span>
					</div>
				</div>
				<div className='survey-count-col'>
					<div className='radio-img'>
						<img src={EmptyBtn} alt="" />
						<span className='txt'>34</span>
					</div>
				</div>
				<div className='survey-count-col'>
					<div className='radio-img'>
						<img src={RadioBtn} alt="" />
						<span className='txt'>1</span>
					</div>
				</div>
			</div>
			<div className="survey-count-text">앞에 오는 텍스트 항목이 들어갑니다</div>
			<div className="survey-count-text">뒤에 오는 텍스트 항목이 들어갑니다</div>
		</div>

	);
}

export default CountRadioChart01;
