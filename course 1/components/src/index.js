import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import Approval from './Approval';

const App = () =>{
    return (
        <div className='ui container comments'>
            <Approval>
                <div>
                    <h4>Warning!</h4>
                    Are you sure?
                </div>
            </Approval>
            <Approval>
                <CommentDetail author='Aapan' time='Today at 6.00pm' txt='Nice vlog!' imgsrc={faker.image.avatar()}/>
            </Approval>
            <Approval>
                <CommentDetail author='Alex'  time='Yesterday at 1.00pm' txt='I am still dreaming!' imgsrc={faker.image.avatar()}/>
            </Approval>
            <Approval>
                <CommentDetail author='Jane'  time='Yesterday at 8.00am' txt='So, beautiful!' imgsrc={faker.image.avatar()}/>
            </Approval>
        </div>
    );
};



ReactDom.render(<App/>, document.getElementById('root'));