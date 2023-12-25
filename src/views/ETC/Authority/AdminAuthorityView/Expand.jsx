import React from 'react';
import TitleArea from './components/TitleArea';
import ContentArea from './components/ContentArea';

const AdminAuthorityViewExpand = () => (
    <section className='authority-content'>
        <TitleArea />
        <ContentArea expand state="승인 완료" />
    </section>
);
export default AdminAuthorityViewExpand
