import React,{useContext, useState} from 'react'
import ColorContext from '../Context/ColorContext'

const Hello = () => {
    let{style,blackMode, blueMode,whiteMode}=useContext(ColorContext)
  return (
    <div>
    <div style={{
        color:style.color,
        backgroundColor:style.backgroundColor,
        border:style.border,
    }}>
        <h1>Hi! How are you</h1>
        <p>
        The Humen, also Bocca Tigris or Bogue, is a narrow strait in the Pearl River Delta that separates Shiziyang in the north and Lingdingyang in the south near Humen Town in China's Guangdong Province. It is the site of the Pearl River's discharge into the South China Sea. It contains the Port of Humen at Humen Town. The strait is formed by the islands of Chuenpi (穿鼻, p Chuanbi) and Anunghoy (阿娘鞋, p Aniangxie; also called 威远, p Weiyuan) on the eastern side, and Taikoktow (大角头, p Dajiaotou) on the western side.[1] Since 1997, the strait has been traversed by the Humen Pearl River Bridge. Bocca Tigris was the entry to China's only trading city, Kanton.


Name
        </p>
    </div>
    <button onClick={whiteMode}>White Mode</button>
    <button onClick={blackMode}>Dark Mode</button>
    <button onClick={ blueMode}>Blue Mode</button>

    </div>

  )
}

export default Hello