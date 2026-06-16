function UserCard({ name, age, email }) {
    return (
        <div class="user-card">
            <h2>{name}</h2>
            <p>Вік: {age} років</p>
            <p>Email: {email}</p>
        </div>
    );
}
export default UserCard;
