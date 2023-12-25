import React, {Component} from 'react';
import { Icon } from 'semantic-ui-react';

class NoData extends Component {
    render() {
        return (
            <div className="no-cont-wrap">
                <Icon className="no-contents80" />
                <span className="blind">콘텐츠 없음</span>
                <div className="text">{this.props.message}</div>
            </div>
        )
    }
}
export default NoData;