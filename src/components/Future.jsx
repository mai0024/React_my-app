import React from 'react';
import Square from '../img/future_waku.png';

const Future = () =>{
    return(
        <div class="fadein">
        <div className='feture'>
            <h1 className='title' id='d' style={{textAlign:'center',color:'#707070',fontSize:35,}}>Future</h1>
            <div className='square03'>
                <img src={Square} alt="背景画像"/>
                <div className="text" style={{textAlign:'left'}}>
                    <p>私は将来、フロントエンドエンジニアとして活躍したいです。</p>
                    <p>専門学校では、Webサイトのデザインやコーディングを</p>
                    <p>学びました。一人前のエンジニアとなれるよう、</p>
                    <p>今後も勉強に励み、努めて参りますので</p>
                    <p>よろしくお願いいたします。</p>
                </div>
            </div>
            <footer></footer>
        </div>
        </div>
    );
}

export default Future;