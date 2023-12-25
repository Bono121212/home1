import React, { useState } from 'react';
import { Form, Icon, Modal, ModalActions, Button, Checkbox } from 'semantic-ui-react';
import '../style.css';


const CreatePlayListPopup = () => {
    const [isOpen, setIsOpen] = useState(true);
    const close = () => {
        setIsOpen(false);
    }
    return(
        <Modal
            open={isOpen}
            close={close}
            className='base w600 pl-create'
            >
                <Modal.Header className="res xfl">
                    Playlist 만들기
                    <Button className='close24' onClick={close} ><Icon className='close24'/></Button>
                </Modal.Header>
                <Modal.Content>
                    <div className='inner'>
                        <Form className='create-form'>
                            <div className='form-tit'>Playlist 명<Icon className='essential'/></div>
                            <div className='ui right-top-count input'>
                                <span className="count"><span className="now">0</span>/<span className="max">30</span></span>
                                <input
                                    placeholder='Playlist 명을 입력해 주세요. '
                                    type='text'
                                    value=''
                                />
                                <span className='validation'>최대 30자까지 입력 가능합니다.</span>
                            </div>
                        </Form>
                        <Form className='create-form'>
                            <div className='form-tit'>Playlist 소개 글</div>
                            <div className="ui right-top-count input">
                                <span className="count"><span className="now">0</span>/<span
                                    className="max">200</span></span>
                                <textarea placeholder="소개 글을 입력해 주세요." />
                                <span className='validation'>최대 200자까지 입력 가능합니다.</span>
                            </div>
                        </Form>
                        <div className="cr-check">
                            <Checkbox label="Playlist를 프로필카드에 노출합니다." className='base'/>
                        </div>
                    </div>
                </Modal.Content>
                <ModalActions>
                    <Button className='w190 pop p'>저장</Button>
                    {/* 기존 playlist수정하는 경우 */}
                    {/* <Button className='w190 pop p'>수정</Button> */}
                </ModalActions>
        </Modal>
    )
}

export default CreatePlayListPopup