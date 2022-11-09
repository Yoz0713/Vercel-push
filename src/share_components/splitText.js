export function SplitText(props){
    let newArr= [];
    let str = props.word
    let arr = str.split("")
  
    arr.forEach((item,i)=>{
        newArr.push(item)
    })
   


return(
    <>{newArr.map((item,i)=>{
        return (item !== "\r"  ? <span className="split" key={i}>{item}</span>:<br key={i}/>)
    })}
    </>
   
)
}