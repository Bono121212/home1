import React from 'react'
import {Header, Segment, Container} from 'semantic-ui-react'

const TitleArea = () => (
    <Segment attached='top' placeholder>
        <Container>
            <Header as='h2'>
                Notice 작성
            </Header>
        </Container>
    </Segment>
);

export default TitleArea