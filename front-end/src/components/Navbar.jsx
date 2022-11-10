import { BagCheckFill } from "react-bootstrap-icons";
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";

const Navbar = () => {
    const { cartTotalQuantity } = useSelector((state) => state.cart);

    return (
        <nav className="nav-bar">
            <Link to="/">
                <h2>Online Shop</h2>
            </Link>
            <Link to="/cart">
                <div className="nav-bag">
                    <BagCheckFill size={24} />
                    <span className="bag-quantity">
                    <span>{cartTotalQuantity}</span>
                    </span>
                </div>
            </Link>
        </nav>
    );
}

export default Navbar;