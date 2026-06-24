import "./App.css";
import ContentPage from "./components/ContentPage";
import ProductCart from "./components/ProductCard";
import UserStatus from "./components/UserStatus";

function App() {
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
        </>
    );
}

export default App;
