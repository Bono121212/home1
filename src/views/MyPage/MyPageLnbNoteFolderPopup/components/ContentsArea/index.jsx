import React, {Component} from 'react';
import { Segment,  Button, Icon } from 'semantic-ui-react';
import NoteFolderShow from '../NoteFolderShow';

class ContentsArea extends Component {

    render() {
        return (
            <div className="mypage_contents">
                <strong className="mypage_title">Note</strong>

                <Segment className='full note-tab-area'>
                    <NoteFolderShow/>

                    {/* 더보기 버튼 */}
                    <div className="more-comments">
                        <Button className="icon left moreview">
                            <Icon aria-hidden="true" className="moreview"></Icon>
                            list more
                        </Button>
                    </div>
                </Segment>
            </div>
        )
    }
}


export default ContentsArea
