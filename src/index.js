import React from 'react'
import ReactDOM from 'react-dom'
import Editor from './Editor.js'
import './index.css'

const placeholder = `
# React-Markdown-Editor

![Markdown Logo](https://d33wubrfki0l68.cloudfront.net/f1f475a6fda1c2c4be4cac04033db5c3293032b4/513a4/assets/images/markdown-mark-white.svg)

A Markdown Editor Component &amp; App implemented in react.  

[View the source code on GitHub](https://github.com/timlg07/React-Markdown-Editor)  
______
## What is Markdown?
- [What is Markdown Good For?](https://www.markdownguide.org/getting-started/#whats-markdown-good-for)  
- [Markdown Syntax](https://www.markdownguide.org/basic-syntax/)`

ReactDOM.render(
    <Editor vertical={false} placeholder={placeholder} />,
    document.getElementById('root')
)
