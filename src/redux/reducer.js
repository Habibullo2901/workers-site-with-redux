const initialState = {
    workers: JSON.parse(localStorage.getItem('workers')) || [],
    total: JSON.parse(localStorage.getItem('total')) || 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            localStorage.setItem('workers', JSON.stringify([action.worker, ...state.workers ]))
            localStorage.setItem('total', state.total + 1)
            return {
                workers: [action.worker, ...state.workers ],
                total: state.total + 1
            }
        default:
            return state
    }

}

export { reducer }