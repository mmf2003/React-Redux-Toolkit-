export default function LoginForm() {
    const handleSubmit = (event) => {
        event.preventDefault(); // Запобігаємо перезавантаженню сторінки
        console.log("Form submitted");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" />
            <button type="submit">Submit</button>
        </form>
    );
}
