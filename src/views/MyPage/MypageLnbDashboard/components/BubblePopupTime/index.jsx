import React from "react";
import { Popup } from "semantic-ui-react";

const BubblePopupTime = () => (
  <Popup
    trigger={
      <div className="gauge-content gauge-time75">
        <div className="gauge-content-box">
          <p>63<em>h</em> 58<em>m</em></p>
          {/* <span>209<em>h</em> 30<em>m</em></span> */}
        </div>
      </div>
    }
    position="bottom center"
    className="b-popup"
    wide
  >
    <span className="personal_pop_tit">
      목표 학습시간
    </span>
    <span className="personal_pop_time">
      <strong>
        209
        <em>h</em>
        &nbsp;
        30
        <em>m</em>
      </strong>
    </span>
  </Popup>
);

export default BubblePopupTime;
