import React from 'react';
import "./CommingSoon.css"
import Spin from 'react-reveal/Spin';


const CommingSoon = () => {
    return (
        <div className="Coming-soon">
            <Spin>
            <h1>Coming soon</h1>
            </Spin>
        </div>
    );
};

export default CommingSoon;