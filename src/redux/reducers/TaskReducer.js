import { 
    ADD_TASK,
    EDIT_TASK,
    DELETE_TASK
} from '../actions/Task';

const initState = {
    tasks: [
        {
            id: Math.random(),
            title: 'He knows we are all getting screwed.',
            description: 'May 12, 2019 - history objects typically have the following properties and methods: length - (number) The number of entries in the history stack.'
        },
        {
            id: Math.random(),
            title: 'Slavery has never ended, it just evolved.',
            description: 'May 12, 2019 - history objects typically have the following properties and methods: length - (number) The number of entries in the history stack.'
        },
        {
            id: Math.random(),
            title: 'Complexity is created to hide corruption.',
            description: 'May 12, 2019 - history objects typically have the following properties and methods: length - (number) The number of entries in the history stack.'
        },
        {
            id: Math.random(),
            title: 'I invested $10,000 in a growth fund, 8 years later.',
            description: 'May 12, 2019 - history objects typically have the following properties and methods: length - (number) The number of entries in the history stack.'
        },
        {
            id: Math.random(),
            title: 'He knows we are all getting screwed.',
            description: 'May 12, 2019 - history objects typically have the following properties and methods: length - (number) The number of entries in the history stack.'
        },
        {
            id: Math.random(),
            title: 'So basically slavery but with more steps.',
            description: 'May 12, 2019 - history objects typically have the following properties and methods: length - (number) The number of entries in the history stack.'
        },
        {
            id: Math.random(),
            title: 'It’s a good idea to get rich by selling you how to get rich.',
            description: 'May 12, 2019 - history objects typically have the following properties and methods: length - (number) The number of entries in the history stack.'
        }
    ]
}

export default (state = initState, action) => {
    switch (action.type) {
        case ADD_TASK:{
            let tasks = state.tasks;
            tasks.push(action.payload);

            return {
                ...state,
                tasks
            }
        }

        case EDIT_TASK:{
            let task = action.payload;
            let tasks = state.tasks.map(t => {
                if(t.id === task.id) {
                    return task;
                } else {
                    return t;
                }
            });

            return {
                ...state,
                tasks
            }
        }

        case DELETE_TASK:{
            let id = action.payload;
            let tasks = state.tasks.filter(t => t.id !== id );

            return {
                ...state,
                tasks
            }
        }
    
        default:
            return state;
    }
}