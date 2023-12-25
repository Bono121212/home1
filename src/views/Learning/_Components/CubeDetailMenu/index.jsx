import classNames from "classnames";
import React from "react";

const CubeDetailMenu = (props) => {
	return (
        <div className={classNames('cube-detail-menu-wrap', {'lms-fixed': (props.scrollValue > props.stickyValue)})}>
            <div className="cube-detail-menu">
                <div className="lms-fixed-inner">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default CubeDetailMenu;