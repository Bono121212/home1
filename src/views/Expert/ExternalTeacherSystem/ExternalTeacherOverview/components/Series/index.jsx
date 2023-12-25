import React from "react";
import { List, Icon, Button, Label, Table } from "semantic-ui-react";
import profile_110_px_s1 from "../../../../../../images/all/profile-110-px-sample-1@3x.png"
import profile_110_px_s2 from "../../../../../../images/all/profile-110-px-sample-2@3x.png"
import pLabel from "../../../../../../images/all/icon-lms-represent.svg"

const Series = () => {
  return (
    <div className="ov-paragraph ov-paragraph-v2">
        {/* 차수 */}
        <div className="series-wrap">
            <h3 className="title-style">
                <Label className="onlytext bold size24">
                    <Icon className="series" />
                    <span>{/* Class Series */}차수정보</span>
                </Label>
            </h3>
            <Button icon className="right btn-blue">
                more <Icon className="morelink" />
            </Button>

            <Table>                
                <Table.Body>
                    <Table.Row>
                        <Table.HeaderCell className="num" rowSpan="2"><span>1차수</span></Table.HeaderCell>
                        <Table.Cell className="teacher_info" colSpan="3">
                            <strong>강사정보</strong>

                            <div className="scrolling course-profile scroll-break ">
                                <a class="ui profile tool-tip">
                                    <img src={pLabel} className="p-label"/>
                                    <div class="pic s80">
                                        <img src={profile_110_px_s1} alt="프로필사진 임시이미지" class="ui image" />
                                    </div>
                                    <i>
                                        <a className="tip-name">김수현</a>
                                        <a className="tip-id">EDHEC</a>
                                    </i>
                                </a>
                                <a class="ui profile tool-tip">
                                    <div class="pic s80">
                                        <img src={profile_110_px_s2} alt="프로필사진 임시이미지" class="ui image" />
                                    </div>
                                    <i>
                                        <a className="tip-name">김수현</a>
                                        <a className="tip-id">EDHEC</a>
                                    </i>
                                </a>
                                <a class="ui profile tool-tip">
                                    <div class="pic s80">
                                        <img src={profile_110_px_s1} alt="프로필사진 임시이미지" class="ui image" />
                                    </div>
                                    <i>
                                        <a className="tip-name">김수현</a>
                                        <a className="tip-id">EDHEC</a>
                                    </i>
                                </a>
                                <a class="ui profile tool-tip">
                                    <div class="pic s80">
                                        <img src={profile_110_px_s2} alt="프로필사진 임시이미지" class="ui image" />
                                    </div>
                                    <i>
                                        <a className="tip-name">김수현</a>
                                        <a className="tip-id">EDHEC</a>
                                    </i>
                                </a>
                                <a class="ui profile tool-tip">
                                    <div class="pic s80">
                                        <img src={profile_110_px_s1} alt="프로필사진 임시이미지" class="ui image" />
                                    </div>
                                    <i>
                                        <a className="tip-name">김수현</a>
                                        <a className="tip-id">EDHEC</a>
                                    </i>
                                </a>
                                <a class="ui profile tool-tip">
                                    <div class="pic s80">
                                        <img src={profile_110_px_s2} alt="프로필사진 임시이미지" class="ui image" />
                                    </div>
                                    <i>
                                        <a className="tip-name">김수현</a>
                                        <a className="tip-id">EDHEC</a>
                                    </i>
                                </a>
                                <a class="ui profile tool-tip">
                                    <div class="pic s80">
                                        <img src={profile_110_px_s1} alt="프로필사진 임시이미지" class="ui image" />
                                    </div>
                                    <i>
                                        <a className="tip-name">김수현</a>
                                        <a className="tip-id">EDHEC</a>
                                    </i>
                                </a>
                            </div>
                        </Table.Cell>
                    </Table.Row>   
                    <Table.Row>
                        <Table.Cell className="location_info">
                            <strong>장소</strong>
                            그랑서울 24F
                        </Table.Cell>
                        <Table.Cell className="date_info">
                            <strong>수강신청기간</strong>
                            2019. 01. 02 ~ 2019. 02. 24
                        </Table.Cell>
                        <Table.Cell className="center_info">
                            <strong>교육기간</strong>
                            2019. 01. 02 ~ 2019. 02. 24
                        </Table.Cell>
                    </Table.Row>  


                    <Table.Row>
                        <Table.HeaderCell className="num" rowSpan="2"><span>2차수</span></Table.HeaderCell>
                    </Table.Row>   
                    <Table.Row>
                        <Table.Cell className="location_info">
                            <strong>장소</strong>
                            그랑서울 24F
                        </Table.Cell>
                        <Table.Cell className="date_info">
                            <strong>수강신청기간</strong>
                            2019. 01. 02 ~ 2019. 02. 24
                        </Table.Cell>
                        <Table.Cell className="center_info">
                            <strong>교육기간</strong>
                            2019. 01. 02 ~ 2019. 02. 24
                        </Table.Cell>
                    </Table.Row>   
                </Table.Body>
            </Table>
        </div>
    </div>
  );
};

export default Series;
