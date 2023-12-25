import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import { CardPeriodType } from 'src/components/CardCube';
import { CardCommonType } from 'src/components/CardCube';
import { CardCommonCareerType } from 'src/components/CardCube';

class CardListGroup extends Component {
    render() {
        return (
            <Card.Group className='box-cards'>
                <CardCommonCareerType
                    popular={true}
                    state="learn"
                    title="Affiliate Marketing Masterclass: Newbie to Advanced Bootcamp"
                    src=""
                />
                <CardCommonType
                    popular={false}
                    state="learning"
                    title="Affiliate Marketing Masterclass: Newbie to Advanced Bootcamp"
                    src="https://image.mysuni.sk.com/suni-asset/icon/group/C_07.png"
                />
                <CardPeriodType
                    title="Affiliate Marketing Masterclass: Newbie to Advanced Bootcamp"
                    src="https://image.mysuni.sk.com/suni-asset/icon/group/C_01.png"
                />
                <CardCommonCareerType
                    title="Affiliate Marketing Masterclass: Newbie to Advanced Bootcamp"
                    src="https://image.mysuni.sk.com/suni-asset/thumb/20211020/616fc3d57dc4c7000189ea97.jpg"
                />
                <CardCommonCareerType
                    popular={true}
                    state="learn"
                    title="Affiliate Marketing Masterclass: Newbie to Advanced Bootcamp"
                    src="https://image.mysuni.sk.com/suni-asset/thumb/20221223/63a573b343af260001e8f0a2.JPG"
                />
                <CardCommonType
                    popular={false}
                    state="learning"
                    title="Affiliate Marketing Masterclass: Newbie to Advanced Bootcamp"
                    src="https://image.mysuni.sk.com/suni-asset/icon/group/C_07.png"
                />
                <CardCommonCareerType
                    title="Affiliate Marketing Masterclass: Newbie to Advanced Bootcamp"
                    src="https://image.mysuni.sk.com/suni-asset/icon/group/C_01.png"
                />
                <CardCommonCareerType
                    title="Affiliate Marketing Masterclass: Newbie to Advanced Bootcamp"
                    src="https://image.mysuni.sk.com/suni-asset/thumb/20211020/616fc3d57dc4c7000189ea97.jpg"
                />
                <CardCommonCareerType
                    popular={true}
                    state="learn"
                    title="Affiliate Marketing Masterclass: Newbie to Advanced Bootcamp"
                    src="https://image.mysuni.sk.com/suni-asset/thumb/20221223/63a573b343af260001e8f0a2.JPG"
                />
                <CardCommonCareerType
                    popular={false}
                    state="learning"
                    title="Affiliate Marketing Masterclass: Newbie to Advanced Bootcamp"
                    src="https://image.mysuni.sk.com/suni-asset/icon/group/C_07.png"
                />
                <CardCommonCareerType
                    title="Affiliate Marketing Masterclass: Newbie to Advanced Bootcamp"
                    src="https://image.mysuni.sk.com/suni-asset/icon/group/C_01.png"
                />
                <CardCommonCareerType
                    title="Affiliate Marketing Masterclass: Newbie to Advanced Bootcamp"
                    src="https://image.mysuni.sk.com/suni-asset/thumb/20211020/616fc3d57dc4c7000189ea97.jpg"
                />
                <CardCommonCareerType
                    popular={true}
                    state="learn"
                    title="Affiliate Marketing Masterclass: Newbie to Advanced Bootcamp"
                    src="https://image.mysuni.sk.com/suni-asset/thumb/20221223/63a573b343af260001e8f0a2.JPG"
                />
                <CardCommonCareerType
                    popular={false}
                    state="learning"
                    title="Affiliate Marketing Masterclass: Newbie to Advanced Bootcamp"
                    src="https://image.mysuni.sk.com/suni-asset/icon/group/C_07.png"
                />
                <CardCommonCareerType
                    title="Affiliate Marketing Masterclass: Newbie to Advanced Bootcamp"
                    src="https://image.mysuni.sk.com/suni-asset/icon/group/C_01.png"
                />
                <CardCommonCareerType
                    title="Affiliate Marketing Masterclass: Newbie to Advanced Bootcamp"
                    src="https://image.mysuni.sk.com/suni-asset/thumb/20211020/616fc3d57dc4c7000189ea97.jpg"
                />
            </Card.Group>
        )
    }
}

export default CardListGroup
