import React, { Component } from "react";
import { Modal, Image } from "semantic-ui-react";
import { Link } from 'react-router-dom';
// import ClosePopup from "../../../../../images/all/icon-close-player-28-px.png";
import eventxt1 from "../../../../../images/all/event_txt1.svg";
import eventxt2 from "../../../../../images/all/event_txt2.svg";
import eventxt3 from "../../../../../images/all/event_txt3.svg";
import eventReward from "../../../../../images/all/event_label_reward.svg";
import stampAttend from "../../../../../images/all/event_stampattend.svg";
import stampLotto from "../../../../../images/all/event_stamplotto.svg";
import endWhite from "../../../../../images/all/icon-end-wht.svg";
import btnStrachSmall from "../../../../../images/all/btn-strach-small.svg";

class ClassSeriesDetailModal extends Component {
  state = { open: true };
  show = (size) => () => this.setState({ size, open: true });
  close = () => this.setState({ open: false });

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { open, size } = this.state;

    return (
        <Modal
            size={size}
            open={open}
            onClose={this.close}
            className="base w640 attend"
        >
            <Modal.Header>
                <div className="imgbox">
                    <span><img src={eventxt1} alt="2021.04.01~04.30"/></span>​
                    <span><img src={eventxt2} alt="mySUNI 출석왕 도전!"/></span>
                    <img src={eventxt3} alt="하루에 딱 한 번, 출석도장 꾹하기"/>
                </div>​
            </Modal.Header>
            <Modal.Content className="admin_popup_add">
                <div className="contentbox">
                    {/* 
                        오늘 출석 완료시 notibox 에 done클래스 추가 시 텍스트 변경됩니다.
                        모든 출석 완료시 notibox 에 alldone클래스 추가 시 텍스트및 색상 변경됩니다.
                    */}
                    <div className="notibox alldone ">
                        <strong className="notitxt"></strong>
                        <dl>
                            <dt><img src={eventReward} alt="Day10"/></dt>
                            <dd>5, 10, 15, 20회 당<strong>복권 1장씩!</strong></dd>
                        </dl>

                        {/* 0407 추가영역 */}
                        <div className="stamp_sample">
                            <em><img src={stampAttend} alt="출석"/></em>
                            <em><img src={stampLotto} alt="복권"/></em>
                        {/* 0407 추가영역 */}

                        </div>
                        <Link to="/" className="go_event">이벤트 자세히 보러가기​</Link>
                        <span>*본 이벤트는 PC로만 참여 가능합니다.</span>
                    </div>
                    <div className="stampbox">
                        <ul>
                            {/* 1. 오늘날짜 강조 할때 li에 today클래스 추가되면 텍스트 컬러 변경됩니다.  
                                2. 출석완료 했을 때 li에 done클래스 추가되면 출석완료이미지 노출됩니다. */}
                            <li className="done">
                                <button type="button" className="date">
                                    DAY<strong>01</strong>
                                </button>                          
                            </li>
                            <li className="done">
                                <button type="button" className="date">
                                    DAY<strong>02</strong>
                                </button>                          
                            </li>
                            <li className="done">
                                <button type="button" className="date">
                                    DAY<strong>03</strong>
                                </button>
                            </li>
                            <li className="done">
                                <button type="button" className="date">
                                    DAY<strong>04</strong>
                                </button>
                            </li>
                            <li className="gift done">
                                <button type="button"/>
                            </li>
                            <li className="done">
                                <button type="button"  className="date">
                                    DAY<strong>06</strong>
                                </button>                            
                            </li>
                            <li className="done">
                                <button type="button"  className="date">
                                    DAY<strong>07</strong>
                                </button>
                            </li>
                            <li className="done">
                                <button type="button"  className="date">
                                    DAY<strong>08</strong>
                                </button>
                            </li>
                            <li className="done">
                                <button type="button"  className="date">
                                    DAY<strong>09</strong>
                                </button>
                            </li>
                            <li className="gift done">
                                <button type="button"/>
                            </li>
                            <li className="done">
                                <button type="button"  className="date">
                                    DAY<strong>11</strong>
                                </button>                            
                            </li>
                            <li className="done">
                                <button type="button"  className="date">
                                    DAY<strong>12</strong>
                                </button>
                            </li>
                            <li className="done">
                                <button type="button"  className="date">
                                    DAY<strong>13</strong>
                                </button>
                            </li>
                            <li className="done">
                                <button type="button"  className="date">
                                    DAY<strong>14</strong>
                                </button>
                            </li>
                            <li className="gift done">
                                <button type="button"/>
                            </li>
                            <li className="done">
                                <button type="button"  className="date">
                                    DAY<strong>16</strong>
                                </button>                            
                            </li>
                            <li className="">
                                <button type="button" className="date">
                                    DAY<strong>17</strong>
                                </button>
                            </li>
                            <li>
                                <button type="button"  className="date">
                                    DAY<strong>18</strong>
                                </button>
                            </li>
                            <li className="">
                                <button type="button"  className="date">
                                    DAY<strong>19</strong>
                                </button>
                            </li>
                            <li className="gift">
                                <button type="button"/>
                            </li>
                        </ul>                       
                    </div>
                </div>
                <div className="linkbox">                    
                    <Link to="/" className="go_study">학습하러 가기2</Link>                   
                    <Link to="/" className="go_lotto show">복권 긁기</Link>{/* go_lotto에서 show 클래스 여부에 따라 버튼 노출/비노출 */}
                </div>               
            </Modal.Content>

            {/* 이벤트 종료 */}
            <div className="enddim">
                <div className="dim_inner">
                    <span className="imgbox"><Image src={endWhite} alt="박수치는남자이미지"/></span>
                    <p>
                        <em>
                            4월 30일자로 출석이벤트가 
                            <br/>​종료되었습니다.​
                        </em>
                        <span>
                            이벤트로 획득한 복권은<strong>5월 7일까지 </strong>
                            <br/>아래 <Image src={btnStrachSmall} alt="복권긁기버튼이미지"/> 버튼을 눌러 확인 하세요!
                        </span>
                    </p>
                    <p>
                        출석 횟수가 5회 미만인 경우, 
                        <br/>‘복권 긁기’ 버튼이 노출되지 않습니다.
                    </p>
                </div>
            </div>
        </Modal>
        );
    }
}

export default ClassSeriesDetailModal;