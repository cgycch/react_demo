import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
export default class LinkBtn extends Component {
    static propTypes = {
        id: PropTypes.string,
        className: PropTypes.string,
        to: PropTypes.string.isRequired,
        children: PropTypes.string.isRequired,
    }

    // static defaultProps = {
    //     //target: '_self'
    //     // id: '',
    //     // className: '',
    //     // to: '',
    //     // children: '',
    // }

    // constructor(props) {
    //     super(props)
    // }

    // componentDidMount = () => {
    //     console.log('LinkBtn did mounted');
    // }

    render() {
        const { id, className, target, to, children } = this.props
        const linkClass = className ? 'btnLink ' + className.trim() : 'btnLink'
        return (
            <button className={linkClass}>
                <Link id={id} className={linkClass} target={target} to={to}>{children}</Link>
            </button>
        );
    }
}

