import React, {Component} from 'react';
import { Segment } from 'semantic-ui-react';
import NoteAllShow from '../NoteAllShow';

class ContentsArea extends Component {

    render() {
        return (
            <div className="mypage_contents">
                <strong className="mypage_title">Note</strong>

                <Segment className='full note-tab-area'>
                    <NoteAllShow/>
                </Segment>
            </div>
        )
    }
}


export default ContentsArea
