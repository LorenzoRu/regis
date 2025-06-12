import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div style={{
            width: '200px',
            backgroundColor: 'var(--color-surface)',
            padding: '16px',
            color: 'var(--color-text-primary)',
        }}>
            <h2>Regis</h2>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/obs">OBS</Link>
                    </li>
                    <li>
                        <Link to="/twitch">twitch BOT</Link>
                    </li>
                    <li>
                        <Link to="/settings">Paramètres</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;