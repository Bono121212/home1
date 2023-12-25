import React from 'react'
import {Header, Segment, Grid, List, Container} from 'semantic-ui-react'

const TitleArea = () => (
    <Segment padded='very' placeholder>
        <Container>
            <Grid divided='vertically'>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <Header as='h2'>
                            Support
                            <Header.Subheader>
                                무엇을 도와 드릴까요?<br/>
                                SK University 대한 궁금증을 풀어드립니다.
                            </Header.Subheader>
                        </Header>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment>
                            <Header as='h2'>
                                유용한 도움말
                            </Header>
                            <List ordered>
                                <List.Item as='a'>동영상 재생이 잘 되지 않습니다. 어떡해야 하나요?</List.Item>
                                <List.Item as='a'>커뮤니티를 개설하려면 어떡해야 하나요?</List.Item>
                                <List.Item as='a'>결제 환불 방법을 알려주세요</List.Item>
                            </List>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    </Segment>
);

export default TitleArea