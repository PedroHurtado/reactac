export default function Array({data, ...rest}){       
    console.log(rest)    
    return(
        <>
            {data.map(item=><div key={item}>{item}</div>)}
        </>
    )
}