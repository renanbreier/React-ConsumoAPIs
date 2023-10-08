import React, { useState } from "react";
import axios from 'axios';
import '../css/Listagem.css';

export default function Listagem () {

    const [cep, setCep] = useState({cep: ''});
    const [informacoes, setInformacoes] = useState({
        cep: '',
        logradouro: '',
        complemento: '',
        bairro: '',
        localidade: '',
        uf: '',
        ibge: '',
        gia: ''
    });

    //buscar as informacoes
    const getInformacoes = () => {
        axios.get('http://viacep.com.br/ws/' + cep + '/json/')
            .then( response => {
                setInformacoes(response.data);
            });
    }

    //Atualizar o Cep
    const handlingCep = (e) => {
        setCep(e.target.value);
    }

    return (
        <>
            <h1 class="TituloCep">Consultando CEP</h1>
            <div class="Input">
                <input class="InputText"
                    type="text" 
                    onChange={ (e) => { handlingCep(e) }} 
                    placeholder="Digite o CEP"
                />
                <div class="InputButtonDiv">
                    <button class="InputButton" onClick={ getInformacoes }>Pesquisar</button>
                </div>
            </div>
            <div>
                <ul class="InfoCep">
                    <li>CEP: { informacoes['cep'] }</li>
                    <li>Logradouro: { informacoes['logradouro'] }</li>
                    <li>Complemento: { informacoes['complemento'] }</li>
                    <li>Bairro: { informacoes['bairro'] }</li>
                    <li>Localidade: { informacoes['localidade'] }</li>
                    <li>UF: { informacoes['uf'] }</li>
                    <li>IBGE: { informacoes['ibge'] }</li>
                    <li>GIA: { informacoes['gia'] }</li>
                </ul>
            </div>
        </>
    );
}