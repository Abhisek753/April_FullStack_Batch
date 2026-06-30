import Child from "./Child"

function HomPage({value,secondname}){
    console.log(typeof(value))

    return (
        <div>
            <h2>This is home page</h2>
            <h3>{value}</h3>
            <h4>{secondname}</h4>
            <Child valuechild={value}/>
        </div>
    )
}
export default HomPage

// function HomPage(props){

//  console.log(typeof(props))
//     return (
//         <div>
//             <h2>This is home page</h2>
//             <h3>{props.value}</h3>
//             <h4>{props.secondname}</h4>
//         </div>
//     )
// }
// export default HomPage