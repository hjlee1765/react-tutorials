import React, { Component } from "react";

class PhoneForm extends Component {
  state = {
    name: "",
    phone: ""
  };

  handleChange = e => {
    this.setState({
      // onChange 이벤트를 행한 target의 name attr의 값을 가져온다.
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    // form에서 submit을 하면 postback이 되는 HTML속성이 있음.
    // 그 작업(페이지의 리로딩) 막아주는 역할을 함.
    e.preventDefault();

    this.props.onCreate({
      name: this.state.name,
      phone: this.state.phone,
    })

    this.setState({
      name:'',
      phone:'',
    })
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="name"
          placeholder="이름"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <input
          name="phone"
          placeholder="전화번호"
          onChange={this.handleChange}
          value={this.state.phone}
        />
        <button type="submit">등록</button>
      </form>
    );
  }
}

export default PhoneForm;
