import React, {Component} from "react";
import {Pagination} from "semantic-ui-react"

const test = (data) => {
    console.log('data', data)
// onPaging!(data.activePage)
}

class Paging01 extends Component {
    render() {
        return (
            /*      <div className="lms-paging-holder">
                    <a className="lms-prev">이전10개</a>
                    <a className="lms-num lms-on">1</a>
                    <a className="lms-num">2</a>
                    <a className="lms-num">3</a>
                    <a className="lms-num">4</a>
                    <a className="lms-num">5</a>
                    <a className="lms-next">이후10개</a>
                  </div>*/
            <div className="lms-paging-holder">
                <Pagination
                    firstItem={null}
                    lastItem={null}
                    activePage={1}
                    totalPages={3}
                    onPageChange={(e, data) => test(data)}
                />
            </div>
        );
    }
}

export default Paging01;
