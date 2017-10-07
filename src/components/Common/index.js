import React,{Component,PropType} from "react";

class Common extends Component{
	constructor(props){
		super(props);
	}
	render(){
		// console.log(this.props.data)
		return(
			<li>{this.props.data.name}<span>{this.props.data.msg}</span></li>
		)
	}
}

export default Common;