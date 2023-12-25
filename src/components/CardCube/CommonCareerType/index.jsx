import React, {useState} from 'react';
import classNames from 'classnames';
import { Label, Card, Image } from 'semantic-ui-react'

const CardCommonCareerType = (props) => {
    const [isHovered, setIsHovered] = useState(props.isHovered);
    return (
        <div data-action='CLICK' data-action-name=''>{/* 2023-11-17 개발 페이지와 구조 통일화를 위해 추가 */}
            <Card className={classNames('card-item career-slide-item', {'on':isHovered})} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                {/* 2023-11 career-slide-item 클래스 추가. 전체 서비스와 동시에 보여질 경우 구분용 */}
                {/* 2023-11 Career에서 제외 */}
                {/* <div className="bookmark-wrap">
                    <Button icon className="icon-bookmark"></Button>
                </div> */}
                <div className="card-inner">
                    <div className="thumbnail-area">
                        <div className="thumb-img-area">
                        {props.src !== '' 
                            ? <>
                            <Image src={props.src} className="thumb-img blur" alt="" aria-hidden="true" />
                            <Image src={props.src} className="thumb-img" alt="썸네일 이미지" />
                            </>
                            : <Image src={'https://image.mysuni.sk.com/suni-asset/public/images/all/mycareer-no-img-280.png'} className="thumb-img" alt="썸네일 이미지" />
                        }
                        </div>
                        <div className="thumb-info top">
                            { props.popular &&
                            <div className="txticon-wrap">
                                <Label className="popular"><div className="custom-icon icon-bravo"></div><span>핵인싸</span></Label>
                            </div>
                            }
                        </div>
                        <div className="thumb-info bottom">
                            <Label><span>1h 30m</span></Label>
                        </div>
                    </div>
                    <div className="contents-area">
                        <div className="title-area">
                            <div className="status">
                                <Label className="college-name"><span>미래반도체</span></Label>
                                { props.state === 'learning' && <Label className="my-stat learning"><span>학습중</span></Label> }
                                { props.state === 'learn' && <Label className="my-stat learn"><span>학습완료</span></Label> }
                            </div>
                            <div className="header">{props.title}</div>
                        </div>
                        <div className="icon-area txticon-wrap bottom">
                            <div className="f-left">
                                <Label>
                                    <div className="custom-icon icon-user"></div><span>3,300</span>
                                </Label>
                            </div>
                            <div className="f-right">
                                <Label>
                                    <div className="custom-icon icon-star"></div><span>4.9</span>
                                </Label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hover-content">
                    <div className="thumb-img-area">
                        <Image src={props.src} className="thumb-img" alt="프로필 이미지" />
                    </div>
                    <div className="hover-content-inner">
                        {/* 2023-11 Career에서 제외 */}
                        {/* <div className="lang-wrap">
                            <ul className="lang-list">
                                <li><span>KOR</span></li>
                                <li><span>CHN</span></li>
                                <li><span>ENG</span></li>
                            </ul>
                        </div> */}
                        <div className="text-wrap">
                            <p className="text-area">
                            2222반도체 Tech의 핵심 개념과 기술 용어를 각 주제별로 쉽고 간결하게 설명해주는 온라인 지식백과 Course 입니다. 본 과정을 통해 반도체에서 다루는 주요 개념과 용어를 학습하여, 반도체 Tech. 학습의 기초를 다질 수 있습니다. (각 영상 4~5분) ※ 강사 : SK하이닉스 박성원 TL, 서민석 TL, 신홍섭 TL, 임정빈 TL, 정승규 TL
                            </p>
                        </div>
                        <div className="icon-area txticon-wrap bottom">
                            {/* 2023-11 Career에서 추가 */}
                            <div className='career-inner-item'>
                                <Label>
                                    <div className="custom-icon icon-move-blank"></div><span>이동하기</span>
                                </Label>
                            </div>

                            {/* 2023-11 Career에서 제외 */}
                            {/* <div>
                                <Label>
                                    <div className="custom-icon icon-grade"></div><span>Intermediate</span>
                                </Label>
                            </div>
                            <div>
                                <Label>
                                    <div className="custom-icon icon-badge"></div><span>Badge</span>
                                </Label>
                            </div> */}
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}


export default CardCommonCareerType
