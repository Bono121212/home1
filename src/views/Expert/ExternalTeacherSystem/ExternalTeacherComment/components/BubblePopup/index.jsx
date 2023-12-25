import React from 'react'
import { Button, Popup } from 'semantic-ui-react'

const style = {
    borderRadius: '0.375rem',
    textAlign:'center',
    fontSize:'0.875rem',
    border:'1px solid #aaaaaa',
    color:'#4c4c4c',
  }


const BubblePopup = () => (
  <Popup
    trigger={<Button icon='tooltip' />}
    style={style}
    position='bottom center'
    wide
  >
      
      <p>
      의견이 비공개 처리되며,<br/>
      작성한 본인과 관리자만 확인할 수 있습니다.
      </p>
  </Popup>
)

export default BubblePopup
