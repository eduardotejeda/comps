import {GoBell, GoCloudDownload, GoDatabase} from "react-icons/go"
import Button from "./Button";

function App() {
    return <div>
        <div>
            <Button outline rounded><GoBell></GoBell>Click me!</Button>
        </div>
        <div>
            <Button danger><GoCloudDownload></GoCloudDownload>Buy now</Button>
        </div>
        <div>
            <Button warning><GoDatabase></GoDatabase>Cancel</Button>
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