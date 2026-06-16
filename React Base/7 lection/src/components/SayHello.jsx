const SayHello = (props) => {
    console.log(props);
    console.log(props.name);
    console.log(props.age);
    console.log(props.isAdmin);
    console.log(props.skills);
    const { name = "Default", age = 30 } = props;
    return (
        <>
            <h1>
                Hello, {name} you are {age}!
            </h1>
            <h2>Skills = {props.skills.join(", ")}</h2>
        </>
    );
};
export default SayHello;
