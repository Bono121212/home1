import React from 'react'
import { TitleArea, ContentsArea } from './components'
import './style.css';

const PasswordChangeInfo = () => (
    <section className='bg-white'>
        <div className="password_change_wrap">
            <TitleArea/>
            <ContentsArea/>
        </div>
    </section>
);

export default PasswordChangeInfo
