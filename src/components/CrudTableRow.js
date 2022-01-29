import React from 'react';

const CrudTableRow = ({el,setDataToEdit,deleteData}) => {
    let {id,name,constellation} = el;
    return(
        <tr>
            <th>{name}</th>
            <th>{constellation}</th>
            <th>
                <button onClick={() => setDataToEdit(el)}>Editar</button>
                <button onClick={() => deleteData(id)}>Eliminar</button>
            </th>
        </tr>
    );
}

export default CrudTableRow;