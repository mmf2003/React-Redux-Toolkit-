import "./App.css";
import AlertButton from "./components/AlertButton";
import GreetButton from "./components/GreetButton";
import Counter from "./components/Counter";
import DeleteButton from "./components/DeleteButton";
import LoginForm from "./components/LoginForm";
import ButtonList from "./components/ButtonList";

export default function App() {
    return (
        <div className="app">
            <h1>Обробники подій у React</h1>

            <section className="section">
                <h2>1. AlertButton</h2>
                <AlertButton />
            </section>

            <section className="section">
                <h2>2. GreetButton</h2>
                <GreetButton />
            </section>

            <section className="section">
                <h2>3. Counter</h2>
                <Counter />
            </section>

            <section className="section">
                <h2>4. DeleteButton</h2>
                <DeleteButton itemId={123} />
            </section>

            <section className="section">
                <h2>5. LoginForm</h2>
                <LoginForm />
            </section>

            <section className="section">
                <h2>6. ButtonList</h2>
                <ButtonList />
            </section>
        </div>
    );
}
