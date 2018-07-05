import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo'

class PhoneInfoList extends Component {
  
  static defaultProps = {
    data : []
  }
  
  render() {
    //비구조화 할당. reference를 만들어 준다.
    const {data, onRemove, onUpdate} = this.props;

    const list = data.map(
      //key : 배열 렌더링의 최적화에 사용된다. 
      info => (<PhoneInfo 
        onRemove = {onRemove}
        onUpdate = {onUpdate}
        info={info}
        key={info.id}/>)
    )

    return (
      <div>
        {list}
      </div>
    );
  }
}

export default PhoneInfoList;