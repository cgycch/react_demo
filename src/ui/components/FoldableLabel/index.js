import React, { Component } from 'react';
import PropTypes from 'prop-types'



export default class FoldableLabel extends Component {


    static defaultProps = {
        labelId: '',
        labelClass: '',
        content: '',
        maxSize: 30,
    }

    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }
    toggle = () => {
        const { maxSize, content } = this.props
        if (content && maxSize < content.length) {
            this.setState({ open: !this.state.open })
        }
    }
    render() {
        const { labelId, labelClass, maxSize, content } = this.props
        const needToSub = !this.state.open && maxSize < content.length
        let viewContent = content
        if (needToSub) {
            viewContent = content.substr(0, maxSize)
        }
        let view = null
        if (labelId && labelClass) {
            view = <label
                id={labelId}
                className={labelClass}
                onClick={this.toggle}>
                {viewContent}{needToSub && <b>....</b>}
            </label>
        } else if (labelId) {
            view = <label
                id={labelId}
                onClick={this.toggle}>
                {viewContent}{needToSub && <b>....</b>}
            </label>
        } else if (labelClass) {
            view = <label
                className={labelClass}
                onClick={this.toggle}>
                {viewContent}{needToSub && <b>....</b>}
            </label>
        } else {
            view = <label
                onClick={this.toggle}>
                {viewContent}{needToSub && <b>....</b>}
            </label>
        }
        return (
            view
        );
    }
}
FoldableLabel.propTypes = {
    labelId: PropTypes.string.isRequired,
    labelClass: PropTypes.string,
    content: PropTypes.string,
    maxSize: PropTypes.number
}
