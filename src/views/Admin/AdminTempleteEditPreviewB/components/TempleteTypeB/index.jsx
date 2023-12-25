import React, { Component } from "react";

import TALnb from '../TALnb';
// import TBSlide from '../TBSlide';
import TBContents from '../TBContents';
import TBAside from '../TBAside';

class TempleteTypeB extends Component {
    render() {
        return (
            <section className='templete_type_b'>
                <div className="tb_inner flex">
                    <TALnb/>    

                    <div className="tb_body">
                        <TBContents />
                    </div>
                

                    <TBAside />
                </div>
            </section>
        );
    }
}

export default TempleteTypeB;
