import { useQuery } from "./useQuery";

export default function Post() { 
  
  const pages = [1,2,3,4,5,6,125]

  const [loading, error, data,setUrl] = useQuery(
    "https://jsonplaceholder.typicode.com/posts"
  );

  function handlerClick(ev){
    const {dataset} = ev.target
    if(dataset){
        const {page} = dataset
        setUrl(`https://jsonplaceholder.typicode.com/posts/${page}`)
    }
    
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <>
      <div onClick={handlerClick}>
        {pages.map(p=><button data-page={p} key={p}>{p}</button>)}
      </div>
      
      {data.map(({ id, title }) => {
        return (
          <div key={id}>
            <div>{id}</div>
            <div>{title}</div>
          </div>
        );
      })}
    </>
  );
}
