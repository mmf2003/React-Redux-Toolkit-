function Button({ onClick, text, disabled }) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            style={{
                width: "200px",
                backgroundColor: "red",
                fontSize: "20px",
            }}
        >
            {text}
        </button>
    );
}

export default Button;
