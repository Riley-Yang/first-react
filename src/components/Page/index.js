import React,{Component,PropType} from "react";
import "./index.css";
import Form from "../Form/";
import List from "../List/";

let Msgdata = [
	{"id":"01","name":"李白1","msg":"窗前明月光"},
	{"id":"02","name":"杜甫","msg":"窗前明月光"},
	{"id":"03","name":"王维","msg":"窗前明月光"},
	{"id":"04","name":"陆游","msg":"窗前明月光"},
]

let Msgdata1 = [
	{"id":"05","name":"李白2","msg":"窗前明月光"},
	{"id":"06","name":"杜甫","msg":"窗前明月光"},
	{"id":"07","name":"王维","msg":"窗前明月光"},
	{"id":"08","name":"陆游","msg":"窗前明月光"},
]

class Page extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className="container">
				<Form />
				<List data={Msgdata} />
				<List data={Msgdata1} />
			</div>
		)
	}
}

export default Page;