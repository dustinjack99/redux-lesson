import React, { Component } from 'react';
import { connect } from 'react-redux';

class Bugs extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      
    );
  }
}

const mapStateToProps = state => ({
  bugs: state.entities.bugs.list,
});

const mapDispatchToProps = dispatch => ({});

connect(mapStateToProps)(Bugs);
export default Bugs;
