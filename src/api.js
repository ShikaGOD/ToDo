const Api = {
    getData() {
        return JSON.parse(localStorage.getItem('items')) || []
    },
    
    setData(todoItems) {
        localStorage.setItem('items', JSON.stringify(todoItems))
    },

    addTodo(item) {
        const data = this.getData();
        data.push(item);
        this.setData(data);
    },

    removeToDo(index) {
        const data = this.getData();
        data.splice(index, 1)
        this.setData(data);
    }
}

export default Api