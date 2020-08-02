import React from 'react';
import Menu from './Components/Menu/Index';
import BannerMain from './Components/BannerMain'
import Carousel from './Components/Carousel'
import Footer from './Components/Footer'
import dadosIniciais from '../src/Data/dados_iniciais.json'


function App() {
  return (
    <div style  ={{background:"#141414"}}>
      <Menu />
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        videoDescription={"Escreva aqui a sua descrição"}
        url={dadosIniciais.categorias[0].videos[0].url}/>
        <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
        />
        <Carousel
        category={dadosIniciais.categorias[1]}
        />
        <Footer/>
    </div>
  );
}

export default App;
