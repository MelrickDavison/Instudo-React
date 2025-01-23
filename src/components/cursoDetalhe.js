import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs} from 'firebase/firestore'
import { db } from '../services/firebase.config'

const CursoDetalhe = () => {
  const { id } = useParams();
  const [cursos, setCursos] = useState([]);
  const collectionRef = collection(db, 'cursos');
  const [cursoEncontrado, setCursoEncontrado] = useState([]);
  
  useEffect(() => {
    const fetchCurso = async () => {
      await getDocs(collectionRef).then((cursos) => {

        let cursosData = cursos.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setCursoEncontrado(cursosData.find(curso => curso.id == id))
        setCursos(cursosData);
        }).catch((err) => {
          console.log(err);
        })

      }

    fetchCurso()
  }, [id]);

  return (
    <div className="container mt-5">
      {cursoEncontrado ? (
        <>
        <div className="row">
          <div className="col-md-8">
           
            <h2>{cursoEncontrado?.nome}</h2>
           
            <p>Área: {cursoEncontrado?.area}</p>
          
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