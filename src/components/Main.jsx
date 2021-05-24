import React from 'react';
import './Main.css';
import Image_top from '../img/mv1.png';
import Name_top from '../img/mv_name.png';

const Main =()=>{
    return(
        <div className='mv' id='a'>
            <img className="main_name" src={Name_top} alt="メイン名前画像"/>
            <img className="main_img" src={Image_top} alt="メイン画像"/>
        </div>
    )
};

export default Main;