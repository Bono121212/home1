import React, {Component} from 'react';
import {Button } from 'semantic-ui-react';
import AddPlayListPopup from '../../../PlayListPopup/AddPlayListPopup';

class TopButtonGroup extends Component {
    state = {popup : false};
    Open = () =>{this.setState({popup:true})}
    
    render() {
        const {popup} = this.state;
        return (
            <div className="left-wrap">
                {popup && <AddPlayListPopup/>}
                <Button className='post add' onClick={this.Open}>+ Playlist 추가</Button>
                <div className="list-number">
                    총 <strong>20개</strong>의 리스트가 있습니다.
                </div>
            </div>
        )
    }

}

export default TopButtonGroup;