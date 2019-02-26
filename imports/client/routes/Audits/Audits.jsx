import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import MaterialTable from 'material-table';
import NoContent from '../../views/NoContent';

const data = [
  { name: 'Administración de documentación', section: 'RH', category: 'Administración', _id: 31 },
  { name: 'Limpieza matutina', section: 'Limpieza', category: 'Limpieza', _id: 36 },
  { name: 'Recolección de archivos', section: 'Administración', category: 'Administración', _id: 30 },
  { name: 'Control de calidad', section: 'Control de calidad', category: 'Control de calidad', _id: 34 },
  { name: 'Generar viajes de negocios para supervisores', section: 'Oficina', category: 'Jefe', _id: 29 },
  { name: 'Monitorear máquinas fallidas', section: 'Máquinas', category: 'Industria', _id: 33 },
  { name: 'Reclutación de nuevo personal', section: 'Industria', category: 'Industria', _id: 28 },
  { name: 'Crear tareas', section: 'Administración', category: 'Administración', _id: 32 },
];

const columns = [{
    title: 'Auditorias',
    field: 'name'
  },
  {
    title: 'Sección',
    field: 'section'
  },
  {
    title: 'Categoría',
    field: 'category'
  },
]; 

class Audits extends Component {
  render() {
    const showTable = data.length > 0;
    return (
      <Grid>
          <h3><i className="browser icon"></i> Auditorias</h3>
          {showTable ? (
            <MaterialTable
              columns={columns}
              data={data}
              title="Basic"
              options={{
                toolbar: false,
                filtering: true,
              }}
            />
          ) : <NoContent />}
      </Grid>
    )
  }
}

export default Audits;