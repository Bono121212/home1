import React, {Component} from 'react'
import {
    Button,
    Modal,
} from 'semantic-ui-react'

class ClassSeriesDetailModal extends Component {
    state = {open: true};
    show = size => () => this.setState({size, open: true});
    close = () => this.setState({open: false});

    handleChange = (e, {value}) => this.setState({value});

    render() {
        const {open, size} = this.state;

        return (
            <>
                {/*<Button onClick={this.show('fullscreen')} basic>보기</Button>*/}

                <Modal size={size} open={open} onClose={this.close} className='base w700'>

                    <Modal.Header className='res'>
                        초기패스워드 안내
                        <span class="sub f12">초기패스워드 : <em>회사코드.사번</em>(띄어쓰기 없음)<br />사번체계가 특수한 관계사는 아래 사번 필드를 참조하세요.</span>
                    </Modal.Header>
                    <Modal.Content>
                        <div className="content">
                            <div className="scrolling-60vh first-pw-table">
                                <table className="ui head-fix lo-01-01-p01 table">
                                    <thead>
                                    <tr>
                                        <th scope="col">관계사</th>
                                        <th scope="col">회사코드</th>
                                        <th scope="col">사번</th>
                                        <th scope="col">초기패스워드 예시</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>SK이노베이션</td>
                                        <td>SKI</td>
                                        <td>si12345</td>
                                        <td>SKI.si12345</td>
                                    </tr>
                                    <tr>
                                        <td>SK텔레콤</td>
                                        <td>SKT</td>
                                        <td>1234567</td>
                                        <td>SKT.1234567</td>
                                    </tr>
                                    <tr>
                                        <td>SK네트웍스</td>
                                        <td>SKN</td>
                                        <td>12345678</td>
                                        <td>SKN.12345678</td>
                                    </tr>
                                    <tr>
                                        <td>워커힐</td>
                                        <td>WH</td>
                                        <td>1234567</td>
                                        <td>WH.1234567</td>
                                    </tr>
                                    <tr>
                                        <td>SK하이닉스</td>
                                        <td>SKHY</td>
                                        <td>1234567</td>
                                        <td>SKHY.1234567</td>
                                    </tr>
                                    <tr>
                                        <td>SK케미칼</td>
                                        <td>SKCHEM</td>
                                        <td>123456</td>
                                        <td>SKCHEM.123456</td>
                                    </tr>
                                    <tr>
                                        <td>SKC</td>
                                        <td>SKC</td>
                                        <td>kskc123456</td>
                                        <td>SKC.kskc123456</td>
                                    </tr>
                                    <tr>
                                        <td>SK건설</td>
                                        <td>SKEC</td>
                                        <td>123456</td>
                                        <td>SKEC.123456</td>
                                    </tr>
                                    <tr>
                                        <td>SKE&S</td>
                                        <td>SKENS</td>
                                        <td>A1234</td>
                                        <td>SKENS.A1234</td>
                                    </tr>
                                    <tr>
                                        <td>SK가스</td>
                                        <td>SKGAS</td>
                                        <td>12345</td>
                                        <td>SKGAS.12345</td>
                                    </tr>
                                    <tr>
                                        <td>SK에너지</td>
                                        <td>SKE</td>
                                        <td>sk12345</td>
                                        <td>SKE.sk12345</td>
                                    </tr>
                                    <tr>
                                        <td>SK종합화학</td>
                                        <td>SKGC</td>
                                        <td>sc12345</td>
                                        <td>SKGC.sc12345</td>
                                    </tr>
                                    <tr>
                                        <td>SK루브리컨츠</td>
                                        <td>SKL</td>
                                        <td>sl12345</td>
                                        <td>SKL.sl12345</td>
                                    </tr>
                                    <tr>
                                        <td>SK(주)홀딩스</td>
                                        <td>SK</td>
                                        <td>hc12345</td>
                                        <td>SK.hc12345</td>
                                    </tr>
                                    <tr>
                                        <td>SK(주)C&C</td>
                                        <td>SKCC</td>
                                        <td>12345</td>
                                        <td>SKCC.12345</td>
                                    </tr>
                                    <tr>
                                        <td>SK텔링크</td>
                                        <td>SKTL</td>
                                        <td>12345</td>
                                        <td>SKTL.12345</td>
                                    </tr>
                                    <tr>
                                        <td>SK브로드밴드</td>
                                        <td>SKB</td>
                                        <td>1234</td>
                                        <td>SKB.1234</td>
                                    </tr>
                                    <tr>
                                        <td>SK텔레시스</td>
                                        <td>SKTS</td>
                                        <td>kstsN123456</td>
                                        <td>SKTS.kstsN123456</td>
                                    </tr>
                                    <tr>
                                        <td>SK트레이딩인터내셔널</td>
                                        <td>SKTI</td>
                                        <td>sa12345</td>
                                        <td>SKTI.sa12345</td>
                                    </tr>
                                    <tr>
                                        <td>SK인천석유화학</td>
                                        <td>SKIPC</td>
                                        <td>sv12345</td>
                                        <td>SKIPC.sv12345</td>
                                    </tr>
                                    <tr>
                                        <td>SK바이오팜</td>
                                        <td>SKBP</td>
                                        <td>bp12345</td>
                                        <td>SKBP.bp12345</td>
                                    </tr>
                                    <tr>
                                        <td>SK머티리얼즈</td>
                                        <td>SKMR</td>
                                        <td>1234567</td>
                                        <td>SKMR.1234567</td>
                                    </tr>
                                    <tr>
                                        <td>SK실트론</td>
                                        <td>SKSL</td>
                                        <td>123456</td>
                                        <td>SKSL.123456</td>
                                    </tr>
                                    <tr>
                                        <td>SK바이오텍</td>
                                        <td>SKBT</td>
                                        <td>bt12345</td>
                                        <td>SKBT.bt12345</td>
                                    </tr>
                                    <tr>
                                        <td>SK매직</td>
                                        <td>SKMAGIC</td>
                                        <td>123456789</td>
                                        <td>SKMAGIC.123456789</td>
                                    </tr>
                                    <tr>
                                        <td>SKCHT&M</td>
                                        <td>SKCHTM(한국)</td>
                                        <td>khtm123456</td>
                                        <td>SKCHTM.khtm123456</td>
                                    </tr>
                                    <tr>
                                        <td>SKCHT&M</td>
                                        <td>SKCHTM(중국)</td>
                                        <td>chtm123456</td>
                                        <td>SKCHTM.chtm123456</td>
                                    </tr>
                                    <tr>
                                        <td>SK아이이테크놀로지</td>
                                        <td>SKIET</td>
                                        <td>st12345</td>
                                        <td>SKIET.st12345</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </Modal.Content>
                    <Modal.Actions className="actions2">
                        <Button className='pop2 p' onClick={this.close}>OK</Button>
                    </Modal.Actions>
                </Modal>
            </>
        )
    }
}

export default ClassSeriesDetailModal;
