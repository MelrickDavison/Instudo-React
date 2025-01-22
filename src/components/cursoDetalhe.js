import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import cursosService from '../services/cursos';

const CursoDetalhe = () => {

  const { id } = useParams();
  const [curso, setCurso] = useState([]);
  
  useEffect(() => {

    const fetchCursos = async () => {
      const CursoEncontrado = cursosService.getCursoById(id);
      setCurso(CursoEncontrado);
    };


    fetchCursos();
  }, [id]);
  return (
    <div className="container mt-5">
      {curso ? (
        <>
        <div className="row">
          <div className="col-md-8">
           
            <h2>{curso?.nome}</h2>
           
            <p>Área: {curso?.area}</p>
          
          </div>
          
        </div>
        </>
      ) : (
        <div>
          <h1> Curso não encontrado</h1>
        </div>
      )
      }
    </div>
  );
};

export default CursoDetalhe;