import React from 'react'
import { Link } from 'react-router-dom';

const DummySkillLevels = [
    {tag:'Database', level:1},
    {tag:'Cloud on Cloud', level:2},
    {tag:'AI', level:3},
    {tag:'Design', level:2},
    {tag:'빅데이터', level:5},
    {tag:'Digital 플랫폼', level:1},
    {tag:'Data Robot', level:1},
    {tag:'혁신', level:1},
    {tag:'innovation', level:1},
    {tag:'TIR', level:5},
    {tag:'트렌드', level:1},
    {tag:'동향', level:1},
]

const SkillTag = (props) => {
    
    const { 
        styleClass, //.no-graph: 스킬 그래프 숨김
    } = props;

    return (
        <div className={`skill-tag-group ${styleClass ? styleClass : ''}`}>
            {DummySkillLevels.map((skilltag, index) => (
                <React.Fragment key={index}>
                <Link
                    to="/searchTotal/search-result-new"
                    className={`skill-tag 
                                ${'level' + skilltag.level} 
                                ${skilltag.wordmatch === true && 'search_keyword'}`}
                    onClick={()=>{}}
                >{skilltag.tag}</Link>
                </React.Fragment>
            ))}
        </div>
    )
}

export default SkillTag