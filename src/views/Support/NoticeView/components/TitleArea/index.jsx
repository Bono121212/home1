import React from 'react'
import {Header, Segment, Button, Icon, List, Container} from 'semantic-ui-react'

const TitleArea = () => (
    <Segment attached='top' placeholder>
        <Container>
            <div className="fl-right">
                <Button icon basic><Icon className='list ul'/></Button>
            </div>
            <Header as='h2'>
                SK University 오픈
            </Header>
            <List>
                <List.Item>2020.01.06 14:33</List.Item>
            </List>
        </Container>
    </Segment>
);

export default TitleArea