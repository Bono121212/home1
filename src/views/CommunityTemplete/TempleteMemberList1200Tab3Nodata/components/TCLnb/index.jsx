import React, { Component } from "react";
import { List, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

class TCLnb extends Component {

    render() {
        return (
            <div className="tc_lnb_area">
                <div className="tc_lnb_inner">
                    {/* li에 new클래스가 추가될 경우 new 아이콘 노출됩니다 */}
                    <div className="tc_lnb">
                        <List as="ul" className="">
                            <List.Item as="li" value="*" className="new"><Link to="/">공지사항</Link></List.Item>
                            <List.Item as="li" value="*"><Link to="/">Energy Talk</Link></List.Item>
                            <List.Item as="li" value="*" className="new"><Link to="/">2nd Week Energy Talk</Link></List.Item>
                            <List.Item as="li" value="*"><Link to="/">3rd Week Energy Talk</Link></List.Item>
                            <List.Item as="li" value="*"><Link to="/">Trending 정보</Link></List.Item>
                            <List.Item as="li" value="*"><Link to="/">에너지 산업미래</Link></List.Item>
                            <List.Item as="li" value="*"><Link to="/">에너지 산업 현재</Link>
                                <div className="tc_lnb_sub">
                                    <strong className="sub_tit">블록Talk (자유 게시판 토론형 2020 ~ 2021 두줄 일시엔 이렇게 나옵니다)</strong>
                                    <List as="ul">
                                        <List.Item as="li" value="-"><Link to="/">우리는 과연 얼마나 애자일할까? (애자일 환경 조성)</Link> </List.Item>
                                        <List.Item as="li" value="-"><Link to="/">에너지 산업 현재 1-1</Link> </List.Item>
                                        <List.Item as="li" value="-"><Link to="/">에너지 산업 현재 1-2</Link> </List.Item>
                                        <List.Item as="li" value="-" className="new"><Link to="/">에너지 산업 현재 1-3</Link> </List.Item>
                                        <List.Item as="li" value="-"><Link to="/">에너지 산업 현재 1-4</Link> </List.Item>
                                    </List>      
                                </div>                        
                            </List.Item>
                            <List.Item as="li" value="*"><Link to="/">블록Talk (자유 게시판 토론형 2020 ~ 2021 두줄 일시엔 이렇게 나옵니다)</Link> 
                                <div className="tc_lnb_sub">
                                    <Link to="/" className="sub_tit">블록Talk (자유 게시판 토론형 2020 ~ 2021 두줄 일시엔 이렇게 나옵니다)</Link>
                                    <List as="ul">
                                        <List.Item as="li" value="-"><Link to="/">우리는 과연 얼마나 애자일할까? (애자일 환경 조성)</Link></List.Item>
                                        <List.Item as="li" value="-" className="new"><Link to="/">블록 인 뉴스 1-1</Link></List.Item>
                                        <List.Item as="li" value="-"><Link to="/">블록 인 뉴스 1-2</Link></List.Item>
                                        <List.Item as="li" value="-"><Link to="/">블록 인 뉴스 1-3</Link></List.Item>
                                        <List.Item as="li" value="-"><Link to="/">블록 인 뉴스 1-4</Link></List.Item>
                                        <List.Item as="li" value="-"><Link to="/">블록 인 뉴스 1-5</Link></List.Item>
                                        <List.Item as="li" value="-"><Link to="/">블록 인 뉴스 1-6</Link></List.Item>
                                        <List.Item as="li" value="-"><Link to="/">블록 인 뉴스 1-7</Link></List.Item>
                                        <List.Item as="li" value="-"><Link to="/">블록 인 뉴스 1-8</Link></List.Item>
                                        <List.Item as="li" value="-"><Link to="/">블록 인 뉴스 1-9</Link></List.Item>
                                        <List.Item as="li" value="-"><Link to="/">블록 인 뉴스 1-10</Link></List.Item>
                                    </List>      
                                </div>
                            </List.Item>
                            <List.Item as="li" value="*"><Link to="/">무엇이든 물어보세요</Link></List.Item>
                            <List.Item as="li" value="*"><Link to="/">Book체인</Link></List.Item>
                            <List.Item as="li" value="*"><Link to="/">10문 10답</Link></List.Item>
                            <List.Item as="li" value="*"><Link to="/">가입인사 남겨요</Link></List.Item>
                        </List>
                    </div>
                    
                    <div className="lnb_control">
                        <Button className="prev"><Icon /></Button>
                        <Button className="next"><Icon /></Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default TCLnb;
