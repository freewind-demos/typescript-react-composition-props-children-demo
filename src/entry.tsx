import Hello from './hello'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Panel from "./panel";

ReactDOM.render(
  <Panel>
    <Hello/>
  </Panel>,
  document.body
)
