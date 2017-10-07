import React,{Component,PropType} from "react";
import "./index.css";

class Form extends Component{
	constructor(props){
		super(props);
			//用于组件保存、修改、修改、控制自己的可变状态
		this.state={
			username:"辛弃疾",
			usermsg:"众里寻他千百度"
		}
	}

	handleClick(){
		let username=this.refs.username.value;
		let usermsg=this.refs.usermsg.value;
		let msgCon={
			"id":Math.random(),
			"name":username,
			"msg":usermsg
		}
		this.props.changePub(msgCon)


	}

		// 改变input的值
	changeName(e){
		this.setState({
			username:e.target.value
		})
	}
		// 改变多行文本框的值
	changeMsg(e){
		this.setState({
			usermsg:e.target.vlue
		})
	}

	render(){
		return(
			<ul className="form">
				<li className="username">
					<span>用户名：</span>
					{/*用到value设置默认值时，需要用onChang事件来改变默认值*/}
					<input ref="username" type="text" value={this.state.username} onChange={this.changeName.bind(this)} />
				</li>
				<li className="usermsg">
					<span>内&nbsp;&nbsp;&nbsp;容：</span>
					<textarea ref="usermsg" value={this.state.usermsg} onChange={this.changeMsg.bind(this)} />
				</li>
				<li>
					<button onClick={this.handleClick.bind(this)}>发布</button>
				</li>
			</ul>
		);
	}
}

export default Form;