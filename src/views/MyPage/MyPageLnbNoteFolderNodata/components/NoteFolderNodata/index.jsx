import React, {Component} from 'react';
import { Icon, Image } from 'semantic-ui-react';
//import ClockIcon from '../../../../../images/all/icon-card-time-16-px-green.svg';
import Nodata from "../../../../../images/all/no-contents-80-px.svg";



class NoteFolderNodata extends Component {
    render() {
        return (
            <div className="note_nodata">
                <Icon><Image src={Nodata}/></Icon>
                <p className="txt">
                    작성된 Note가 없습니다.
                    <span>
                        Note는 각 학습 과정에서 작성할 수 있습니다.
                    </span>
                </p>
            </div>
        )
    }
}


export default NoteFolderNodata
