import React from 'react'
import { ContentsAreaError, TitleArea } from './components'
import './style.css';

const PasswordChangeInfoError = () => (
    <section className='bg-white'>
        <div className="password_change_wrap">
            <TitleArea/>
            <ContentsAreaError/>
        </div>
    </section>
);

export default PasswordChangeInfoError
