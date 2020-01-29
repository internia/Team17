import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Card extends Component {
    
    getStyle = () => {
        return {
            padding: '0.7em',
            fontSize: '1em',
            backgroundColor: '#ccebdb'
        }
    }
    
    render() {
        return (
            <div style={{'margin-top': '1em'}} className={'row'}>
                <div className={'col-12'} style={this.getStyle()}><button style={{'margin-right': '1em'}} className={'btn-lg btn btn-info'}>{this.props.card.ID}</button> {this.props.card.DRGDefinition} </div>
            </div>
        )
    }
}

Card.propTypes = {
    card: PropTypes.object.isRequired
}

export default Card