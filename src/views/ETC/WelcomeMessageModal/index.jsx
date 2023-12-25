import React from 'react'

import './style.css';
import {
    WelcomeModal,
    TutorialModal
} from './components'

const WelcomeMessageModal = () => (
    <section className='content'>
        <TutorialModal/>
        <WelcomeModal/>
    </section>
);

export default WelcomeMessageModal
