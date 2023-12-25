import React, {Component} from 'react'
import {
    Icon,
    Accordion,
    Checkbox
} from 'semantic-ui-react'

class AccordionChannelList extends Component {
    state = { activeIndex: 7 }

    handleClick = (e, titleProps) => {
        const {index} = titleProps
        const {activeIndex} = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({activeIndex: newIndex})
    }

    handleChange = (e, {value}) => this.setState({value})

    render() {
        const {activeIndex} = this.state

        return (
            <>
                {/* .search-empty */}
                {/*
                <div class="search-empty">
                    <i class="icon rocket50"></i>
                    <div>검색된 Channel이 없습니다.</div>
                </div>
                */} 
                {/* // .search-empty */}
                <Accordion className='channel'>
                    <Accordion.Title
                        active={activeIndex === 0}
                        index={0}
                        onClick={this.handleClick}
                    >
                        <span className="name purple">AI</span>
                        <Icon/>
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 0}>
                        <ul>
                            <li><Checkbox label={<label>Executive AI/DT</label>} className='base'/></li>
                            <li><Checkbox label={<label>AI/DT Literacy</label>} className='base'/></li>
                            <li><Checkbox label={<label>AI Biz. Implementation</label>} className='base'/></li>
                            <li><Checkbox label={<label>AI Trend Watch</label>} className='base'/></li>
                            <li><Checkbox label={<label>AI Technologies</label>} className='base'/></li>
                        </ul>
                    </Accordion.Content>

                    <Accordion.Title
                        active={activeIndex === 1}
                        index={1}
                        onClick={this.handleClick}
                    >
                        <span className="name violet">DT</span>
                        <Icon/>
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 1}>
                        <ul>
                            <li><Checkbox label={<label>T Biz.&amp; Implementation</label>} className='base'/></li>
                            <li><Checkbox label={<label>T Technologies </label>} className='base'/></li>
                            <li><Checkbox label={<label>ata Engineer Track</label>} className='base'/></li>
                            <li><Checkbox label={<label>Cloud Engineer Track</label>} className='base'/></li>
                            <li><Checkbox label={<label>ata Analyst Track </label>} className='base'/></li>
                            <li><Checkbox label={<label>Future Mobility</label>} className='base'/></li>
                        </ul>
                    </Accordion.Content>

