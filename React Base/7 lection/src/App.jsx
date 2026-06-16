import "./App.css";
import Button from "./components/Button";
import ProductPrice from "./components/ProductPrice";
import SayHello from "./components/SayHello";
import UserCard from "./components/UserCard";

function App() {
    return (
        <>
            <SayHello skills={["JS", "TS", "React"]} isAdmin age={36} />
            <UserCard name="Іван" age="25" email="ivan@mail.com" />
            <ProductPrice price="1000" discount={10} />
            <Button
                onClick={handleClick}
                text="Натисни мене"
                disabled={false}
            />
        </>
    );
}

export default App;

function handleClick() {
    alert("Кнопку натиснуто!");
}
