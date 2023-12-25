import React, { useState } from "react";
import { Button, Modal } from "semantic-ui-react";
import AplFormWrap from "../_Components/OverviewInqueryForm/AplFormWrap";

const CardOverviewInqueryModal = (props) => {
    //console.log(props.scrollBottom);
    const [isOpen, setIsOpen] = useState(true);
    // const show = () => setIsOpen(true);
    const close = () => setIsOpen(false);
    return (
        <Modal
            // trigger={
            //     <button className="btn-inquery" onClick={show}>
            //         <img src="https://image.mysuni.sk.com/suni-asset/public/images/all/cube-v2/btn-60-px-inquiry.svg" alt="Inquery" />
            //     </button>
            // }
            open={isOpen} onClose={close} className='base w1000 inquery-modal'>
            <Modal.Header>
                <h3 class="apl-title">1:1 문의</h3>
                <div class="apl-notice">
                    <p>문의 내용 확인 후, 신속하게 답변드릴 수 있도록 최선을 다하겠습니다.</p>
                </div>
                <Button className="close black" onClick={close}><span className="blind">Close</span></Button>
            </Modal.Header>
            <Modal.Content>
                <div className="scrolling-80vh">
                    <AplFormWrap />
                </div>
            </Modal.Content>
        </Modal>
    );
}
export default CardOverviewInqueryModal;
