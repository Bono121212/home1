import React, { Component } from 'react'
import { Rating } from 'semantic-ui-react'

export default class VolumeRateSlider extends Component {
    state = { rating: 0 }

    handleChange = (e) => this.setState({ rating: e.target.value })

    render() {
        const { rating } = this.state

        return (
            <div>
                <input
                    type='range'
                    min={0}
                    max={10}
                    value={rating}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}