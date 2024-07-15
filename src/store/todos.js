const LOCAL_STORAGE_ITEMS_KEY = 'ALPINE_LOCAL_STORAGE_ITEMS';

function TodoItem(title) {
    this.id = Date.now();
    this.title = title;
    this.checked = false;
    this.createAt = new Date();
}

export const TodosStore = {
    items: [],
    async create({ title }) {
        this.items = [new TodoItem(title), ...this.items];

        return this.items;
    },
    async remove(id) {
        this.items = this.items.filter(todo => todo.id !== id);

        return this.items;
    },

    updateLocalStorage() {
        window.localStorage && window.localStorage.setItem(LOCAL_STORAGE_ITEMS_KEY, JSON.stringify(this.items));
    },

    init() {
        const savedTodos = window.localStorage.getItem(LOCAL_STORAGE_ITEMS_KEY);
        if (savedTodos) {
            this.items = JSON.parse(savedTodos);
        }

        Alpine.effect(() => {
            this.updateLocalStorage();
        });
    }
};