import React from "react";
import { Popup } from "semantic-ui-react";

const style = {
  borderRadius: "0.375rem",
  textAlign: "center",
  fontSize: "0.875rem",
  border: "1px solid #aaaaaa",
  color: "#4c4c4c",
};

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
    style={style}
    position="bottom center"
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
