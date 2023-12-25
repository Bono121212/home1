import React from 'react';
import {Icon, Button, Checkbox} from 'semantic-ui-react';
import PrivacyTermsText from '../PrivacyTermsText';


const PrivacyAgreeContent02 = ({onClickNextBtn}) => {
    //
    return (
        <>
            <div className="title-box">
                <Icon className="login-sub5 woman"/>
                <h2>개인정보동의</h2>
                <p>mySUNI 개인정보 처리방침에 동의해주세요.</p>
            </div>
            <div className="terms-content">
                <div className="join-agree-area">
                    <ul>
                        <li>
                            <Checkbox
                                className="base black"
                                label="전체동의"
                            />
                        </li>
                        <li>
                            <Checkbox
                                className="base"
                                label="개인정보 처리방침(필수)"
                            />
                        </li>
                        <li>
                            <Checkbox
                                className="base"
                                label="제3자 정보제공에 대한 동의(필수)"
                            />
                        </li>
                        <li>
                            <Checkbox
                                className="base"
                                label="국외 제3자 제공에 대한 동의(필수)"
                            />
                        </li>
                    </ul>
                </div>

                {/*약관내용*/}
                <PrivacyTermsText/>

                <div className="button-area">
                    <div className="error">개인정보 제공 동의를 하지 않으시면 mySUNI 서비스를 이용 하실 수 없습니다.</div>
                    {/*조건 미충족 시 버튼 disabled*/}
                    <Button className="fix bg" onClick={()=>onClickNextBtn('step3')}>다음</Button>
                </div>

            </div>
        </>
    );
}

export default PrivacyAgreeContent02;