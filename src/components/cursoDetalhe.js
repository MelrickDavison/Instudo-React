import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import cursosService from '../services/cursoService';

const CursoDetalhe = () => {
  const { id } = useParams();
  const [cursoEncontrado, setCursoEncontrado] = useState('');
  
  useEffect(() => {
    async function fetchCurso(){
      try {
        const result = await cursosService.getCursoById(id);
        setCursoEncontrado(result);
      } catch (error) {
        console.error("Erro ao buscar cursos:", error);
      }
    }
    fetchCurso();
   }, [])

  return (
    <div className="container mt-5">
      {cursoEncontrado ? (
        <>
        <div className="row">
          <div className="col-md-8">
           
            <h2>{cursoEncontrado.nome}</h2>
           
            <p>Área: {cursoEncontrado.area}</p>
          
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