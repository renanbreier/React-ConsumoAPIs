import React, { useState } from "react";
import '../css/Pesquisar.css';

export default function Pesquisar() {

    const [image, setImage] = useState("dog");

    const handleChange = (event) => {
        setImage(event.target.value)
    };

    const linkImage = `https://source.unsplash.com/800x600/?${image}`
    console.log(linkImage)

    return(
        <>
            <h1 class="TituloPesquisar">Gerando Imagens</h1>
            <div class="InputPesquisar">
                <input class="InputText" type="text" onChange={handleChange} placeholder="Escolha um tema"/>
                <div class="InputDiv">
                    <h2>*A pesquisa funciona melhor em inglês*</h2>
                </div>
            </div>
            <div class="InputImage">
                <img class="LayoutImage" src= {linkImage}></img>
            </div>
        </>
    );
}