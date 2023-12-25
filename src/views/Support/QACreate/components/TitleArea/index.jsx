import React from 'react'
import {Header, Segment, List, Container} from 'semantic-ui-react'

const TitleArea = () => (
    <Segment attached='top' placeholder>
        <Container>
        <Header as='h2'>
            Contact Us
        </Header>
        <List>
            <List.Item>현재 1:1 문의 답변에 평균 7일 ~ 14일 정도 소요될 수 있으며, 확인이 필요한 문의의 경우 20일 이상 지연될 수 있습니다.</List.Item>
            <List.Item>신속하게 답변드릴 수 있도록 최선을 다하겠습니다.</List.Item>
            <List.Item>기본적인 문의의 경우 FAQ를 통해 관련 내용을 확인하실 수 있으니 참고 부탁드립니다.</List.Item>
        </List>
        </Container>
    </Segment>
);

export default TitleArea