import React, { Component } from "react";
import { Button } from "semantic-ui-react";


class TabMenu extends Component {

    render() {
        return (
            <div className="ta_tab_title">
                <div className="ta_tab_inner">
                    <div className="tab active"><Button>첫번째 탭 메뉴명</Button></div>
                    <div className="tab"><Button>두번째 탭 메뉴명</Button></div>
                    <div className="tab"><Button>세번째 탭 메뉴명</Button></div>
                </div>
            </div>
        );
    }
}

export default TabMenu;
