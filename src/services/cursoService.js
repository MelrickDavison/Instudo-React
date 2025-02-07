import {  collection, getDocs, getDoc, doc   } from 'firebase/firestore'
import { db } from '../services/firebase.config'
const collectionRef = collection(db, 'cursos');


class CursosService {
    
    

    async getCursoById(id) {
        try {
            const docRef = doc(db, 'cursos', id);
            const cursoSnapshot = await getDoc(docRef);
            
            if (cursoSnapshot.exists()) {
                return { ...cursoSnapshot.data(), id: cursoSnapshot.id };
            } else {
                console.warn("Curso não encontrado!");
                return null;
            }
        } catch (error) {
            console.error("Erro ao buscar curso por ID:", error);
            return null;
        }
    }

    async getCursos() {
        let cursosData = [];
        await getDocs(collectionRef).then((cursos) => {
            cursosData = cursos.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        }).catch((err) => {
            console.log(err);
        });

        return cursosData
    }

}

const cursosService = new CursosService();

export default cursosService;