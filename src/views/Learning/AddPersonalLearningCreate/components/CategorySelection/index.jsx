import React, {Component} from 'react';
import { Grid, Radio } from 'semantic-ui-react';

class CategorySelection extends Component {
    //
    state = {
        checkedCollege: ''
    }

    handleItemChange = (e, { value }) => this.setState({ checkedCollege: value })

    render() {
        //
        const { checkedCollege } = this.state;

        return (
            <>
                <Grid className="apl">
                    <Grid.Column>
                        <div className="header">College</div>
                        <ul className="college-list">
                            <li><Radio className="rect-icon" name="college" label="AI" value="AI" onChange={this.handleItemChange}/></li>
                            <li><Radio className="rect-icon" name="college" label="DT" value="AI" onChange={this.handleItemChange}/></li>
                            <li><Radio className="rect-icon" name="college" label="행복" value="행복" onChange={this.handleItemChange}/></li>
                            <li><Radio className="rect-icon" name="college" label="SV" value="SV" onChange={this.handleItemChange}/></li>
                            <li><Radio className="rect-icon" name="college" label="혁신디자인" value="혁신디자인" onChange={this.handleItemChange}/></li>
                            <li><Radio className="rect-icon" name="college" label="Global" value="Global" onChange={this.handleItemChange}/></li>
                            <li><Radio className="rect-icon" name="college" label="Leadership" value="Leadership" onChange={this.handleItemChange}/></li>
                            <li><Radio className="rect-icon" name="college" label="Management" value="Management" onChange={this.handleItemChange}/></li>
                        </ul>
                    </Grid.Column>
                    <Grid.Column>
                        <div className="header">Channel</div>
                        {
                            !checkedCollege &&
                            <div className="default">College 선택 시 Channel 항목을 선택할 수 있습니다.</div>
                        }
                        <ul className="channel-list">
                            <li>
                                {/*<Radio className="round" label="Data Analysis" />*/}
                            </li>
                        </ul>
                    </Grid.Column>
                </Grid>
            </>
        )
    }

}

export default CategorySelection;