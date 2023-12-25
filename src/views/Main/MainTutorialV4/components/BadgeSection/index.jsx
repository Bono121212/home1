import React, {Component} from 'react';
import { Button, Icon, Segment } from "semantic-ui-react";


class BadgeSection extends Component {
    render() {
        return (
            <>
                <Segment className="full learning-section badge-section type4">
                    <div className="section-head">
                        <div className="sec-tit-txt"><strong>김써니님</strong>이<br/>도전중인 뱃지</div>
                        <div className="badge-listbox">
                            <div className="badge-list-wrap">
                                <a href={()=>false} className="badge-col-list">
                                    {/* 아래 아이콘('.cate-icon')의 bg컬러를 카테고리별 벳지컬러에 맞춰주시면 됩니다(어드민 내 테마 컬러) */}
                                    <div className="badge-col cate-sign"><Icon className="cate-icon badge3"/></div>
                                    <div className="badge-col cate">미래Biz</div>
                                    <div className="badge-col name">반도체 Biz Essentials</div>
                                </a>
                                <a href={()=>false} className="badge-col-list">
                                    <div className="badge-col cate-sign"><Icon className="cate-icon badge4"/></div>
                                    <div className="badge-col cate">SK C&C</div>
                                    <div className="badge-col name">AI/DT AWS Developer Asso.</div>
                                </a>
                                <a href={()=>false} className="badge-col-list">
                                    <div className="badge-col cate-sign"><Icon className="cate-icon badge5"/></div>
                                    <div className="badge-col cate">BM Design</div>
                                    <div className="badge-col name">Mesurement  Essentials</div>
                                </a>
                                <a href={()=>false} className="badge-col-list">
                                    <div className="badge-col cate-sign"><Icon className="cate-icon badge3"/></div>
                                    <div className="badge-col cate">미래Biz</div>
                                    <div className="badge-col name">반도체 Biz Essentials</div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="section-body">
                        <div className="badge-banner-wrap">
                            <div className="badge-txt-box">
                                <div className="badge-txt">지금까지 총 <strong>4개</strong>의 뱃지를 <br/>획득하셨어요!</div>
                                <Button className="btn-badge-go">새로운 뱃지 도전하기!</Button>
                            </div>
                        </div>
                    </div>
                </Segment>
            </>
        )
    }

}

export default BadgeSection