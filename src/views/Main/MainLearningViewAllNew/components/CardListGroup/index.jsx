import React, {Component} from 'react'
import { Card } from 'semantic-ui-react'
import CardValue01 from "../CardValue01";
import CardValue02 from "../CardValue02";
import CardValue03 from "../CardValue03";
import CardValue04 from "../CardValue04";

class CardListGroup extends Component {
    render() {
        return (
            <Card.Group className='box-cards'>
                <CardValue01/>

                <CardValue02/>

                <CardValue03/>

                <CardValue04/>

                <CardValue01/>

                <CardValue02/>

                <CardValue03/>

                <CardValue04/>

            </Card.Group>
        )
    }
}


export default CardListGroup
