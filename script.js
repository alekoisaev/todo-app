class App extends React.Component {
    constructor(props) {
        super(props);

        this.state  = {
            taskInput: '',
            tasks: [
                {id: 0, title: 'Create React App'},
                {id: 1, title: 'Read a book'}
            ],
        }
    }

    inputChange = event => {
        this.setState({
            taskInput: event.target.value
        });
    }

    addTask = () => {
        if (this.state.taskInput) {
            this.setState(state => {
                let { tasks } = state;

                tasks.push({
                    id: tasks.length !== 0 ? (tasks.length) : 0,
                    title: this.state.taskInput
                });
                this.setState({ taskInput: '' });
                return tasks;
            });
        }
    }

    deleteTask = id => {
        const index = this.state.tasks.map(task => task.id).indexOf(id);

        this.setState(state => {
            let { tasks } = state;
            delete tasks[index];
            return tasks;
        });
    }

    render() {
        const { tasks } = this.state;

        return (
            <div className="app">
                <header>Todo App</header>
                <div className="tasks">
                    {tasks.map(task => {
                        return (
                            <div className="task">
                                <p>{task.title}</p>
                                <button onClick={() => this.deleteTask(task.id)}>X</button>
                            </div>
                        )
                    })}
                </div>
                <div className="task-input">
                    <input onChange={this.inputChange} value={this.state.taskInput}/>
                    <button onClick={this.addTask}>ADD</button>
                </div>
            </div>
        );
    }
};

ReactDOM.render(<App />, document.getElementById('root'));
