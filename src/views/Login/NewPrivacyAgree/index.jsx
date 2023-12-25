import React, {useState} from 'react';
import classNames from 'classnames';

import {PrivacyAgreeStep, PrivacyAgreeContent} from './components';

const ClassNameOfStep = {
    step1: 'lo-08-01',
    step2: 'lo-08-02',
    step3: 'lo-08-03',
    step4: 'lo-08-03',
    step5: 'lo-08-06 step1',
    step6: 'lo-08-05 step3',
}

const NewPrivacyAgree = () => {
    //
    const [activeStep, setActiveStep] = useState('step1');

    const onClickNextBtn = (step) => {
        setActiveStep(step);
    }

    return (
        <section className="bg-white">
            <div className={classNames('interest-content', ClassNameOfStep[activeStep])}>

                {/*Step*/}
                <PrivacyAgreeStep activeStep={activeStep}/>

                {/*Contents*/}
                <PrivacyAgreeContent activeStep={activeStep} onClickNextBtn={onClickNextBtn}/>
            </div>
        </section>
    )
};

export default NewPrivacyAgree;