import React from "react";
import { useEffect } from "react";

const ProgressCircle = (props) => {
    useEffect(()=>{
        const eleGroup = document.querySelector("#"+props.id);
        const lenth = document.querySelector("#"+props.id+ " .circle_bar circle").getTotalLength();
        const eleAct = document.querySelector("#"+props.id+ " .circle_act circle");
        // 0% 아닌 경우만 값을 처리 한다. (CSS 기본값이 0%)
        if (props.percent !== 0) { eleAct.style.strokeDashoffset = lenth - (lenth*(props.percent/100));}
        // 100% 인경우 is_completed 추가된다. (100% 인경우 계산 없이 클래스로 적용됨)
        if (props.percent === 100) { eleGroup.classList.add('is_completed') }
    },[props.id, props.percent]);

    return (
        <div className='prgrs_circle' id={props.id}>
            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120" className='circle_bar'>
                <circle cx="60" cy="60" r="60" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120" className='circle_act'>
                <circle cx="60" cy="60" r="60" />
            </svg>
            <span className="icon complete" aria-hidden="true"></span>
            <span className="icon pic" aria-hidden="true"></span>
        </div>
    )
}
export default ProgressCircle