import React, {Component} from 'react';
import {Icon, Label, Button} from 'semantic-ui-react';

class PreCourseContents extends Component {
    render() {
        return (
            <>
                <div className="section-head">
                  <div className="title-style">
                    <Label className="onlytext bold size24">
                      <Icon className="before" />
                      <span>선수과정</span>
                    </Label>
                  </div>
                </div>
                <div className="course-cont pre-course">
                  <div className="course-box">
                    <div className="bar">
                      <div className="tit">
                        <a href={()=>false} className="ellipsis">
                          <span className="course-span-box red-box">필수</span>{" "}
                          <span className="under">
                            Digital Platform 인류 삶의 근간이 되다
                          </span>
                        </a>
                      </div>
                      <div className="right-area">
                        <Button icon as="a" className="right btn-blue">
                          <span>바로가기</span>
                          <Icon className="arrow-g-16" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="course-box">
                    <div className="bar">
                      <div className="tit">
                        <a href={()=>false} className="ellipsis">
                          <span className="course-span-box gray-box">선택</span>{" "}
                          <span className="under">
                          Computing System 이해 컴퓨터 동작의 이해 3. Face Recognition
                          </span>
                        </a>
                      </div>
                      <div className="right-area">
                        <Button icon as="a" className="right btn-blue">
                          <span>바로가기</span>
                          <Icon className="arrow-g-16" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
            </>
        )
    }
}

export default PreCourseContents