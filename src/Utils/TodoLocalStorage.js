export const loadState = () => {
    try {
        const todosLocalStorage = localStorage.getItem('todosList');
        if (todosLocalStorage === null) {
            return undefined;
        }
        return JSON.parse(todosLocalStorage)
    } catch (err) {
        return undefined;
    }
};

export const saveState = todos => {
    try {
        const todosListStorage = JSON.stringify(todos)
        localStorage.setItem('todosList', todosListStorage);
    } catch (err) {
        new Error(err);
    }
};