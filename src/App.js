import Accordion from "./components/Accordion";

function App() {
const items = [
    {
        id: 'adsfa',
        label:'Can I use React on a Project',
        content: 'You can use React on any Project  you want'

    },
    {
        id: 'adsfa1',
        label:'Can I use JavaScript on a Project',
        content: 'You can use React on any Project  you want'

    },
    {
        id: 'adsfa2',
        label:'Can I use CSS on a Project',
        content: 'You can use React on any Project  you want'

    }
]

    return <Accordion items={items} />;
}

export default App;