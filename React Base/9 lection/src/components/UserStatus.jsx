// UserStatus.jsx
export default function UserStatus({ isLoggedIn, username, role, isOnline }) {
    // 1. Early return для неавторизованих користувачів (if/else)
    if (!isLoggedIn) {
        return (
            <div style={styles.container}>
                <p>Будь ласка, увійдіть в акаунт</p>
            </div>
        );
    }

    // 2. Тернарний оператор для привітання залежно від ролі
    const greeting =
        role === "admin"
            ? `Вітаємо, Адміністратор ${username}`
            : role === "user"
              ? `Привіт, ${username}`
              : "Привіт, Гість";

    // 3. Тернарний оператор для статусу онлайн
    const onlineStatus = isOnline ? "🟢 В мережі" : "⚫ Офлайн";

    return (
        <div style={styles.container}>
            <h2>{greeting}</h2>
            <p style={styles.status}>{onlineStatus}</p>

            {/* 4. Логічний && для кнопки адмін-панелі */}
            {role === "admin" && (
                <button style={styles.adminButton}>
                    Панель адміністратора
                </button>
            )}

            {/* 5. Логічний && для VIP бейджа (онлайн ТА admin) */}
            {isOnline && role === "admin" && (
                <span style={styles.vipBadge}>⭐ VIP</span>
            )}
        </div>
    );
}

// Стилі для компонента
const styles = {
    container: {
        border: "2px solid #ddd",
        borderRadius: "8px",
        padding: "20px",
        margin: "20px 0",
        backgroundColor: "#f9f9f9",
    },
    status: {
        fontSize: "16px",
        fontWeight: "bold",
        margin: "10px 0",
    },
    adminButton: {
        backgroundColor: "#dc3545",
        color: "white",
        border: "none",
        padding: "10px 20px",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "14px",
        marginTop: "10px",
    },
    vipBadge: {
        backgroundColor: "#ffc107",
        color: "#000",
        padding: "5px 15px",
        borderRadius: "20px",
        fontSize: "14px",
        fontWeight: "bold",
        marginLeft: "10px",
        display: "inline-block",
        marginTop: "10px",
    },
};
