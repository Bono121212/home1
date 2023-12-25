import React, {Component} from 'react'

import MyLearningInProgress from "../MyLearningInProgress";
import MyBadgeChallenge from "../MyBadgeChallenge";
import MyForum from "../MyForum";


class MyWorksInProgress extends Component {
    render() {
        return (
            <>
                {/*이천포럼 과정*/}
                <MyForum/>
                {/*학습중*/}
                <MyLearningInProgress/>

                {/*도전Badge*/}
                <MyBadgeChallenge/>
            </>
        )
    }
}


export default MyWorksInProgress
