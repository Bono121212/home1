import React from 'react';
import PrivacyAgreeContent01 from '../PrivacyAgreeContent01';
import PrivacyAgreeContent02 from '../PrivacyAgreeContent02';
import PrivacyAgreeContent03 from '../PrivacyAgreeContent03';
import PrivacyAgreeContent04 from '../PrivacyAgreeContent04';
import PrivacyAgreeContent05 from '../PrivacyAgreeContent05';
import PrivacyAgreeContent06 from '../PrivacyAgreeContent06';


const PrivacyAgreeContent = ({activeStep, onClickNextBtn}) => {
    //
    return (
        <>
            {/*안내*/}
            { activeStep === 'step1' && (
                <PrivacyAgreeContent01 onClickNextBtn={onClickNextBtn}/>
            )}

            {/*개인정보동의*/}
            { activeStep === 'step2' && (
                <PrivacyAgreeContent02 onClickNextBtn={onClickNextBtn}/>
            )}

            {/*현직무*/}
            { activeStep === 'step3' && (
                <PrivacyAgreeContent03 onClickNextBtn={onClickNextBtn}/>
            )}

            {/*관심 직무*/}
            { activeStep === 'step4' && (
                <PrivacyAgreeContent04 onClickNextBtn={onClickNextBtn}/>
            )}

            {/*관심분야*/}
            { activeStep === 'step5' && (
                <PrivacyAgreeContent05 onClickNextBtn={onClickNextBtn}/>
            )}

            {/*학습형태*/}
            { activeStep === 'step6' && (
                <PrivacyAgreeContent06 onClickNextBtn={onClickNextBtn}/>
            )}
        </>
    );
}

export default PrivacyAgreeContent;