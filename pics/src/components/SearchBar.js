import React from 'react';

class SearchBar extends React.Component{

    state = {term: '', t:''}

    componentDidMount(){
        setInterval(()=>{
            function getRandomInt(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }
            var t =getRandomInt(1,2);
            var i = 0;
            var txt;
            if(t ==  1){
                txt = 'Please search images as you want';
            }else{
                txt = 'Please search for different products like cars, bikes, buses... etc'
            }
            var placeHolderVal = document.getElementById("searchInput").placeholder;
            if(placeHolderVal.length > 0){
                document.getElementById("searchInput").removeAttribute('placeholder');
            }
            function typeWriter(event){
                if (i < txt.length) {
                    document.getElementById("searchInput").placeholder += txt.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                }
              }
            typeWriter();
            i++;
        }, 7000);
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render(){
        
        return (
                <div className='ui segment'>
                    <form onSubmit={this.onFormSubmit} className='ui form'>
                        <div className='field'>
                            <label>Image Search</label>
                            <input id='searchInput'
                            type='text' 
                            value = {this.state.term}
                            onChange={(e)=> this.setState({ term: e.target.value}) }
                            />
                        </div>
                    </form>
                </div>
            );
    }
}

export default SearchBar;