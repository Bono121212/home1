import React, {Component} from 'react';
import { Icon, Image } from 'semantic-ui-react';
//import ClockIcon from '../../../../../images/all/icon-card-time-16-px-green.svg';
import Nodata from "../../../../../images/all/no-contents-80-px.svg";


class NoteAllNodata extends Component {
    render() {
        return (
            <div className="note_nodata">
                <Icon><Image src={Nodata}/></Icon>
                <p className="txt">
                    작성된 Note가 없습니다.
                    <span>
                        원하는 결과의 학습 과정명과  Note 내용을 검색해보세요!
                    </span>
                </p>
            </div>
        )
    }
}


export default NoteAllNodata
