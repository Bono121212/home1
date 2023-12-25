import React from 'react'
import './style.css';
import { MyLearningInfoArea} from './components'
import ProfileCard from './components/ProfileCard';
import ProfileCard2 from './components/ProfileCard2';
import ProfileCard3 from './components/ProfileCard3'
import ProfileCard4 from './components/ProfileCard4'
import ProfileCard5 from './components/ProfileCard5'
import ProfileCardGlb from './components/ProfileCardGlb'

const MainPersonalBoardProfileNew = () => (
    <section className='content main main-sty2'>
        <div className="main-wrap personal-wrap">
            
            {/*마이학습 요약정보*/}
            <MyLearningInfoArea/>
    
            
            <div style={{display:'flex', alignItems:'flex-start', justifyContent :'space-around', width : '95%', padding : '30px', backgroundColor:'#ddd'}}>
                {/* 2021/10 프로필 설정 버튼 New버전 */}
                <div style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
                    <h2 style={{textAlign:'center', fontWeight:'700'}}>프로필설정 후  + 하단:  강사서비스, 승인관리, admin</h2>
                    <ProfileCard/>
                </div>
                <div style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
                    <h2 style={{textAlign:'center', fontWeight:'700'}}>프로필설정 후 + 하단 : 승인관리, admin</h2>
                    <ProfileCard3/>
                </div>
                <div style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
                    <h2 style={{textAlign:'center', fontWeight:'700'}}>프로필설정 후 + 하단 : 승인관리</h2>
                    <ProfileCard4/>
                </div>
                <div style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
                    <h2 style={{textAlign:'center', fontWeight:'700', color:'blue'}}>외부강사 커뮤니티 버전 &gt;&gt; 프로필설정 후 + 하단 : 강사서비스</h2>
                    <ProfileCard5/>
                </div>
                <div style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
                    <h2 style={{textAlign:'center', fontWeight:'700'}}>영문버전 : ( 프로필설정 후  + 하단 :  강사서비스, 승인관리, admin )</h2>
                    <ProfileCardGlb/>
                </div>
                <div style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
                    <h2 style={{textAlign:'center', fontWeight:'700'}}>프로필설정 전 + 하단: 승인관리버튼</h2>
                    <ProfileCard2/>
                </div>
            </div>
        </div>
    </section>
);

export default MainPersonalBoardProfileNew
