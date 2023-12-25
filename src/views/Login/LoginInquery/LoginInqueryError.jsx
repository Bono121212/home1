import React, { useState } from 'react';
import { Button, Modal } from 'semantic-ui-react';
import PopInquery from './components/PopInquery';
import PopInqueryHeader from './components/PopInqueryHeader';

const LoginInqueryError = () => {
    const [isOpen, setIsOpen] = useState(true);
    const close = () => setIsOpen(false);

    return (
		<Modal open={isOpen} onClose={close} className='base w1000 inquery-modal'>
			<Modal.Header>
				<PopInqueryHeader />
				<Button className="close black" onClick={close}><span className="blind">Close</span></Button>
			</Modal.Header>
			<Modal.Content>
				<div className="scrolling-80vh">
					<PopInquery memberType="partner" error />
				</div>
			</Modal.Content>
		</Modal>
    );
}
export default LoginInqueryError;