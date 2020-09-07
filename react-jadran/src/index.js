import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import axios from "axios";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

class UsingAxios extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
    this.getToVisit = this.getToVisit.bind(this);
  }

    componentDidMount() {
        this.getToVisit();
    }

    async getToVisit() {
        // With all properties
        let body = {
        userId: 1111,
        title: "This is POST request with body",
        completed: true
        };
        axios
        .post("https://jsonplaceholder.typicode.com/todos", body)
        .then(function(response) {
            console.log(response.data);
        })
        .catch(function(error) {
            console.log(error);
        });
    }

    render() {
        const { tovisits } = this.state;
        return (
        <div>
            <h3>Using Axios in React for API call</h3>
            <hr />
        </div>
        );
    }
}

export default UsingAxios;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
