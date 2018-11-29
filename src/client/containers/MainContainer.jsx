import React, { Component } from 'react';
import { connect } from 'react-redux';
// import from child components...

const mapStateToProps = store => ({

});

const mapDispatchToProps = dispatch => ({

});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <div>
          <h1>RNGesus</h1>
          <h3>All the random number generation you want!</h3>
        </div>
      </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
