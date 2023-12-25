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
      <p>현재 선택된 언어의 스크립트를 <br/>txt 파일로 다운로드 받으실 수 있습니다.</p>
  </Popup>
)

export default BubblePopup
