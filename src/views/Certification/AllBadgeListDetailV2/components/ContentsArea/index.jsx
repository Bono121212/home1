import React, {Component} from 'react';
import {Segment, Label, Icon, List} from "semantic-ui-react";
import RelationBadgeArea from "../RelationBadgeArea";
import LearningList from "../LearningList";
import BadgeAcquisitionAlert from "../BadgeAcquisitionAlert";
import SkillTag from '../../../../../components/SkillTag';

class ContentsArea extends Component {
    render() {
        return (
            <>
                <Segment className='full'>
                    <div className='badge-detail'>
                        {/* 2023-10 태그 항목 추가 */}
                        <div className='ov-paragraph skill-tag-box'>
                            <List>
                                <List.Item>
                                    <div className='title'>
                                        <h3 className='title-style'>
                                            <Label className='onlytext bold size24'>
                                                <Icon className='skill'/>
                                                <span>Skill</span>
                                            </Label>
                                        </h3>
                                    </div>
                                    <div className='detail skill-area'>
                                        <SkillTag styleClass='no-graph' />
                                    </div>
                                </List.Item>
                            </List>
                        </div>

                        {/*뱃지안내*/}
                        <div className='ov-paragraph'>
                            <List bulleted>
                                <List.Item>
                                    <div className='title'>학습 영역</div>
                                    <div className='detail'>
                                        이 배지는 IBM Cloud Pak for Applications Solution Architect V4.1을 통과 한 지원자에게 수여됩니다. 인증 시험.
                                        IBM Cloud Pak for Applications 솔루션 아키텍트는 IBM Cloud Pak for Applications를 사용하여 아키텍처를 설계, 계획 및 작성할 수있는 사람입니다. 지원, 문서 또는 관련 주제 전문가의 제한적인 지원으로이를 수행 할 수 있습니다.
                                    </div>
                                </List.Item>
                                <List.Item>
                                    <div className='title'>획득 조건</div>
                                    <div className='detail'>IBM Professional 인증 프로그램을 통해 진행되며 모든 학습 이수한 뒤 리포트를 추가 제출 후 PASS하면 Badge를 획득할 수 있습니다. 궁금하신 사항은 문의해주세요. IBM Professional 인증 프로그램을 통해 진행되며 모든 학습 이수한 뒤 리포트를 추가 제출 후 PASS하면 Badge를 획득할 수 있습니다. 궁금하신 사항은 문의해주세요.</div>
                                </List.Item>
                                <List.Item>
                                    <div className='title'>인증 내용</div>
                                    <div className='detail'>인증내용 IBM Professional 인증 프로그램은 전문성을 입증하기 위해 신임 정보를 획득 할 수 있는 기능을 제공합니다.</div>
                                </List.Item>
                            </List>
                        </div>
                        
                        <div className='ov-paragraph'>
                            <List>
                                <List.Item>
                                    <div className='title'>
                                        <h3 className='title-style'>
                                            <Label className='onlytext bold size24'>
                                                <Icon className='addinfo'/>
                                                <span>추가 발급 조건</span>
                                            </Label>
                                        </h3>
                                    </div>
                                    <div className='detail'>
                                        해당 Badge는 학습 이수 외에도 추가 미션이 있습니다.<br/>학습 이수 완료 후, 발급 요청하시면 담당자가 추가 미션에 대해 안내 드릴 예정입니다.
                                    </div>
                                </List.Item>
                            </List>
                        </div>

                        {/* 22-08-12 현행화
                        <div className='ov-paragraph'>
                            <List>
                                <List.Item>
                                    <div className='title'>
                                        <h3 className='title-style'>
                                            <Label className='onlytext bold size24'>
                                                <Icon className='host'/>
                                                <span>담당자</span>
                                            </Label>
                                        </h3>
                                    </div>
                                    <div className='detail'>
                                        <div className='host-line'>
                                            <span>홍길동 (SK커뮤니케이션즈)</span>
                                            <Button icon className='right btn-blue'>
                                                문의하기
                                                <Icon className='arrow-b-16'/>
                                            </Button>
                                        </div>
                                        <div className='host-line'>
                                            <span>김유니 (SK C&C)</span>
                                            <Button icon className='right btn-blue'>
                                                문의하기
                                                <Icon className='arrow-b-16'/>
                                            </Button>
                                        </div>
                                        <div className='host-line'>
                                            <span>홍길동 (SK커뮤니케이션즈)</span>
                                            <Button icon className='right btn-blue'>
                                                문의하기
                                                <Icon className='arrow-b-16'/>
                                            </Button>
                                        </div>
                                    </div>
                                </List.Item>
                                <List.Item>
                                    <div className='title'>
                                        <h3 className='title-style'>
                                            <Label className='onlytext bold size24'>
                                                <Icon className='addinfo'/>
                                                <span>추가 발급 조건</span>
                                            </Label>
                                        </h3>
                                    </div>
                                    <div className='detail'>
                                        리포트 제출
                                    </div>
                                </List.Item>
                            </List>
                        </div> */}

                        {/*Learning Path*/}
                        <div className='ov-paragraph'>
                            <List>
                                <List.Item>
                                    <div className='title'>
                                        <h3 className='title-style'>
                                            <Label className='onlytext bold size24'>
                                                <Icon className='list24'/>
                                                <span>Learning Path</span>
                                            </Label>
                                        </h3>
                                    </div>
                                    <div className='detail'>
                                        {/*목록*/}
                                        <LearningList/>
                                    </div>
                                </List.Item>
                            </List>
                        </div>

                        {/*태그리스트*/}
                        <div className='ov-paragraph tag-wrap'>
                            <List>
                                <List.Item>
                                    <div className='title'>
                                        <h3 className='title-style'>
                                            <Label className='onlytext bold size24'>
                                                <Icon className='tag2' />
                                                <span>태그</span>
                                            </Label>
                                        </h3>
                                    </div>
                                    <div className='detail'>
                                        <Label as="span" className='tag'>AI</Label>
                                        <Label as="span" className='tag'>Database</Label>
                                        <Label as="span" className='tag'>Design</Label>
                                        <Label as="span" className='tag'>Project Managing</Label>
                                        <Label as="span" className='tag'>Project Managing</Label>
                                        <Label as="span" className='tag'>AI</Label>
                                        <Label as="span" className='tag'>AI</Label>
                                        <Label as="span" className='tag'>AI</Label>
                                        <Label as="span" className='tag'>Database</Label>
                                        <Label as="span" className='tag'>Design</Label>
                                        <Label as="span" className='tag'>Project Managing</Label>
                                        <Label as="span" className='tag'>Project Managing</Label>
                                        <Label as="span" className='tag'>AI</Label>
                                        <Label as="span" className='tag'>AI</Label>
                                    </div>
                                </List.Item>
                            </List>
                        </div>
                    </div>
                </Segment>

                {/*연관 Badge*/}
                <RelationBadgeArea/>

                {/*뱃지 획득 알림*/}
                <BadgeAcquisitionAlert/>
            </>
        )
    }
}

export default ContentsArea