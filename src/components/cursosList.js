import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import cursosService from '../services/cursos';

const CursosList = () => {

    const [cursos, setCursos] = useState([]);

    useEffect(() => {
        const fetchCursos = async () => {
            const produtos = await cursosService.getCursos();
            setCursos(produtos);
          };
      
          fetchCursos();
      }, []);
   
   return (
    <div className="container mt-5">
      <h1>Produtos</h1>
      <ul className="list-group">
      {
            cursos.map(curso => (
              <li key={curso.id} className="list-group-item d-flex justify-content-between">
                <Link to={`/cursos/${curso.id}`}>{curso.nome}</Link>
                <Link to={`/cursos/${curso.id}/editar`}>editar</Link>
              </li>
            ))
        }
      </ul>
    </div>
   )
}

export default CursosList;
