!function menu(){

    /*const anchors = document.querySelectorAll('a')
    for(const anchor of anchors){
        anchor.addEventListener('click', ()=>{

        })
    }*/
   
    document.addEventListener('click', async (ev)=>{
        //event delegation
        //https://dmitripavlutin.com/javascript-event-delegation/
        //https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
        ev.stopPropagation();
        ev.preventDefault();
        const node = ev.composedPath().find(n=>n.dataset && 'page' in n.dataset)
        if(node){
            const {page} = node.dataset
            //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
            const url = `./pages/${page}.js`
            const module = await import(url)
            module.default()
            
        }
    })
}()