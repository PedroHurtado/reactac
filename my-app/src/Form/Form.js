export default function Form({ submit, children }) {
  function handlerSubmit(ev){
        ev.stopPropagation()
        ev.preventDefault()
        submit && submit()
  }  
  return (<form onSubmit={handlerSubmit}>
    {children}
  </form>);
}
