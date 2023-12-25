import React, {Component} from 'react'
import {
    Button,
    Checkbox, 
    Header,
    Image,
    Label, 
    Modal,
    Popup, 
    Rating,
    Table 
} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

import './index.css';
import WarmImg from "../../../../../images/all/img-aidt-college-warm.png"

function aiDtReducer(state, action) {
    switch (action.type) {
        case 'close':
            return { open: false }
        case 'open':
            return { open: true, size: action.size }
        default:
            throw new Error('Unsupported action...')
    }
}
  
const AiDtModal = () => {
    const [state, dispatch] = React.useReducer(aiDtReducer, {
        open: true,
        size: undefined,
    })
    const { open, size } = state
  
    return (
        <>
        <Modal
            size={size}
            open={open}
            onClose={() => dispatch({ type: 'close' })}
            className = "aidt-modal"
        >
            <Modal.Header>
                <div className="right-btn">
                    <Checkbox label='더 이상 보지 않기' className='base'/>
                    <Button className="close" onClick={() => dispatch({ type: 'close' })}>Close</Button>
                </div>
            </Modal.Header>
            <Modal.Content>
                <div className="imgbox">
                    <Image src={WarmImg} alt="사회는 거리두기, 우리 조직 DT는 ai/DT Category로 거리 좁히기"></Image>
                    <Link to="/suni-main/certification/badge/badge-detail/BADGE-2t" className="literacy">구성원과정</Link>
                    <Link to="/suni-main/certification/badge/badge-detail/BADGE-4w" className="executive">리더과정</Link>
                </div>
            </Modal.Content>
        </Modal>
        </>
    )
}
  
export default AiDtModal