import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import cursosService from '../services/cursos';
import {  collection, getDocs  } from 'firebase/firestore'
import { db } from '../services/firebase.config'
const collectionRef = collection(db, 'cursos');



const CursosList = () => {

    const [cursos, setCursos] = useState([]);

    useEffect(() => {
        const getCursos = async () => {
            await getDocs(collectionRef).then((cursos) => {

              let cursosData = cursos.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
              
              setCursos(cursosData);

              console.log(cursosData[0]?.nome);
              }).catch((err) => {
                console.log(err);
              })
            }
          getCursos()
      }, []);
   
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
