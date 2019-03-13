import React from 'react'

class Panel extends React.Component {
  constructor(props: any) {
    super(props)
  }

  render() {
    return <div style={{border: '3px solid red'}}>
      {this.props.children}
    </div>
  }
}

export default Panel
