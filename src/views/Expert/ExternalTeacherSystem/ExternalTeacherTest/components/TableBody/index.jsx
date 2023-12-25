import React, { Component } from "react";
import {
    Button,
    Table
} from "semantic-ui-react";

class TableBody extends Component {
      state = { activeIndex: 0, popup: false };

    handleClick = (e, titleProps) => {
        const { index } = titleProps;
        const { activeIndex } = this.state;
        const newIndex = activeIndex === index ?  activeIndex - 1: index;
        this.setState({ activeIndex: newIndex });
    };

    handlePopup = () => {
        const {popup} = this.state
        this.setState({popup: !popup})
    }

    render() {
        const { activeIndex } = this.state;

        return (
            <div className="table-area">
                <div className="external-table-wrap">
                    <Table celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell className="num">No</Table.HeaderCell>
                                <Table.HeaderCell className="company">소속사</Table.HeaderCell>
                                <Table.HeaderCell className="name">성명</Table.HeaderCell>
                                <Table.HeaderCell className="score">시험성적</Table.HeaderCell>
                                <Table.HeaderCell className="status">상태</Table.HeaderCell>
                                <Table.HeaderCell className="date">변경일</Table.HeaderCell>
                                <Table.HeaderCell className="check">시험확인</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell className="num">10</Table.Cell>
                                <Table.Cell className="company"><span>SK주식회사 홀딩스</span></Table.Cell>
                                <Table.Cell className="name"><span>김써니</span></Table.Cell>
                                <Table.Cell className="score">대기</Table.Cell>
                                <Table.Cell className="status"></Table.Cell>
                                <Table.Cell className="date">2021.02.25</Table.Cell>
                                <Table.Cell className="check chk-score">
                                    <Button type="button"
                                        active={activeIndex === 1}
                                        index = {1}
                                        onClick={this.handlePopup}
                                    >
                                        채점하기
                                    </Button>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell className="num">9</Table.Cell>
                                <Table.Cell className="company"><span>SK이노베이션</span></Table.Cell>
                                <Table.Cell className="name"><span>김써니</span></Table.Cell>
                                <Table.Cell className="score">60</Table.Cell>
                                <Table.Cell className="status"></Table.Cell>
                                <Table.Cell className="date">2021.02.25</Table.Cell>
                                <Table.Cell className="check chk-score">
                                    <Button type="button"
                                        active={activeIndex === 1}
                                        index = {1}
                                        onClick={this.handlePopup}
                                    >
                                        채점하기
                                    </Button>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell className="num">8</Table.Cell>
                                <Table.Cell className="company"><span>SK E&S</span></Table.Cell>
                                <Table.Cell className="name"><span>김써니</span></Table.Cell>
                                <Table.Cell className="score">40</Table.Cell>
                                <Table.Cell className="status"></Table.Cell>
                                <Table.Cell className="date">2021.02.25</Table.Cell>
                                <Table.Cell className="check chk-show">
                                    <Button type="button"
                                        active={activeIndex === 1}
                                        index = {1}
                                        onClick={this.handlePopup}
                                    >
                                        보기
                                    </Button>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell className="num">7</Table.Cell>
                                <Table.Cell className="company"><span>SK주식회사 홀딩스</span></Table.Cell>
                                <Table.Cell className="name"><span>김써니</span></Table.Cell>
                                <Table.Cell className="score">20</Table.Cell>
                                <Table.Cell className="status"></Table.Cell>
                                <Table.Cell className="date">2021.02.25</Table.Cell>
                                <Table.Cell className="check chk-score">
                                    <Button type="button"
                                        active={activeIndex === 1}
                                        index = {1}
                                        onClick={this.handlePopup}
                                    >
                                        채점하기
                                    </Button>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell className="num">6</Table.Cell>
                                <Table.Cell className="company"><span>SK이노베이션</span></Table.Cell>
                                <Table.Cell className="name"><span>김써니</span></Table.Cell>
                                <Table.Cell className="score">대기</Table.Cell>
                                <Table.Cell className="status"></Table.Cell>
                                <Table.Cell className="date">2021.02.25</Table.Cell>
                                <Table.Cell className="check chk-score">
                                    <Button type="button"
                                        active={activeIndex === 1}
                                        index = {1}
                                        onClick={this.handlePopup}
                                    >
                                        채점하기
                                    </Button>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell className="num">5</Table.Cell>
                                <Table.Cell className="company"><span>SK E&S</span></Table.Cell>
                                <Table.Cell className="name"><span>김써니</span></Table.Cell>
                                <Table.Cell className="score">60</Table.Cell>
                                <Table.Cell className="status"></Table.Cell>
                                <Table.Cell className="date">2021.02.25</Table.Cell>
                                <Table.Cell className="check chk-show">
                                    <Button type="button"
                                        active={activeIndex === 1}
                                        index = {1}
                                        onClick={this.handlePopup}
                                    >
                                        보기
                                    </Button>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell className="num">4</Table.Cell>
                                <Table.Cell className="company"><span>SK주식회사 홀딩스</span></Table.Cell>
                                <Table.Cell className="name"><span>김써니</span></Table.Cell>
                                <Table.Cell className="score">40</Table.Cell>
                                <Table.Cell className="status"></Table.Cell>
                                <Table.Cell className="date">2021.02.25</Table.Cell>
                                <Table.Cell className="check chk-score">
                                    <Button type="button"
                                        active={activeIndex === 1}
                                        index = {1}
                                        onClick={this.handlePopup}
                                    >
                                        채점하기
                                    </Button>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell className="num">3</Table.Cell>
                                <Table.Cell className="company"><span>SK이노베이션</span></Table.Cell>
                                <Table.Cell className="name"><span>김써니</span></Table.Cell>
                                <Table.Cell className="score">20</Table.Cell>
                                <Table.Cell className="status"></Table.Cell>
                                <Table.Cell className="date">2021.02.25</Table.Cell>
                                <Table.Cell className="check chk-score">
                                    <Button type="button"
                                        active={activeIndex === 1}
                                        index = {1}
                                        onClick={this.handlePopup}
                                    >
                                        채점하기
                                    </Button>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell className="num">2</Table.Cell>
                                <Table.Cell className="company"><span>SK E&S</span></Table.Cell>
                                <Table.Cell className="name"><span>김써니</span></Table.Cell>
                                <Table.Cell className="score">대기</Table.Cell>
                                <Table.Cell className="status"></Table.Cell>
                                <Table.Cell className="date">2021.02.25</Table.Cell>
                                <Table.Cell className="check chk-show">
                                    <Button type="button"
                                        active={activeIndex === 1}
                                        index = {1}
                                        onClick={this.handlePopup}
                                    >
                                        보기
                                    </Button>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell className="num">1</Table.Cell>
                                <Table.Cell className="company"><span>SK주식회사 홀딩스</span></Table.Cell>
                                <Table.Cell className="name"><span>김써니</span></Table.Cell>
                                <Table.Cell className="score">대기</Table.Cell>
                                <Table.Cell className="status"></Table.Cell>
                                <Table.Cell className="date">2021.02.25</Table.Cell>
                                <Table.Cell className="check chk-score">
                                    <Button type="button"
                                        active={activeIndex === 1}
                                        index = {1}
                                        onClick={this.handlePopup}
                                    >
                                        채점하기
                                    </Button>
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </div>
            </div>

        );
    }
}

export default TableBody;