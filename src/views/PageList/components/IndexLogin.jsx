import React from 'react';
import { Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
const IndexLogin = () => {
    return (
        <>{/* @@로그인 */}
        <Table.Row verticalAlign='top' id='Login'>
            <Table.Cell colSpan='5' className='table-tit'>
                <span className='text-bold'>회원가입/로그인</span>
            </Table.Cell>
        </Table.Row>
        {/* @외부사용자 회원가입 */}
        <Table.Row verticalAlign='top'>
            <Table.Cell colSpan='5' className='table-sub-tit'>
                <span className='text-bold'>외부사용자 회원가입</span>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='login/joining-form' target="_blank">
                    <span className='text-purple'> 외부사용자 회원가입</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>REG-20-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='login/joining-form'>
                    login/joining-form
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>21-06-03</Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='login/joining-form-loader' target="_blank">
                    <span className='text-purple'>외부사용자 회원가입코드 인증</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>REG-20-20</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='login/joining-form-loader'>
                    login/joining-form-loader
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>21-06-03</Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='login/joining-form-popup-confirm' target="_blank">
                    <span className='text-purple'>외부사용자 회원가입코드 인증완료</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>REG-20-30</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='login/joining-form-popup-confirm'>
                    login/joining-form-popup-confirm
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>21-06-03</Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='login/joining-form-popup' target="_blank">
                    <span className='text-purple'>외부사용자 회원가입코드 불일치</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>REG-20-30</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='login/joining-form-popup'>
                    login/joining-form-popup
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>21-06-03</Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='login/privacy-agree-extra' target="_blank">
                    <span className='text-purple'>외부사용자 개인정보 수집 및 이용 동의 및 팝업</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>REG-30-10, REG-30-20</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='login/privacy-agree-extra'>
                    login/privacy-agree-extra
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>21-06-03</Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='login/privacy-agree-extra-error' target="_blank">
                    <span className='text-purple'>외부사용자 개인정보수집 및 동의 메세지 err메세지</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>REG-30-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='login/privacy-agree-extra-error'>
                    login/privacy-agree-extra-error
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>21-06-03</Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='login/regi-form' target="_blank">
                    <span className='text-purple'>회원가입 대상(B2B)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>REG-40-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='login/regi-form'>
                    login/regi-form
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>21-06-03</Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='login/regi-form-error' target="_blank">
                    <span className='text-purple'>회원가입 대상(B2B) 비밀번호 validation/소속단체 직접입력 선택시</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>REG-40-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='login/regi-form-error'>
                    login/regi-form-error
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>21-06-03</Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='login/regi-end' target="_blank">
                    <span className='text-purple'>외부사용자 회원가입완료</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>REG-50-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='login/regi-end'>
                    login/regi-end
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>21-06-03</Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='login/password-change' target="_blank">
                    <span className='text-purple'>외부사용자 가입후 비밀번호 변경</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>REG-70-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='login/password-change'>
                    login/password-change
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>21-06-08</Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='login/password-change-error' target="_blank">
                    <span className='text-purple'>외부사용자 가입후 비밀번호 불일치</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>REG-70-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='login/password-change-error'>
                    login/password-change-error
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>21-06-08</Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        {/* //외부사용자 회원가입 */}
        {/* @로그인 */}
        <Table.Row verticalAlign='top'>
            <Table.Cell colSpan='5' className='table-sub-tit'>
                <span className='text-bold'>로그인</span>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <a href='/suni-asset/public/design-pub/REACT/open1223/dist/html/login/LO-01-01.html' rel="noopener noreferrer" target="_blank">
                    <span className='text-purple'>로그인</span>
                </a>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>Language_LO-01-01_Login_B_2</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/login/LO-01-01.html" rel="noopener noreferrer">
                    open1223/dist/html/login/LO-01-01.html
                </a>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>
                <p>23-05-23</p>
            </Table.Cell>
            <Table.Cell>
                <p>23-05-23 로그인 UI개선건</p>
            </Table.Cell>
        </Table.Row>
        {/* <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='login/LoginInquery' target="_blank">
                    <span className='text-purple'>로그인 &gt; 문의하기</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>Language_LO-01-01_Login_B_2</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='login/LoginInquery'>login/LoginInquery</Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>
                <p>23-05-23</p>
            </Table.Cell>
            <Table.Cell>
                <p>23-05-23 로그인 UI개선건</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='login/LoginInqueryError' target="_blank">
                    <span className='text-purple'>로그인 &gt; 문의하기 (Error)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>Language_LO-01-01_Login_B_2</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='login/LoginInqueryError'>login/LoginInqueryError</Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>
                <p>23-05-23</p>
            </Table.Cell>
            <Table.Cell>
                <p>23-05-23 로그인 UI개선건</p>
            </Table.Cell>
        </Table.Row> */}
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <a href='/suni-asset/public/design-pub/REACT/open1223/dist/html/login/LO-01-01-error.html' rel="noopener noreferrer" target="_blank">
                    <span className='text-purple'>로그인 (에러)</span>
                </a>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>Language_LO-01-01_Login_B_2</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/login/LO-01-01-error.html" rel="noopener noreferrer">
                    open1223/dist/html/login/LO-01-01-error.html
                </a>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>
                <p>23-05-23</p>
            </Table.Cell>
            <Table.Cell>
                <p>23-05-23 로그인 UI개선건</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <a href='/suni-asset/public/design-pub/REACT/open1223/dist/html/login/LO-02-01.html' rel="noopener noreferrer" target="_blank">
                    <span className='text-purple'>비밀번호 변경</span>
                </a>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'></span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/login/LO-02-01.html" rel="noopener noreferrer">
                    open1223/dist/html/login/LO-02-01.html
                </a>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <a href='/suni-asset/public/design-pub/REACT/open1223/dist/html/login/LO-02-01-error.html' rel="noopener noreferrer" target="_blank">
                    <span className='text-purple'>비밀번호 변경 (에러)</span>
                </a>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'></span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/login/LO-02-01-error.html" rel="noopener noreferrer">
                    open1223/dist/html/login/LO-02-01-error.html
                </a>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <a href='/suni-asset/public/design-pub/REACT/open1223/dist/html/login/LO-03-01.html' rel="noopener noreferrer" target="_blank">
                    <span className='text-purple'>비밀번호 변경 (완료)</span>
                </a>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'></span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/login/LO-03-01.html" rel="noopener noreferrer">
                    open1223/dist/html/login/LO-03-01.html
                </a>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/login/LO-04-01.html" rel="noopener noreferrer" target="_blank">
                    <span className='text-purple'>비밀번호 초기화</span>
                </a>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'></span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/login/LO-04-01.html" rel="noopener noreferrer">
                    open1223/dist/html/login/LO-04-01.html
                </a>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/login/LO-04-01-error.html" rel="noopener noreferrer" target="_blank">
                    <span className='text-purple'>비밀번호 초기화 (에러)</span>
                </a>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'></span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/login/LO-04-01-error.html" rel="noopener noreferrer">
                    open1223/dist/html/login/LO-04-01-error.html
                </a>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/regi/REG-01-01.html" rel="noopener noreferrer" target="_blank">
                    <span className='text-purple'>회원가입</span>
                </a>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'></span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/regi/REG-01-01.html" rel="noopener noreferrer">
                    open1223/dist/html/regi/REG-01-01.html
                </a>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/regi/REG-01-01-pwd.html" rel="noopener noreferrer" target="_blank">
                    <span className='text-purple'>회원가입 (auth true)</span>
                </a>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'></span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/regi/REG-01-01-pwd.html" rel="noopener noreferrer">
                    open1223/dist/html/regi/REG-01-01-pwd.html
                </a>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/regi/REG-01-02.html" rel="noopener noreferrer" target="_blank">
                    <span className='text-purple'>회원가입 - 가입 인증</span>
                </a>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'></span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/regi/REG-01-02.html" rel="noopener noreferrer">
                    open1223/dist/html/regi/REG-01-02.html
                </a>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/regi/REG-01-03.html" rel="noopener noreferrer" target="_blank">
                    <span className='text-purple'>회원가입 - 개인정보 수집 및 이용동의 안내</span>
                </a>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'></span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/regi/REG-01-03.html" rel="noopener noreferrer">
                    open1223/dist/html/regi/REG-01-03.html
                </a>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/login/password-change-info' target="_blank">
                    <span className='text-purple'>비밀번호 변경안내</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'></span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/login/password-change-info'>
                    /login/password-change-info
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-09-15</Table.Cell>
            <Table.Cell>22-10-13 비밀번호 변경주기</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/login/password-change-info-error' target="_blank">
                    <span className='text-purple'>비밀번호 변경안내(에러)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'></span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/login/password-change-info-error'>
                    /login/password-change-info-error
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-09-15</Table.Cell>
            <Table.Cell>22-10-13 비밀번호 변경주기</Table.Cell>
        </Table.Row>
        {/* //로그인 */}
        {/* @로그인(Admin) */}
        <Table.Row verticalAlign='top'>
            <Table.Cell colSpan='5' className='table-sub-tit'>
                <span className='text-bold'>로그인(Admin)</span>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/admin/AdminLogin_01_IdPassword.html" rel="noopener noreferrer" target="_blank">
                    <span className='text-purple'>Admin 로그인 디자인</span>
                </a>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>Admin 로그인 디자인</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/admin/AdminLogin_01_IdPassword.html" rel="noopener noreferrer" target="_blank">
                    open1223/dist/html/admin/AdminLogin_01_IdPassword.html
                </a>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/admin/AdminLogin_02_Email.html" rel="noopener noreferrer" target="_blank">
                    <span className='text-purple'>Admin 이메일 인증 디자인</span>
                </a>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>Admin 이메일 인증 디자인</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/admin/AdminLogin_02_Email.html" rel="noopener noreferrer" target="_blank">
                    open1223/dist/html/admin/AdminLogin_02_Email.html
                </a>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>21-03-17</Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/admin/AdminLogin_02_Email-sendCode.html" rel="noopener noreferrer" target="_blank">
                    <span className='text-purple'>Admin 이메일 인증보내기 디자인</span>
                </a>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>Admin 이메일 인증보내기 디자인</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/admin/AdminLogin_02_Email-sendCode.html" rel="noopener noreferrer" target="_blank">
                    open1223/dist/html/admin/AdminLogin_02_Email-sendCode.html
                </a>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>21-03-17</Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/admin/AdminLogin_02_Email-timeOut.html" rel="noopener noreferrer" target="_blank">
                    <span className='text-purple'>Admin 이메일 타임아웃 디자인</span>
                </a>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>Admin 이메일 타임아웃 디자인</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/admin/AdminLogin_02_Email-timeOut.html" rel="noopener noreferrer" target="_blank">
                    open1223/dist/html/admin/AdminLogin_02_Email-timeOut.html
                </a>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>21-03-17</Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/regi/AdminLogin_REG-80-20.html" rel="noopener noreferrer" target="_blank">
                    <span className='text-purple'>Admin - 관리자 확인 화면</span>
                </a>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>Admin - 관리자 확인 화면</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/regi/AdminLogin_REG-80-20.html" rel="noopener noreferrer" target="_blank">
                    open1223/dist/html/regi/AdminLogin_REG-80-20.html
                </a>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>21-07-02</Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/regi/AdminLogin_REG-80-20-case.html" rel="noopener noreferrer" target="_blank">
                    <span className='text-purple'>Admin - 관리자 확인 화면(활성화)</span>
                </a>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>Admin - 관리자 확인 화면(활성화)</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/regi/AdminLogin_REG-80-20-case.html" rel="noopener noreferrer" target="_blank">
                    open1223/dist/html/regi/AdminLogin_REG-80-20-case.html
                </a>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>21-07-02</Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/login/password-info-modal' target="_blank">
                    <span className='text-blue'>초기 패스워드 안내팝업</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>LO-01-01-P01</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/login/password-info-modal'>
                    /login/password-info-modal
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        {/* //로그인(Admin) */}
    </>
)
};
export default IndexLogin
