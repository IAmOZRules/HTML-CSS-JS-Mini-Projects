import "./Card.css";

const Card = props => {
    // Children props that let us wrap elements around them
    return (
        <div className="card">
            {props.children}
        </div>)
}

export default Card;