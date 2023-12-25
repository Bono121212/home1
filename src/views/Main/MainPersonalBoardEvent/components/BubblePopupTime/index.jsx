import React from "react";
import { Popup } from "semantic-ui-react";

const style = {
  borderRadius: "0.375rem",
  textAlign: "center",
  fontSize: "0.875rem",
  border: "1px solid #aaaaaa",
  color: "#4c4c4c",
};

const BubblePopupTime = () => (
  <Popup
    trigger={
      <div className="gauge-content gauge-time75">
        <div className="gauge-content-box">
          <p>63 58'</p>
          <span>209 30'</span>
        </div>
      </div>
    }
    style={style}
    position="bottom center"
    wide
  >
    <span className="personal_pop_tit">
      누적 학습시간
    </span>
    <span>
      <strong>209</strong>h
      <strong className="personal_pop_sub">30</strong>m
    </span>
  </Popup>
);

export default BubblePopupTime;
