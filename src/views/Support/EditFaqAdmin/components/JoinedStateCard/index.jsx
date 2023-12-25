import React, {Component, createRef} from 'react'
import {
    Segment,
    Image, Label, Icon, Rating, Card, Button, Step, List
} from 'semantic-ui-react'

class JoinedStateCard extends Component {

    render() {
        return (
            <div className='sub-info-wrap'>
                <div className='sub-info-box'>
                    <Label className='ribbon2'>{/* Required */}핵인싸과정</Label>
                    <div className='pd30'>
                        {/*상태값*/}
                        <div className="btn-area">
                            <Button className='fix bg'>Join</Button>
                        </div>
                        {/*Level*/}
                        <div className='level-wrap'>
                            <span className='lv1'>Lv.1</span>
                            <Step.Group unstackable className='level'>
                                <Step>
                                    <Step.Content>
                                        <Step.Title><span className='blind'>Lv.1</span></Step.Title>
                                    </Step.Content>
                                </Step>
                                <Step active>
                                    <Step.Content>
                                        <Step.Title><span className='blind'>Lv.2</span></Step.Title>
                                    </Step.Content>
                                </Step>
                                <Step>
                                    <Step.Content>
                                        <Step.Title><span className='blind'>Lv.3</span></Step.Title>
                                    </Step.Content>
                                </Step>
                                <Step>
                                    <Step.Content>
                                        <Step.Title><span className='blind'>Lv.4</span></Step.Title>
                                    </Step.Content>
                                </Step>
                            </Step.Group>
                            <span className='lv4'>Lv.4</span>
                        </div>
                        {/*학습시간, 인원*/}
                        <List className='class-info1'>
                            <List.Item>
                                <div className='ui'>
                                    <div className='label'>학습시간</div>
                                    <div className='value'>12h 20m</div>
                                </div>
                            </List.Item>
                            <List.Item>
                                <div className='ui'>
                                    <div className='label'>참여 인원</div>
                                    <div className='value'>1,250</div>
                                </div>
                            </List.Item>
                        </List>
                        {/*강사, 담당자*/}
                        <List className='class-info2'>
                            <List.Item>
                                <List.Header>강사</List.Header>
                                <List.Description>김수현</List.Description>
                            </List.Item>
                            <List.Item>
                                <List.Header>담당자</List.Header>
                                <List.Description>김수현<span className='middot'>SK telecom</span>
                                    <br/><a href='mailto:test@test.com' className='underlink'>test@test.com</a>
                                </List.Description>
                            </List.Item>
                        </List>
                    </div>
                    {/*북마크/공유*/}
                    <div className='foot-buttons'>
                        <Button icon className='img-icon'>
                            <Icon className='bookmark2'/>
                            <span className='blind'>북마크</span>
                        </Button>
                        <Button icon className='img-icon'>
                            <Icon className='share2'/>
                            <span className='blind'>공유</span>
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default JoinedStateCard
