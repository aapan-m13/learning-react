import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner'


class App extends React.Component{

    state = {'lat':null, 'errorMessage':''}

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude}),
            (err) => this.setState({errorMessage: err.message})
        );
    }

    componentDidUpdate(){
        console.log('component updated!');
    }

    render(){
        return(
            <div>
                <SeasonDisplay lat={this.state.lat} errorMessage={this.state.errorMessage} Spinner={<Spinner message='Please accept location request'/>}/>
            </div>
        ); 
    }
}

ReactDom.render(<App />, document.getElementById('root'));