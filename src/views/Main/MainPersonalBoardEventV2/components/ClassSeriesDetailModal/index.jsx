import React, { Component } from "react";
import { Button, Modal, Image, Icon } from "semantic-ui-react";
import { Link } from 'react-router-dom';

import InfoCon from "../../../../../images/all/info-con-btn.png";
import EventLink from "../../../../../images/all/btn-link-event.png";

import event_Title from "../../../../../images/all/img-s-title.png";
import visual01 from "../../../../../images/all/visual-01.png";
import visual02 from "../../../../../images/all/visual-02.png";
import visual03 from "../../../../../images/all/visual-03.png";

import day01Today from "../../../../../images/all/stamp_sum_01_clickme.png";
import day02Before from "../../../../../images/all/stamp_sum_02_before.png";
import day02Today from "../../../../../images/all/stamp_sum_02_clickme.png";
import day03Before from "../../../../../images/all/stamp_sum_03_before.png";
import day03Today from "../../../../../images/all/stamp_sum_03_clickme.png";
import day04Before from "../../../../../images/all/stamp_sum_04_before.png";
import day04Today from "../../../../../images/all/stamp_sum_04_clickme.png";
import day06Before from "../../../../../images/all/stamp_sum_06_before.png";
import day06Today from "../../../../../images/all/stamp_sum_06_clickme.png";
import day07Before from "../../../../../images/all/stamp_sum_07_before.png";
import day07Today from "../../../../../images/all/stamp_sum_07_clickme.png";
import day08Before from "../../../../../images/all/stamp_sum_08_before.png";
import day08Today from "../../../../../images/all/stamp_sum_08_clickme.png";
import day09Before from "../../../../../images/all/stamp_sum_09_before.png";
import day09Today from "../../../../../images/all/stamp_sum_09_clickme.png";
import day11Before from "../../../../../images/all/stamp_sum_11_before.png";
import day11Today from "../../../../../images/all/stamp_sum_11_clickme.png";
import day12Before from "../../../../../images/all/stamp_sum_12_before.png";
import day12Today from "../../../../../images/all/stamp_sum_12_clickme.png";
import day13Before from "../../../../../images/all/stamp_sum_13_before.png";
import day13Today from "../../../../../images/all/stamp_sum_13_clickme.png";
import day14Before from "../../../../../images/all/stamp_sum_14_before.png";
import day14Today from "../../../../../images/all/stamp_sum_14_clickme.png";
import day16Before from "../../../../../images/all/stamp_sum_16_before.png";
import day16Today from "../../../../../images/all/stamp_sum_16_clickme.png";
import day17Before from "../../../../../images/all/stamp_sum_17_before.png";
import day17Today from "../../../../../images/all/stamp_sum_17_clickme.png";
import day18Before from "../../../../../images/all/stamp_sum_18_before.png";
import day18Today from "../../../../../images/all/stamp_sum_18_clickme.png";
import day19Before from "../../../../../images/all/stamp_sum_19_before.png";
import day19Today from "../../../../../images/all/stamp_sum_19_clickme.png";
import day21Before from "../../../../../images/all/stamp_sum_21_before.png";
import day21Today from "../../../../../images/all/stamp_sum_21_clickme.png";
import day22Before from "../../../../../images/all/stamp_sum_22_before.png";
import day22Today from "../../../../../images/all/stamp_sum_22_clickme.png";
import day23Before from "../../../../../images/all/stamp_sum_23_before.png";
import day23Today from "../../../../../images/all/stamp_sum_23_clickme.png";
import day24Before from "../../../../../images/all/stamp_sum_24_before.png";
import day24Today from "../../../../../images/all/stamp_sum_24_clickme.png";

import StampAfter from "../../../../../images/all/stamp-sum-after.png";
import GiftBefore from "../../../../../images/all/stamp_sum_present_before.png";
import GiftToday from "../../../../../images/all/stamp_sum_present_clickme.png";
import GiftAfter from "../../../../../images/all/stamp_sum_present_after.png";

