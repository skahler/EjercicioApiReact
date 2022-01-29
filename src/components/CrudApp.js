import React,{useState} from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';

const initialDB = [
    {
        id:1,
        name:"Seiya",
        constellation:"Pegaso"
    },
    {
        id:2,
        name:"Shiryu",
        constellation:"Dragón"
    },
    {
        id:3,
        name:"Hyoga",
        constellation:"Cisne"
    },
    {
        id:4,
        name:"Shun",
        constellation:"Andrómeda"
    },
    {
        id:5,
        name:"Ikki",
        constellation:"Fénix"
    }
];

const CrudApp = () =>{
    const [db,setDb] = useState(initialDB);
    const [dataToEdit,setDataToEdit] = useState(null);

    const createData = (data) => {
        data.id = Date.now();
        setDb([...db,data]);
    };
    const updateData = (data) => {
        let newData = db.map((el)=> el.id === data.id ? data : el);
        setDb(newData);
    };
    const deleteData = (id) => {
        let isDeleted = window.confirm('¿Seguro que quiere eliminar este objeto?');
        if(isDeleted){
            let newData = db.filter((el)=>el.id !== id);
            setDb(newData);
        }else{
            return;
        }
    };
    return (
        <>
            <h2>CRUD App.</h2>
            <CrudForm createData={createData} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}/>
            <CrudTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData}/>
        </>
    )
}

export default CrudApp;