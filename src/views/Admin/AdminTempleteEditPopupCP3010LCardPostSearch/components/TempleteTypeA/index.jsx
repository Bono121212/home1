import React, { Component } from "react";

import TALnb from '../TALnb';
import TASlide from '../TASlide';
import TAContents from '../TAContents';


class TempleteTypeA extends Component {
    render() {
        return (
            <section className='templete_type_a'>
                <div className="ta_inner">
                    <TASlide/>

                    <div className="ta_body">
                        <TALnb/>

                        <TAContents />
                    </div>
                </div>
            </section>
        );
    }
}

export default TempleteTypeA;
