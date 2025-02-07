import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import cursosService from '../services/cursoService';

const CursosList = () => {

     const [cursos, setCursos] = useState([]);

     useEffect(() => {
      async function fetchCurso(){
        try {
          const result = await cursosService.getCursos();
          setCursos(result);
        } catch (error) {
          console.error("Erro ao buscar cursos:", error);
        }
      }
      fetchCurso();
     }, [])
   return (
    <>
        <h1>Cursos</h1>

    <div className="container mt-5">
  
      <ul className="list-group">
        {cursos.map((curso) => 
          <li key={curso.id} className="list-group-item d-flex justify-content-between">
            <Link to={`/cursos/${curso.id}`}>&nbsp;{curso.nome}</Link>
          </li>
      )}
     </ul>
     </div>
    </>
   )
 
}

export default CursosList;
