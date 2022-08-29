import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div>
            <Link to="/">
                Jouer avec les blancs
            </Link>
            <Link to="/black">
                Joueur avec les noirs
            </Link>
        </div>
    )

}

export default Header