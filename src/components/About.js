import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export class About extends Component {
    static propTypes = {}

    render() {
        return (
            <div className='container my-3'>
                <h1>About this Website.</h1>
                <p>Created by Saad Amin just for React Basics Practice</p>
                <h3>Contact:</h3>
                <p>You can contact us through email: Saadamin662@gmail.com</p>
            </div>
        )
    }
}

export default About