//^ QUESTO TIPO DI COMPONENTE E' CHIAMATO FUNCTIONAL COMPONENT, UTILIZZATO
//^ PER OPERAZIONI SEMPLICI E PER MOSTRARE TESTI, IMMAGINI IN MANIERA STATICA
function Navbar() {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <h1 className="navbar-brand mb-0">Reactare</h1>
            </div>
        </nav>
    );
}

export default Navbar;