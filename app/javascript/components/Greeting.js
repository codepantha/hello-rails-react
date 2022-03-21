import React from "react"
import PropTypes from "prop-types"

const Greeting = ({ greeting }) => {
  return (
    <p>{greeting}</p>
  );
}

Greeting.propTypes = {
  greeting: PropTypes.string
};
export default Greeting
