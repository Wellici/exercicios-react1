import React from 'react';

//export default (props) => (
  //<button className="btn-primary" onClick={ () => {props.handleClick={props.nome}} }>
    //{props.nome}
  //</button>
//)
class Button extends React.Component {
  render() {
    return (
      <button onClick={ () => {this.props.handleClick(this.props.nome)}}>
          {this.props.nome}
      </button>
    );
  }
}
export default Button;