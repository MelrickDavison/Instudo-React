class Cursos {
    cursos = [
        {id: 1, nome: 'Programação Móvel', area: 'Tecnologia'},
        {id: 2, nome: 'Física', area: 'Natureza'},
        {id: 3, nome: 'Matemática', area: 'Natureza'},
        {id: 4, nome: 'Direito Penal', area: 'Direito'},
        {id: 5, nome: 'Direito Constitucional', area: 'Direito'},
        {id: 6, nome: 'ADS', area: 'Tecnologia'},
        {id: 7, nome: 'Circuitos Elétricos', area: 'Engenharia Elétrica'},
        {id: 8, nome: 'Filosofia', area: 'Humanas'}
    ];

    getCursoById(id) {
        return this.cursos.find(curso => curso.id === parseInt(id));
    }

    getCursos() {
        return this.cursos;
    }
}

const cursosService = new Cursos();

export default cursosService;