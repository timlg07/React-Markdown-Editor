import React from 'react'
import styles from './editor.module.css'
import Remarkable from 'remarkable'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)


class Editor extends React.Component {
    
    state = { 
        value: ''
    }

    handleChange = event => {
        this.setState({ 
            value: event.target.value
        })
    }

    getRawMarkup() {
        const md = new Remarkable()
        return {__html: md.render(this.state.value)}
    }

    render() {
        const className = cx('container', {
            'vertical': this.props.vertical
        })

        return (
            <div className={className}>
                <div className={styles.input}>
                    <h3>Input</h3>
                    <textarea
                        className={styles.text}
                        onChange={this.handleChange}
                        defaultValue={this.state.value}
                    />
                </div>
                <div className={styles.output}>
                    <h3>Preview</h3>
                    <div 
                        className={styles.text}
                        dangerouslySetInnerHTML={this.getRawMarkup()}
                    >
                </div>
                </div>
            </div>
        )
    }
}

export default Editor