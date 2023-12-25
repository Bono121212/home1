import classNames from "classnames";
import React, { Component, createRef } from "react";
import { Button } from "semantic-ui-react";


class SNSListPopup extends Component {
    constructor(props) {
        super(props);
        this.status = props;
        this.state = {visible : false};
    }
    buttonRef = createRef();
    onVisible = prev => this.setState({visible : !prev.visible})
 
    // popup outsider Click
    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }
    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }
    handleClickOutside = (event) =>{
        if(!this.buttonRef.current.contains(event.target)){
            this.setState({visible : false})
        }
    } 

    render() {
        const {visible} = this.state;
        return(
            <div className={classNames("list-sns", this.props.status)} ref={this.buttonRef}>
                <Button className={classNames("link",{"disabled" : (this.props.status !=="completed")})} onClick={this.onVisible}><span>공유하기</span></Button>
                <div className={classNames("ui popup li-sns", {"visible" : visible})}>
                    <div className="inner">
                        <ul>
                            <li>
                                <Button icon className="b-sns lnkIn"><span>LinkedIn</span></Button>
                            </li>
                            <li>
                                <Button icon className="b-sns twt"><span>Twitter</span></Button>
                            </li>
                            <li>
                                <Button icon className="b-sns fb"><span>Facebook</span></Button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        )
    }
}
export default SNSListPopup;