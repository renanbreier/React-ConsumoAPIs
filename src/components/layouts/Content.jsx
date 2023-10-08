import { Route, Routes } from 'react-router-dom';
import NotFound from '../../views/pages/NotFound';
import Listagem from '../../views/pages/Listagem';
import Game from '../../views/pages/jogoVelha/Board';
import Pesquisar from '../../views/pages/Pesquisar';
import './Content.css';

const Content = props => (
    <>
    <aside className='Content'>
        <Routes>
            <Route path="/" exact element={<Game />}/>
            <Route path="/cep" element={<Listagem />}/>
            <Route path="/imagem" element={<Pesquisar/>}/>
            <Route path="*" element={<NotFound />}/>
        </Routes>
    </aside>
    </>
)
export default Content;