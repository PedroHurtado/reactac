//https://developer.mozilla.org/es/docs/Web/API/Fetch_API
//https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest

const URL = 'https://jsonplaceholder.typicode.com/posts'
async function getPost(id){
    const response = await fetch(`${URL}/${id}`)
    if(response.status===200){
        const data = await response.json();
        return data;  
    }
    throw "El post no existe"

}

async function main(id) {
    try{
        const data = await getPost(id)
        console.log(data)
    }
    catch(err){
        console.log(err)
    }
    
}
//main(1) ok
main(1000)