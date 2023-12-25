import React, { Component } from "react";

//import CTICross from '../CTICross';
import CTILeft from '../CTILeft';
import CTIRight from '../CTIRight';
import TitleLink from '../TitleLink';
import TBSlide from '../TBSlide';

class TBContents extends Component {

    render() {
        return (
            <div className="tb_contents">

                <TBSlide/>
                
                <div className="card_area">
                    <div className="opacity">
                        <TitleLink />
                        <div className="flex mg14">
                            {/* <CTICross/> */}
                            <CTILeft/>
                            <CTIRight/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TBContents;
