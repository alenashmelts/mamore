import{NavLink} from "react-router-dom"
import{Header} from './../../header/Header';
import{Footer} from './../../footer/Footer';
import "./PageFirstPage.css"

export function PageFirstPage() {
    return(
        <div>
            <Header/>
            <main>
            <NavLink to="/play" className={({isActive}) => (isActive ? 'link--active' : 'link')}>
                    Начать игру
                </NavLink>
            </main>
            <Footer/>
        </div>
    )
}
