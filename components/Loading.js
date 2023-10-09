import React from 'react';
import ReactLoading from 'react-loading';
 
const Loading = (props) => (
    <div className="loading-spinner-div">
        <div>
            <ReactLoading 
                type={`spin`} 
                color={`#460000`} 
                height={'10%'} 
                width={'10%'} className="loading-spinner" />
        </div>
        <div>
            <h3 className="text-center"> {props?.text || ""} </h3>
        </div>
        
    </div>
);
 
export default Loading;