function Header() {
    return (
        <header style={{
            backgroundColor: 'var(--color-surface',
            color: 'var(--color-text-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '8px 16px',
            boxShadow: 'var(--shadow-md)',
            height: '60px',
        }}>
            <div style={{ display: 'flex', alignItems: 'center'}}>
                <img src="" alt="" style={{ height: '40px', marginRight: '12px'}}/>
                <h1 style={{ fontSize: '1.5rem', margin: 0 }}>Régis</h1>
            </div>

            <div>Barre  d'action</div>
        </header>
    )
}
export default Header;