import React from 'react';
import './Hobby.css';
import Cafe from '../img/afternoontea.png';
import Make from '../img/make.png';
import Dance from '../img/dance.png';

const Hobby = () => {
    return (
      <div class="fadein">
      <div className='hobby'>
        <h1 className='title' id='c' style={{textAlign:'center',color:'#707070',fontSize:35,}}>Hobby</h1>
        <div class="fadein">
                <div class="hobbyimg">
                    <div  className="cafe">
                        <img src={Cafe} alt="カフェ画像"/>
                        <p className="hobbyname">Visiting cafes</p>
                    </div>
                    <div className="make">
                        <img src={Make} alt="コスメ画像"/>
                        <p className="hobbyname">Make up</p>
                    </div>
                    <div className="dance">
                        <img src={Dance} alt="スタジオ前画像"/>
                        <p className="hobbyname">dancing</p>
                    </div>
                    
                </div>
                <div class="square02"></div>
         </div>
      </div>
      </div>
    );
  }

  export default Hobby;