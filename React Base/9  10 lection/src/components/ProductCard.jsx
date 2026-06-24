const ProductCart = (props) => {
    const { title, inStock, showDetails, isInCart } = props;
    return (
        <div>
            <h3>{title}</h3>
            {/* ✅ Тернарний оператор - вибір між двома варіантами */}
            <p>{inStock ? "Доступно" : "Не доступно"}</p>

            {/* ✅ Логічний && - показати тільки якщо showDetails true */}
            {showDetails && <div>Детальна інформація</div>}

            {/* ✅ Тернарний оператор - текст кнопки */}
            <button>{isInCart ? "В кошику" : "Додати в кошик"}</button>
        </div>
    );
};

export default ProductCart;
