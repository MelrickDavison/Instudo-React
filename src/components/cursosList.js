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
              let cursosData = cursos.docs.map((doc) => ({ ...doc.data()}))
              setCursos(cursosData)
              }).catch((err) => {
                console.log(err);
              })
            }
          getCursos()
      }, []);
   
   return (
    <>
    {cursos.map(({ curso, id }) => 
    <div className="container mt-5" key={id}>
      <h1>Produtos</h1>
      <ul className="list-group">

              <li key={id} className="list-group-item d-flex justify-content-between">
                <Link to={`/cursos/${id}`}>&nbsp;{curso}</Link>
              </li>
  
      </ul>
    </div>
    
    )}
   
    </>
   )
 
}

export default CursosList;
