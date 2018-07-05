/*Fragment : jsx에서 모든 컴포넌트는 태그로 감싸져야하는데
 추가적인 div를 사용하기 싫으면 Fragment 태그를 사용가능하다.*/
import React, { Component, Fragment } from "react";

class PhoneInfo extends Component {

  state = {
    editing: false,
    name: '',
    phone: '',
  }

  handleRemove = () => {
    const {info, onRemove} = this.props;
    onRemove(info.id);
  };

  handleToggleEdit = () => {

    const {info, onUpdate} = this.props;
    //true -> false (적용)
    if(this.state.editing){
      onUpdate(info.id, {
        name : this.state.name,
        phone: this.state.phone
      });
    }
    // false -> true (수정)
      //수정 input box에 초기 값을 세팅한다.
    else{
      this.setState({
        name: info.name,
        phone: info.phone,
      });
    }

    this.setState({
      editing: !this.state.editing,
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const { name, phone } = this.props.info;
    const {editing} = this.state;

    const style = {
      border: "1px solid black",
      padding: "8px",
      margin: "8px"
    };

    return (
      <div style={style}>
      {
        editing ? (
          <Fragment>
            <div>
              <input
               name = 'name'
               onChange = {this.handleChange}
               value = {this.state.name}
              />
            </div>
            <div>
              <input
               name = 'phone'
               onChange = {this.handleChange}
               value = {this.state.phone}
              />
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <div><b>{name}</b></div>
            <div>{phone}</div>
          </Fragment>
        )
      }
        <button onClick={this.handleRemove}>삭제</button>
        <button onClick={this.handleToggleEdit}>
          { editing ? '적용' : '수정'}
        </button>
      </div>
    );
  }
}

export default PhoneInfo;
