import React, {Component,PropType} from 'react';
import './index.css';
class Test extends Component{
	constructor(props){
		super(props);
		this.state={	//组件初始状态
			isShow:true
		};
	}



	click(){
		this.setState({
			isShow:!this.state.isShow
		});
		console.log(2this.state.isShow)
	}

//默认属性
static defaultProps={
	text:"确定",
};

render(){
	// console.log(this.props.text);
	let {size,text}=this.props;
	let clsName="btn";
	if(size=="xm"){
		clsName += " btn-xs";
	}
	return(
		<div>
			<button className={clsName} onClick={this.click.bind(this)}>{text}</button>
			<div className={this.state.isShow ? 'btn-show' : 'btn-hidden' }>
				好好学习，天天向上
			</div>
		</div>
	)
 }
}
export default Test;