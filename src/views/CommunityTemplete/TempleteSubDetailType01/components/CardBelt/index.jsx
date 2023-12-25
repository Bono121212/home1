import React from "react";
import { Card } from "semantic-ui-react";
import CardValueRecommend from '../CardValueRecommend';

const CardBelt = () => {
    return(
        <div className="scrolling full">
            <div className="belt">
                <ul>
                    <li>
                        <Card.Group className="box-cards">
                            <CardValueRecommend />
                        </Card.Group>
                    </li>
                    <li>
                        <Card.Group className="box-cards">
                            <CardValueRecommend />
                        </Card.Group>
                    </li>
                    <li>
                        <Card.Group className="box-cards">
                            <CardValueRecommend />
                        </Card.Group>
                    </li>
                    <li>
                        <Card.Group className="box-cards">
                            <CardValueRecommend />
                        </Card.Group>
                    </li>
                    <li>
                        <Card.Group className="box-cards">
                            <CardValueRecommend />
                        </Card.Group>
                    </li>
                    <li>
                        <Card.Group className="box-cards">
                            <CardValueRecommend />
                        </Card.Group>
                    </li>
                    <li>
                        <Card.Group className="box-cards">
                            <CardValueRecommend />
                        </Card.Group>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CardBelt;