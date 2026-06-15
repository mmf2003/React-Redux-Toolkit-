export default function Welcome({ name, currentYear }) {
    return (
        <div>
            <h1>Привіт, {name}!</h1>
            <p>Сьогодні: {new Date().toLocaleDateString()}</p>
            <p>Що таке 5 + 3? {5 + 3}</p>
            <p>Рік: {currentYear}</p>
            <p>Наступний рік: {currentYear + 1}</p>
        </div>
    );
}
