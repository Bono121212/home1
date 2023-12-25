import classNames from 'classnames';
import React, {useState} from 'react'
import {Icon} from "semantic-ui-react";

const ClearInputBox02 = (props) => {

    const [focus, setFocus] = useState(false);
    const [write, setWrite] = useState("");
    return (
        <div className={classNames("ui right-top-count input", { "focus": focus, "write": write })} style={{width: '100%'}}>
            <span class="count"><span class="now">0</span>/<span class="max">100</span></span>
            <input type="text" className='text-pop'
                   placeholder={props.placeholder ? props.placeholder: ""}
                   value={write}
                   onClick={() => setFocus(true)} onBlur={() => setFocus(false)}
                   onChange={(e) => setWrite(e.target.value)}
            />
            <Icon className="clear link" onClick={() => setWrite('')} />
            <span class="validation">해당 문항은 필수 항목 입니다.</span>
        </div>
    )
}

export default ClearInputBox02