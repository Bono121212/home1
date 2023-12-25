import React from "react";

const OverviewReviewNodata = () => {
    return(
        <div className="feedback-nodata">
            <img src="https://image.mysuni.sk.com/suni-asset/public/images/all/icon-comment-nonenote-80-px.svg" alt="" />
            <p className="txt">
                <strong>작성된 후기가 없습니다.</strong>
                <span>과정을 평가하고 첫 후기를 작성해 보세요.</span>
            </p>
        </div>
    )

}
export default OverviewReviewNodata;