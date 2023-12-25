import classNames from 'classnames';
import React, {Component} from 'react'
import { Icon,  Button } from 'semantic-ui-react'
import SidePopular from '../SidePopular';
import '../style.css';

class Gsearch extends Component {    
    render () {
        const {auto} = this.props;
        return (        
            <div className="w_wrap">
                {/* 2021-10 자동완성이 나올때는 class에 off 추가 : display:none */}
                <div className={classNames("w_inner", {"off" : auto})}>
                    {/* 최근검색어 */}
                    <div className="w_area recent_list">
                        <div className="w_header">
                            <strong className="w_tit">최근 검색어</strong>
                            <Button className="all_dt">전체 삭제</Button>
                        </div>
                        <div className="w_contents">
                            <ul>
                                <li><strong className="rwd">AI 인공지능 뽀개기</strong><Button className="w_dl"><Icon className="i_dl"/></Button></li>
                                <li><strong className="rwd">ai 인공</strong><Button className="w_dl"><Icon className="i_dl"/></Button></li>
                                <li><strong className="rwd">데이터 사이언스</strong><Button className="w_dl"><Icon className="i_dl"/></Button></li>
                                <li><strong className="rwd">데이터</strong><Button className="w_dl"><Icon className="i_dl"/></Button></li>
                                <li><strong className="rwd">파이썬</strong><Button className="w_dl"><Icon className="i_dl"/></Button></li>
                            </ul>

                            {/* 최근 검색어가 없을때, 아래 문구 노출됩니다. */}
                            {/* <p className="txt_nodata">최근 검색어가 없습니다.</p> */}
                        </div>
                    </div>
                    {/* 인기검색어 */}
                    <div className="w_area poplr_list">
                        <div className="w_header">
                            <strong className="w_tit">인기 검색어</strong>
                        </div>
                        <div className="w_contents">
                            <SidePopular />
                        </div>
                    </div>
                </div>

                {/* 2021-10 자동완성구역 class on이 추가 display: block*/}
                <div className={classNames("w_inner_auto",{"on" : auto})}>
                    <ul className="auto_list">
                        <li className="auto_item"><a href="#none"><strong className="a_text">반도체</strong></a></li>
                        <li className="auto_item"><a href="#none"><strong className="a_text">반도체</strong> 관련주</a></li>
                        <li className="auto_item"><a href="#none"><strong className="a_text">반도체</strong> 전망</a></li>
                        <li className="auto_item"><a href="#none"><strong className="a_text">반도체</strong> 공정 절차</a></li>
                        <li className="auto_item"><a href="#none"><strong className="a_text">반도체</strong> etf</a></li>
                        <li className="auto_item"><a href="#none"><strong className="a_text">반도체</strong> 대란에 대한 어드밴스</a></li>
                        <li className="auto_item"><a href="#none"><strong className="a_text">반도체</strong> 부족 이유</a></li>
                        <li className="auto_item"><a href="#none"><strong className="a_text">반도체</strong> 공급망 보고서</a></li>
                        <li className="auto_item"><a href="#none">한미 <strong className="a_text">반도체</strong>, 배터리 연계 기회</a></li>
                        <li className="auto_item"><a href="#none"><strong className="a_text">반도체</strong> 설비용 소재 및 산업용 스테인레스 매출 관계</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Gsearch;