import React from 'react';

const AttachFileUpload = () => {
	return (
		<div className="attach-file-list">
			<div className='attach-file'>
				<button className='btn-remove'><span className="blind">삭제</span></button>
				<img src="https://image.mysuni.sk.com/suni-asset/public/images/all/cube-v2/icons-40-px-ic-post-file.svg" className='img' alt="첨부파일 문서" />
				<p className="name">2022 우리말 개정본.pdf</p>
				<span className='bytes'>338KB</span>
			</div>
			<div className='attach-file'>
				<button className='btn-remove'><span className="blind">삭제</span></button>
				<img src="https://image.mysuni.sk.com/suni-asset/public/images/all/cube-v2/icons-40-px-ic-post-file.svg" className='img' alt="첨부파일 문서" />
				<p className="name">서양의 언어.pdf</p>
				<span className='bytes'>338KB</span>
			</div>
			<div className='attach-file'>
				<button className='btn-remove'><span className="blind">삭제</span></button>
				<img src="https://image.mysuni.sk.com/suni-asset/public/images/all/cube-v2/icons-40-px-ic-post-file.svg" className='img' alt="첨부파일 문서" />
				<p className="name">사용자 지정 Office 서식 파일.xls</p>
				<span className='bytes'>338KB</span>
			</div>
		</div>
	)
}
export default AttachFileUpload;
