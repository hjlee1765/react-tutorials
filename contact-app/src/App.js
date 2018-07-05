import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {

  //배열의 고유한 key값을 넣어준다.
  //배열의 index와는 다르다.
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
    });
  }

  handleRemove = (id) =>{
    const {information} = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    });
  };

  handleUpdate = (id, data) => {
    const {information} = this.state;
    this.setState({
      information: information.map(
        info => {
          if(info.id === id){
            return{
            id,
            ...data,
            };
          }
          return info;
        })
    })
  };

  render() {
    return (
      <div>
        <PhoneForm onCreate = {this.handleCreate}/>
        <PhoneInfoList
         data = {this.state.information}
         onRemove = {this.handleRemove}
         onUpdate = {this.handleUpdate}
         />
      </div>
    );
  }
}

export default App;

