import React from 'react';

import './style.css';
import {
    TitleArea,
    ContentsArea,
    ApproveModal
}
from './components';



const ApprovalRequiredApproveModal = () => (
    <section className='content'>
        <TitleArea/>
        <ContentsArea/>
        <ApproveModal/>
    </section>
)

export default ApprovalRequiredApproveModal;

