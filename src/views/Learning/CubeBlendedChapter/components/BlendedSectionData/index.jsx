import React from "react";

const BlendedSectionData = () => {
	return (
		<div className="blended blended-data">
			{/* Player Area */}
			<div className="data-area">
				<div class="class-guide-txt fn-parents ql-snow">
					<div class=" description ql-editor">
						{/* Editor Content */}
						<p><strong>[콜렉션 개요]</strong></p><p>오늘 소개할 논문은 DALL-E (OpenAI 2021)입니다.&nbsp;DALL-E는 2021년에 OpenAI에서 발표한 대규모 뉴럴 네트워크로, 텍스트 문장을 입력으로 받아&nbsp;적절한 이미지를 만들어 낼 수 있습니다.&nbsp;</p><p>DALL-E는 120억 개의 파라미터를 가진 GPT-3 기반의 모델로, 2.5억 개의 데이터(텍스트, 이미지) 쌍으로 학습을 진행했다는 특징이 있습니다. </p><p><br /></p><p>본 논문에서는 충분히 많은 양의 데이터와 큰 규모의 아키텍처를 활용할 수 있다면, 복잡한 추가적인 레이블링 과정 없이도 text-to-image generation 작업에서 충분히 뛰어날 수 있음을&nbsp;광범위한 실험을 통해&nbsp;보였습니다.&nbsp;</p><p>심지어 zero-shot 상황에서도 다양한 task에 대하여 매우 우수한 성능을 보일 수 있음을 제시합니다.</p><p>&nbsp;</p><p><strong>논문 제목</strong>:&nbsp;DALL-E: Zero-Shot Text-to-Image Generation</p><p><strong>논문 링크</strong>:&nbsp;<a href="https://arxiv.org/abs/2102.12092" rel="noopener noreferrer" target="_blank">https://arxiv.org/abs/2102.12092</a></p><p>&nbsp;</p><p><strong>[학습 기대 효과]</strong></p><p>① 대규모 딥러닝 모델을 이용해 텍스트(text)를 입력으로 받아 이미지(image)를 생성하는 DALL-E 모델에 대해 이해할 수 있습니다.</p><p>② DALL-E를 구성하는 dVAE와 GPT-3 기반의 아키텍처를 이해할 수 있습니다.</p><p>&nbsp;</p><p><strong>[강의 특징]</strong></p><p>30장가량의 PPT로 구성되며, 논문 핵심 내용 요약을 포함하는 강의입니다.</p>
						{/* // Editor Content */}
					</div>
				</div>
			</div>
			{/* // Player Area */}
		</div>
	);
};

export default BlendedSectionData;
