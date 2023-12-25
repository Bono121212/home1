import React, { useState, useEffect } from 'react';
import TutorialPop from './components/tutorialPop';
import { Checkbox, Button } from 'semantic-ui-react';
import '../style.css';
import { getPolyglotText } from 'shared/ui/logic/PolyglotText';

const Tutorial = () => {
  const [modalOpen, setModalOpen] = useState(true);
  const [noMoreModal, setNoMoreModal] = useState(false);

  /* useEffect(() => {
    const valTutorialModal = window.localStorage.getItem('TutorialModal');
    const tutorialModal = valTutorialModal;
    if (tutorialModal === 'HIDE') {
      setModalOpen(false);
      return;
    }

    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    }

    if (
      tutorialModal === null ||
      tutorialModal === '' ||
      tutorialModal === 'SHOW'
    ) {
      setModalOpen(true);
    } else {
      setModalOpen(false);
    }
  }, [noMoreModal]); */

/*   const ModalClose = () => {
    window.localStorage.setItem('TutorialModal', noMoreModal ? 'HIDE' : 'SHOW');
    document.body.style.overflow = 'auto';
    setModalOpen(!modalOpen);
  };

  const onHandleChange = () => {
    setNoMoreModal(!noMoreModal);
    setModalOpen(false);
  };
 */
  return (
    <div
      className={`ui dimmer modals page hidden ${
        modalOpen ? 'visible active' : ''
      }`
    }
    >
      <div
        className={`ui base w1000 tutorials3 front transition hidden ${
          modalOpen ? 'visible active' : ''
        }`}
      >
        <div className="header3">
          <div className="right-btn">
            <Checkbox
              //label={getPolyglotText('더 이상 보지 않기', '공통-공통-안보기')}
              label='더 이상 보지 않기'
              className="base new"
              //onChange={onHandleChange}
            />
            <Button className="close" //onClick={ModalClose}
            >
              Close
            </Button>
          </div>
        </div>
        <div className="content" style={{ padding: '0' }}>
          <div className="scrolling-80vh">
            <div className="cont-wrap">
              <TutorialPop />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
