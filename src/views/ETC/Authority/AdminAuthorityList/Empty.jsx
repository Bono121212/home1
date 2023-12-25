import React from 'react';
import TitleArea from './components/TitleArea';
import ContentArea from './components/ContentArea';

const AdminAuthorityListEmpty = () => (
    <section className='authority-content'>
        <TitleArea />
        <ContentArea empty />
    </section>
);
export default AdminAuthorityListEmpty
