import React, { Component } from "react";
import { Table, TableBody, Checkbox } from "semantic-ui-react";

class ModalList extends Component {
    render(){
        return(

            <div className="table_wrap">
                <Table selectable>
                    <colgroup>
                        <col width="240px"/>
                        <col width="540px"/>
                        <col />
                    </colgroup>
                    <Table.Header>
                        <Table.HeaderCell>College /Channel</Table.HeaderCell>
                        <Table.HeaderCell>추천 과정명</Table.HeaderCell>
                        <Table.HeaderCell>적용</Table.HeaderCell>
                    </Table.Header>
                    <TableBody>
                        <Table.Row>                            
                            {/*  <Table.Cell className="tleft ellipsis">에 있던 ellipsis를 분리하여 span태그에 추가 하였습니다. */}
                            <Table.Cell className="tleft"><span className="ellipsis">AI / Executive AI/DT asdfgqwerrrasdf</span></Table.Cell>
                            <Table.Cell className="tleft mw540"><span className="ellipsis">데이터 패턴 파악 역량-1편 데이터 패턴 파악 역량-1편 데이터 패턴 파악 역량-1편 데이터 패턴 파악 역량-1편</span></Table.Cell>
                            <Table.Cell className="pd0">
                                <Checkbox 
                                    className="useChk"
                                />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>                            
                            <Table.Cell className="tleft"><span className="ellipsis">AI / Executive AI/DT asdfgqwerrrasdf</span></Table.Cell>
                            <Table.Cell className="tleft mw540"><span className="ellipsis">데이터 패턴 파악 역량-1편 데이터 패턴 파악 역량-1편 데이터 패턴 파악 역량-1편 데이터 패턴 파악 역량-1편</span></Table.Cell>
                            <Table.Cell className="pd0">
                                <Checkbox 
                                    className="useChk"
                                />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>                            
                            <Table.Cell className="tleft"><span className="ellipsis">AI / Executive AI/DT asdfgqwerrrasdf</span></Table.Cell>
                            <Table.Cell className="tleft mw540"><span className="ellipsis">데이터 패턴 파악 역량-1편 데이터 패턴 파악 역량-1편 데이터 패턴 파악 역량-1편 데이터 패턴 파악 역량-1편</span></Table.Cell>
                            <Table.Cell className="pd0">
                                <Checkbox 
                                    className="useChk"
                                />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>                            
                            <Table.Cell className="tleft"><span className="ellipsis">AI / Executive AI/DT asdfgqwerrrasdf</span></Table.Cell>
                            <Table.Cell className="tleft mw540"><span className="ellipsis">데이터 패턴 파악 역량-1편 데이터 패턴 파악 역량-1편 데이터 패턴 파악 역량-1편 데이터 패턴 파악 역량-1편</span></Table.Cell>
                            <Table.Cell className="pd0">
                                <Checkbox 
                                    className="useChk"
                                />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>                            
                            <Table.Cell className="tleft"><span className="ellipsis">AI / Executive AI/DT asdfgqwerrrasdf</span></Table.Cell>
                            <Table.Cell className="tleft mw540"><span className="ellipsis">데이터 패턴 파악 역량-1편 데이터 패턴 파악 역량-1편 데이터 패턴 파악 역량-1편 데이터 패턴 파악 역량-1편</span></Table.Cell>
                            <Table.Cell className="pd0">
                                <Checkbox 
                                    className="useChk"
                                />
                            </Table.Cell>
                        </Table.Row>
                    </TableBody>
                </Table>
            </div>   
            
        )
    }
}

export default ModalList;