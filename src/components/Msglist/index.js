import React,{Component,PropTypes} from 'react';
import './index.css';



class Msglist extends Component{
	constructor(props){
		super(props);
	}

	render(){

		let data = [
			{"id":"01","name":"李白","msg":"黄河只水天上来"},
			{"id":"02","name":"杜甫","msg":"国破山河在"},
			{"id":"03","name":"王维","msg":"大漠孤烟直"}
		]

		let nodes = data.map((dData,index)=>{
			return(
				<li key={index}>{dData.name}:{dData.msg}</li>
			);
		});
		return (
			<div>
				<ul>
					{nodes}
				</ul>
			</div>
		)
	}
}

export default Msglist;
