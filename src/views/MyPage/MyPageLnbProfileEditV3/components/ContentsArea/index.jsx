import React, {Component} from 'react';
import { Segment, Table, Button, Popup, TextArea } from 'semantic-ui-react';

class ContentsArea extends Component {
    render() {
        return (
            <div className="mypage_contents profile-edit-contents career">
                <strong className="mypage_title">프로필 설정</strong>

                <Segment className="full">
                    <div className="table-wrapper">
                        <Table>
                            <colgroup>
                                <col width='180px'/>
                                <col />
                            </colgroup>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>이름</Table.Cell>
                                    <Table.Cell>김써니</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>소속</Table.Cell>
                                    <Table.Cell>SK C&C / CV Digital그룹</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>국가</Table.Cell>
                                    <Table.Cell>
                                        <div className="form-controls chk-lang">
                                            <div class="ui checkbox radio base">
                                                <input class="hidden ui checkbox radio base" readonly="" tabindex="0" type="radio" value="" name="lang1" id="lang11" />
                                                <label for="lang11">한국</label>
                                            </div>
                                            <div class="ui checkbox radio base">
                                                <input class="hidden ui checkbox radio base" readonly="" tabindex="0" type="radio" value="" name="lang1" id="lang12" />
                                                <label for="lang12">미국</label>
                                            </div>
                                            <div class="ui checkbox radio base">
                                                <input class="hidden ui checkbox radio base" readonly="" tabindex="0" type="radio" value="" name="lang1" id="lang13" />
                                                <label for="lang13">중국</label>
                                            </div>
                                        </div>
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>닉네임</Table.Cell>
                                    {/* 2023-12-05 추가 */}
                                    <Table.Cell>
                                        <span className='nickname-info'>닉네임은 20자까지 입력 가능합니다.</span>
                                        <Button className='line02 outline'>닉네임 설정</Button>
                                        <Popup
                                            className='career-tag-contents'
                                            content={'닉네임 설정은 통합 ID 페이지에서 가능합니다.'}
                                            on='click'
                                            position='top center'
                                            trigger={<Button className="career-tag-legend-trigger"><span class="blind">닉네임 설정 설명</span></Button>}
                                        />
                                    </Table.Cell>
                                    {/* 2023-12-05 숨김 */}
                                    {/* <Table.Cell>
                                        <Input placeholder={`닉네임을 입력해주세요 (20자까지 입력 가능)`}/>
                                    </Table.Cell> */}
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>자기소개</Table.Cell>
                                    <Table.Cell>
                                        <TextArea placeholder={`자기소개 키워드는 쉼표( , )로 구분합니다. (70자까지 입력 가능)\n사용자 화면에서는 키워드 앞에 해시태그( # )와 함께 보여집니다.`}/>
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>마케팅 동의 여부</Table.Cell>
                                    <Table.Cell>
                                        <div className="form-controls chk-cert">
                                            <div class="ui checkbox base">
                                                <input class="hidden ui checkbox base" readonly="" tabindex="0" type="checkbox" value="" id="agree11" />
                                                <label for="agree11">이메일</label>
                                            </div>
                                            <div class="ui checkbox base">
                                                <input class="hidden ui checkbox base" readonly="" tabindex="0" type="checkbox" value="" id="agree12" />
                                                <label for="agree12">SMS</label>
                                            </div>
                                        </div>
                                    </Table.Cell>
                                </Table.Row>
                                {/* 2023-12-05 추가 */}
                                <Table.Row className="bttn-line">
                                    <Table.Cell>프로필 이미지</Table.Cell>
                                    <Table.Cell>
                                        <Button className='line02 outline'>이미지 설정</Button>
                                        <Popup
                                            className='career-tag-contents'
                                            content={'프로필 이미지 설정은 통합 ID 페이지에서 가능합니다.'}
                                            on='click'
                                            position='top center'
                                            trigger={<Button className="career-tag-legend-trigger"><span class="blind">이미지 설정 설명</span></Button>}
                                        />
                                    </Table.Cell>
                                </Table.Row>
                                {/* 2023-12-05 숨김 */}
                                {/* <Table.Row className="bttn-line">
                                    <Table.Cell>프로필 이미지</Table.Cell>
                                    <Table.Cell>
                                        <div class="ui w624 input">
                                            <label for="fileup01" class="ui button line02">파일 첨부</label>
                                            <input type="file" id="fileup01" className="fileup-bttn"/>
                                            <input type="text" readOnly value="Profile_image.jpg" className="fileupload-area"/>
                                        </div>
                                    </Table.Cell>
                                </Table.Row> */}
                                <Table.Row className="bttn-line">
                                    <Table.Cell>배경 이미지</Table.Cell>
                                    <Table.Cell>
                                        <div class="ui w624 input">
                                            <label for="fileup02" class="ui button line02">파일 첨부</label>
                                            <input type="file" id="fileup02" className="fileup-bttn"/>
                                            <input type="text" readonly value="BG_20210422_green.png" className="fileupload-area" />
                                        </div>
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row className="bttn-line">
                                    <Table.Cell>mySUNI를<br />함께하는 가족</Table.Cell>
                                    <Table.Cell>
                                        <p className='bul-dot-16'>SUNI**@gmail.com / 홍*동 / 배우자 / 2023.01.01</p>
                                        <p className='bul-dot-16'>SUNI**@gmail.com / 아*개 / 형제 / 2023.02.01</p>
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </div>
                </Segment>
                <div className="mypage-edit-bottom">
                    <span><strong>미리보기</strong> 버튼으로 내 프로필이 다른 사람에게 어떻게 보여지는지 확인해 보세요.</span>
                    <div className="bttn-area">
                        <Button className="fix line">미리보기</Button>
                        <Button className="fix bg">저장</Button>
                    </div>
                </div>
            </div>
        )
    }
}


export default ContentsArea
