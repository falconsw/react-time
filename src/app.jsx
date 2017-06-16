import './scss/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';


export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h2>Saat: {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
};

ReactDOM.render(
  <Clock />,
  document.querySelector('#content')
);
