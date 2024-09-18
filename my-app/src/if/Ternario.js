function Ternario(){
    const user =undefined

    
    if(user){
        return (
            <div>{user}</div>
        )
    }
    return <button>Login</button>

    /*return(
        <>
            {user ?<div>{user}</div>:<button>login</button>}
        </>
    )*/
     
}
export default Ternario