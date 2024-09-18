class ServiceCustomer{
    static get(id,cb){
        if(id===1){
            cb(null,{id})   //ok
        }
        else{
            cb("El cliente no existe", null) //error
        }
    }
}

class ServiceInvoices{
    static get(customerId,cb){
        if(customerId===1){
            cb(null,{customerId, invoices:[]}) //ok
        }
        else{
            cb("El cliente no tiene facturas", null) //error
        }
    }
}

function main(id){

    ServiceCustomer.get(id,function(error,customer){
        if(error){
            console.log(error)
        }
        else{
            ServiceInvoices.get(customer.id, function(error,invoices){
                if(error){
                    console.log(error)
                }
                else{
                    console.log(invoices)
                }
            })
        }
    })
}
main(1) //ok
main(2) //error