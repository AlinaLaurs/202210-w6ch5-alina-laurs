import { Link } from 'react-router-dom';
import './menu.css';

export function Menu() {
    const menuOptions = [
        { id: '1', path: '/home', label: 'Sales' },
        { id: '2', path: '/jackets', label: 'Jackets' },
        { id: '3', path: '/dresses', label: 'Dresses' },
    ];
    return (
        <nav>
            <ul>
                {menuOptions.map((item) => (
                    <li key={item.id}>
                        <Link to={item.path}>{item.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
