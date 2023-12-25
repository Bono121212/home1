import React, {Component, createRef} from 'react'
import { Link } from 'react-router-dom'
import {
    Icon, Button,
} from 'semantic-ui-react'
// import ActionButtons from "../ActionButtons";

class TitleArea extends Component {
    contextRef = createRef()
    state = {activeItem: 'Comment'}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        // const {activeItem} = this.state
        return (
            <div className="post-view qna">
                <div className="title-area">
                    <div className="title-inner">
                        <div className="title">SK그룹은 내년 1월 그룹 싱크탱크인 SK경영경제연구소와 기업문화 교육기관인 SK아카데미 등 역량개발 조직을 통합한 SK
                            University를 공식 출범시킬 예정이라고 18일 밝혔다.
                        </div>
                        <div className="user-info">
                            <span className="category">학습문의</span>
                            <span className="date">2020.01.06 14:33</span>
                        </div>
                        <div className="actions">
                            <Button icon className='left postset commu-list16'><Icon className='commu-list16'/>List</Button>
                        </div>
                    </div>
                </div>
                <div className="content-area">
                    <div className="content-inner">
                        <p>SK그룹이 구성원들의 딥체인지 역량을 키워나갈 교육·연구 통합 플랫폼인 'SK University'를 출범시킨다. 국내기업 최고 수준의 교육·연구 전문조직을 운영해야
                            구성원들이 4차 산업혁명 등 급변하는 경영환경에 선제적으로 대응할 수 있는 역량을 갖추게 돼 결국 딥체인지가 가능하다는 최태원 회장의 경영방침에 따른 것이다.
                            SK그룹은 내년 1월 그룹 싱크탱크인 SK경영경제연구소와 기업문화 교육기관인 SK아카데미 등 역량개발 조직을 통합한 SK University를 공식 출범시킬
                            예정이라고 18일 밝혔다. 최태원 SK 회장은 "급속한 경영환경 변화에 따라 Human Capital(인적 자본)에 대한 과감한 투자가 절실한 시점"이라며
                            "구성원들은 SK University를 통해 미래역량을 기르고 축적하게 될 것이며, 이것이 곧 구성원들의 지속적인 성장과 행복을 위한 변화의 첫걸음이 될 것"이라고
                            말했다. </p>
                    </div>
                    <div className="file">
                        <span>첨부파일 :</span> <Link to="#" className="link"><span className="ellipsis">다운로드 Width값 700px 이후로는 말줌임 표시 부탁드립니다. Mobile_App_UI_UX_GUI_Design_Tutorials.pptx</span></Link>
                    </div>
                </div>
            </div>
        )
    }
}


export default TitleArea
