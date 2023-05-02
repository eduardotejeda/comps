import Button from "./Button";

function App() {
    return <div>
        <div>
            <Button success rounded>Click me!</Button>
        </div>
        <div>
            <Button danger>Buy now</Button>
        </div>
        <div>
            <Button warning>Cancel</Button>
        </div>
        <div>
            <Button secondary>Check out</Button>
        </div>
        <div>
            <Button primary rounded>Accept</Button>
        </div>
    </div>;
}

export default App;