import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div className='mx-auto my-2'>
            <button className="btn btn-light">
                <Link to="/">
                    Jouer avec les blancs
                </Link>
            </button>

            <button className="btn btn-dark">
                <Link to="/black">
                    Joueur avec les noirs
                </Link>
            </button>

        </div>
    )

}

export default Header