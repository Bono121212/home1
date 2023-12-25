import React, {useState} from 'react'
import { Button, Icon, Modal, Image } from 'semantic-ui-react'

const CertificateModal = () => {
    const [open, setOpen] = useState(false);
    return (
        <Modal
            className="base learning-certificate-popup"
            onOpen={()=>setOpen(true)}
            onClose={()=>setOpen(false)}
            open={open}
            on="click"
            trigger={
                <div className="btn-area">
                    <Button className="cert">수료증 보기</Button>
                </div>
        }>
            <Modal.Header>
                <strong>과정 수료증 보기</strong>
                <Button icon className="close24" onClick={()=>setOpen(false)}>
                    <Icon className='close24'/><span className='blind'>Close</span>
                </Button>
            </Modal.Header>
            <Modal.Content>
                <div className="learning-certi-wrap">
                    {/* s: 수료증 인쇄구역 */}
                    <div className="certi-print-area">
                        <span className='image-wrap'>
                            <Image src={`https://image.mysuni.sk.com/suni-asset/public/images/all/img-bg-course-certi@2x.png`} alt="badgeCertificates"/>
                        </span>
                        {/* 수료증 영역 */}
                        <div className="certi-box">
                            <div className="certi-header">
                                <p className='certi-no'>No. OOOO-OO</p>
                                <p className="certi-title">수&nbsp;료&nbsp;증</p>
                            </div>
                            <div className="certi-body">
                                {/* 다국어 처리 : ko, en, zh */}
                                <dl className='define ko'>
                                    <dt className='tit'>교육과정</dt>
                                    <dd className='txt'>[제 3회] Geopolitics & Biz. Nexus 세미나 - 기로에 선 유럽의 Energy Transition</dd>
                                    <dt className='tit'>교육기간</dt>
                                    <dd className='txt'>YYYY.MM.DD ~ YYYY.MM.DD</dd>
                                    <dt className='tit'>교육시간</dt>
                                    <dd className='txt'>00h 00m</dd>
                                    <dt className='tit'>성&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;명</dt>
                                    <dd className='txt'>김써니</dd>
                                    <dt className='tit'>소&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;속</dt>
                                    <dd className='txt'>SK이노베이션 / LMS</dd>
                                </dl>
                            </div>
                            <div className="certi-footer">
                                <p className="desc">위 사람은 mySUNI의 해당 교육과정을 수료하였음을 증명합니다. </p>
                                <p className='date'>
                                    YYYY.MM.DD
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* e: 수료증 인쇄구역 */}
                    <div className="bottom-button">
                        <Button className="fix line">수료증 출력하기</Button>
                        <Button className="fix bg">수료증 다운로드</Button>
                    </div>
                </div>
            </Modal.Content>
        </Modal>
    )
}

export default CertificateModal;
