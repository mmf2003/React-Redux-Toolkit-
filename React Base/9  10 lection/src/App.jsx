import "./App.css";
import ContentPage from "./components/ContentPage";
import ProductCart from "./components/ProductCard";
import UserStatus from "./components/UserStatus";

function App() {
    const skills = ["JS", "TS", "React"];

    const topFilms = [
        { id: 101, title: "Втеча з Шоушенка", year: 1994 },
        { id: 102, title: "Хрещений батько", year: 1972 },
        { id: 103, title: "Темний лицар", year: 2008 },
        { id: 104, title: "12 розгніваних чоловіків", year: 1957 },
        { id: 105, title: "Список Шиндлера", year: 1993 },
    ];

    return (
        <>
            <ContentPage isLoggedIn={false} />
            <ProductCart
                title="Hоутбук"
                inStock={true}
                showDetails={true}
                isInCart={false}
            />
            <UserStatus
                isLoggedIn={true}
                username="Alex"
                role="admin"
                isOnline={true}
            />

            <ul>
                {skills.map((skill) => (
                    <li>{skill}</li>
                ))}
            </ul>
            <h1>Топ-5 фільмів всіх часів:</h1>
            <ul>
                {topFilms.map((film) => (
                    <li key={film.id}>
                        {film.title} ({film.year})
                    </li>
                ))}
            </ul>
            <div className="app-container">
                <h1 className="app-title">Топ-5 Фільмів Всіх Часів</h1>

                <ul className="films-list">
                    {topFilms.map((film) => (
                        <li key={film.id} className="film-item">
                            <span className="film-title">{film.title}</span>{" "}
                            <span className="film-year">({film.year})</span>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default App;
