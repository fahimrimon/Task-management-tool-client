import React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import ToDoTask from './ToDoTask';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ToDoTask></ToDoTask>
            <Footer></Footer>
        </div>
    );
};

export default Home;