import React from "react";

const MyFSCard = (props) => {
    return (
        <div className={'my_fs_card '+ props.typeClass}>
            {/* 썸네일영역 */}
            <div className='my_fs_card_thumb'>
                <img src={props.src} alt="" />
                {props.time && <span className="time">{props.time}</span>}
                {props.ribon && <span className="ribon">{props.ribon}</span>}
            </div>
            {/* 내용영역 */}
            <div className="my_fs_card_body">
                {/* 제목영역 */}
                <div className="title_area">
                    <p className="title">{props.title}</p>
                    <p className="subject">
                        <strong>{props.subject}</strong>
                        {props.btnState && <button type="button" className="btn_learn_state">{props.btnState}</button>}
                    </p>
                    <p className="info">
                        <span className={"badge " + props.badgeClass}></span>
                        <span className="txt_name">{props.badgeName}</span>
                        {(props.badgeCount > 0) && <span className="txt_orther">외 <span className='count'>1</span>개</span> }
                    </p>
                </div>
                {/* 그래프영역 */}
                <div className="prgrs_area">
                    <div className="prgrs_line">
                        <div className="prgrs_bar">
                            <div className="prgrs_act" style={{ width: props.percent+'%' }}></div>
                        </div>
                        <div className={"prgrs_state"+(props.percent === 100 ? " is_completed":"")}>
                            <div><span className="count">{props.percent}</span>%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MyFSCard

