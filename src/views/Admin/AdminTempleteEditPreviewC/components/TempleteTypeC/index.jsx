import React, { Component } from "react";

import TCLnb from '../TCLnb';
import TCSlide from '../TCSlide';
import TCContents from '../TCContents';

class TempleteTypeC extends Component {
    render() {
        return (
            <section className='templete_complete'>
                <div className="templete_type_c">
                    <TCLnb/>
        
                    <TCSlide/>
        
                    <TCContents />
                </div>
            </section>
        );
    }
}

export default TempleteTypeC;
