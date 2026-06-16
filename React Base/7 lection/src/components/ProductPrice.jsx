function ProductPrice(props) {
    return (
        <div>
            <p>Ціна: {props.price} грн</p>
            <p>Знижка: {props.discount}%</p>
            <p>
                Ціна зі знижкою:{" "}
                {props.price - (props.price * props.discount) / 100} грн
            </p>
        </div>
    );
}

export default ProductPrice;
