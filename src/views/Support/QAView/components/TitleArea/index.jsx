import React from 'react'
import {Header, Segment, Button, Icon, List, Container} from 'semantic-ui-react'

const TitleArea = () => (
    <Segment attached='top' placeholder>
        <Container>
            <div className="fl-right">
                <Button icon basic><Icon className='list ul'/></Button>
            </div>
            <Header as='h2'>
                Q : 테스트를 다시 하고 싶습니다. 방법이 있을까요?
            </Header>
            <List>
                <List.Item>문의 유형 : 학습 문의</List.Item>
                <List.Item>2020.01.06 14:33</List.Item>
            </List>
        </Container>
    </Segment>
);

export default TitleArea