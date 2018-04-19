import React, {Component} from 'react';
import AstronomyCard from './AstronomyCard';
import axios from 'axios';

//changed
import { connect } from 'react-redux';
import fetchData from '../../actions/fetch_data';

//The class based component will carry the state.
class AstronomyContainer extends Component {

    constructor() {
        super();

        this.state = {
            astronomy: [] 
        }
    }

  

    componentWillMount() {
        this.props.fetchData();
    }

    render() {
        // from this.state get astronomy
        // const {astronomy} = this.state;
        // bellow was nasaapidata={astronomy}
        return (
            <AstronomyCard nasaapidata={this.props.astronomy} /> //nasaapida in the tutorial it ws data={astronomy}
        )
    }
}

function mapStateToProps(state)  {

    return { astronomy: state.astronomy };

}

//changed from AstronomyContainer to ...
//here we are exporting the method connec we imported
export default connect(mapStateToProps, { fetchData })(AstronomyContainer);