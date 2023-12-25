import React from 'react';

/* interface Props {
  tutorialIndex: string,
  handleTutorial: (tutorialNum:string) => void;
} */

const LeftPanel = ({tutorialIndex, handleTutorial}) => {
  
  return (
    <div className="left">
      <div className="inner">
        <div className="top-logo"><i className="ui icon logo-new sk-login"/></div>
        <a className={classNames('item tu1',tutorialIndex && tutorialIndex ==='tu01' ? 'current' : '')} onClick={()=>handleTutorial('tu1')}>mySUNI가 새로워졌어요!</a>
        <a className={classNames('item tu2',tutorialIndex && tutorialIndex ==='tu02' ? 'current' : '')} onClick={()=>handleTutorial('tu2')}>간소화된 메뉴 구성</a>
        <a className={classNames('item tu3',tutorialIndex && tutorialIndex ==='tu03' ? 'current' : '')} onClick={()=>handleTutorial('tu3')}>똑똑한 검색</a>
        <a className={classNames('item tu4',tutorialIndex && tutorialIndex ==='tu04' ? 'current' : '')} onClick={()=>handleTutorial('tu4')}>편리해진 나의 학습 확인</a>
        <a className={classNames('item tu5',tutorialIndex && tutorialIndex ==='tu05' ? 'current' : '')} onClick={()=>handleTutorial('tu5')}>썸네일로 미리보는 콘텐츠</a>
        <a className={classNames('item tu6',tutorialIndex && tutorialIndex ==='tu06' ? 'current' : '')} onClick={()=>handleTutorial('tu6')}>나만을 위한 추천</a>
        <a className={classNames('item tu7',tutorialIndex && tutorialIndex ==='tu07' ? 'current' : '')} onClick={()=>handleTutorial('tu7')}>따끈한 Topic 모음</a>        
      </div>
    </div>
  );
};

export default LeftPanel;
