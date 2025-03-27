import { Fragment, useState } from "react";

function Practice(){

const [title,setTitle]=useState("My name is hkirat")

function change(){
    setTitle("My name is "+Math.random())
}

return(
    <Fragment>
        <button onClick={change}>Click me to change the title</button>
        <Header title={title}></Header>
        <Header title="Sanket"></Header>
        <Header title="Sanket"></Header>
        <Header title="Sanket"></Header>
        <Header title="Sanket"></Header>                                                                 
    </Fragment>
)

}
function Header(props){
return <div>
    {props.title}
</div>
}
export default Practice