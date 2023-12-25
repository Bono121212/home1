import React, { Component } from "react";
import { Radio, Button, Icon, Table, TableHeader } from "semantic-ui-react";
import ModalNameEdit from '../ModalNameEdit';


class TempleteTable extends Component {
    state = { value: "basic" };
    handleChange = (e, { value }) => this.setState({ value });

    state = { activeIndex: 0, popup: true };
    handlePopup = () => {
        const {popup} = this.state
        this.setState({popup: !popup})
    }

    render() {
        const { popup } = this.state;

        return (
            <>
                <div className="list_table intro">
					{/* 제작된 인트로 있을때 */}
					<Table>
						<colgroup>
							<col width="150px"/>
							<col width="200px"/>
							<col />
							<col width="200px"/>
						</colgroup>
						<TableHeader>
							<Table.Row>
								<Table.HeaderCell>선택</Table.HeaderCell>
								<Table.HeaderCell>인트로 타입</Table.HeaderCell>
								<Table.HeaderCell>인트로명</Table.HeaderCell>
								<Table.HeaderCell>생성일</Table.HeaderCell>
							</Table.Row>
						</TableHeader>

						<Table.Body>
							<Table.Row>
								<Table.Cell className="t_choice">
									<Radio
										name="IntroType"
										value="basic"
										checked={this.state.value === "basic"}
										onChange={this.handleChange}
									/>
								</Table.Cell>
								{/* t_type에  now 클래스 추가되면 '현재사용중' 텍스트 보여집니다*/}
								<Table.Cell className="t_type now"><span>컨포넌트 타입</span></Table.Cell>
								<Table.Cell className="t_name">
									<span>커뮤니티 기본형이지만 3분기에 바꿀 예정입니다.일단저장</span>
									<Button><Icon /></Button>
								</Table.Cell>
								<Table.Cell className="t_date">2021.05.17</Table.Cell>
							</Table.Row>

							<Table.Row>
								<Table.Cell className="t_choice">
									<Radio
										name="IntroType"
										value="news"
										checked={this.state.value === "news"}
										onChange={this.handleChange}
									/>
								</Table.Cell>
								<Table.Cell className="t_type "><span>HTML타입</span></Table.Cell>
								<Table.Cell className="t_name">
									<span>여름용</span>
									<Button><Icon /></Button>
								</Table.Cell>
								<Table.Cell className="t_date">2021.05.18</Table.Cell>
							</Table.Row>
						</Table.Body>
					</Table>

					<div className="btn_box">
						<Button className="blue"> + 인트로 디자인 추가</Button>
					</div>
				</div>

				{
					popup && <ModalNameEdit />
				}

            </>
        );
    }
}

export default TempleteTable;
