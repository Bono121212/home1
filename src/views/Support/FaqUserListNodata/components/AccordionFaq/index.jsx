import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

class AccordionFaq extends Component {
    state = { activeIndex: 0 }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }
    render() {
        const { activeIndex } = this.state

        return (
            <Accordion styled>
                <Accordion.Title
                    active={activeIndex === 0}
                    index={0}
                    onClick={this.handleClick}
                >
                    <div className="faq-icon">Q.</div>
                    <div className="txt-wrap">
                        <div className="txt-faq-cate">[<span>학습 Rule</span>]</div>
                        <p>업무 문제로 오프라인 과정에 참여하지 못하게 되었습니다. 다른 차수로 변경 가능한가요?</p>
                    </div>
                    <Icon name='dropdown' />
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                    <p>Classroom 과정의 경우 가능한 신청하신 일정에 참석을 부탁 드립니다.<br/>
                    부득이하게 불참하시게 되면 차수변경을 하시거나, 다른 수강대기자에게 학습기회가 돌아갈 수 있도록 바로 과정 담당자에게 연락 부탁 드립니다.<br/>
                    이미 진행이 완료된 과정의 경우 차수변경은 불가능하고 'My Page &gt; Retry' 메뉴에서 미이수된 과정을 재신청/수강하시면 됩니다.</p>
                </Accordion.Content>

                <Accordion.Title
                    active={activeIndex === 1}
                    index={1}
                    onClick={this.handleClick}
                >
                    <div className="faq-icon">Q.</div>
                    <div className="txt-trap">
                        <div className="txt-faq-cate">[<span>학습 Rule</span>]</div>
                        <p>교육 신청 내역을 취소/변경할 수 있나요?</p>
                    </div>
                    <Icon name='dropdown' />
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 1}>
                    <p>취소/변경 가능 기간에는 자유롭게 변경/취소 가능합니다.</p>
                    <p>수강 중에는 과정별로 취소에 대한 정책이 다릅니다.<br/>
                    대부분의 Online 과정들은 구성원 학습편의를 위해 교육중간에라도 언제든 수강을 중단하셔도 되지만, 학습시간에는 반영이 되지 않습니다.<br/>
                    다만 수강건별로 외부 CP에 비용이 청구되는 온라인 과정이나 오프라인 과정은 비용 이슈가 존재하므로 수강 중 취소가 불가능한 경우가 있을 수 있습니다. (미이수처리)</p>
                    <p>각 과정별 강의개요를 확인하시고 선택해주세요.</p>
                </Accordion.Content>

                <Accordion.Title
                    active={activeIndex === 2}
                    index={2}
                    onClick={this.handleClick}
                >
                    <div className="faq-icon">Q.</div>
                    <div className="txt-wrap">
                        <div className="txt-faq-cate">[<span>학습 Rule</span>]</div>
                        <p>교육 신청 내역을 취소/변경할 수 있나요?</p>
                    </div>
                    <Icon name='dropdown' />
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 2}>
                    <p>mySUNI에서 강사로 활동하거나 학습콘텐츠를 만드는 등의 활동에 대해서는 학습시간으로 인정해 드릴 예정입니다.<br/>
                    특히 강사/콘텐츠 제작활동은 단순 수강활동보다도 준비 등에 더 많은 시간이 필요로 한다는 점을 감안, 학습시간 인정할 때 일정 수준의 인센티브를 드릴 계획입니다.<br/>
                    강사로 활동할 경우 강사시간의 3배, 퍼실리테이터로 활동할 경우에는 활동시간의 2배로 학습시간 인정이 됩니다.<br/>
                    커뮤니티 활동은 단순 댓글 올리기 등 너무 광범위한 활동이 포괄되므로 현재까지는 학습시간으로 인정하지 않을 계획입니다.</p>
                </Accordion.Content>

                <Accordion.Title
                    active={activeIndex === 3}
                    index={2}
                    onClick={this.handleClick}
                >
                    <div className="faq-icon">Q.</div>
                    <div className="txt-wrap">
                        <div className="txt-faq-cate">[<span>학습 Rule</span>]</div>
                        <p>과정 이수결과는 어떻게 확인가능한가요?</p>
                    </div>
                    <Icon name='dropdown' />
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 3}>
                    <p>학습 종료 1~2일 후, My Page &gt; Complete List에서 확인 가능하며, 개인별 총 학습시간에 누적 반영이 됩니다.</p>
                </Accordion.Content>

                <Accordion.Title
                    active={activeIndex === 4}
                    index={4}
                    onClick={this.handleClick}
                >
                    <div className="faq-icon">Q.</div>
                    <div className="txt-wrap">
                        <div className="txt-faq-cate">[<span>학습 Rule</span>]</div>
                        <p>사외 및 개인학습에 대한 교육시간은 어떻게 인정받을 수 있나요?</p>
                    </div>
                    <Icon name='dropdown' />
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 4}>
                    <p>'개인학습등록' 메뉴를 통해 개인별로 학습한 이력을 학습시간으로 인정받으실 수 있습니다.<br/>
                    학습이력을 기재하여 승인요청을 올릴경우 해당 Channel(카테고리)에 해당하는 담당자 검토/승인이 완료되면 학습시간이 반영됩니다.<br/>
                    해당 기능은 추후 오픈될 예정입니다. </p>
                </Accordion.Content>

                <Accordion.Title
                    active={activeIndex === 5}
                    index={5}
                    onClick={this.handleClick}
                >
                    <div className="faq-icon">Q.</div>
                    <div className="txt-wrap">
                        <div className="txt-faq-cate">[<span>학습 Rule</span>]</div>
                        <p>Level별 과정은 해당 Level에 해당되어야 수강할 수 있나요?</p>
                    </div>
                    <Icon name='dropdown' />
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 5}>
                    <p>'Level별 과정은 해당 수준으로 추천드리는 과정입니다.<br/>
                    Level에 관계없이 수강은 언제든 가능하시나, 다만 학습 전 본인의 역량을 고려하여 수강 부탁 드립니다.<br/>
                    Level별 정의는 다음과 같습니다.</p>
                    <p>1. Basic : 기초적인 지식/개념의 이해 및 일반적인 트렌드, 심화학습(Intermediate 이상)에 필요한 선행 과정<br/>
                    2. intermediate : 특정 영역에 대한 지식 기반 Skill-set 습득 및 해당 Skill을 체화하는 과정<br/>
                    3. Advanced : 앞선 학습 내용의 현장적용을 상정하여 프로젝트 등을 수행할 수 있는 수준, Biz. 문제를 해결할 수 있는 역량향상 과정<br/>
                    4. Expert : Univ. 과정 중 최고수준 지식 학습 및 이를 활용하여 현장에서 일을 이끌 수 있는 수준</p>
                </Accordion.Content>

                <Accordion.Title
                    active={activeIndex === 6}
                    index={6}
                    onClick={this.handleClick}
                >
                    <div className="faq-icon">Q.</div>
                    <div className="txt-wrap">
                        <div className="txt-faq-cate">[<span>Contents</span>]</div>
                        <p>학습카드 공유 방법 안내드립니다.</p>
                    </div>
                    <Icon name='dropdown' />
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 6}>
                    <p>안녕하세요. mySUNI 시스템 담당자 입니다.</p>
                    <p>학습카드 공유하는 방법은 아래 노란색 공유하기 버튼을 누르시면<br/>
                    현재 학습중인 과정의 학습카드 URL이 복사되어 공유 할 수 있습니다.</p>
                    <p>이렇게 URL복사가 됩니다. (URL 주소 복사하기 와 같은 기능)<br/>
                    <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00019/cube/CUBE-8b9/lecture-card/LECTURE-CARD-63w" target="_blank">https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00019/cube/CUBE-8b9/lecture-card/LECTURE-CARD-63w</a><br/>
                    (--&gt; 최초 로그인절차가 필요함)</p>
                    <p>이메일로 위 URL을 공유하시게 되면 mySUNI 로그인 후 학습카드로의 접근이 가능 합니다.</p>
                    <p>(toktok접속이 되어있는 상태에서) 별도의 로그인 절차 없이 접속하게 하는 방법은, <br/>
                    URL앞에 https://int.mysuni.sk.com/login?contentUrl= 를 붙이면 URL클릭 시 학습카드에 바로 진입하실 수 있습니다.<br/>
                    <a href="https://int.mysuni.sk.com/login?contentUrl=/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00019/cube/CUBE-8b9/lecture-card/LECTURE-CARD-63w" target="_blank">https://int.mysuni.sk.com/login?contentUrl=/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00019/cube/CUBE-8b9/lecture-card/LECTURE-CARD-63w</a><br/>
                    (--&gt; toktok연결 중인 상태에서 바로 접속가능함)</p>
                    <p>추가 궁금한사항이 있으시면 문의 주시기 바랍니다.<br/>
                    감사합니다.</p>
                </Accordion.Content>
            </Accordion>
        )
    }
}

export default AccordionFaq