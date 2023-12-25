import React, {Component} from 'react'
import {
    Card,
} from 'semantic-ui-react'
import CardValueDefault01 from "../CardValueDefault01";
import CardValueDefault02 from "../CardValueDefault02";
import CardValueDefault03 from "../CardValueDefault03";
import CardValueDefault from "../CardValueDefault";

class CardListGroup extends Component {
    render() {
        return (
            <Card.Group className='card-item-wrap'>

                <CardValueDefault/>

                <CardValueDefault01/>

                <CardValueDefault02/>

                <CardValueDefault03/>

                <CardValueDefault/>

                <CardValueDefault03/>

                <CardValueDefault02/>

                <CardValueDefault01/>

            </Card.Group>
        )
    }
}


export default CardListGroup
