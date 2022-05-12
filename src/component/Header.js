import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import Button from "./Button"
import Login from "./login";
import Products from "./Products";
import Register from "./Register";
const Header = ({title}) => {

    const onClick = () => {
        console.log('Click');
    }

    return (
        <header className="header">
            <h1>{title}</h1>
            
            <Link to="/login"><Button color="green" text ="Login"></Button></Link>
            <Link to="/products" ><Button color="green" text ="Products"></Button></Link>
            <Link to = "/add-product"> <Button color="green" text ="Add"></Button></Link> 
            <Link to="/signup" element = {<Register/>}><Button color="green" text ="Register"></Button></Link>
        </header>
    )
}

Header.defaultProps = {
    title: "Product Manager"
}

Header.propTypes = {
    title : PropTypes.string.isRequired
}

// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header