import React from 'react';
import TitleArea from './components/TitleArea';
import ContentArea from './components/ContentArea';

const AdminAuthorityView = () => (
    <section className='authority-content'>
        <TitleArea />
        <ContentArea state="신청" />
    </section>
);
export default AdminAuthorityView
