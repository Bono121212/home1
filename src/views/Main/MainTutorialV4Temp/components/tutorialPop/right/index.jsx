import React from 'react';
import { Tutorial02, Tutorial03, Tutorial04, Tutorial05, Tutorial06, Tutorial07 } from './TutorialSub'

// interface Props {
//   tutorialIndex: string,
//   handleTutorial: (tutorialNum:string) => void;
// }

const RightPanel = ({tutorialIndex, handleTutorial}) => {

  return (
    <div className="right">
      {
        tutorialIndex && tutorialIndex === "tu01" ? (
          <div id="tu1" className="tu-cont tu1">
            <div className="inner">
              <div className="intro-button">
                <ul>
                  <li><a onClick={() => handleTutorial("tu02")} className="intro"><i className="icon tuto-1"/>상단 메뉴</a></li>
                  <li><a onClick={() => handleTutorial("tu05")} className="intro"><i className="icon tuto-2"/>학습카드</a></li>
                  <li><a onClick={() => handleTutorial("tu06")} className="intro"><i className="icon tuto-3"/>개인별 추천</a></li>
                  <li><a onClick={() => handleTutorial("tu07")} className="intro"><i className="icon tuto-4"/>Hot Topic</a></li>
                </ul>
              </div>
            </div>
          </div>
        ) : tutorialIndex === "tu02" ? (
        <Tutorial02 />
        ) : tutorialIndex === "tu03" ? (
        <Tutorial03 />
        ) : tutorialIndex === "tu04" ? (
        <Tutorial04 /> 
        ) : tutorialIndex === "tu05" ? (
        <Tutorial05 /> 
        ) : tutorialIndex === "tu06" ? (
        <Tutorial06 /> 
        ) :tutorialIndex === "tu07" ? (
        <Tutorial07 /> 
        ) : null
      }
    </div>
  );
};

export default RightPanel;
