import React from 'react';
import { Icon } from 'semantic-ui-react';
import './Footer.css';

export default function UserFooterCom() {
    return (
        <section className="footer">
            <div className="cont-inner">
                <Icon className="s-kuniversity" />
                <span className="blind">SK university</span>
                <div className="f-copyright">
                    COPYRIGHT
                    <Icon className="copyright" />
                    <span className="blind">copyright sign</span>
                    mySUNI. ALL RIGHTS RESERVED.
                </div>
            </div>
        </section>
  );
}
