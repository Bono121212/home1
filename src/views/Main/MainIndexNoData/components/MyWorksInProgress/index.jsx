import React, {Component} from 'react'

import MyLearningInProgress from "../MyLearningInProgress";
import MyBadgeChallenge from "../MyBadgeChallenge";


class MyWorksInProgress extends Component {
    render() {
        return (
            <>
                {/*학습중*/}
                <MyLearningInProgress/>

                {/*도전Badge*/}
                <MyBadgeChallenge/>
            </>
        )
    }
}


export default MyWorksInProgress
