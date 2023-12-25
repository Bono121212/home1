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
    trigger={<Button className='btn-tooltip' icon='tooltip' />}
    style={style}
    position='bottom center'
    wide
  >
      <p>1개 이상의 첨부파일을 등록하실 수 있습니다.</p>
  </Popup>
)

export default BubblePopup