                    <Accordion.Title
                        active={activeIndex === 2}
                        index={2}
                        onClick={this.handleClick}
                    >
                        <span className="name yellow">행복</span>
                        <Icon/>
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 2}>
                        <ul>
                            <li><Checkbox label={<label>행복 경영</label>} className='base'/></li>
                            <li><Checkbox label={<label>행복 추구 실천</label>} className='base'/></li>
                            <li><Checkbox label={<label>행복의 창</label>} className='base'/></li>
                        </ul>
                    </Accordion.Content>

                    <Accordion.Title
                        active={activeIndex === 3}
                        index={3}
                        onClick={this.handleClick}
                    >
                        <span className="name orange">SV</span>
                        <Icon/>
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 3}>
                        <ul>
                            <li><Checkbox label={<label>SV Fundamentals</label>} className='base'/></li>
                            <li><Checkbox label={<label>SV Biz</label>} className='base'/></li>
                            <li><Checkbox label={<label>SV Insight</label>} className='base'/></li>
                            <li><Checkbox label={<label>ESG</label>} className='base'/></li>
                            <li><Checkbox label={<label>사회문제</label>} className='base'/></li>
                        </ul>
                    </Accordion.Content>

                    <Accordion.Title
                        active={activeIndex === 4}
                        index={4}
                        onClick={this.handleClick}
                    >
                        <span className="name red">혁신디자인</span>
                        <Icon/>
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 4}>
                        <ul>
                            <li><Checkbox label={<label>eep Change와 Design</label>} className='base'/></li>
                            <li><Checkbox label={<label>디자인씽킹</label>} className='base'/></li>
                            <li><Checkbox label={<label>애자일</label>} className='base'/></li>
                            <li><Checkbox label={<label>혁신 트렌드와 인사이트</label>} className='base'/></li>
                            <li><Checkbox label={<label>로지컬씽킹</label>} className='base'/></li>
                            <li><Checkbox label={<label>고객알기</label>} className='base'/></li>
                            <li><Checkbox label={<label>워킹백워드</label>} className='base'/></li>
                            <li><Checkbox label={<label>오픈 콜라보레이션</label>} className='base'/></li>
                        </ul>
                    </Accordion.Content>

                    <Accordion.Title
                        active={activeIndex === 5}
                        index={5}
                        onClick={this.handleClick}
                    >
                        <span className="name green">Global</span>
                        <Icon/>
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 5}>
                        <ul>
                            <li><Checkbox label={<label>Geopolitics &amp; Biz</label>} className='base'/></li>
                            <li><Checkbox label={<label>Managing Global Biz</label>} className='base'/></li>
                            <li><Checkbox label={<label>글로벌 경제</label>} className='base'/></li>
                            <li><Checkbox label={<label>지역 전문가</label>} className='base'/></li>
                            <li><Checkbox label={<label>주요 국가의 이해</label>} className='base'/></li>
                            <li><Checkbox label={<label>중국 Issue &amp; Trend</label>} className='base'/></li>
                            <li><Checkbox label={<label>베트남 Issue &amp; Trend</label>} className='base'/></li>
                            <li><Checkbox label={<label>Global Leader's Table</label>} className='base'/></li>
                            <li><Checkbox label={<label>Glopedia</label>} className='base'/></li>
                            <li><Checkbox label={<label>어학 (영어)</label>} className='base'/></li>
                            <li><Checkbox label={<label>어학 (중국어)</label>} className='base'/></li>
                        </ul>
                    </Accordion.Content>

                    <Accordion.Title
                        active={activeIndex === 6}
                        index={6}
                        onClick={this.handleClick}
                    >
                        <span className="name blue">Leadership</span>
                        <Icon/>
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 6}>
                        <ul>
                            <li><Checkbox label={<label>Leadership Foundation</label>} className='base'/></li>
                            <li><Checkbox label={<label>Leadership Clinic</label>} className='base'/></li>
                            <li><Checkbox label={<label>eep Change Leadership</label>} className='base'/></li>
                            <li><Checkbox label={<label>Leadership Insight Cafe</label>} className='base'/></li>
                        </ul>
                    </Accordion.Content>

                    <Accordion.Title
                        active={activeIndex === 7}
                        index={7}
                        onClick={this.handleClick}
                    >
                        <span className="name teal">Management</span>
                        <Icon/>
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 7}>
                        <ul>
                            <li>
                                <Checkbox label={<label>기업 경영/전략</label>} className='base'/>
                                <ul>
                                    <li><Checkbox label={<label>Financial Story</label>} className='base'/></li>
                                    <li><Checkbox label={<label>Strategy Essentials</label>} className='base'/></li>
                                    <li><Checkbox label={<label>Scenario Planning Essentials</label>} className='base'/></li>
                                    <li><Checkbox label={<label>Scenario Planning Advanced</label>} className='base'/></li>
                                </ul>
                            </li>
                            <li><Checkbox label={<label>마케팅/브랜드</label>} className='base'/>
                                <ul>
                                    <li><Checkbox label={<label>마케팅 Essentials</label>} className='base'/></li>
                                    <li><Checkbox label={<label>브랜드 Essentials</label>} className='base'/></li>
                                </ul>
                            </li>
                            <li><Checkbox label={<label>재무/회계</label>} className='base'/>
                                <ul>
                                    <li><Checkbox label={<label>회계 Essentials</label>} className='base'/></li>
                                </ul>
                            </li>
                            <li><Checkbox label={<label>HR/조직 설계</label>} className='base'/>
                                <ul>
                                    <li><Checkbox label={<label>HR Essentials</label>} className='base'/></li>
                                </ul>
                            </li>
                            <li><Checkbox label={<label>법무</label>} className='base'/>
                                <ul>
                                    <li><Checkbox label={<label>공정거래법 Essentials</label>} className='base'/></li>
                                </ul>
                            </li>
                            <li><Checkbox label={<label>IP</label>} className='base'/>
                                <ul>
                                    <li><Checkbox label={<label>IP Mind-Set Essentials</label>} className='base'/></li>
                                </ul>
                            </li>
                            <li><Checkbox label={<label>SCM/Operation</label>} className='base'/></li>
                            <li><Checkbox label={<label>Competency(Working Smart)</label>} className='base'/>
                                <ul>
                                    <li><Checkbox label={<label>Negotiaion Essentials</label>} className='base'/></li>
                                    <li><Checkbox label={<label>Measurement Essentials</label>} className='base'/></li>
                                </ul>
                            </li>
                        </ul>
                    </Accordion.Content>
                    <Accordion.Title
                        active={activeIndex === 8}
                        index={8}
                        onClick={this.handleClick}
                    >
                        <span className="name navy">미래반도체</span>
                        <Icon />
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 8}>
                        <ul>
                            <li><Checkbox label={<label>반도체 Introduction</label>} className='base'/></li>
                            <li><Checkbox label={<label>반도체 Biz Essential</label>} className='base'/></li>
                            <li><Checkbox label={<label>반도체 Tech Essential</label>} className='base'/></li>
                            <li><Checkbox label={<label>Hot Emerging Tech Insight</label>} className='base'/></li>
                            <li><Checkbox label={<label>AI 반도체 Fundamental</label>} className='base'/></li>
                            <li><Checkbox label={<label>반도체 핵심소재 Fundamental</label>} className='base'/></li>
                            <li><Checkbox label={<label>Smart Factory Fundamental</label>} className='base'/></li>
                            <li><Checkbox label={<label>AI Manufacturing Professional</label>} className='base'/></li>
                            <li><Checkbox label={<label>스마트 모빌리티 &amp; 차량용 반도체</label>} className='base'/></li>
                            <li><Checkbox label={<label></label>} className='base'/></li>
                            <li><Checkbox label={<label></label>} className='base'/></li>
                            <li><Checkbox label={<label></label>} className='base'/></li>
                        </ul>
                    </Accordion.Content>
                    <Accordion.Title
                        active={activeIndex === 9}
                        index={9}
                        onClick={this.handleClick}
                    >
                        <span className="name bluegreen">Green</span>
                        <Icon />
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 9}>
                        <ul>
                            <li><Checkbox label={<label>Why Green?</label>} className='base'/></li>
                            <li><Checkbox label={<label>Green Policy</label>} className='base'/></li>
                            <li><Checkbox label={<label>에너지솔루션</label>} className='base'/></li>
                            <li><Checkbox label={<label>순환경제</label>} className='base'/></li>
                            <li><Checkbox label={<label>Net Zero</label>} className='base'/></li>
                            <li><Checkbox label={<label>수소에너지</label>} className='base'/></li>
                            <li><Checkbox label={<label>Technology Intelligence</label>} className='base'/></li>
                        </ul>
                    </Accordion.Content>
                    <Accordion.Title
                        active={activeIndex === 10}
                        index={10}
                        onClick={this.handleClick}
                    >
                        <span className="name magenta">BM Design &amp; Storytelling</span>
                        <Icon />
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 10}>
                        <ul>
                            <li><Checkbox label={<label>BM Design Take-off</label>} className='base'/></li>
                            <li><Checkbox label={<label>Defining Storytelling</label>} className='base'/></li>
                            <li><Checkbox label={<label>Becoming BM Designer</label>} className='base'/></li>
                            <li><Checkbox label={<label>Becoming Storyteller</label>} className='base'/></li>
                            <li><Checkbox label={<label>BM Design @ Work</label>} className='base'/></li>
                            <li><Checkbox label={<label>Storytelling @ Work</label>} className='base'/></li>
                            <li><Checkbox label={<label>M&amp;A Design</label>} className='base'/></li>
                            <li><Checkbox label={<label>Governance Story</label>} className='base'/></li>
                        </ul>
                    </Accordion.Content>
                    <Accordion.Title
                        active={activeIndex === 11}
                        index={11}
                        onClick={this.handleClick}
                    >
                        <span className="name orange2">SK아카데미</span>
                        <Icon />
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 11}>
                        <ul>
                            <li><Checkbox label={<label>SKMS/SK Values</label>} className='base'/></li>
                            <li><Checkbox label={<label>미래 경영자 육성</label>} className='base'/></li>
                            <li><Checkbox label={<label>역량 School</label>} className='base'/></li>
                        </ul>
                    </Accordion.Content>
                    <Accordion.Title
                        active={activeIndex === 12}
                        index={12}
                        onClick={this.handleClick}
                    >
                        <span className="name undefined">SK경영</span>
                        <Icon />
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 12}>
                        <ul>
                            <li><Checkbox label={<label>이천포럼</label>} className='base'/></li>
                            <li><Checkbox label={<label>사외이사 Insight Series</label>} className='base'/></li>
                            <li><Checkbox label={<label>SKMS</label>} className='base'/></li>
                            <li><Checkbox label={<label>CEO 특강</label>} className='base'/></li>
                            <li><Checkbox label={<label>CEO 세미나</label>} className='base'/></li>
                            <li><Checkbox label={<label>Trend</label>} className='base'/></li>
                            <li><Checkbox label={<label>Post Corona Perspectives</label>} className='base'/></li>
                        </ul>
                    </Accordion.Content>
                    <Accordion.Title
                        active={activeIndex === 13}
                        index={13}
                        onClick={this.handleClick}
                    >
                        <span className="name undefined">Life Style</span>
                        <Icon />
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 13}>
                        <ul>
                            <li><Checkbox label={<label>Art &amp; Speech</label>} className='base'/></li>
                            <li><Checkbox label={<label>Creator Challenge</label>} className='base'/></li>
                            <li><Checkbox label={<label>Enjoy Cooking</label>} className='base'/></li>
                            <li><Checkbox label={<label>Trend Sensing</label>} className='base'/></li>
                            <li><Checkbox label={<label>Healthy Habits</label>} className='base'/></li>
                            <li><Checkbox label={<label>Book Review</label>} className='base'/></li>
                        </ul>
                    </Accordion.Content>
                    <Accordion.Title
                        active={activeIndex === 14}
                        index={14}
                        onClick={this.handleClick}
                    >
                        <span className="name undefined">이노베이션계열 공통</span>
                        <Icon />
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 14}>
                        <ul>
                            <li><Checkbox disabled checked label={<label>SKI계열 Biz. 이해(공통)</label>} className='base'/></li>
                            <li><Checkbox disabled checked label={<label>Deep Change(공통)</label>} className='base'/></li>
                            <li><Checkbox disabled checked label={<label>Trend View(공통)</label>} className='base'/></li>
                            <li><Checkbox disabled checked label={<label>직무역량(공통)</label>} className='base'/></li>
                            <li><Checkbox disabled checked label={<label>SKI계열 Leadership(공통)</label>} className='base'/></li>
                            <li><Checkbox disabled checked label={<label>Culture &amp; Value(공통)</label>} className='base'/></li>
                            <li><Checkbox disabled checked label={<label>CLX University(공통)</label>} className='base'/></li>
                            <li><Checkbox disabled checked label={<label>T-On(공통)</label>} className='base'/></li>
                            <li><Checkbox disabled checked label={<label>GC Green Channel(공통)</label>} className='base'/></li>
                            <li><Checkbox disabled checked label={<label>Newcomer(공통)</label>} className='base'/></li>
                            <li><Checkbox disabled checked label={<label>Green Operation Seminar (GOS) </label>} className='base'/></li>
                        </ul>
                    </Accordion.Content>
                    <Accordion.Title
                        active={activeIndex === 15}
                        index={15}
                        onClick={this.handleClick}
                    >
                        <span className="name undefined">이노베이션</span>
                        <Icon />
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 15}>
                        <ul>
                            <li><Checkbox disabled checked label={<label>SKI계열 Biz. 이해</label>} className='base'/></li>
                            <li><Checkbox disabled checked label={<label>Deep Change</label>} className='base'/></li>
                            <li><Checkbox disabled checked label={<label>Trend View</label>} className='base'/></li>
                            <li><Checkbox disabled checked label={<label>직무역량</label>} className='base'/></li>
                            <li><Checkbox disabled checked label={<label>SKI계열 Leadership</label>} className='base'/></li>
                            <li><Checkbox disabled checked label={<label>Culture &amp; Value</label>} className='base'/></li>
                            <li><Checkbox disabled checked label={<label>CLX University</label>} className='base'/></li>
                            <li><Checkbox disabled checked label={<label>T-On</label>} className='base'/></li>
                            <li><Checkbox disabled checked label={<label>이노베이션</label>} className='base'/></li>
                        </ul>
                    </Accordion.Content>
                    <Accordion.Title
                        active={activeIndex === 16}
                        index={16}
                        onClick={this.handleClick}
                    >
                        <span className="name undefined">에코플랜트</span>
                        <Icon />
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 16}>
                        <ul>
                            <li><Checkbox disabled checked label={<label>공통</label>} className='base'/></li>
                            <li><Checkbox disabled checked label={<label>SV</label>} className='base'/></li>
                            <li><Checkbox disabled checked label={<label>건축</label>} className='base'/></li>
                            <li><Checkbox disabled checked label={<label>인프라</label>} className='base'/></li>
                            <li><Checkbox disabled checked label={<label>플랜트</label>} className='base'/></li>
                            <li><Checkbox disabled checked label={<label>사업지원</label>} className='base'/></li>
                            <li><Checkbox disabled checked label={<label>TNS</label>} className='base'/></li>
                            <li><Checkbox disabled checked label={<label>친환경 Literacy</label>} className='base'/></li>
                            <li><Checkbox disabled checked label={<label>BIM Academy</label>} className='base'/></li>
                            <li><Checkbox disabled checked label={<label>개인학습 이력관리</label>} className='base'/></li>
                        </ul>
                    </Accordion.Content>
                    <Accordion.Title
                        active={activeIndex === 17}
                        index={17}
                        onClick={this.handleClick}
                    >
                        <span className="name undefined">SK지오센트릭</span>
                        <Icon />
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 17}>
                        <ul>
                            <li><Checkbox disabled checked label={<label>SKI계열 Biz. 이해</label>} className='base'/></li>
                            <li><Checkbox disabled checked label={<label>Deep Change</label>} className='base'/></li>
                            <li><Checkbox disabled checked label={<label>Trend View</label>} className='base'/></li>
                            <li><Checkbox disabled checked label={<label>직무역량</label>} className='base'/></li>
                            <li><Checkbox disabled checked label={<label>SKI계열 Leadership</label>} className='base'/></li>
                            <li><Checkbox disabled checked label={<label>Culture &amp; Value</label>} className='base'/></li>
                            <li><Checkbox disabled checked label={<label>CLX University</label>} className='base'/></li>
                            <li><Checkbox disabled checked label={<label>T-On</label>} className='base'/></li>
                            <li><Checkbox disabled checked label={<label>GC Green Channel</label>} className='base'/></li>
                        </ul>
                    </Accordion.Content>
                    <Accordion.Title
                        active={activeIndex === 18}
                        index={18}
                        onClick={this.handleClick}
                    >
                        <span className="name undefined">SK㈜_C&amp;C</span>
                        <Icon />
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 18}>
                        <ul>
                            <li><Checkbox disabled checked label={<label>SK C&amp;C 공통</label>} className='base'/></li>
                            <li><Checkbox disabled checked label={<label>Industry</label>} className='base'/></li>
                            <li><Checkbox disabled checked label={<label>Leadership</label>} className='base'/></li>
                        </ul>
                    </Accordion.Content>
                </Accordion>
            </>
        )
    }
}

export default AccordionChannelList;
