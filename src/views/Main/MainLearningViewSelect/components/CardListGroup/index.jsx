import React, {Component} from 'react'
import { Card } from 'semantic-ui-react'
import CardValueDday01 from "../CardValueDday01";
import CardValueDday02 from "../CardValueDday02";
import CardValueDday03 from "../CardValueDday03";
import CardValueDday04 from "../CardValueDday04";
import CardValueDday05 from "../CardValueDday05";
import CardValueDday06 from "../CardValueDday06";

class CardListGroup extends Component {
    render() {
        return (
            <Card.Group className='box-cards'>
                <CardValueDday01/>

                <CardValueDday02/>

                <CardValueDday04/>

                <CardValueDday03/>

                <CardValueDday05/>

                <CardValueDday06/>
                
                <CardValueDday05/>

                <CardValueDday06/>

            </Card.Group>
        )
    }
}


export default CardListGroup
