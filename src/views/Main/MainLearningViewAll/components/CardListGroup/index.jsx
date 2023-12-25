import React, {Component} from 'react'
import { Card } from 'semantic-ui-react'
import { CardPeriodType } from '../../../../../components/CardCube';

class CardListGroup extends Component {
    render() {
        return (
            <Card.Group className='box-cards'>
                <CardPeriodType cardStatus="today"/>
                <CardPeriodType cardStatus="remain"/>
                <CardPeriodType cardStatus="remain"/>
                <CardPeriodType cardStatus="remain"/>
                <CardPeriodType cardStatus="today"/>
                <CardPeriodType cardStatus="remain"/>
                <CardPeriodType cardStatus="remain"/>
                <CardPeriodType cardStatus="remain"/>
            </Card.Group>
        )
    }
}


export default CardListGroup
