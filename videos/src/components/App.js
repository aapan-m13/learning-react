import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const KEY = 'AIzaSyBb8vdBViFpRfuXK50D8Rt9KPBKhR28rB8';

class App extends React.Component{

    state = { videos:[], selectedVIdeo:null};

    componentDidMount(){
        this.onTermSubmit('Guns n Roses')
    }

    onTermSubmit = async (t) => {
        const response = await youtube.get("/search", {
          params: {
            q: t,
            part: "snippet",
            maxResults: 5,
            type: 'video',
            key: KEY
          }
        });

        this.setState(
            {videos:response.data.items,
            selectedVIdeo:response.data.items[0]}           
            );
    }

    onVideoSelect = (video) =>{
        this.setState({selectedVIdeo:video});
    }

    render(){
        return(
            <div className="ui container">
                <SearchBar getTerm={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVIdeo}></VideoDetail>
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect = {this.onVideoSelect} videos={this.state.videos}></VideoList>
                        </div>
                    </div>
                </div>
            </div>
        ); 
    }
}

export default App;