import React, {Component,PropTypes} from 'react';	//导入
import './index.css';

// 行内样式
let styleDtata={
	borderRadius : '5px',
	width:'100px'
}
//创建一个button类，从component继承
class Button extends Component{
	//一个类必须有一个构造函数,格式固定
	constructor(props){
		//继承
		super(props);
	}
	// 默认属性设置,方法没有分号，属性有分号
	// staic defaultProps = {
	// 	text:'确认',
	// 	color:'#909'
	// };
	//属性类型检查
	// staic propTypes = {
	// 	size:React.PropTypes.string.isRequired,		//表示size属性是必须的
	// }
	//内置方法，渲染
	render(){
		return(
			//行内样式
			// <button style={styleDtata}>确认</button>
			//引入文件
			<button className='btn'>确认</button>
			)
	}
}

//导出
export default Button