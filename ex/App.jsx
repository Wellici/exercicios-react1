import React from 'react';
import Button from './button';
import Label from './label';



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      labelText: ''
    };
  }

  setLabelText = (labelText) => {
    this.setState({ labelText })
    // this.setState({ labelText: labelText }); A insstrução acima faz a mmesma coisa que essa, porém usando
    // recursos do es6 -- como o parametro tem o mesmo nome da propriedade eu posso fazer isso
  }

  render() {
    console.log(this.state);
    
    return (
      <div>
        <Label text="Meu texto está aqui..."></Label>
        <Button nome="botao 1" handleClick={this.setLabelText}></Button>
        <Button nome="botao 2" handleClick={this.setLabelText}></Button>
        <Button nome="botao 3" handleClick={this.setLabelText}></Button>
      </div>
    );
  }
}

export default App;