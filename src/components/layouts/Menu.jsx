import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = props => (
    <>
    <aside className='Menu'>
        <nav>
            <ul>
                <li><Link to="/">Jogo da Velha</Link></li>
                <li><Link to="/cep">Listagem Cep</Link></li>
                <li><Link to="/imagem">Gerador Imagem</Link></li>
            </ul>
        </nav>
    </aside>
    </>
)
export default Menu;