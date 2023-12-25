import React from 'react';
import {Icon, Step} from 'semantic-ui-react';

const PrivacyAgreeStep = ({activeStep}) => {
    //
    return (
        <div className="header">
            <div className="logo">
                <Icon className="sk-university-login"/>
                <span className="blind">mySUNI</span>
            </div>

            <Step.Group className="number-step type2">
                <Step active={activeStep === 'step1' ? true : false}>
                    <span className="number">
                        <span className="blind">1</span>
                    </span>
                    <span className="title">안내</span>
                </Step>
                <Step active={activeStep === 'step2' ? true : false}>
                    <span className="number">
                        <span className="blind">2</span>
                    </span>
                    <span className="title">개인정보동의</span>
                </Step>
                <Step active={activeStep === 'step3' ? true : false}>
                    <span className="number">
                        <span className="blind">3</span>
                    </span>
                    <span className="title">현 직무</span>
                </Step>
                <Step active={activeStep === 'step4' ? true : false}>
                    <span className="number">
                        <span className="blind">4</span>
                    </span>
                    <span className="title">관심 직무</span>
                </Step>
                <Step active={activeStep === 'step5' ? true : false}>
                    <span className="number">
                        <span className="blind">5</span>
                    </span>
                    <span className="title">관심 분야</span>
                </Step>
                <Step active={activeStep === 'step6' ? true : false}>
                    <span className="number">
                        <span className="blind">6</span>
                    </span>
                    <span className="title">학습방식</span>
                </Step>
            </Step.Group>
        </div>
    )
};

export default PrivacyAgreeStep;