import React, { Component } from "react";


//export default class TablaVenta extends Component {
export default function TablaUsuario(props) {
  const accion = props.visual
  if(accion==="registro"){
    return(
  	  <div>
        <form>
          <label>Nombre <input type="text"/></label>
          <label>Apellido <input type="text"/></label>
          <label>Doc. identificacion   <input type="number"/></label>
          <label>Estado
            <select name="select">
              <option value="estado1" selected>Pendiente</option>
              <option value="estado2">Autorizado</option>
              <option value="estado3">No-autorizado</option>
            </select>
          </label>
          <label>Rol 
            <select name="select">
              <option value="rol1" selected>Usuario</option>
              <option value="rol2">Vendedor</option>
              <option value="rol3">Administrador</option>
            </select>
          </label>
          <button>Enviar Datos</button>
        </form>
   	  </div>
    )
  }else if(accion==="informacion"){
    return (
      <div>
        <h3>Record List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Level</th>
              <th>Action</th>
            </tr>
          </thead>
          {/*<tbody>{this.recordList()}</tbody>*/}
        </table>
      </div>
    );
  }
}
