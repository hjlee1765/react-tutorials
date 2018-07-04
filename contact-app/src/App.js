import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';

class App extends Component {

  //데이터가 들어갈 때 마다, 고유한 id값이 들어가게 한다.
  id = 0;

  state = {
    information: [],
  }

  handleCreate = (data) =>{
    //비 구조화 할당 - 코드 가독성, 간결하게.
    const { information } = this.state;

    this.setState({
      //concat : 기존에 있던 배열은 놔두고, 새로운 배열을 추가해서 리턴함.
      information: information.concat({
        ...data,
        id: this.id ++
      })
    })
  }

  render() {
    return (
      <div>
        <PhoneForm onCreate = {this.handleCreate}/>
        {JSON.stringify(this.state.information)}
      </div>
    );
  }
}

export default App;

