import React from "react";
import { Link } from "react-router-dom";

const OverviewBadgeList = () => {
    return (
        <div className="ov-badge-list">
            <Link to="/" className="badge-item">
                <div className="badge-box-v2">
                    <span className="badge_thumb">
                        <img src="https://ma.mysuni.sk.com/suni-asset/public/mobile-pub/assets/img/badge-v2/mo_original.png" alt="" />
                    </span>
                </div>
                <div className="badge-cont">
                    <p className="tit">AI/DT Literacy</p>
                    {/* badge-status > completed : 획득, challenging : 도전중, blind : 도전전 / link */}
                    <div className="badge-status blind">
                        <span>도전전</span>
                    </div>
                </div>
            </Link>
            <Link to="/" className="badge-item">
                <div className="badge-box-v2">
                    <span className="badge_thumb">
                        <img src="https://ma.mysuni.sk.com/suni-asset/public/mobile-pub/assets/img/badge-v2/mo_original.png" alt="" />
                    </span>
                </div>
                <div className="badge-cont">
                    <p className="tit">AI/DT Literacy</p>
                    {/* badge-status > completed : 획득, challenging : 도전중, blind : 도전전 / link */}
                    <div className="badge-status blind">
                        <span>도전전</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}
export default OverviewBadgeList;