import React from 'react'
import {Button, Header, Icon, List, Segment, Divider, Container} from 'semantic-ui-react'
//import ButtonGroup from "../../../QACreate/components/ButtonGroup";

const ContentsArea = () => (
    <>
        <Segment attached padded>
            <Container>
                <p>ㅇㅇㅇ 채널의 ㅇㅇㅇ 강의를 듣고 테스트 중 모르고 테스트를 그냥 완료해버렸습니다….</p>
                <p>실수로 눌러버렸는데 혹시 재응시가 가능할까요…..?</p>
                <Divider/>
                <p> 첨부파일 : <a href={()=>false}>Download</a></p>
            </Container>
        </Segment>

        {/* 답변 전 */}
        <Segment attached padded>
            <Container>
                <Header as='h2'>
                    답변 대기 중 입니다.
                </Header>
                <p>현재 1:1 문의 답변에 평균 7일 ~ 14일 정도 소요될 수 있으며, 확인이 필요한 문의의 경우 20일 이상 지연될 수 있습니다.</p>
                <p>신속하게 답변드릴 수 있도록 최선을 다하겠습니다.</p>
                <p>기본적인 문의의 경우 FAQ를 통해 관련 내용을 확인하실 수 있으니 참고 부탁드립니다.</p>
                <p> - SK University -</p>
            </Container>
        </Segment>

        {/* 답변 완료 */}
        <Segment attached padded>
            <Container>
                <Header as='h2'>
                    A : 테스트 재응시는 불가능 합니다.
                </Header>
                <List>
                    <List.Item>2020.01.06 14:33</List.Item>
                </List>

                <p>안녕하세요. SK University 운영자 ㅇㅇㅇ 입니다.</p>
                <p>먼저 SK University를 이용해 주셔서 감사합니다.</p>
                <p>Test는 규정상 1회만 응시 가능하기에 안타깝지만 Test 재 응시가 불가능합니다.</p>
                <p>감사합니다.</p>
                <Divider/>
                <p> 첨부파일 : <a href={()=>false}>Download</a></p>
            </Container>
        </Segment>

        <Segment attached='bottom'>
            <Container>
                <div className="right">
                    <Button icon basic><Icon className='list ul'/></Button>
                </div>
            </Container>
        </Segment>
    </>
);

export default ContentsArea
