import React from 'react';
import { Select } from 'semantic-ui-react';
import BubblePopup from '../../../CubeVideoQuiz/components/BubblePopup';
import CubeDetailSec from '../../../_Components/CubeDetailSec';

const selectOptions02 = [
    { key: "KOR", value: "KOR", text: "KOR" },
    { key: "CHN", value: "CHN", text: "CHN" },
    { key: "ENG", value: "ENG", text: "ENG" },
];

const CubeScript = () => {
    return (
        <CubeDetailSec className="cube-script-sec">
            <div className="transcript-sec">
                {/* 1. 버튼순서가 바뀌었습니다. 2. trans-lang class가 추가되었습니다. */}
                <div className="transcript-select">
                    <Select
                        placeholder="분류를 선택해주세요"
                        className="ui small-border dropdown m0"
                        defaultValue={selectOptions02[0].value}
                        options={selectOptions02}
                    />
                    <div className='transcript-utils'>
                        <BubblePopup /> {/* button 순서 바뀜, popup내 인라인스타일도 추가되었습니다. */}
                        <button class="ui button btn-down">Download</button>
                    </div>
                </div>
                <div className='transcript-box'>
                    <p>
                        Now one question that you might have about that, is about this notion of the right way of thinking about things.
                    </p>
                    <p>
                        Now these are really, really important questions for philosophy, and I don't want to try and answer them now. But I do want to consider what a couple of famous, influential philosophers have said about those questions. And that's why I'm here at Old Calton Cemetery, outside the David Hume monument. David Hume was a famous Edinburgh-based philosopher. And he thought that a skeptical attitude towards philosophy's capacity to find the truth about the world was entirely appropriate.
                    </p>
                    <p className="transcript-active">
                        Now one question that you might have about that, is about this notion of the right way of thinking about things.
                    </p>
                    <p>
                        Now these are really, really important questions for philosophy, and I don't want to try and answer them now. But I do want to consider what a couple of famous, influential philosophers have said about those questions. And that's why I'm here at Old Calton Cemetery, outside the David Hume monument. David Hume was a famous Edinburgh-based philosopher.
                        <span className="transcript-hover">And he thought that a skeptical attitude towards philosophy's capacity to find the truth about the world was entirely appropriate.</span>
                    </p>
                    <p>
                        Now these are really, really important questions for philosophy, and I don't want to try and answer them now. But I do want to consider what a couple of famous, influential philosophers have said about those questions. And that's why I'm here at Old Calton Cemetery, outside the David Hume monument. David Hume was a famous Edinburgh-based philosopher. And he thought that a skeptical attitude towards philosophy's capacity to find the truth about the world was entirely appropriate.
                    </p>
                    <p>
                        Now one question that you might have about that, is about this notion of the right way of thinking about things.
                    </p>
                    <p>
                        Now these are really, really important questions for philosophy, and I don't want to try and answer them now. But I do want to consider what a couple of famous, influential philosophers have said about those questions. And that's why I'm here at Old Calton Cemetery, outside the David Hume monument. David Hume was a famous Edinburgh-based philosopher. And he thought that a skeptical attitude towards philosophy's capacity to find the truth about the world was entirely appropriate.
                    </p>
                </div>
            </div>
        </CubeDetailSec>
    )
}
export default CubeScript
