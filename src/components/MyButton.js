import React,{Component} from "react";
export default class MyButton extends Component{

    static defaultProps ={ disabled: false, text:'My Button (Props)',size:20,style:{color:'red'}};
    render(){
        const{disabled ,text,size,style} = this.props;
        return <button disabled={disabled} size={size} style={style}>{text}</button>;
    }
}