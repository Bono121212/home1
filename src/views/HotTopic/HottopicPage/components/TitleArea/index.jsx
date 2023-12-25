import React, { Component } from 'react'


export default class TitleArea extends Component {
    render() {
        return(
            <div className="topic-title">
                <div className="page-title-wrap">
                    <div className="txt-box">
                        <div className="page-tit">Hot Topic 전체보기</div>
                        <div className="sub-txt" style={{whiteSpace: "pre-wrap"}}>
                            mySUNI에서 핫한 주제별로 모은 강의를 추천 드려요.
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}