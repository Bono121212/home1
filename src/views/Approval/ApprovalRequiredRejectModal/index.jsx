import React from 'react';

import './style.css';
import {
    TitleArea,
    ContentsArea,
    RejectModal
} from './components';

const ApprovalRequiredRejectModal = () => (
    <section className='content'>
        <TitleArea/>
        <ContentsArea/>
        <RejectModal/>
    </section>
)
export default ApprovalRequiredRejectModal;