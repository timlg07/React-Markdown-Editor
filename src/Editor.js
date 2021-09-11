import React from 'react'
import styles from './editor.module.css'
import Remarkable from 'remarkable'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)


class Editor extends React.Component {
    
    state = { 
        value: this.props.placeholder || ''
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
                    <span className={styles.header}>Input</span>
                    <textarea
                        className={styles.text}
                        onChange={this.handleChange}
                        defaultValue={this.state.value}
                    />
                </div>
                <div className={styles.output}>
                    <span className={styles.header}>Preview</span>
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