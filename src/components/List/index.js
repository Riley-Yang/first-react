import React,{Component,PropType} from "react";
import "./index.css";
import Common from "../Common/"



class List extends Component{
	constructor(props){
		super(props);
	}

	render(){
		let nodes = this.props.data.map(function(dData,index){
			// return (<li key={index}>{dData.name}<span>{dData.msg}</span></li>);
			return (<Common key={index} data={dData}/>);
		});
		return(
			<ul className="list">
				{nodes}
			</ul>
		);
	}
}

export default List