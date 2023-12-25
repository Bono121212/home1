import React, { Component } from "react";
import { Button, Icon } from "semantic-ui-react";


class TabMenu extends Component {

    render() {
        return (
            <div className="ta_tab_title">
                <div className="ta_tab_inner">
                    <div className="tab active"><Button>필환경 친환경</Button></div>
                    <div className="tab"><Button>에너지 산업 동향 및 전망</Button></div>
                    <div className="tab"><Button>플로깅 Go!</Button></div>
                </div>
            </div>
        );
    }
}

export default TabMenu;
