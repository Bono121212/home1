import React from 'react'
import { Table, Pagination, Button, Grid,} from 'semantic-ui-react'

const ListTable = () => (
    <>
        <Grid>
            <Grid.Row>
                <Grid.Column width={8}>
                    <span>총 5,000개 학습 등록 | 2,000개 학습 공개 / 3,000개 학습 비공개</span>
                </Grid.Column>
                <Grid.Column width={8}>
                    <div className="right">
                        <Button>신규등록</Button>
                    </div>
                </Grid.Column>
            </Grid.Row>
        </Grid>

        <Table celled>
            <colgroup>
                <col width={'5%'}/>
                <col width={'35%'}/>
                <col width={'10%'}/>
                <col width={'15%'}/>
                <col width={'10%'}/>
                <col width={'7%'}/>
                <col width={'8%'}/>
                <col width={'10%'}/>
            </colgroup>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell textAlign='center'>No.</Table.HeaderCell>
                    <Table.HeaderCell>과정명</Table.HeaderCell>
                    <Table.HeaderCell>학습유형</Table.HeaderCell>
                    <Table.HeaderCell>카테고리</Table.HeaderCell>
                    <Table.HeaderCell>등록일자</Table.HeaderCell>
                    <Table.HeaderCell>생성자</Table.HeaderCell>
                    <Table.HeaderCell>제공상태</Table.HeaderCell>
                    <Table.HeaderCell>공개여부</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                <Table.Row>
                    <Table.Cell textAlign='center'>20</Table.Cell>
                    <Table.Cell>AI와 Block Chain과의 상관관계는 어떻게 되는가?</Table.Cell>
                    <Table.Cell>Classroom</Table.Cell>
                    <Table.Cell>Collage > Channel</Table.Cell>
                    <Table.Cell>2019.10.08</Table.Cell>
                    <Table.Cell>홍길동</Table.Cell>
                    <Table.Cell>승인</Table.Cell>
                    <Table.Cell>Yes</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell textAlign='center'>19</Table.Cell>
                    <Table.Cell>AI와 Block Chain과의 상관관계는 어떻게 되는가?</Table.Cell>
                    <Table.Cell>Classroom</Table.Cell>
                    <Table.Cell>Collage > Channel</Table.Cell>
                    <Table.Cell>2019.10.08</Table.Cell>
                    <Table.Cell>홍길동</Table.Cell>
                    <Table.Cell>반려</Table.Cell>
                    <Table.Cell>Yes</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell textAlign='center'>18</Table.Cell>
                    <Table.Cell>AI와 Block Chain과의 상관관계는 어떻게 되는가?</Table.Cell>
                    <Table.Cell>Classroom</Table.Cell>
                    <Table.Cell>Collage > Channel</Table.Cell>
                    <Table.Cell>2019.10.08</Table.Cell>
                    <Table.Cell>홍길동</Table.Cell>
                    <Table.Cell>임시저장</Table.Cell>
                    <Table.Cell>Yes</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell textAlign='center'>17</Table.Cell>
                    <Table.Cell>AI와 Block Chain과의 상관관계는 어떻게 되는가?</Table.Cell>
                    <Table.Cell>Classroom</Table.Cell>
                    <Table.Cell>Collage > Channel</Table.Cell>
                    <Table.Cell>2019.10.08</Table.Cell>
                    <Table.Cell>홍길동</Table.Cell>
                    <Table.Cell>승인</Table.Cell>
                    <Table.Cell>Yes</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell textAlign='center'>16</Table.Cell>
                    <Table.Cell>AI와 Block Chain과의 상관관계는 어떻게 되는가?</Table.Cell>
                    <Table.Cell>Classroom</Table.Cell>
                    <Table.Cell>Collage > Channel</Table.Cell>
                    <Table.Cell>2019.10.08</Table.Cell>
                    <Table.Cell>홍길동</Table.Cell>
                    <Table.Cell>승인</Table.Cell>
                    <Table.Cell>Yes</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell textAlign='center'>15</Table.Cell>
                    <Table.Cell>AI와 Block Chain과의 상관관계는 어떻게 되는가?</Table.Cell>
                    <Table.Cell>Classroom</Table.Cell>
                    <Table.Cell>Collage > Channel</Table.Cell>
                    <Table.Cell>2019.10.08</Table.Cell>
                    <Table.Cell>홍길동</Table.Cell>
                    <Table.Cell>승인</Table.Cell>
                    <Table.Cell>Yes</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell textAlign='center'>14</Table.Cell>
                    <Table.Cell>AI와 Block Chain과의 상관관계는 어떻게 되는가?</Table.Cell>
                    <Table.Cell>Classroom</Table.Cell>
                    <Table.Cell>Collage > Channel</Table.Cell>
                    <Table.Cell>2019.10.08</Table.Cell>
                    <Table.Cell>홍길동</Table.Cell>
                    <Table.Cell>승인</Table.Cell>
                    <Table.Cell>Yes</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell textAlign='center'>13</Table.Cell>
                    <Table.Cell>AI와 Block Chain과의 상관관계는 어떻게 되는가?</Table.Cell>
                    <Table.Cell>Classroom</Table.Cell>
                    <Table.Cell>Collage > Channel</Table.Cell>
                    <Table.Cell>2019.10.08</Table.Cell>
                    <Table.Cell>홍길동</Table.Cell>
                    <Table.Cell>승인</Table.Cell>
                    <Table.Cell>Yes</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell textAlign='center'>12</Table.Cell>
                    <Table.Cell>AI와 Block Chain과의 상관관계는 어떻게 되는가?</Table.Cell>
                    <Table.Cell>Classroom</Table.Cell>
                    <Table.Cell>Collage > Channel</Table.Cell>
                    <Table.Cell>2019.10.08</Table.Cell>
                    <Table.Cell>홍길동</Table.Cell>
                    <Table.Cell>승인</Table.Cell>
                    <Table.Cell>Yes</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell textAlign='center'>11</Table.Cell>
                    <Table.Cell>AI와 Block Chain과의 상관관계는 어떻게 되는가?</Table.Cell>
                    <Table.Cell>Classroom</Table.Cell>
                    <Table.Cell>Collage > Channel</Table.Cell>
                    <Table.Cell>2019.10.08</Table.Cell>
                    <Table.Cell>홍길동</Table.Cell>
                    <Table.Cell>승인</Table.Cell>
                    <Table.Cell>Yes</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell textAlign='center'>10</Table.Cell>
                    <Table.Cell>AI와 Block Chain과의 상관관계는 어떻게 되는가?</Table.Cell>
                    <Table.Cell>Classroom</Table.Cell>
                    <Table.Cell>Collage > Channel</Table.Cell>
                    <Table.Cell>2019.10.08</Table.Cell>
                    <Table.Cell>홍길동</Table.Cell>
                    <Table.Cell>승인</Table.Cell>
                    <Table.Cell>Yes</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell textAlign='center'>9</Table.Cell>
                    <Table.Cell>AI와 Block Chain과의 상관관계는 어떻게 되는가?</Table.Cell>
                    <Table.Cell>Classroom</Table.Cell>
                    <Table.Cell>Collage > Channel</Table.Cell>
                    <Table.Cell>2019.10.08</Table.Cell>
                    <Table.Cell>홍길동</Table.Cell>
                    <Table.Cell>승인</Table.Cell>
                    <Table.Cell>Yes</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell textAlign='center'>8</Table.Cell>
                    <Table.Cell>AI와 Block Chain과의 상관관계는 어떻게 되는가?</Table.Cell>
                    <Table.Cell>Classroom</Table.Cell>
                    <Table.Cell>Collage > Channel</Table.Cell>
                    <Table.Cell>2019.10.08</Table.Cell>
                    <Table.Cell>홍길동</Table.Cell>
                    <Table.Cell>승인</Table.Cell>
                    <Table.Cell>Yes</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell textAlign='center'>7</Table.Cell>
                    <Table.Cell>AI와 Block Chain과의 상관관계는 어떻게 되는가?</Table.Cell>
                    <Table.Cell>Classroom</Table.Cell>
                    <Table.Cell>Collage > Channel</Table.Cell>
                    <Table.Cell>2019.10.08</Table.Cell>
                    <Table.Cell>홍길동</Table.Cell>
                    <Table.Cell>승인</Table.Cell>
                    <Table.Cell>Yes</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell textAlign='center'>6</Table.Cell>
                    <Table.Cell>AI와 Block Chain과의 상관관계는 어떻게 되는가?</Table.Cell>
                    <Table.Cell>Classroom</Table.Cell>
                    <Table.Cell>Collage > Channel</Table.Cell>
                    <Table.Cell>2019.10.08</Table.Cell>
                    <Table.Cell>홍길동</Table.Cell>
                    <Table.Cell>승인</Table.Cell>
                    <Table.Cell>Yes</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell textAlign='center'>5</Table.Cell>
                    <Table.Cell>AI와 Block Chain과의 상관관계는 어떻게 되는가?</Table.Cell>
                    <Table.Cell>Classroom</Table.Cell>
                    <Table.Cell>Collage > Channel</Table.Cell>
                    <Table.Cell>2019.10.08</Table.Cell>
                    <Table.Cell>홍길동</Table.Cell>
                    <Table.Cell>승인</Table.Cell>
                    <Table.Cell>Yes</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell textAlign='center'>4</Table.Cell>
                    <Table.Cell>AI와 Block Chain과의 상관관계는 어떻게 되는가?</Table.Cell>
                    <Table.Cell>Classroom</Table.Cell>
                    <Table.Cell>Collage > Channel</Table.Cell>
                    <Table.Cell>2019.10.08</Table.Cell>
                    <Table.Cell>홍길동</Table.Cell>
                    <Table.Cell>승인</Table.Cell>
                    <Table.Cell>Yes</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell textAlign='center'>3</Table.Cell>
                    <Table.Cell>AI와 Block Chain과의 상관관계는 어떻게 되는가?</Table.Cell>
                    <Table.Cell>Classroom</Table.Cell>
                    <Table.Cell>Collage > Channel</Table.Cell>
                    <Table.Cell>2019.10.08</Table.Cell>
                    <Table.Cell>홍길동</Table.Cell>
                    <Table.Cell>승인</Table.Cell>
                    <Table.Cell>Yes</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell textAlign='center'>2</Table.Cell>
                    <Table.Cell>AI와 Block Chain과의 상관관계는 어떻게 되는가?</Table.Cell>
                    <Table.Cell>Classroom</Table.Cell>
                    <Table.Cell>Collage > Channel</Table.Cell>
                    <Table.Cell>2019.10.08</Table.Cell>
                    <Table.Cell>홍길동</Table.Cell>
                    <Table.Cell>승인</Table.Cell>
                    <Table.Cell>Yes</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell textAlign='center'>1</Table.Cell>
                    <Table.Cell>AI와 Block Chain과의 상관관계는 어떻게 되는가?</Table.Cell>
                    <Table.Cell>Classroom</Table.Cell>
                    <Table.Cell>Collage > Channel</Table.Cell>
                    <Table.Cell>2019.10.08</Table.Cell>
                    <Table.Cell>홍길동</Table.Cell>
                    <Table.Cell>승인</Table.Cell>
                    <Table.Cell>Yes</Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>

        <div className="center">
            <Pagination
                boundaryRange={0}
                defaultActivePage={1}
                ellipsisItem={null}
                firstItem={null}
                lastItem={null}
                siblingRange={1}
                totalPages={10}
            />
        </div>
    </>
);

export default ListTable
