import React, {Component} from 'react'
import {
    Card,
} from 'semantic-ui-react'
import CardValueRequired from "../CardValueRequired";
import CardValueWebpage from "../CardValueWebpage";
import CardValueCommunity from "../CardValueCommunity";
import CardValueVideo from "../CardValueVideo";
import CardValueClassroom from "../CardValueClassroom";
import CardValueAudio from "../CardValueAudio";

class CardListGroup extends Component {
    render() {
        return (
            <Card.Group className='box-cards'>

                {/*  상태값: Stamp  */}
                <CardValueRequired/>

                <CardValueWebpage/>

                <CardValueWebpage/>

                <CardValueCommunity/>

                <CardValueWebpage/>

                <CardValueVideo/>

                <CardValueAudio/>

                <CardValueClassroom/>

            </Card.Group>
        )
    }
}


export default CardListGroup
