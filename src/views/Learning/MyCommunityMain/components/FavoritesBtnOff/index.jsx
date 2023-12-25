import React, { Component } from "react";
import { Button, Icon, Image } from "semantic-ui-react";

import likeoff from "../../../../../images/all/icon-favorite-off-18-px.svg";
import likeon from "../../../../../images/all/icon-favorite-on-18-px.svg";

class FavoritesBtnOff extends Component {
    state = { activeItem: "AllList" };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {

        return (
            <div className="favorites_btn">
                {/* Button 태그의 'on' 클래스 여부에 따라서 즐겨찾기 이미지 변경됩니다 작업시 참고 부탁드립니다 */}
                <Button>
                    <Icon className="favoff"><Image src={likeoff} alt="즐겨찾기 제거"/></Icon>
                    <Icon className="favon"><Image src={likeon} alt="즐겨찾기 추가"/></Icon>
                </Button>
            </div>
        );
    }
}
export default FavoritesBtnOff;