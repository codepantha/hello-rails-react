import React from "react"
import PropTypes from "prop-types"
class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <h2>{this.props.greeting}</h2>
      </React.Fragment>
    );
  }
}

export default App
