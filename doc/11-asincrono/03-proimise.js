class ServiceCustomer{
    static get(id){
        return new Promise((resolve,reject)=>{
            if(id===1){
                resolve({id})
            }
            else{
                reject("el cliente no existe")
            }
        })
    }
}

class ServiceInvoices{
    static get(customerId,cb){
        return new Promise((resolve,reject)=>{
            if(customerId===1){
                resolve({customerId, invoices:[]}) //ok
            }
            else{
                reject("el cliente no tiene facturas")
            }
        })
        
    }
}

/*
resolve->then(n)
reject->catch(1)

*/

function main(id){
   ServiceCustomer.get(id)
    .then(customer=>ServiceInvoices.get(customer.id))
    .then(invoices=>console.log(invoices))
    .catch(err=>console.log(err))
   
}
main(1) //ok
main(2) //error

//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise