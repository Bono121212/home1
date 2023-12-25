import React, {Component} from 'react';
import { Segment, Table, Button, Input, TextArea } from 'semantic-ui-react';


class ContentsArea extends Component {

    render() {
        return (
            <div className="mypage_contents profile-edit-contents">
                <strong className="mypage_title">프로필 설정</strong>

                <Segment className="full">
                    <div className="table-wrapper">
                        <Table>
                            <colgroup>
                                <col width='160px'/>
                                <col />
                            </colgroup>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>이름</Table.Cell>
                                    <Table.Cell>김써니</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>소속</Table.Cell>
                                    <Table.Cell>CV Digital그룹</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>닉네임</Table.Cell>
                                    <Table.Cell>
                                        <Input placeholder={`닉네임을 입력해주세요 (20자까지 입력 가능)`}/>
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>자기소개</Table.Cell>
                                    <Table.Cell>
                                        <TextArea placeholder={`자기소개 키워드는 쉼표( , )로 구분합니다. (70자까지 입력 가능)\n사용자 화면에서는 키워드 앞에 해시태그( # )와 함께 보여집니다.`}/>
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row className="bttn-line">
                                    <Table.Cell>프로필 이미지</Table.Cell>
                                    <Table.Cell>
                                        <div class="ui w624 input">
                                            <label for="fileup01" class="ui button line02">파일 첨부</label>
                                            <input type="file" id="fileup01" className="fileup-bttn"/>
                                            <input type="text" readOnly value="Profile_image.jpg" className="fileupload-area"/>
                                        </div>
                                    </Table.Cell>
                                </Table.Row>
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
