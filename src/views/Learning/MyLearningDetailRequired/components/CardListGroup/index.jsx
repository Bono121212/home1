import React, {Component} from 'react'
import {
    Card,
} from 'semantic-ui-react'
import CardValueRequired from "../CardValueRequired";

class CardListGroup extends Component {
    render() {
        return (
            <Card.Group className='box-cards'>

                <CardValueRequired/>

                <CardValueRequired/>

                <CardValueRequired/>

                <CardValueRequired/>

                <CardValueRequired/>

                <CardValueRequired/>

                <CardValueRequired/>

                <CardValueRequired/>

            </Card.Group>
        )
    }
}


export default CardListGroup
