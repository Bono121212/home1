import React from "react";
import { Popup } from "semantic-ui-react";

const style = {
  borderRadius: "0.375rem",
  textAlign: "center",
  fontSize: "0.875rem",
  border: "1px solid #aaaaaa",
  color: "#4c4c4c",
};

const BubblePopupBg = () => (
  <Popup
    trigger={
      <div className="gauge-content gauge-bg55">
        <div className="gauge-content-box">
          <p className="top-num">9</p>
          <span className="bot-num">23</span>
        </div>
      </div>
    }
    style={style}
    position="bottom center"
    wide
  >
    <span className="personal_pop_tit">
      도전중 Badge
    </span>
    <span>
      <strong>23</strong>개
    </span>
  </Popup>
);

export default BubblePopupBg;
