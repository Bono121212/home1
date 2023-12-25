import React, {Component} from 'react';
import { Button, Accordion} from 'semantic-ui-react';
import CardManager from '../CardManager';
import CardCoManager from '../CardCoManager';
import CardMember from '../CardMember';
import Paging from '../Paging';

class CardGroup extends Component {
    state = { activeIndex: 0 }
    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }
    
    render() {
        const { activeIndex } = this.state

        return (
            <div className="group_list">
                <Accordion>
                    <Accordion.Title
                        active={activeIndex === 0}
                        index={0}
                        onClick={this.handleClick}
                    >
                        <strong className="group_name">인플루언서그룹여기는타이틀영엽입니다. 타이틀 글자수 제한 없이 다 보여집니다</strong>
                        <div className="group_info">
                            <span className="m_name manager">인플루언서그룹의매니저입니다최대스무글자</span>
                            <span className="m_cnt">멤버 <strong>99,999</strong></span>
                            <Button></Button>
                        </div>
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 0}>
                        <p>인플루언서 그룹은 우리 커뮤니티 안에서 멤버들의 활동을 독려하고, 대외적으로 커뮤니티를 홍보하기 위해 엄선한 그룹입니다.</p>
                        <div>
                            <CardManager />
                            <CardCoManager />
                            <CardCoManager />
                            <CardMember />
                            <CardMember />
                            <CardMember />
                            <CardMember />
                            <CardMember />
                            <CardMember />
                            <CardMember />
                        </div>

                        <Paging />
                    </Accordion.Content>
                </Accordion>
            </div>
        )
    }
}


export default CardGroup
