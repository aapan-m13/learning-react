import React from 'react';
import ReactDom from 'react-dom';

const App = () => {
    return (
        <div>
        <BaseComp>
            <FirstComp/>
        </BaseComp>
        <BaseComp>
            <SecondComp/>
        </BaseComp>
        </div>
    );
};

const FirstComp = () =>{
    return(
        <div>
            <div className="ui icon header">
                <i className="pdf file outline icon"></i>
                No documents are listed for this customer.
        </div>
        <div className="ui primary button">Add Document</div>
        </div>
    );
}

const SecondComp = () =>{
    return(
        <div className="ui placeholder segment">
            <h4 className="ui header">For Your Information</h4>
            <p>
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
            </p>
        </div>
    );
}

const BaseComp = (props)=>{
    console.log(props)
    return(
    <div className="ui placeholder segment">{props.children}</div>
    );
}



ReactDom.render(<App />, document.getElementById('root'));