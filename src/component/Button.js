import PropTypes from "prop-types"

function Button(props) {

    return  (
        <button onClick = {props.onClick} className="btn" style={{backgroundColor: props.color}}>{props.text}</button>
    )
}

Button.defaultProps = {
    color : 'steelblue',
    text :''
}

Button.propTypes = {
    color : PropTypes.string,
    text : PropTypes.string,
    onClick:PropTypes.func
}

export default Button