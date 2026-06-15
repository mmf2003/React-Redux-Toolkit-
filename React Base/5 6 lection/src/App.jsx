import "./App.css";
import Authors from "./components/Authors";
import HillelCourses from "./components/HillelCourses";
import ProductCard from "./components/ProductCard";
import UserProfile from "./components/UserProfile";
import Welcome from "./components/welcome";

function App() {
    return (
        <>
            <div className="container">
                <HillelCourses />
                <Authors />
            </div>

            <main>
                <h1>Каталог Товарів</h1>

                {/* ➡️ Використайте компонент тричі тут: */}
                <ProductCard />
                <ProductCard />
                <ProductCard />

                {/* ------------------------------------- */}

                <footer>© 2024 Hillel IT School</footer>
            </main>

            <Welcome name="Alex" currentYear={1989} />
            <UserProfile />
        </>
    );
}

export default App;
