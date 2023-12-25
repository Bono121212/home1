import React, {Component} from 'react'
import {
  Button,
  Modal,
  Table,
  } from 'semantic-ui-react'

class ApplyReferenceOptionModal extends Component {
  state = {open: true};
  show = size => () => this.setState({size, open: true});
  close = () => this.setState({open: false});

  handleChange = (e, {value}) => this.setState({value});

  render() {
    const {open, size} = this.state;

    return (
       <>
         <Modal size={size} open={open} onClose={this.close} className='base w1000'>

           <Modal.Header className='res'>
             {/*Class Series Detail*/}신청 참조처 설정
             <span className="sub f12">본 과정의 신청 정보를 함께 안내받을 리더 정보를 설정하여 주시기바랍니다.</span>
           </Modal.Header>
           <Modal.Content>
             <div className="scrolling-60vh">
               <Table className='head-fix ml-extra-01'>
                 <colgroup>
                   <col width='20%'/>
                   <col width='20%'/>
                   <col width='20%'/>
                   <col width='10%'/>
                   <col width='30%'/>
                 </colgroup>
                 <Table.Header>
                   <Table.Row>
                     <Table.HeaderCell>회사</Table.HeaderCell>
                     <Table.HeaderCell>부서</Table.HeaderCell>
                     <Table.HeaderCell>이름</Table.HeaderCell>
                     <Table.HeaderCell>직위/직책</Table.HeaderCell>
                     <Table.HeaderCell>이메일</Table.HeaderCell>
                   </Table.Row>
                 </Table.Header>

                 <Table.Body>
                   <Table.Row>
                     <Table.Cell><span>SK 주식회사 C&C SK 주식회사 C&C</span></Table.Cell>
                     <Table.Cell><span>DW서비스팀 DW서비스팀 DW서비스팀 DW서비스팀 DW서비스팀 DW서비스팀 DW서비스팀</span></Table.Cell>
                     <Table.Cell><span>홍길동</span></Table.Cell>
                     <Table.Cell><span>수석</span></Table.Cell>
                     <Table.Cell><span>test@test.com</span></Table.Cell>
                   </Table.Row>

                 </Table.Body>
               </Table>
             </div>
           </Modal.Content>
           <Modal.Actions className="actions">
             <Button className='w190 pop p' onClick={this.close}>참조자 변경하기</Button>
             <Button className='w190 pop p' onClick={this.close}>확인</Button>
             <Button className='w190 pop d' onClick={this.close}>취소</Button>
           </Modal.Actions>
         </Modal>
       </>
    )
  }
}

export default ApplyReferenceOptionModal;
