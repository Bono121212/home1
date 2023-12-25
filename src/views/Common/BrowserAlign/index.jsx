import React, { useEffect, useState } from 'react'
import './style.css';
import {Dimmer} from "semantic-ui-react";
import IconBrowser from "../../../images/all/icon-browser.png";


export default function BrowserAlign  () {
    const [seconds, setSeconds] = useState(5);

    useEffect(()=>{
        const countdown = setInterval(()=>{
            if(parseInt(seconds) > 0){
                setSeconds(parseInt(seconds) - 1);
            }
            if(parseInt(seconds) === 0 ) clearInterval(countdown);
        }, 1000);
        return () => clearInterval(countdown);
    },[seconds])

    return(
        <Dimmer active={true} page className="container-full" as="section" inverted>
            <div className="align browser">
                <div>
                    <img src={IconBrowser} alt='ie 브라우저지원 종료안내' className="ui image"/>
                </div>
                <div className="align-text">
                    <strong>IE 브라우저 이용 시<br/>동영상 재생에 제약이 있습니다.</strong>
                    <p>Microsoft IE 브라우저 지원 종료 계획에 따라<br/>Edge나 Chrome 이용을 권장합니다.</p>
                    <span>5초 뒤 자동으로 Edge 브라우저로 이동합니다.</span>
                </div>
                <div className="align-count">
                    <strong className="cnt-num">{seconds}</strong>
                </div>
            </div>
        </Dimmer>
    )
}




