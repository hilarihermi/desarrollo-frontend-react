import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const formData = useSelector(state => state.form.formData);
    const { username, email } = formData;
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/default">Default</Link>
                </li>
                <li>
                    <Link to="/products">Product</Link>
                </li>
                <li>
                    <Link to="/login">LoginForm</Link>
                </li>
                <li>
                    {username && email && (
                        <span>Bienvenido {username}: {email}</span>
                    )}
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;