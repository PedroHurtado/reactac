import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { lazy, Suspense } from "react";
//Applicacion de pocas páginas
/*import Pagina1 from "./pages/pagina1";
import Pagina2 from "./pages/pagina2";
import Pagina3 from "./pages/pagina3";*/
//Aplicacion grande
const Pagina1 = lazy(() => import("./pages/pagina1"));
const Pagina2 = lazy(() => import("./pages/pagina2"));
const Pagina3 = lazy(() => import("./pages/pagina3"));

const Loading = ()=><div>Loading...</div>

export default function MetaRouter() {
  return (
    <Suspense fallback={<Loading/>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="pagina1/:id/:name" element={<Pagina1 />} />
          <Route path="pagina2" element={<Pagina2 />} />
          <Route path="pagina3" element={<Pagina3 />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

/*
1. Metainformacion paginas
	1. App pequeña
	2. App Grande->import dinamico->Code-Splitting
		No me valen magia
		el Code Splitting funciona si conode el path  
			1. invalido->import(variable)
			2. valido->import('string')
			webpack
			rollup
			vite  
2. Router Link

	crea un anchor
			capturar el evento y obtener la ruta para detectar el 
			componente en la ruta princial
3. Parameters
		/path/:id ->obj-> useParams
4. QueryParams
		&name=pedro ->URLSearchParams->useSearchParams

5. Outlet

*/
