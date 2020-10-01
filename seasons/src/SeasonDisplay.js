import './SeasonDisplay.css';
import React from 'react';


const seasonConfig = {
    summer:{
        season: 'summer',
        text: 'Lets hit the beach',
        iconName: 'sun'
    },
    winter:{
        season: 'winter',
        text: 'Burr, its chilly',
        iconName: 'snowflake'
    }
};

const getSeason = (lat, month) =>{
    console.log(seasonConfig);
    if(lat != null){
        if(month > 2 && month < 9){
            return lat > 0? seasonConfig.summer : seasonConfig.winter;
        }else{
            return lat > 0? seasonConfig.winter : seasonConfig.summer;
        }
    }
};

function renderContent(props, season){
    if(props.lat && !props.errorMessage){
        return(
        <div className = {`season-display ${season.season}`}>
            <i className={`icon-left massive ${season.iconName} icon`}/>
            <h1>{season.text}</h1>
            <i className={`icon-right massive ${season.iconName} icon`}/>
        </div>
        );
    }

    if(!props.lat && props.errorMessage){
        return(
        <div>Error: {props.errorMessage}</div>
        );
    }

    if(!props.lat && !props.errorMessage){
        return(
        <div>{props.Spinner}</div>
        ); 
    }
}

const SeasonDisplay = (props) =>{

    console.log(props)

    const season = getSeason(props.lat, new Date().getMonth());

    return(
        <div className='border red'>
            {renderContent(props, season)}
        </div>
    );

    
};

export default SeasonDisplay;