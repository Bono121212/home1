import React from "react";
import { Link } from "react-router-dom";
import { Icon, Image } from "semantic-ui-react";
import tempImage from "../../../../../images/all/bg_img2.png";

const LinkContainer = () => {
    return(
        <div className="learning-link-area">
            <Link to="/" className="learning-link">
                <div className="link-thumb">
                    <Image src={tempImage} />
                </div>
                <div className="link-detail">
                    <p className="link-title"><strong>Gloria Chan Packer: Work is not your family</strong></p>
                    <p className="link-desc"><span>3줄 들어갑니다. 3줄 들어갑니다 3줄들어갑니다 3줄들어갑니다.You may need to hear this (if you haven't already): your job is not your family. While you can develop meaningful relationships with your colleagues, calling work your family can actually breed burnout and be detrimental to your mental and emotional health. Mental wellness...</span></p>
                    <p className="link-adr"><span>https://miro.com</span></p>{/* 메인 도메인만 표시 */}
                </div>
                <div className="link-util">
                    <Icon className="pureleft_off"><span className="blind">link이동</span></Icon>
                </div>
            </Link>
        </div>

    )
}

export default LinkContainer;