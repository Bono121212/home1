import React, { Component } from "react";
import { Popup } from "semantic-ui-react";

class SharePlayListPopupTooltip extends Component {
    // state = {  activeItem: '',  isOpen: false };
  
    // handleOpen = () => {this.setState({ isOpen: true })}  
    // handleClose = () => {this.setState({ isOpen: false })}
    
    render(){        
        return(            
            /* 운영과 달라져서 class new 추가 */
            <Popup className="user-prf-popup"
                trigger={
                    <div className='info-top'>
                        <strong className='prf-name'>{this.props.name}</strong>
                        <span className='prf-comp'>{this.props.comp}</span>
                        <span className="prf-group">{this.props.group}</span>
                    </div>
                }
                // open={this.state.isOpen}
                // onOpen={this.handleOpen}
                // onMouseLeave={this.handleClose}
                // on='hover'
                position='top left'
            >
                <Popup.Content>
                    <div className='info-top'>
                        <strong className='prf-name'>{this.props.name}</strong>
                        <span className='prf-comp'>{this.props.comp}</span>
                        <span className="prf-group">{this.props.group}</span>
                    </div>
                </Popup.Content>
            </Popup>
        )
    }
}

export default SharePlayListPopupTooltip;