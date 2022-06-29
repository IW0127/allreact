import React from "react";
import ReactDOM from "react-dom";

const modalRootEl = document.getElementById("modal-root");

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
  }

  componentDidMount() {
    modalRootEl.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRootEl.removeChild(this.el);
  }
  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

export default class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      clicks: prevState.clicks + 1,
    }));
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <p>Number of clicks: {this.state.clicks}</p>
        <p>
          Open up the browser DevTools to observe that the button is not a child
          of the div with the onClick handler.
        </p>
        <Modal>
          <Child />
        </Modal>
      </div>
    );
  }
}

function Child() {
  return (
    <div className="modal">
      <button>Click</button>
    </div>
  );
}

// const root = ReactDOM.createRoot(appRootEl);
// root.render(<Parent />);
