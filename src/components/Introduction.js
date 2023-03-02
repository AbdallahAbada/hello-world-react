
export const Introduction = (props) => {
    const myName = props.myName;
    const role = props.role;
    const desc = props.desc;
    return (
        <div className="jumbotron">
            <h1>{myName}</h1>
            <h6 className="role">{role}</h6>
            <p>{desc}</p>
        </div>
    )
}