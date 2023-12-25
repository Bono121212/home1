import React from 'react';
import { Tab } from 'semantic-ui-react';


export const Tutorial2 = () => {
  
  const panes2 = [
    {menuItem : '메뉴 간소화', render : () =>
      <Tab.Pane className="tab-img-wrap">
        <div className="tab-img t-img1"/>
      </Tab.Pane>
    },
    {menuItem : '프로필 카드', render : () =>
      <Tab.Pane className="tab-img-wrap">
        <div className="tab-img t-img2"/>
      </Tab.Pane>
    },
  ];
  return(
    <div className="tu-cont tu2">                                            
      {/* 간소화된 메뉴 구성 */}
      <div className="inner">
        <div className="top-text">
          메뉴 간소화를 통해 <strong>탐색/조회 영역과 나의 영역을 구분</strong>하여<br/> 편리하게 검색하고 학습에 참여할 수 있어요.
        </div>
        <Tab menu={{ secondary: true }} panes ={panes2} className="tab-tu"/>
      </div>
    </div>
  )    
}

export const Tutorial3 = () => {
  const panes3 = [
    {menuItem : '자동완성 기능', render : () =>
      <Tab.Pane className="tab-img-wrap">
        <div className="tab-img t-img1"/>
      </Tab.Pane>
    },
    {menuItem : '오타 정정 기능', render : () =>
      <Tab.Pane className="tab-img-wrap">
        <div className="tab-img t-img2"/>
      </Tab.Pane>
    },
  ];
  return (
    <div className="tu-cont tu3">
      {/* 똑똑한 검색 */}
      <div className="inner">
        <div className="top-text">
          <strong>자동완성, 오타 정정 등 업그레이드 된 검색 기능</strong>으로<br/>학습하고 싶은 과정을 보다 쉽게 찾을 수 있어요. 
        </div>
        <Tab menu={{ secondary: true }} panes ={panes3} className="tab-tu"/>
      </div>
    </div>
  )
}

export const Tutorial4 = () => {
  const panes4 = [
    {menuItem : '나의 학습 현황', render : () =>
      <Tab.Pane className="tab-img-wrap">
        <div className="tab-img t-img1"/>
      </Tab.Pane>
    },
    {menuItem : '학습 이어하기', render : () =>
      <Tab.Pane className="tab-img-wrap">
        <div className="tab-img t-img2"/>
      </Tab.Pane>
    },
  ];    
  return (
    <div className="tu-cont tu4">
      {/* 편리해진 나의 학습 확인 */}
      <div className="inner">
        <div className="top-text">
          <strong>‘나의 학습현황 보기’</strong> 클릭으로 <strong>학습의 요약 정보를 확인</strong>하고 <br/><strong>최근에 학습한 과정</strong>으로 빠르게 들어갈 수 있어요. 
        </div>
        <Tab menu={{ secondary: true }} panes ={panes4} className="tab-tu"/>
      </div>
    </div>
  )
}
export const Tutorial5 = () => {
  return (
    <div className="tu-cont tu5">
      {/* 썸네일로 미리보는 콘텐츠 */}
      <div className="inner">
        <div className="top-text">
          <strong>이미지형 학습카드</strong>로 학습 내용을 빠르게 파악할 수 있어요. <br/>관심 목록으로 담은 과정들은 <strong>My Learning 메뉴</strong >에서 <br/>모아볼 수 있어요. 
        </div>
        <div className="tab-tu">    
          <div className="ui segment tab tab-img-wrap">
            <div className="tab-img t-img1"/>
          </div>
          </div>
      </div>
    </div>
  )
}

export const Tutorial6 = () => {
  const panes6 =[
    {menuItem : '학습 패턴 기반 추천', render : ()=>
      <Tab.Pane className="tab-img-wrap">
        <div className="tab-img t-img1"/>
      </Tab.Pane>
    }  ,
    {menuItem : '개인 특성 기반 추천', render : () =>
      <Tab.Pane className="tab-img-wrap">
        <div className="tab-img t-img2"/>
      </Tab.Pane>
    },
    {menuItem : '관심 채널로 찜한 과정', render : () =>
      <Tab.Pane className="tab-img-wrap">
        <div className="tab-img t-img3"/>
      </Tab.Pane>
    }
  ];
  return(
    <div className="tu-cont tu6">
      {/* 나만을 위한 추천 */}
      <div className="inner">
        <div className="top-text">
          <strong>머신 러닝을 활용한 데이터 분석으로 과정을 추천</strong>해 드립니다. <br/>계속 업그레이드할 예정이니 많이 기대해 주세요!
        </div>
        <Tab menu={{ secondary: true }} panes ={panes6} className="tab-tu"/>
      </div>
    </div>
  )
}

export const Tutorial7 = ()=>{
  const panes7 =[
    {menuItem : 'Hot Topic (메인)', render : ()=>
      <Tab.Pane className="tab-img-wrap">
        <div className="tab-img t-img1"/>
      </Tab.Pane>
    },
    {menuItem : 'Hot Topic (상세)', render : () =>
      <Tab.Pane className="tab-img-wrap">
        <div className="tab-img t-img2"/>
      </Tab.Pane>
    }
  ];
  return(
    <div className="tu-cont tu7">
      {/* 따끈한 Topic 모음 */}
      <div className="inner">
        <div className="top-text">
          mySUNI가 엄선한 <strong>Hot Topic을 중심으로 성장의 <br/>기반을 다져보세요. </strong>앞으로도 다양한 주제로 찾아 뵐게요!
        </div>
        <Tab menu={{ secondary: true }} panes ={panes7} className="tab-tu"/>
      </div>
    </div>
  )
}