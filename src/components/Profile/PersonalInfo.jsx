import React,{ useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {detalleUsers} from '../../redux/actions';
import Style from'./PersonalInfo.module.css';
import {Link} from "react-router-dom";

export default function PersonalInfo(){
    const dispatch = useDispatch();
    let userDetail = useSelector(state => state.userDetail);
    const idUsers = useSelector(state => state.idUser)
   

   
        useEffect(() => {
            dispatch(detalleUsers(idUsers));
        }, [dispatch, idUsers]);
        

    return(
        <div className={Style.cont}>
           
            <h1 className={Style.saludo}>Bienvenid@ {userDetail.name}, nos dá gusto que nos visites!</h1>
             <hr/>Que quieres hacer hoy?
            <h4 className={Style.detalle}>
            <h3>Nombre: {userDetail.name}</h3>
            <h3>Apellido: {userDetail.surname}</h3>
            <h3>Correo: {userDetail.email}</h3> 
             {
               userDetail.clientAddresses && userDetail.clientAddresses.map((e) =>(
                    <h4 key={e.id}>
                        <h4>Dirección: {e.address}</h4>
                        <h4>Código Postal: {e.postalCode}</h4>
                        <h4>Ciudad: {e.city}</h4>
                        <h4>Provincia: {e.province}</h4>
                        <h4>Piso: {e.floor}</h4>
                    </h4>

                ))
            }
            </h4>
            <Link to="/editUser"><button className="crear">Editar Usuario</button></Link>
        </div>
    )
}