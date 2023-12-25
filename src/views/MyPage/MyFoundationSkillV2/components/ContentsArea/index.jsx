import React from 'react';
import CubeDetailSec from '../../../../Learning/_Components/CubeDetailSec/index';
import MyFSCard from '../MyFSCard';
import ProgressCircle from '../ProgressCircle';

const ContentsArea = (props) => {
    return (
        <CubeDetailSec className="my_fs_sec">
            <div className="my_fs_list">
                {/*
                    @Foundation Skill Color Types
                    .my_fs_yellow : Business Capability
                    .my_fs_green : Design Skills
                    .my_fs_red : Social Skills
                    .my_fs_blue : Digital &amp; Data Skills

                    @Badge Color Types
                    .blue
                    .yellow
                    .green
                    .red
                    .skyblue
                    .orange
                    .lightgreen
                    .purple
                */}
                <div className="my_fs_item my_fs_yellow">
                    <div className="my_fs_box">
                        <div className="my_fs_head">
                            <div className="title_area">
                                <p className='title'><strong>Business Capability</strong></p>
                                <p className='explain'>미래 변화를 읽고 새로운 <br />Biz.Model을 구체화하는 능력</p>
                            </div>
                            <div className="prgrs_area">
                                <ProgressCircle id="ProgressCircle1" percent={0} />
                            </div>
                        </div>
                        <div className="my_fs_body">
                            <div className="my_fs_card_list">
                                <MyFSCard
                                    typeClass="type_1"
                                    src="https://image.mysuni.sk.com/suni-asset/public/images/all/skill-v2/thumb_fs_sample01.png"
                                    title="Business Capability"
                                    subject="미래 경영환경을 ‘나의 업무'에 반영하기"
                                    time="2h 30m"
                                    badgeClass="blue"
                                    badgeName="Future Biz. Perspective"
                                    badgeCount={1}
                                    percent={0}
                                />
                                <MyFSCard
                                    typeClass="type_1"
                                    src="https://image.mysuni.sk.com/suni-asset/public/images/all/skill-v2/thumb_fs_sample02.png"
                                    title="Business Capability"
                                    subject="가치창출을 위한 비즈니스 모델 이해하기"
                                    time="2h 30m"
                                    badgeClass="yellow"
                                    badgeName="Business Model 101"
                                    badgeCount={2}
                                    percent={0}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my_fs_item my_fs_green">
                    <div className="my_fs_box">
                        <div className="my_fs_head">
                            <div className="title_area">
                                <p className='title'><strong>Design Skills</strong></p>
                                <p className='explain'>새로운 가치를 창출하기 위해 <br />문제 해결 방법을 디자인하는 능력</p>
                            </div>
                            <div className="prgrs_area">
                                <ProgressCircle id="ProgressCircle2" percent={50} />
                            </div>
                        </div>
                        <div className="my_fs_body">
                            <div className="my_fs_card_list">
                                <MyFSCard
                                    typeClass="type_1"
                                    src="https://image.mysuni.sk.com/suni-asset/public/images/all/skill-v2/thumb_fs_sample03.png"
                                    title="Design Skills"
                                    subject="컨설턴트의 논리적 문제해결 Skill"
                                    time="2h 30m"
                                    badgeClass="green"
                                    badgeName="컨설턴트의 논리적 문제해결"
                                    badgeCount={0}
                                    percent={0}
                                />
                                <MyFSCard
                                    typeClass="type_1"
                                    src="https://image.mysuni.sk.com/suni-asset/public/images/all/skill-v2/thumb_fs_sample04.png"
                                    title="Design Skills"
                                    subject="혁신가의 창의적 문제해결 Skill"
                                    time="2h 30m"
                                    badgeClass="red"
                                    badgeName="컨설턴트의 논리적 문제해결"
                                    badgeCount={0}
                                    percent={100}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my_fs_item my_fs_red">
                    <div className="my_fs_box">
                        <div className="my_fs_head">
                            <div className="title_area">
                                <p className='title'><strong>Social Skills</strong></p>
                                <p className='explain'>성장 마인드를 가지고 협업해 <br />Performance를 제고하는 능력</p>
                            </div>
                            <div className="prgrs_area">
                                <ProgressCircle id="ProgressCircle3" percent={80} />
                            </div>
                        </div>
                        <div className="my_fs_body">
                            <div className="my_fs_card_list">
                                <MyFSCard
                                    typeClass="type_1"
                                    src="https://image.mysuni.sk.com/suni-asset/public/images/all/skill-v2/thumb_fs_sample05.png"
                                    title="Business Capability"
                                    subject="Self Awareness, 진짜 나를 찾아가는 행복을 만들어갑니다."
                                    time="2h 30m"
                                    badgeClass="skyblue"
                                    badgeName="Self Awareness"
                                    badgeCount={2}
                                    percent={100}
                                />
                                <MyFSCard
                                    typeClass="type_1"
                                    src="https://image.mysuni.sk.com/suni-asset/public/images/all/skill-v2/thumb_fs_sample06.png"
                                    title="Business Capability"
                                    subject="가치창출을 위한 비즈니스 모델 이해하기"
                                    time="2h 30m"
                                    badgeClass="orange"
                                    badgeName="협업을 위한 Communic 어쩌고 저꺼로 배지명이 매우 길어지는 경우"
                                    badgeCount={3}
                                    percent={60}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my_fs_item my_fs_blue">
                    <div className="my_fs_box">
                        <div className="my_fs_head">
                            <div className="title_area">
                                <p className='title'><strong>Digital &amp; Data Skills</strong></p>
                                <p className='explain'>Digital 기술을 활용해 일하는 방식과 Performance를 제고하는 능력</p>
                                <button type='button' className='btn_assessment'>Assessment</button>
                            </div>
                            <div className="prgrs_area">
                                <ProgressCircle id="ProgressCircle4" percent={80} />
                            </div>
                        </div>
                        <div className="my_fs_body">
                            <div className="my_fs_card_list">
                                <MyFSCard
                                    typeClass="type_2"
                                    src="https://image.mysuni.sk.com/suni-asset/public/images/all/skill-v2/thumb_fs_sample07.png"
                                    subject="AI&DT Fundamentals"
                                    ribon="필요역량"
                                    badgeClass="lightgreen"
                                    badgeName="AI/DT Literacy"
                                    badgeCount={3}
                                    percent={60}
                                    btnState="학습현황"
                                />
                                <MyFSCard
                                    typeClass="type_2"
                                    src="https://image.mysuni.sk.com/suni-asset/public/images/all/skill-v2/thumb_fs_sample08.png"
                                    subject="가치창출을 위한 비즈니스 모델 이해하기"
                                    badgeClass="purple"
                                    badgeName="AI/DT Literacy"
                                    badgeCount={1}
                                    percent={80}
                                    btnState="학습현황"
                                />
                                <MyFSCard
                                    typeClass="type_2"
                                    src="https://image.mysuni.sk.com/suni-asset/public/images/all/skill-v2/thumb_fs_sample09.png"
                                    subject="가치창출을 위한 비즈니스 모델 이해하기"
                                    badgeClass="purple"
                                    badgeName="AI/DT Literacy"
                                    badgeCount={0}
                                    percent={100}
                                    btnState="학습현황"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </CubeDetailSec>
    )
}
export default ContentsArea