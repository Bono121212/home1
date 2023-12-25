import React from "react";
import { Button, Icon } from "semantic-ui-react";
import previewImg from "../../../../../images/all/preview-img.png";

export default function VideoQuiz () {
    return(
      <div className="video-quiz-block-layer">
        <div className="video-quiz-wrap sty2">
            <div className="video-quiz-header">
                <h1>Video QUIZ</h1>
            </div>
            <div className="quiz-content-wrap">
                <div className="video-quiz-content">
                    <div className="quiz-header">
                        <div className="quiz-paging step01">
                            <span className="active"></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <h2>
                            잘 만든 기획서는 기획서에 대한 당신의 선택은?
                        </h2>
                        <button className="quiz-preview-img">
                            <img src={previewImg} alt="" />
                        </button>
                        <p>다른 분들의 의견을 살펴보세요.</p>
                    </div>
                    <div className="quiz-descriptive">
                        <div className="descriptive-box">
                            <span>ab****</span>
                            <p> 스티브 잡스의 PT와 같은 핵심만 간결한 기획서이지만 명확한 의도 전달을 위한 적절한 예시가 반드시 필요하다고<br/>
                            생각합니다. </p>
                        </div>
                        <div className="descriptive-box">
                            <span>play19***</span>
                            <p> 문서의 의도를 논리적으로 정리해야 합니다. 논리성이 떨어지는 기획서는 누구도 설득하지 못합니다. 나 스스로를 이해 시킬 수 있고, 누구나 설득시킬 수 있는 그러한 기획안을 만들기 위해 철저한 분석을 통한 적절한 예시, 그러한 요소를 논리적 순서
                            에 맞춰서 제공해야 한다고 봅니다.</p>
                        </div>
                        <div className="descriptive-box">
                            <span>airco***</span>
                            <p> 벤치마크!! 몇 번을 강조해도 중요성이 모자라지 않음. 뭐니 뭐니 해도 기획서도 트렌드!!</p>
                        </div>
                        <div className="descriptive-box">
                            <span>c2chi***</span>
                            <p> 보기 좋아야 정확히 이해를 합니다. 발표 내용을 친절한 디자인으로 정리한 기획서가 가장 좋다고 봅니다. 서술형 답변이 들어갑니다.
                            목록 10개 초과시 list more 버튼 클릭으로 추가 데이터 호출</p>
                        </div>
                        <div className="descriptive-box">
                            <span>ab****</span>
                            <p> 스티브 잡스의 PT와 같은 핵심만 간결한 기획서이지만 명확한 의도 전달을 위한 적절한 예시가 반드시 필요하다고<br/> 생각합니다.</p>
                            </div>
                        <div className="descriptive-box">
                            <span>ab****</span>
                            <p> 스티브 잡스의 PT와 같은 핵심만 간결한 기획서이지만 명확한 의도 전달을 위한 적절한 예시가 반드시 필요하다고<br/> 생각합니다.</p>
                        </div>
                        <div className="more-comments">
                            <Button icon className="left moreview">
                                <Icon className="moreview"/>list more
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="video-quiz-footer">
                    <button className="ui button fix bg">확인</button>
                </div>
            </div>
        </div>
    </div>
    )
}