import {produce} from 'immer';
import { useReducer } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

const INCREMENT_COUNT = 'increment';
const DECREMENT_COUNT = 'decrement';
const SET_VALUE_TO_ADD = 'set_value_to_add';
const ADD_VALUE_TO_COUNT = 'add_value_to_count';


const reducer = (state, action) => {

    if (action.type === INCREMENT_COUNT) {
        state.count = state.count + 1;
        return;
        // return {
        //     ...state,
        //     count: state.count + 1,
        // };
    }

    if (action.type === DECREMENT_COUNT) {
        state.count = state.count - 1;
        return;
        // return {
        //     ...state,
        //     count: state.count - 1,
        // };
    }

    if (action.type === SET_VALUE_TO_ADD) {
        state.valueToAdd = action.payload;
        return;
        // return {
        //     ...state,
        //     valueToAdd: action.payload,
        // };
    }

    if (action.type === ADD_VALUE_TO_COUNT) {
        state.count = state.count + state.valueToAdd;
        state.valueToAdd = 0;
        return;

        // return {
        //     ...state,
        //     count: state.count + state.valueToAdd,
        //     valueToAdd: 0
        // };
    }

};

function CounterPage({initialCount}) {
    // const [count, setCount] = useState(initialCount);
    // const [valueToAdd, setValueToAdd] = useState(0);
    const [state, dispatch] = useReducer(produce(reducer), {
        count: initialCount,
        valueToAdd: 0
    });

    const increment = () => {
    //    setCount(count + 1)
    dispatch({
        type: INCREMENT_COUNT

    });
    };

    const decrement = () => {
    //    setCount(count - 1)
    dispatch({
        type: DECREMENT_COUNT

    })
    };

    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0;
        // setValueToAdd(value);  
        
        dispatch({            
                type: SET_VALUE_TO_ADD,
                payload: value       
            
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        dispatch({
            type: ADD_VALUE_TO_COUNT
        })



        // setCount(count + valueToAdd);
        // setValueToAdd(0);
    }


return <Panel className='m-3'>
    <h1 className='text-lg'>Count is {state.count}</h1>
    <div className='flex flex-r'>
    <Button onClick={increment}>Increment</Button>
    <Button onClick={decrement}>Decrement</Button>
    </div>

    <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input 
        value={state.valueToAdd || ''}
        onChange={handleChange}
        type='number' 
        className='p-1 m-3 bg-gray-50 border border-gray-300'></input>
        <Button>Add it!</Button>
    </form>
</Panel>
    
};

export default CounterPage;