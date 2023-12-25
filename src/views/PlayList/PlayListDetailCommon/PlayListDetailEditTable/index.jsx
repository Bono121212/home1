import React from 'react';
import { Table, Checkbox, Image, TableBody, TableCell, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import thumb1 from '../../../../images/all/bg_img1.png';
import thumb2 from '../../../../images/all/bg_img2.png';
import thumb3 from '../../../../images/all/bg_img3.png';

function PlayListDetailEditTable (){
    return (
        <div className="playlist-detail-wrap">
            <Table className="playlist-mylist-list">
                <colgroup>
                    <col width="70px"/>
                    <col width="80px"/>
                    <col width="*"/>
                    <col width="120px"/>
                </colgroup>
                <TableBody>
                    <Table.Row>
                        <Table.Cell>
                            <Checkbox >
                            <span className="blind">선택</span>
                            </Checkbox>
                        </Table.Cell>
                        <TableCell>
                            <Link to="#" className="list-thumb-wrap">
                            <Image src={thumb1} alt="학습카드썸네일" />
                            </Link>
                        </TableCell>
                        <TableCell className="title">
                            <Link to="#">
                            <span className="ellipsis2">AI/DT 시대의 고객 경험 디자인</span>
                            </Link>
                        </TableCell>
                        <TableCell>
                            <Button className="btn-control btn-up" ><Icon className="chevron up" /></Button>
                            <Button className="btn-control btn-down"><Icon className="chevron down" /></Button>
                        </TableCell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            <Checkbox >
                            <span className="blind">선택</span>
                            </Checkbox>
                        </Table.Cell>
                        <TableCell>
                            <Link to="#" className="list-thumb-wrap">
                            <Image src={thumb2} alt="학습카드썸네일" />
                            </Link>
                        </TableCell>
                        <TableCell className="title">
                            <Link to="#">
                            <span className="ellipsis2">디지털로 구현하는 고객공감 전략</span>
                            </Link>
                        </TableCell>
                        <TableCell>
                            <Button className="btn-control btn-up" ><Icon className="chevron up" /></Button>
                            <Button className="btn-control btn-down"><Icon className="chevron down" /></Button>
                        </TableCell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            <Checkbox >
                            <span className="blind">선택</span>
                            </Checkbox>
                        </Table.Cell>
                        <TableCell>
                            <Link to="#" className="list-thumb-wrap">
                            <Image src={thumb3} alt="학습카드썸네일" />
                            </Link>
                        </TableCell>
                        <TableCell className="title">
                            <Link to="#">
                            <span className="ellipsis2">AI UX 기초 Essentials</span>
                            </Link>
                        </TableCell>
                        <TableCell>
                            <Button className="btn-control btn-up" ><Icon className="chevron up" /></Button>
                            <Button className="btn-control btn-down"><Icon className="chevron down" /></Button>
                        </TableCell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            <Checkbox >
                            <span className="blind">선택</span>
                            </Checkbox>
                        </Table.Cell>
                        <TableCell>
                            <Link to="#" className="list-thumb-wrap">
                            <Image src={thumb2} alt="학습카드썸네일" />
                            </Link>
                        </TableCell>
                        <TableCell className="title">
                            <Link to="#">
                            <span className="ellipsis2">데이터 혁신이 답이다</span>
                            </Link>
                        </TableCell>
                        <TableCell>
                            <Button className="btn-control btn-up" ><Icon className="chevron up" /></Button>
                            <Button className="btn-control btn-down"><Icon className="chevron down" /></Button>
                        </TableCell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            <Checkbox >
                            <span className="blind">선택</span>
                            </Checkbox>
                        </Table.Cell>
                        <TableCell>
                            <Link to="#" className="list-thumb-wrap">
                            <Image src={thumb1} alt="학습카드썸네일" />
                            </Link>
                        </TableCell>
                        <TableCell className="title">
                            <Link to="#">
                            <span className="ellipsis2">[TM Speech] P4G 서울 정상회의 기조강연 "Green Growth 가속화를 위한 Mechanism"</span>
                            </Link>
                        </TableCell>
                        <TableCell>
                            <Button className="btn-control btn-up" ><Icon className="chevron up" /></Button>
                            <Button className="btn-control btn-down"><Icon className="chevron down" /></Button>
                        </TableCell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            <Checkbox >
                            <span className="blind">선택</span>
                            </Checkbox>
                        </Table.Cell>
                        <TableCell>
                            <Link to="#" className="list-thumb-wrap">
                            <Image src={thumb3} alt="학습카드썸네일" />
                            </Link>
                        </TableCell>
                        <TableCell className="title">
                            <Link to="#">
                            <span className="ellipsis2">[MIT Tech. Review] 진짜 같은 AI의 목소리, 음성합성 기술</span>
                            </Link>
                        </TableCell>
                        <TableCell>
                            <Button className="btn-control btn-up" ><Icon className="chevron up" /></Button>
                            <Button className="btn-control btn-down"><Icon className="chevron down" /></Button>
                        </TableCell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            <Checkbox >
                            <span className="blind">선택</span>
                            </Checkbox>
                        </Table.Cell>
                        <TableCell>
                            <Link to="#" className="list-thumb-wrap">
                            <Image src={thumb2} alt="학습카드썸네일" />
                            </Link>
                        </TableCell>
                        <TableCell className="title">
                            <Link to="#">
                            <span className="ellipsis2">[UiPath RPA] RPA 응용 _ 1일 1봇 UiPath StudioX</span>
                            </Link>
                        </TableCell>
                        <TableCell>
                            <Button className="btn-control btn-up" ><Icon className="chevron up" /></Button>
                            <Button className="btn-control btn-down"><Icon className="chevron down" /></Button>
                        </TableCell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            <Checkbox >
                            <span className="blind">선택</span>
                            </Checkbox>
                        </Table.Cell>
                        <TableCell>
                            <Link to="#" className="list-thumb-wrap">
                            <Image src={thumb2} alt="학습카드썸네일" />
                            </Link>
                        </TableCell>
                        <TableCell className="title">
                            <Link to="#">
                            <span className="ellipsis2">[UiPath RPA] RPA 응용 _ 1일 1봇 UiPath StudioX</span>
                            </Link>
                        </TableCell>
                        <TableCell>
                            <Button className="btn-control btn-up" ><Icon className="chevron up" /></Button>
                            <Button className="btn-control btn-down"><Icon className="chevron down" /></Button>
                        </TableCell>
                    </Table.Row>
                </TableBody>
            </Table>
        </div>
    )
}

export default PlayListDetailEditTable;
