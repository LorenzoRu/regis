import Sidebar from "./Sidebar";
import Header from "./Header";

function Layout({children}) {
    return (
        <div style={{ display: 'flex', height: '100vh', width:'100vw'}}>
        <Sidebar />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Header />
          <main style={{ flex: 1, padding: '16px', backgroundColor: 'var(--color-background)', overflowY: 'auto' }}>
            {children}
          </main>
        </div>
      </div>
    )
    }
 



export default Layout;