import React from 'react';
import Button from './Button';
import Display from './Display';

class SimpleGolden extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', (e) => {
      if (e.keyCode === 38) {
        this.changeCount(1)();
      } else if (e.keyCode === 40) {
        this.changeCount(-1)();
      }
    });
  }

  changeCount(parameter) {
    const { count } = this.state;
    const result = count + parameter;
    return () => this.setState({ count: (result > -1 ? result : count) });
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>GoldenAcornApp with States</h1>
        <Button text="Buy one" func={this.changeCount(1)} />
        <Display text={count} />
        <Button text="Eat one" func={this.changeCount(-1)} />
      </div>
    );
  }
}

export default SimpleGolden;
