import React, {useState} from 'react';
import {Icon, Button, Form, Checkbox, Popup} from 'semantic-ui-react';
import classNames from 'classnames';

const style = {
    opacity: 0.83,
    boxShadow: '0 2px 6px 0 #888888',
    border: 0,
    color: '#fff',
    fontSize: '0.75rem',
    lineHeight: '1rem',
    letterSpacing: '-0.01125rem',
    left: '1.25rem',
}

const PrivacyAgreeContent05 = ({onClickNextBtn}) => {
    //
    const [active, setActive] = useState(true);
    const [selectedCollege, setSelectedCollege] = useState();

    const onClickCollege = (college) => {
        //
        if ( college === selectedCollege ) {
            setActive(!active);
        } else {
            setActive(active);
            setSelectedCollege(college);
        }
    }

    return (
        <>
            <div className="title-box">
                <Icon className="login-sub2 woman"/>
                <h2>관심분야</h2>
                <p>
                    여러분의 관심사에 대해 꼼꼼하게 선택해주세요.<br/>
                    최소 3개 이상으로 여러 개를 중복 선택 가능합니다.<br/>
                    조금이라도 관심을 가지는 주제는 모두 선택을 해주세요.
                </p>
            </div>
            <Form>
                <h3 className="title-filter">관심분야 선택</h3>
                <div className="filter-wrap">
                    <div className="column">
                        <div className="f-tit">College</div>
                        <div className="f-list">
                            <div className="scrolling">
                                <div className="college">
                                    <Button
                                        toggle
                                        className={classNames('toggle3', selectedCollege === 'AI' && {active: active})}
                                        onClick={()=>onClickCollege('AI')}
                                    >
                                        AI (4)
                                    </Button>
                                    <Button
                                        toggle
                                        className={classNames('toggle3', selectedCollege === 'DT' && {active: active})}
                                        onClick={()=>onClickCollege('DT')}
                                    >
                                        DT (4)
                                    </Button>
                                    <Button
                                        toggle
                                        className={classNames('toggle3', selectedCollege === '행복' && {active: active})}
                                        onClick={()=>onClickCollege('행복')}
                                    >
                                        행복 (4)
                                    </Button>
                                    <Button
                                        toggle
                                        className={classNames('toggle3', selectedCollege === 'SV' && {active: active})}
                                        onClick={()=>onClickCollege('SV')}
                                    >
                                        SV (4)
                                    </Button>
                                    <Button
                                        toggle
                                        className={classNames('toggle3', selectedCollege === '혁신디자인' && {active: active})}
                                        onClick={()=>onClickCollege('혁신디자인')}
                                    >
                                        혁신디자인 (4)
                                    </Button>
                                    <Button
                                        toggle
                                        className={classNames('toggle3', selectedCollege === 'Global' && {active: active})}
                                        onClick={()=>onClickCollege('Global')}
                                    >
                                        Global (4)
                                    </Button>
                                    <Button
                                        toggle
                                        className={classNames('toggle3', selectedCollege === 'Leadership' && {active: active})}
                                        onClick={()=>onClickCollege('Leadership')}
                                    >
                                        Leadership (4)
                                    </Button>
                                    <Button
                                        toggle
                                        className={classNames('toggle3', selectedCollege === 'Management' && {active: active})}
                                        onClick={()=>onClickCollege('Management')}
                                    >
                                        Management (4)
                                    </Button>
                                    <Button
                                        toggle
                                        className={classNames('toggle3', selectedCollege === '반도체' && {active: active})}
                                        onClick={()=>onClickCollege('반도체')}
                                    >
                                        반도체 (4)
                                    </Button>
                                    <Button
                                        toggle
                                        className={classNames('toggle3', selectedCollege === 'SK아카데미' && {active: active})}
                                        onClick={()=>onClickCollege('SK아카데미')}
                                    >
                                        SK 아카데미 (4)
                                    </Button>
                                    <Button
                                        toggle
                                        className={classNames('toggle3', selectedCollege === '에너지솔루션' && {active: active})}
                                        onClick={()=>onClickCollege('에너지솔루션')}
                                    >
                                        에너지 솔루션 (4)
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="f-tit">Channel</div>
                        <div className="f-list">
                            <div className="scrolling">
                                <div className="channel">
                                    <ul>
                                        <li>
                                            <Checkbox
                                                className="popup-wrap base"
                                                label={
                                                    <Popup
                                                        content="필수 관심채널이며, 삭제 불가능합니다."
                                                        position="bottom left"
                                                        className="custom-black"
                                                        inverted
                                                        style={style}
                                                        trigger={
                                                            <label className="pop" data-offset="23">
                                                                AI 공통 <span>(30)</span>
                                                            </label>
                                                        }
                                                    />
                                                }
                                            />
                                        </li>
                                        <li>
                                            <Checkbox
                                                className="popup-wrap base"
                                                label={
                                                    <Popup
                                                        content="필수 관심채널이며, 삭제 불가능합니다."
                                                        position="bottom left"
                                                        className="custom-black"
                                                        inverted
                                                        style={style}
                                                        trigger={
                                                            <label className="pop" data-offset="23">
                                                                AI Biz Essential <span>(30)</span>
                                                            </label>
                                                        }
                                                    />
                                                }
                                            />
                                        </li>
                                        <li>
                                            <Checkbox
                                                className="popup-wrap base"
                                                label={
                                                    <Popup
                                                        content="필수 관심채널이며, 삭제 불가능합니다."
                                                        position="bottom left"
                                                        className="custom-black"
                                                        inverted
                                                        style={style}
                                                        trigger={
                                                            <label className="pop" data-offset="23">
                                                                AI Biz 활용(job) <span>(20)</span>
                                                            </label>
                                                        }
                                                    />
                                                }
                                            />
                                        </li>
                                        <li>
                                            <Checkbox
                                                className="popup-wrap base"
                                                label={
                                                    <Popup
                                                        content="필수 관심채널이며, 삭제 불가능합니다."
                                                        position="bottom left"
                                                        className="custom-black"
                                                        inverted
                                                        style={style}
                                                        trigger={
                                                            <label className="pop" data-offset="23">
                                                                AI Biz 활용(Industry) <span>(8)</span>
                                                            </label>
                                                        }
                                                    />
                                                }
                                            />
                                        </li>
                                        <li>
                                            <Checkbox
                                                className="popup-wrap base"
                                                label={
                                                    <Popup
                                                        content="필수 관심채널이며, 삭제 불가능합니다."
                                                        position="bottom left"
                                                        className="custom-black"
                                                        inverted
                                                        style={style}
                                                        trigger={
                                                            <label className="pop" data-offset="23">
                                                                AI Biz Essential <span>(0)</span>
                                                            </label>
                                                        }
                                                    />
                                                }
                                            />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="column">
                        <div className="f-tit">
                            Selected
                            <span className="counter">
                                <span className="now">0</span> / 80
                            </span>
                        </div>
                        <div className="f-list">
                            <div className="scrolling">
                                <div className="selected">
                                    <Button className="del type2">AI</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Button className="clear">
                        <Icon className="reset"/>
                    </Button>
                </div>
            </Form>
            <div className="button-area">
                <div className="error">관심 분야를 3개 이상 선택해주세요.</div>
                {/*조건 미충족 시 버튼 disabled*/}
                <Button className="fix bg" onClick={()=>onClickNextBtn('step6')}>다음</Button>
            </div>
        </>
    );
}

export default PrivacyAgreeContent05;