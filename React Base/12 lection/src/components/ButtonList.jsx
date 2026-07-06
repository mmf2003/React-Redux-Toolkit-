import "./ButtonList.css";

export default function ButtonList() {
    const actions = [
        { id: 1, name: "Зберегти", action: "save" },
        { id: 2, name: "Видалити", action: "delete" },
        { id: 3, name: "Редагувати", action: "edit" },
        { id: 4, name: "Поділитися", action: "share" },
    ];

    const handleAction = (name, action) => {
        alert(`Дія: ${name}, Тип: ${action}`);
    };

    return (
        <div className="button-list">
            <h2>Список дій</h2>
            <div className="buttons-container">
                {actions.map((action) => (
                    <button
                        key={action.id}
                        className="action-button"
                        onClick={() => handleAction(action.name, action.action)}
                    >
                        {action.name}
                    </button>
                ))}
            </div>
        </div>
    );
}
