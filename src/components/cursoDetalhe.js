import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc} from 'firebase/firestore'
import { db } from '../services/firebase.config'

const CursoDetalhe = () => {
  const { id } = useParams();
  const [cursoEncontrado, setCursoEncontrado] = useState('');
  
  useEffect(() => {
    const fetchCurso = async () => {
      console.log(id)
     const  cursoRef =  doc(db, 'cursos', id)
     const getCurso = await getDoc(cursoRef)
     setCursoEncontrado(getCurso.data())
      }

    fetchCurso()
  }, [id]);

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