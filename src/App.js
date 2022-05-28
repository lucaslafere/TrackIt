import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import TelaLogin from './Components/TelaLogin';
import TelaCadastro from './Components/TelaCadastro';
import TelaHabitos from './Components/TelaHabitos';
import TelaHoje from './Components/TelaHoje';
import TelaHistorico from './Components/TelaHistorico';
import TokenContext from './contexts/TokenContext';
import ImageContext from './contexts/ImageContext';
import ProgressContext from './contexts/ProgressContext';

export default function App() {
    const [token, setToken] = useState("");
    const [image, setImage] = useState("");
    const [progress, setProgress] = useState([]);


    return (
        <TokenContext.Provider value={{token, setToken}} >
            <ImageContext.Provider value={{image, setImage}}>
                <ProgressContext.Provider value={{progress, setProgress}}>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<TelaLogin />} ></Route>
                            <Route path="/cadastro" element={<TelaCadastro />} ></Route>
                            <Route path="/habitos" element={<TelaHabitos />} ></Route>
                            <Route path="/hoje" element={<TelaHoje />} ></Route>
                            <Route path="/historico" element={<TelaHistorico />} ></Route>
                        </Routes>
                    </BrowserRouter>
                </ProgressContext.Provider>
            </ImageContext.Provider>
        </TokenContext.Provider>
    )
}