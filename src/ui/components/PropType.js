import React from 'react'
import PropTypes from 'prop-types'

export default class PropType extends React.Component {

    static propTypes = {
        name: PropTypes.string,
        age: PropTypes.number,
        sex: PropTypes.oneOf(['男', '女']),    // 只能是数组里面的某一个值
        features: PropTypes.objectOf(PropTypes.number),  // 这个对象里面的属性只能是number
        salary: (props, propName, componentName) => {  // 函数校验, 如果这个值不符合要求, 将会抛出异常
            if(props[propName] < 10000){
                return new Error(
                    'Invalid prop `' + propName + '` supplied to' +
                    ' `' + componentName + '`. Validation failed.'
                );
            }
        }
    }

    render() {
        // console.log(this.props);
        const {name, age, sex, features, salary} = this.props // 解构赋值
        return (
           <div>
               <div>个人资料</div>
               <div>姓名: {name}</div>
               <div>年龄: {age}</div>
               <div>性别: {sex}</div>
               <div>身高: {features.weight} kg</div>
               <div>体重: {features.height} cm</div>
               <div>薪水: ¥ {salary}</div>
           </div>
        );
    }
}
