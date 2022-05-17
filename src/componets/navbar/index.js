import './navbar.css'

export default function Navbar(params) {

    return (
        <div className="nav-gral">
            <div>
            <h3 className='nav-link  logo'>Veizaga Jorge</h3>
            </div>
            
            <div>
                <ul className="nav justify-content-end">
                {/* <li className="nav-item">
                    <h3 className='nav-link  logo'>Veizaga Jorge</h3>
                </li> */}
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#skills">Skills</a>
                </li>
                
                <li className="nav-item">
                    <a className="nav-link" href="#proyectos">Proyectos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href='#contact'>Contacto</a>
                </li>
            </ul>
            </div>
            
        </div >
    )
}