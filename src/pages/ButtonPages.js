import {GoBell, GoCloudDownload, GoDatabase} from "react-icons/go"
import Button from "../components/Button";

function ButtonPage() {
    // const handleClick = () => {
    //     console.log('click!')

    // };


    return <div>
        <div>
            <Button outline rounded className="mb-5"><GoBell></GoBell>Click me!</Button>
            {/* <Button outline rounded onClick={handleClick}><GoBell></GoBell>Click me!</Button> */}
        </div>
        <div>
            <Button danger><GoCloudDownload></GoCloudDownload>Buy now</Button>
            {/* <Button danger onMouseEnter={handleClick}><GoCloudDownload></GoCloudDownload>Buy now</Button> */}
        </div>
        <div>
            <Button warning><GoDatabase></GoDatabase>Cancel</Button>
            {/* <Button warning onMouseLeave={handleClick}><GoDatabase></GoDatabase>Cancel</Button> */}
        </div>
        <div>
            <Button secondary>Check out</Button>
        </div>
        <div>
            <Button primary rounded>Accept</Button>
        </div>
    </div>;
}

export default ButtonPage;