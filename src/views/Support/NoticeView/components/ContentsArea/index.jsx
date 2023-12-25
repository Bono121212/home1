import React from 'react'
import {Button, Icon, Segment, Container} from 'semantic-ui-react'

const ContentsArea = () => (
    <>
        <Segment attached padded>
            <Container>
                <p>SK University 공식 홈페이지가 오픈하였습니다.</p>
                <p>8개의 College와 40여개의 학습 채널에서 원하는 강좌를 수강해보세요!</p>
                <p>개인의 발전과 SK 구성원으로서 발전하는 모습을 SK는 기대합니다.</p>

                <p>SK University 공식 홈페이지가 오픈하였습니다.</p>
                <p>8개의 College와 40여개의 학습 채널에서 원하는 강좌를 수강해보세요!</p>
                <p>개인의 발전과 SK 구성원으로서 발전하는 모습을 SK는 기대합니다.</p>


                <div className="ql-editor" data-gramm="false" contentEditable="false"
                     data-placeholder="Compose an epic...">
                    <iframe className="ql-video" frameBorder="0" allowFullScreen="true" src="https://www.youtube.com/embed/ROWXHmHmO5s?showinfo=0" title="temp video"/>
                    <p><br/></p>
                </div>
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
