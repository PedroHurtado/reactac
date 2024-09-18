class ServiceCustomer{
    static async get(id){
        if(id===1){
            return 1
        }
        throw("El cliente no existe")
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

async function  main(id){
   //spinner.on()
   try{
      const customer = await ServiceCustomer.get(id)
      const invoices = await ServiceInvoices.get(constumer.id)
   }
   catch(err){
      console.log(err)
   }
   finally{
     //spinner.off()
   }
   
}
main(1) //ok
main(2) //error

//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise