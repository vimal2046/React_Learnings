const Child = ({ message, handleClick }) => {
    return (
        <div>
            <button onClick={handleClick}>Click Me</button>
            <h2>{message}</h2>
        </div>
    );
};

const Parent = () => {
    return <Child message="Hello from Parent!" handleClick={() => <h1>hello</h1>} />;
};

export default Parent;
