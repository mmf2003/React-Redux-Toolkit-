const ContentPage = ({ isLoggedIn }) => {
    // ✅ IF/ELSE - рання перевірка (early return)
    if (!isLoggedIn) {
        return <h1>Сторінка вам не доступна</h1>;
    }

    return <h1>Контент сторінки</h1>;
};

export default ContentPage;
