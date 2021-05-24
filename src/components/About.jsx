import React from 'react';
import './About.css';
import Pf_img from '../img/profile.png';

function fadeinEvent() {
  
      var fadeinClass= Array.prototype.slice.call(document.getElementsByClassName("fadein"));

      fadeinClass.forEach(function( element ) {

      var boundingClientRect = element.getBoundingClientRect();

      var scroll = document.documentElement.scrollTop || document.body.scrollTop;

      var windowHeight = window.innerHeight;

      if (scroll > scroll + boundingClientRect.top - windowHeight + 200){
          element.style.opacity = "1";
          element.style.transform = "translateY(0)";
      }
      });
 }

  window.onload = function(){
    fadeinEvent();
    window.addEventListener('scroll', fadeinEvent, false);
  }


  const About = () => {
      return(
        <div class="fadein">
        <div className='about'>
            <h1 className='title' id="b" style={{textAlign:'center',color:'#707070',fontSize:35,}}>About</h1>
            <img className="pf_img" src={Pf_img} alt="メイン名前画像"/>
            <div class="square">
              <div class="p">
                <p>千葉県在住の21歳、山本真衣です。</p>
                <p>今年の春から新社会人として、入社しました。</p>
                <p>今は研修期間で、たくさんの事を日々、学んでいます。</p>
                <p>一人前のエンジニアとして活躍できるよう、精一杯、頑張ります！</p>
              </div>
            </div>
        </div>
        </div>
        
      )
  };


  export default About;