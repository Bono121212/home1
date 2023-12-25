import React, { Component } from "react";
import { Form, Icon, Button, Image, Popup } from "semantic-ui-react";

import taskRead from "../../../../../images/all/icon-photo-24-px.png";
import btnEmoji from "../../../../../images/all/btn-emoji.svg";
import btnEmojiOn from "../../../../../images/all/btn-emoji-on.svg";
import "react-quill/dist/quill.snow.css";
import { Link } from "react-router-dom";

class PhotoComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  modules = {
    toolbar: [["image"]],
  };

  formats = ["image"];

  render() {
        return (
        <Form reply className="base">
            <div className="outline">
                <div className="field">
                    <textarea placeholder="자유롭게 의견을 적어주세요." />
                </div>

                <div className="more more2">
                    <div className="count left">
                        <span className="now">0</span>/<span className="max">500</span>
                    </div>
                    {/* emoji */}
                    <Popup
                        className="emoji_popup"
                        on='click'
                        pinned
                        position='bottom right'
                        trigger={<Button className="emoji"> {/* emoji 버튼 클릭시 button에 className active 추가*/}
                            <Image className="e_on" src={btnEmojiOn}/>
                            <Image className="e_off" src={btnEmoji}/>
                        </Button>}
                        content={
                            <div className="emoji_popup_wrap">
                                <div className="emoji_header">
                                    <Link className="emoji_list active"><Icon className="icon_emoji_1"/></Link>
                                    <Link className="emoji_list"><Icon className="icon_emoji_2"/></Link>
                                    <Link className="emoji_list"><Icon className="icon_emoji_3"/></Link>
                                    <Link className="emoji_list"><Icon className="icon_emoji_4"/></Link>
                                    <Link className="emoji_list"><Icon className="icon_emoji_5"/></Link>
                                    <Link className="emoji_list"><Icon className="icon_emoji_6"/></Link>
                                    <Link className="emoji_list"><Icon className="icon_emoji_7"/></Link>
                                    <Link className="emoji_list"><Icon className="icon_emoji_8"/></Link>
                                </div>
                                <div className="emoji_popup_body">
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

                    <Button>
                        <div className="ui file task-down">
                            <label htmlFor="hidden-new-file">
                                <Image src={taskRead} />
                            </label>
                            <input type="file" id="hidden-new-file" />
                        </div>
                    </Button>

                    <Button className="submit">Submit</Button>
                </div>
            </div>
        </Form>
        );
    }
}

export default PhotoComment;
