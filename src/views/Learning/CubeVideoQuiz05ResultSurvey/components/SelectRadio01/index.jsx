import React, { Component } from "react";
import { Link } from "react-router-dom";
import { List, Radio } from "semantic-ui-react";
import previewImg from "../../../../../images/all/preview-img.png";
// import ProgressBar from "../ProgressBar";

class SelectRadio01 extends Component {
state = {};

handleChange = (e, { value }) => this.setState({ value });

render() {
    return (
        <List>
            <List.Item>
                <Radio
                    className="base"
                    label="스티브 잡스의 PT와 같은 핵심만 간결한 기획서 긴문장 말줄임 예시입니다.예시구요.예시랍니다"
                    name="radioGroup"
                    value="radio01"
                    checked={this.state.value === "radio01"}
                    onChange={this.handleChange}

                />
                {/* 타인이 선택한 항목 : color-others*/}
                {/* 내가 선택한 항목 : color-mine */}
                <div className="card-gauge-bar sty2 color-others">
                    <div className="rangeBox">
                        <div class="range">
                            <div
                                style={{
                                width: "22%",
                                }}
                                className="percent"
                            ></div>
                        </div>
                        <span>22<em>%</em></span>
                    </div>
                </div>
                <Link className="quiz-preview-img" to="">
                    <img src={previewImg} alt="" />
                </Link>
            </List.Item>
            <List.Item>
                <Radio
                    className="base"
                    label="발표 내용을 친절한 디자인으로 멋지게 정리한 기획서"
                    name="radioGroup"
                    value="radio02"
                    checked={this.state.value === "radio02"}
                    onChange={this.handleChange}
                />
                <div className="card-gauge-bar sty2 color-mine">
                    <div className="rangeBox">
                        <div class="range">
                            <div
                                style={{
                                width: "46%",
                                }}
                                className="percent"
                            ></div>
                        </div>
                        <span>46<em>%</em></span>
                    </div>
                </div>
                <Link className="quiz-preview-img" to="">
                    <img src={previewImg} alt="" />
                </Link>
            </List.Item>
            <List.Item>
                <Radio
                    className="base"
                    label="정리가 잘 된 기획서를 벤치마크 적용한 기획서"
                    name="radioGroup"
                    value="radio03"
                    checked={this.state.value === "radio03"}
                    onChange={this.handleChange}
                />
                <div className="card-gauge-bar sty2 color-others">
                    <div className="rangeBox">
                        <div class="range">
                            <div
                                style={{
                                width: "23%",
                                }}
                                className="percent"
                            ></div>
                        </div>
                        <span>23<em>%</em></span>
                    </div>
                </div>
                <Link className="quiz-preview-img" to="">
                    <img src={previewImg} alt="" />
                </Link>
            </List.Item>
            <List.Item>
                <Radio
                    className="base"
                    label="문서의 의도를 논리적으로 정리한 기획서"
                    name="radioGroup"
                    value="radio04"
                    checked={this.state.value === "radio04"}
                    onChange={this.handleChange}
                />
                <div className="card-gauge-bar sty2 color-others">
                    <div className="rangeBox">
                        <div class="range">
                            <div
                                style={{
                                width: "9%",
                                }}
                                className="percent"
                            ></div>
                        </div>
                        <span>9<em>%</em></span>
                    </div>
                </div>
                <Link className="quiz-preview-img" to="">
                    <img src={previewImg} alt="" />
                </Link>
            </List.Item>
        </List>
        );
    }
}

export default SelectRadio01;
