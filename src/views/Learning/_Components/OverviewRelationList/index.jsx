import React from 'react'
import { Label } from 'semantic-ui-react'
import OverviewRelationListCard from '../OverviewRelationListCard'

const OverviewRelationList = () => {
    return (
        <div className="ov-relation-list">
            <OverviewRelationListCard
                src="https://image.mysuni.sk.com/suni-asset/public/images/all/bg_img1.png"
                name="미래반도체"
                title="Introduction - 잘 나가던 기업의 몰락 이유"
                // desc="VUCA 환경 속에서, 기존의 전통적 신사업 전략과는 다른 애자일 방식의 전반적인 개념에 대해 살펴봅니다."
                user="19"
                star="4.9"
                time="12h 30m"
            >
            </OverviewRelationListCard>
            <OverviewRelationListCard
                src="https://image.mysuni.sk.com/suni-asset/public/images/all/bg_img2.png"
                name="Leadership"
                title="Introduction - 잘 나가던 기업의 몰락 이유"
                // desc="VUCA 환경 속에서, 기존의 전통적 신사업 전략과는 다른 애자일 방식의 전반적인 개념에 대해 살펴봅니다."
                user="3,300"
                star="4.9"
                time="30m"
            >
                <Label className="my-stat learning"><span>학습중</span></Label>
            </OverviewRelationListCard>
            <OverviewRelationListCard
                src="https://image.mysuni.sk.com/suni-asset/public/images/all/bg_img3.png"
                name="혁신디자인"
                title="Introduction - 잘 나가던 기업의 몰락 이유"
                // desc="VUCA 환경 속에서, 기존의 전통적 신사업 전략과는 다른 애자일 방식의 전반적인 개념에 대해 살펴봅니다."
                user="300"
                star="4.9"
                time="2h 30m"
            >
                <Label className="my-stat learning"><span>학습중</span></Label>
            </OverviewRelationListCard>
            <OverviewRelationListCard
                src="https://image.mysuni.sk.com/suni-asset/public/images/all/bg_img4.png"
                name="DT"
                title="비즈니스를 바꾸는 AI기술의 시크릿 코드, 80 to 95"
                // desc="VUCA 환경 속에서, 기존의 전통적 신사업 전략과는 다른 애자일 방식의 전반적인 개념에 대해 살펴봅니다."
                user="00"
                star="4.9"
                time="2h 30m"
            >
            </OverviewRelationListCard>
        </div>
    )
}

export default OverviewRelationList