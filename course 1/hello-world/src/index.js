//import react and reactDom libraries
import React from 'react';
import ReactDom from 'react-dom';

//create a react component

function getButtonTextFromFunction(){

    return 'Click me! I am from functions!'

}

const Apps = function(){

    const buttonText = 'Click Me';

    const buttonTextObject = {text: 'click me!'}

    return  (<div id='rootDocument'> Hi There!
                <div>
                    <label className="label" htmlFor='name'>
                        Enter name:
                        </label>
                    <input id='name'/>
                    <button style={{backgroundColor: 'blue', color: 'white'}} value={JSON.stringify(buttonTextObject)}>
                        {buttonTextObject.text}
                    </button>
                </div>
            </div>);

}

//Take the react component and show it on the screen

ReactDom.render(
    <Apps />, document.getElementById('root')
);