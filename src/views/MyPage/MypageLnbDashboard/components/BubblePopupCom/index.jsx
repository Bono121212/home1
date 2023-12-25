import React from "react";
import { Popup } from "semantic-ui-react";

const BubblePopupCom = () => (
  <Popup
    trigger={
      <div className="gauge-content gauge-com35">
        <div className="gauge-content-box">
          <p>228</p>
          <span>340</span>
        </div>
      </div>
    }
    position="bottom center"
    className="b-popup"
    wide
  >
    <span className="personal_pop_tit">
      누적 완료학습
    </span>
    <span>
      <strong>340</strong>개
    </span>
  </Popup>
);

export default BubblePopupCom;
