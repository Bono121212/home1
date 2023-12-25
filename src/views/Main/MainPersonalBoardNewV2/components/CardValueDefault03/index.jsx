import React, {Component} from 'react'
import { Button, Label, Card, Image } from 'semantic-ui-react'

import CardThumbImg from '../../../../../images/all/bg_img4.png';

class CardValueDefault03 extends Component {
    constructor() {
        super();
        this.state = {
            isHovered: false
        };
        this.handleHover = this.handleHover.bind(this);
    }

    handleHover(isHovered) {
        this.setState({isHovered});
    }

    render() {
        const activeClass = this.state.isHovered ? 'on' : '';
        return (
            <Card className={`card-item card-item-03 ${activeClass}`} onMouseEnter={() => this.handleHover(true)}
                  onMouseLeave={() => this.handleHover(false)}>
                <div className="bookmark-wrap">
                    <Button icon className="icon-bookmark on"></Button>
                </div>
                <div className="card-inner">
                    <div className="thumbnail-area">
                        <div className="thumb-img-area">
                            <Image src={CardThumbImg} className="thumb-img" alt="프로필 이미지" />
                        </div>
                        <div className="thumb-info top">
                            <div className="txticon-wrap">
                                <Label className='day'><div className="custom-icon icon-clock"></div><span>오늘 마감</span></Label>
                            </div>
                        </div>
                        <div className="thumb-info bottom">
                            <Label><span>2h 30m</span></Label>
                        </div>
                    </div>
                    <div className="contents-area">
                        <div className="title-area">
                            <div className="status">
                                <Label className="college-name"><span>행복</span></Label>
                                <Label className="my-stat learning"><span>학습중</span></Label>
                            </div>
                            <div className="header">긍정습관 만들기</div>
                        </div>
                        <div className="icon-area txticon-wrap bottom">
                            <div className="f-left">
                                <Label>
                                    <div className="custom-icon icon-user"></div><span>1,188</span>
                                </Label>
                            </div>
                            <div className="f-right">
                                <Label>
                                    <div className="custom-icon icon-star"></div><span>4.3</span>
                                </Label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hover-content">
                    <div className="thumb-img-area">
                        <Image src={CardThumbImg} className="thumb-img" alt="프로필 이미지" />
                    </div>
                    <div className="hover-content-inner">
                        <div className="lang-wrap">
                            <ul className="lang-list">
                                <li><span>KOR</span></li>
                                <li><span>CHN</span></li>
                                <li><span>ENG</span></li>
                            </ul>
                        </div>
                        <div className="text-wrap">
                            <p className="text-area">
                            신종 코로나바이러스 감염증(COVID-19) 발병 5개월, 

                            '총성 없는 3차 세계대전' 코로나19 팬데믹으로 인해 인류의 삶은 어떻게 변화할 것인가?

                            코로나19 사태가 앞당긴 뉴노멀의 신세계, 위기는 곧 기회가 될 수 있을 것인지,

                            ‘포스트 코로나’를 준비하기 위한 국내 최고 전문가의 제언을 확인해 본다.



                            [전체목차: 지정학적 변화진단 - Post Corona Perspectives]

                            1. 코로나 전과 후의 세계 ① 대격변 - 국립외교원 김준형 원장 (15min)

                            2. 코로나 전과 후의 세계 ② 전망과 과제 - 국립외교원 김준형 원장 (17min)

                            3. 코로나19와 미국 대선 - 서강대 사회과학연구소 김지윤 연구위원 (15min)

                            4. 대선 이후 미국의 외교방향은? - 서강대 사회과학연구소 김지윤 연구위원 (25min)

                            5. 코로나19가 바꾼 미중관계 - 아주대 중국정책연구소 김흥규 소장 (18min)

                            6. 코로나19 이후 중국은? - 아주대 중국정책연구소 김흥규 소장 (18min)

                            7. EU가 직면한 과제 - 한국외국어대학교 강유덕 교수 (20min)

                            8. EU의 앞날은? - 한국외국어대학교 강유덕 교수 (13min)
                            </p>
                        </div>
                        <div className="icon-area txticon-wrap bottom">
                            <div>
                                <Label>
                                    <div className="custom-icon icon-grade"></div><span>Intermediate</span>
                                </Label>
                            </div>
                            <div>
                                <Label>
                                    <div className="custom-icon icon-badge"></div><span>Badge</span>
                                </Label>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}


export default CardValueDefault03