import EndIcon from "../../../../../images/all/icon-s-end.png"
import BtnLotto from "../../../../../images/all/icon-btn-small-lotto.png"
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
            className="base w640 attend2"
        >
            <Modal.Content className="popup_event">
                <div className="event_wrap">
                   <div className="left">
                        <div className="event_title">
                            <Image src={event_Title} alt="다시 돌아온 마이써니 출석 이벤트" />
                            <Link to=""><Image src={EventLink} alt="이벤트 자세히 보러가기"/></Link>
                        </div>
                        <div className="imgbox">
                            <Image src={InfoCon} alt="출석체크를 하면 도장이 이렇게 바뀌어요!"/>
                        </div>
                    </div>
                        
                    <div className="right">
                        <div className="event_status">
                            {/* 오늘 출석 완료시 : event_status 에 today 클래스 추가 부탁드립니다
                            25일 전체 출석완료 시 : event_status 에 alldone 클래스 추가 부탁드립니다 */}
                            <Image src={visual01} className="chk_before" alt="오늘도 출젝하세요. 아직 출첵 전이네요~" />
                            <Image src={visual02} className="chk_after" alt="오늘 출석 체크 완료! 내일도 만나요~" />
                            <Image src={visual03} className="chk_alldone" alt="출석왕 도전 완료! 앞으로도 열공해요!" />
                        </div>
                        <div className="stampbox">
                            <ol>
                            {/* 출석체크 하는날 : li에 today 클래스 추가 부탁드립니다.
                                출석완료 시  : li에 done  클래스 추가 부탁드립니다. (출석완료 이미지 노출됩니다) */}
                                <li className="done">
                                    <Button type="button">
                                        <Image src={day01Today} alt="DAY01" className="i_today" />
                                        <Image src={StampAfter} alt="출석완료" className="i_chk" />
                                    </Button>
                                </li>
                                <li className="today">
                                    <Button type="button" >
                                        <Image src={day02Before} alt="DAY02" className="i_date" />
                                        <Image src={day02Today} alt="Today" className="i_today" />
                                        <Image src={StampAfter} alt="출석완료" className="i_chk" />
                                    </Button>
                                </li>
                                <li className="">
                                    <Button type="button">
                                        <Image src={day03Before} alt="DAY03" className="i_date" />
                                        <Image src={day03Today} alt="Today" className="i_today" />
                                        <Image src={StampAfter} alt="출석완료" className="i_chk" />
                                    </Button>
                                </li>
                                <li className="">
                                    <Button type="button">
                                        <Image src={day04Before} alt="DAY04" className="i_date" />
                                        <Image src={day04Today}  alt="Today" className="i_today" />
                                        <Image src={StampAfter} alt="출석완료" className="i_chk" />
                                    </Button>
                                </li>
                                <li className="today">
                                    <Button type="button">
                                        <Image src={GiftBefore} alt="gift" className="i_date" />
                                        <Image src={GiftToday} alt="Today" className="i_today" />
                                        <Image src={GiftAfter} alt="출석완료" className="i_chk" />
                                    </Button>
                                </li>
                                <li className="">
                                    <Button type="button">
                                        <Image src={day06Before} alt="DAY06" className="i_date" />
                                        <Image src={day06Today}  alt="Today" className="i_today" />
                                        <Image src={StampAfter} alt="출석완료" className="i_chk" />
                                    </Button>
                                </li>
                                <li className="">
                                    <Button type="button" >
                                        <Image src={day07Before} alt="DAY07" className="i_date" />
                                        <Image src={day07Today}  alt="Today" className="i_today" />
                                        <Image src={StampAfter} alt="출석완료" className="i_chk" />
                                    </Button>
                                </li>
                                <li className="">
                                    <Button type="button">
                                        <Image src={day08Before} alt="DAY08" className="i_date" />
                                        <Image src={day08Today}  alt="Today" className="i_today" />
                                        <Image src={StampAfter} alt="출석완료" className="i_chk" />
                                    </Button>
                                </li>
                                <li className="">
                                    <Button type="button">
                                        <Image src={day09Before} alt="DAY09" className="i_date" />
                                        <Image src={day09Today}  alt="Today" className="i_today" />
                                        <Image src={StampAfter} alt="출석완료" className="i_chk" />
                                    </Button>
                                </li>
                                <li className="done">
                                    <Button type="button">
                                        <Image src={GiftBefore} alt="gift" className="i_date" />
                                        <Image src={GiftToday} alt="Today" className="i_today" />
                                        <Image src={GiftAfter} alt="출석완료" className="i_chk" />
                                    </Button>
                                </li>
                                <li className="">
                                    <Button type="button">
                                        <Image src={day11Before} alt="DAY11" className="i_date" />
                                        <Image src={day11Today} alt="Today" className="i_today" />
                                        <Image src={StampAfter} alt="출석완료" className="i_chk" />
                                    </Button>
                                </li>
                                <li className="">
                                    <Button type="button" >
                                        <Image src={day12Before} alt="DAY12" className="i_date" />
                                        <Image src={day12Today} alt="Today" className="i_today" />
                                        <Image src={StampAfter} alt="출석완료" className="i_chk" />
                                    </Button>
                                </li>
                                <li className="">
                                    <Button type="button">
                                        <Image src={day13Before} alt="DAY13" className="i_date" />
                                        <Image src={day13Today} alt="Today" className="i_today" />
                                        <Image src={StampAfter} alt="출석완료" className="i_chk" />
                                    </Button>
                                </li>
                                <li className="">
                                    <Button type="button">
                                        <Image src={day14Before} alt="DAY14" className="i_date" />
                                        <Image src={day14Today} alt="Today" className="i_today" />
                                        <Image src={StampAfter} alt="출석완료" className="i_chk" />
                                    </Button>
                                </li>
                                <li className="">
                                    <Button type="button">
                                        <Image src={GiftBefore} alt="gift" className="i_date" />
                                        <Image src={GiftToday} alt="Today" className="i_today" />
                                        <Image src={GiftAfter} alt="출석완료" className="i_chk" />
                                    </Button>
                                </li>
                                <li className="">
                                    <Button type="button">
                                        <Image src={day16Before} alt="DAY016" className="i_date" />
                                        <Image src={day16Today} alt="Today" className="i_today" />
                                        <Image src={StampAfter} alt="출석완료" className="i_chk" />
                                    </Button>
                                </li>
                                <li className="">
                                    <Button type="button" >
                                        <Image src={day17Before} alt="DAY17" className="i_date" />
                                        <Image src={day17Today} alt="Today" className="i_today" />
                                        <Image src={StampAfter} alt="출석완료" className="i_chk" />
                                    </Button>
                                </li>
                                <li className="">
                                    <Button type="button">
                                        <Image src={day18Before} alt="DAY18" className="i_date" />
                                        <Image src={day18Today} alt="Today" className="i_today" />
                                        <Image src={StampAfter} alt="출석완료" className="i_chk" />
                                    </Button>
                                </li>
                                <li className="">
                                    <Button type="button">
                                        <Image src={day19Before} alt="DAY19" className="i_date" />
                                        <Image src={day19Today} alt="Today" className="i_today" />
                                        <Image src={StampAfter} alt="출석완료" className="i_chk" />
                                    </Button>
                                </li>
                                <li className="">
                                    <Button type="button">
                                        <Image src={GiftBefore} alt="gift" className="i_date" />
                                        <Image src={GiftToday} alt="Today" className="i_today" />
                                        <Image src={GiftAfter} alt="출석완료" className="i_chk" />
                                    </Button>
                                </li>
                                <li className="">
                                    <Button type="button" >
                                        <Image src={day21Before} alt="DAY21" className="i_date" />
                                        <Image src={day21Today} alt="Today" className="i_today" />
                                        <Image src={StampAfter} alt="출석완료" className="i_chk" />
                                    </Button>
                                </li>
                                <li className="">
                                    <Button type="button">
                                        <Image src={day22Before} alt="DAY22" className="i_date" />
                                        <Image src={day22Today} alt="Today" className="i_today" />
                                        <Image src={StampAfter} alt="출석완료" className="i_chk" />
                                    </Button>
                                </li>
                                <li className="">
                                    <Button type="button">
                                        <Image src={day23Before} alt="DAY23" className="i_date" />
                                        <Image src={day23Today} alt="Today" className="i_today" />
                                        <Image src={StampAfter} alt="출석완료" className="i_chk" />
                                    </Button>
                                </li>
                                <li className="">
                                    <Button type="button">
                                        <Image src={day24Before} alt="DAY24" className="i_date" />
                                        <Image src={day24Today} alt="Today" className="i_today" />
                                        <Image src={StampAfter} alt="출석완료" className="i_chk" />
                                    </Button>
                                </li>
                                <li className="">
                                    <Button type="button">
                                        <Image src={GiftBefore} alt="gift" className="i_date" />
                                        <Image src={GiftToday} alt="Today" className="i_today" />
                                        <Image src={GiftAfter} alt="출석완료" className="i_chk" />
                                    </Button>
                                </li>
                            </ol> 
                        </div>

                        <div className="event_txt">
                            <p><Icon /> 출석 <strong> 5회당 1장의 행운권</strong>  을 지급하며, <strong>일 1회만 참여</strong> 가능합니다. (PC 또는 Mobile)</p>
                            <p><Icon /> 꽝이어도 실망하지 마세요. <strong>꽝 3개가 모이면 행운권 1장</strong> 지급!</p>
                            <p><Icon /> 행운권 확인 사이트를 통해 당첨을 확인합니다. </p>
                        </div>
                    </div>
                </div>               
                <div className="linkbox">                    
                    <Link to="/" className="go_study">학습하러 가기</Link>                   
                    <Link to="/" className="go_lotto show"><Icon/> 행운권 확인</Link>{/* go_lotto에서 show 클래스 여부에 따라 버튼 노출/비노출 */}
                </div>               

                {/* 이벤트 종료 */}
                <div className="enddim2">{/* enddim2 에 show 클래스 추가시 종료 안내글 노출됩니다*/}
                    <div className="dim_inner">
                        <span className="endimg"><Image src={EndIcon} alt="종료"/></span>
                        <p>
                            <em>
                                7월 31일자로 출석이벤트가 
                                <br/>​종료되었습니다.​
                            </em>
                            <span>
                                이벤트로 획득한 복권은<strong>8월 8일까지 </strong>
                                <br/>아래 <Image src={BtnLotto} alt="행운권 확인"/> 버튼을 눌러 확인 하세요!
                            </span>
                        </p>
                        <p>
                            출석 횟수가 5회 미만인 경우, 
                            <br/>‘행운권 확인’ 버튼이 노출되지 않습니다.
                        </p>
                    </div>
                </div>
            </Modal.Content>
        </Modal>
        );
    }
}

export default ClassSeriesDetailModal;