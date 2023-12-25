import React, { Component } from 'react';
import classNames from 'classnames';
import { Button, Icon, Popup } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class EmojiPopup extends Component {

    state = {isOpen:false}
    eRef = React.createRef(null);

    handleClose = () => {this.setState({isOpen : false})}
    handleOpen = () => {this.setState({isOpen : true})}


    render(){
        const {isOpen} = this.state;
        return(
            <Popup
                className="emoji_popup"
                on='click'
                open={this.state.isOpen}
                onClose={this.handleClose}
                onOpen={this.handleOpen}
                pinned
                position='bottom right'
                trigger={
                    <Button className={classNames("emoji-btn", { "active" : isOpen})}>
                        <Icon className="emoji-icon"/>
                    </Button>}
                content={
                    /* 기존과 동일 */
                    <div className="emoji_popup_wrap">
                        <div className="emoji_header">
                            <Link className="emoji_list active"><Icon tabIndex={1} className="icon_emoji_1"/></Link>
                            <Link className="emoji_list"><Icon tabIndex={2} className="icon_emoji_2"/></Link>
                            <Link className="emoji_list"><Icon tabIndex={3} className="icon_emoji_3"/></Link>
                            <Link className="emoji_list"><Icon tabIndex={4} className="icon_emoji_4"/></Link>
                            <Link className="emoji_list"><Icon tabIndex={5} className="icon_emoji_5"/></Link>
                            <Link className="emoji_list"><Icon tabIndex={6} className="icon_emoji_6"/></Link>
                            <Link className="emoji_list"><Icon tabIndex={7} className="icon_emoji_7"/></Link>
                            <Link className="emoji_list"><Icon tabIndex={8} className="icon_emoji_8"/></Link>
                        </div>
                        <div className="emoji_popup_body" ref={this.eRef}>
                            <div className="emoji_inner">
                                <div className="emoji_box emoji_01" id="emoji01">
                                    <strong className="emoji_tit">스마일리</strong>
                                    <div className="emoji_icons">
                                        {/* icon당  22px * 22px */}
                                        <Button className="em_b"><span role="img" aria-label="">😀</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">😄</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">😁</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">😆</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">😄</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">😂</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">😉</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">😇</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🥰</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">😍</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">😊</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🤔</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">😴</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🤤</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">😷</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🤒</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🥵</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🥶</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🥳</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">☹️</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">😳</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">😥</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">😭</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">😱</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">😤</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">😠</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">😎</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🤯</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">💘</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">💖</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">❤️</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">💕</span></Button>
                                    </div>
                                </div>
                                <div className="emoji_box emoji_02" id="emoji02">
                                    <strong className="emoji_tit">손동작</strong>
                                    <div className="emoji_icons">
                                        <Button className="em_b"><span role="img" aria-label="">👋</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🤚</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">👌</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">✌️</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🤟</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">👉</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">👈</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">👆</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">👇</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">☝️</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">👍</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">👎</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">✊</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">👊</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">👏</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🙌</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🙏</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">✍️</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">💪</span></Button>
                                    </div>
                                </div>
                                <div className="emoji_box emoji_03" id="emoji03">
                                    <strong className="emoji_tit">사람</strong>
                                    <div className="emoji_icons">
                                        <Button className="em_b"><span role="img" aria-label="">👶🏻</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">👦🏻</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">👧🏻</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🧑🏻</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">👨🏻</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🙆🏻‍♂️</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🙆🏻‍♀️</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🙅🏻‍♂️</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🙅🏻‍♀️</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🙋🏻‍♂️</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🙋🏻‍♀️</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🤦🏻‍♂️</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🤦🏻‍♀️</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🤷🏻‍♂️</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🤷🏻‍♀️</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">👨🏻‍💼</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">👨🏻‍💻</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🙇🏻‍♂️</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🙇🏻‍♀️</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🙎🏻‍♂️</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🙎🏻‍♀️</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🧘🏻‍♂️</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🧘🏻‍♀️</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🏃🏻‍♂️</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🏃🏻‍♀️</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🤸🏻‍♂️</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🤸🏻‍♀️</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">👼🏻</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🎅🏻</span></Button>
                                    </div>
                                </div>
                                <div className="emoji_box emoji_04" id="emoji04">
                                    <strong className="emoji_tit">기호</strong>
                                    <div className="emoji_icons">
                                        <Button className="em_b"><span role="img" aria-label="">💯</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">💢</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">💥</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">💤</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🎶</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">💦</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">💬</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">💭</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">⭕</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">❌</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🚫</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">⛔</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">✅</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">⬆️</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">⬇️</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🔄</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">⬅️</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">➡️</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">❗</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">❓</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">💲</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">⚠️</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">💣</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">♨️</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🆙</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🆕</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🆘</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🔣</span></Button>
                                    </div>
                                </div>
                                <div className="emoji_box emoji_05" id="emoji05">
                                    <strong className="emoji_tit">음식</strong>
                                    <div className="emoji_icons">
                                        <Button className="em_b"><span role="img" aria-label="">🍇</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🍉</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🍊</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🍌</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🍍</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🍎</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🍑</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🍓</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🥕</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🌽</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🌶️</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🍞</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🍕</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🥩</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🍗</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🍔</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🍟</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🍱</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🍛</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🍜</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🍝</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🍣</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🦀</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🍩</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🍦</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🎂</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🍫</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🍬</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">☕</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🍷</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🍺</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🍽️</span></Button>
                                    </div>
                                </div>
                                <div className="emoji_box emoji_06" id="emoji06">
                                    <strong className="emoji_tit">여행 및 장소</strong>
                                    <div className="emoji_icons">
                                        <Button className="em_b"><span role="img" aria-label="">🏕️</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🏖️</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🏝️</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🏞️</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🏠</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🏥</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🌃</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🏙️</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🌅</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🌄</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🎡</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🎠</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🌍</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🌋</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🏢</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🚓</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🚗</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🚕</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🏍️</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🚲</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🚞</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🚝</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🚊</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">✈️</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🌕</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🌙</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🌟</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">☀️</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🌥️</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">⛈️</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🌈</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">☃️</span></Button>
                                    </div>
                                </div>
                                <div className="emoji_box emoji_07" id="emoji07">
                                    <strong className="emoji_tit">사물</strong>
                                    <div className="emoji_icons">
                                        <Button className="em_b"><span role="img" aria-label="">🏅</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🏆</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🎁</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🎉</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">⚽</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">⚾</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🏀</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🏐</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🎳</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🤿</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🎣</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🎮</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🧸</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🎨</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">👑</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">💎</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">💡</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">📱</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">💻</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">📽️</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">📷</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🔎</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">📚</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">📒</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">📄</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">💵</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">✏️</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🖋️</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">✉️</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🗓️</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">📊</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🛒</span></Button>
                                    </div>
                                </div>
                                <div className="emoji_box emoji_08" id="emoji08">
                                    <strong className="emoji_tit">동물</strong>
                                    <div className="emoji_icons">
                                        <Button className="em_b"><span role="img" aria-label="">🐵</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🐶</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🦊</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🐱</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🦁</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🐯</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🐴</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🦓</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🐷</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🐫</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🦒</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🐘</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🐭</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🐰</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🐿️</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🦇</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🐻</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🐼</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🐨</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🐓</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🐣</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🐸</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🐢</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🐳</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🐟</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🦈</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🐙</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🦋</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🐜</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🐝</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🐞</span></Button>
                                        <Button className="em_b"><span role="img" aria-label="">🕷️</span></Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }/>
        )

    }



}

export default EmojiPopup;