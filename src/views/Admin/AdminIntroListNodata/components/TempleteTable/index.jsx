import React, { Component } from "react";
import { Button, Image, Icon, Table, TableHeader } from "semantic-ui-react";
import Nodata from "../../../../../images/all/no-contents-80-px.svg";

class TempleteTable extends Component {
    state = { value: "basic" };
    handleChange = (e, { value }) => this.setState({ value });

    render() {
        return (
            <>
                <div className="list_table intro">
                    {/* 제작된 인트로 없을때 */}
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
                    </Table>
                    <div className="no_intro">
                        <Icon><Image src={Nodata} /></Icon>
                        <p class="txt1">생성된 인트로 디자인이 없습니다.</p>
                        <span className="txt2">‘인트로 디자인 추가’ 버튼을 눌러 인트로 디자인을 추가해보세요.</span>
                    </div>

                    <div className="btn_box">
                        <Button className="blue"> + 인트로 디자인 추가</Button>
                    </div>
                </div>
            </>
        );
    }
}

export default TempleteTable;
