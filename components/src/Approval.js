import React from 'react';

const Approval = (props) => {
    console.log(props);
    return(
        <div className='ui card'>
            <div className='content'>{props.children}</div>
            <div className='extra content'>
                <div className='two buttons'>
                    <div className='ui basic green approval button'>Approve</div>
                    <div className='ui basic red decline button'>Decline</div>
                </div>
            </div>
        </div>
    );
}

export default Approval;