import React,{ useState } from 'react'
import { Link } from 'react-router-dom';
import { Checkbox, Modal } from 'semantic-ui-react';

const SystemCheckModal = () => {
    const [isOpen, setIsOpen] = useState(true);
    const close = () => setIsOpen(false);

    // const [index, setIndex] = useState(0);

    /////////////////////////////////////
    // [S]퍼블 확인용
    // const [nowState, setNowState] = useState('');
    // [E]퍼블 확인용
    /////////////////////////////////////
    
    return (
        <section className='content'>
            {/* [S]퍼블확인용 */}
            <div style={{padding:'5rem', textAlign:'center'}}>
                <button onClick={() => setIsOpen(true)}>시스템 점검 안내 팝업 OPEN</button>
            </div>
            {/* [E]퍼블확인용 */}

            <div className="main-wrap">
                <Modal
                    open={isOpen}
                    onClose={close}
                    className='base career-platform-modal-wrap'
                >
                    <Modal.Content className='career-platform-modal-content'>
                        <Link className='career-platform-random-banner' to='/MyCareer/CareerPlatform'>
                            <img src='https://image.mysuni.sk.com/suni-asset/public/images/all/banner-500-service-info.png' alt='mySUNI 시스템 점검 안내' />
                        </Link>
                    </Modal.Content>
                    <Modal.Actions className='career-platform-action'>
                        <Checkbox label="오늘 하루 보지 않기" className='base'/>
                        <button type="button" class="close" onClick={()=> setIsOpen(false)}>Close</button>
                    </Modal.Actions>
                </Modal>
            </div>
        </section>
    )
}

export default SystemCheckModal
