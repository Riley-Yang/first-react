import React,{Component,PropType} from "react";
import "./index.css";
import Form from "../Form/";
import List from "../List/";

let Msgdata = [
	{"id":"01","name":"李白","msg":"窗前明月光，疑是地上霜"},
	{"id":"02","name":"杜甫","msg":"国破山河在，城春草木深"},
	{"id":"03","name":"陶渊明","msg":"采菊东篱下，悠然见南山"},
	{"id":"04","name":"陆游","msg":"山冲水疑无路，柳暗花明又一村"},
]

class Page extends Component{
	constructor(props){
		super(props);
		this.state={	//初始值
			comments:Msgdata
		}
	}

	changePub(data){
		Msgdata.unshift(data)
		console.log(Msgdata)
		this.setState({		//改变初始值
			comments:this.state.comments
		})
	}

	render(){
		return(
			<div className="container">
				<Form changePub={this.changePub.bind(this)} />
				<List data={this.state.comments} />
			</div>
		)
	}
}

export default Page;