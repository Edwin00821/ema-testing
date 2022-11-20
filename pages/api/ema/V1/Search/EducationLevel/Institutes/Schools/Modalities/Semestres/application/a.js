import { getAllEspecialidadesOfDB } from 'database/Entities/CEspecialidad';
import { getAllSemestresOfDB } from 'database/Entities/CSemestre';
import { getAllUaprendizajeOfDB } from 'database/Entities/CUaprendizaje';
import { getAllTemasOfDB } from 'database/Entities/CTema';
import { getAllSubtemasOfDB } from 'database/Entities/CSubtema';

const a = async (req, res) => {
  const dataEspecialidades = await getAllEspecialidadesOfDB();
  const dataSemestres = await getAllSemestresOfDB();
  const dataUA = await getAllUaprendizajeOfDB();
  const dataTema = await getAllTemasOfDB();
  const subTemas = await getAllSubtemasOfDB();

  //const json = dataEspecialidades.map(({ id_es }) => {
    //const semestres = dataSemestres.filter(({ id_es }) => id_es === id_es);
    //const uas = dataUA.filter(({ id_es }) => id_es === id_es);
    //const temas = dataTema.filter(({ id_es }) => id_es === id_es);
    //const subtemas = subTemas.filter(({ id_es }) => id_es === id_es);

    //return {
      //id_es,
      //semestres,
      //uas,
      //temas,
      //subtemas,
    //};
  //});

  const json= dataEspecialidades.map(({id_es})=>{

    const semestres = dataSemestres.filter(({ id_es }) => id_es === id_es)
    const uas = dataUA.filter(({ id_es }) => id_es === id_es);
    const temas = dataTema.filter(({ id_es }) => id_es === id_es);
    const subtemas = subTemas.filter(({ id_es }) => id_es === id_es);

    return {
      id_es,
      semestres,
      uas,
      temas,
      subtemas,
    }
  });

  res.status(200).json(json);
};
export default a;


