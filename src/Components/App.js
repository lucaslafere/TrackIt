import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TelaLogin from './TelaLogin';
import TelaCadastro from './TelaCadastro';
import TelaHabitos from './TelaHabitos';
import TelaHoje from './TelaHoje';
import TelaHistorico from './TelaHistorico';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TelaLogin />} ></Route>
                <Route path="/cadastro" element={<TelaCadastro />} ></Route>
                <Route path="/habitos" element={<TelaHabitos />} ></Route>
                <Route path="/hoje" element={<TelaHoje />} ></Route>
                <Route path="/historico" element={<TelaHistorico />} ></Route>
            </Routes>
        </BrowserRouter>
    )
}