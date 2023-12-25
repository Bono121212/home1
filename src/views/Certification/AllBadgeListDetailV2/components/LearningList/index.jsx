import React, {Component} from 'react';

import CourseList01 from "../CourseList01";
import CourseList02 from "../CourseList02";
import CourseList03 from "../CourseList03";
// import CourseTRS from "../CourseTRS";

class LearningList extends Component {
    render() {
        return (
            <div className='course-cont'>
                {/*4개의 강의 구성*/}
                <CourseList01/>

                {/*1개 강의 구성 - Test, Report*/}
                <CourseList02/>

                {/*1개의 강의 구성 - Report, Survey*/}
                <CourseList03/>

                {/*코스 전체에 대한 Test, Survey*/}
                {/*Badge Learning Path 에는 단독 노출되는 TRS 없음*/}
                {/*<CourseTRS/>*/}
            </div>
        )
    }
}

export default LearningList;