const AlertButton = () => {
    const handleClick = () => alert("Clicked!!!");

    return <button onClick={handleClick}>Click Me!</button>;
};

export default AlertButton;
