import React, {Component} from 'react';
import { Icon, Image } from 'semantic-ui-react';
import Nodata from '../../../../../images/all/no-contents-80-px.svg';

class NoData extends Component {
    render() {

        return (
            <>
            <div className="no_data">
                <Icon><Image src={Nodata} alt="데이터가 없습니다"/></Icon>
                <p className="txt">생성된 그룹이 없습니다.</p>
            </div>
            </>
        )
    }
}


export default NoData
