import { Component } from "react";
import BurbbleAlert from "./BurbbleAlert";
import DetallesCarro from "./DetallesCarro";
 const styles={
     carro:{
        backgroundColor:'#359A2C',
        color:'#fff',
        border:'none',
        borderRadius:'15px',
        padding:'15px',
        cursor:'pointer',


     },
     burbble:{
        position:'relative',
        left:'17px',
        top:'15px'

     }
 }
class Carro extends Component {
    
    render() {
        const {carro ,esCarroVisible,mostrarCarro} =this.props
        const cantidad = carro.reduce((acc,el)=> acc+el.cantidad,0)
        return (
            <div>
                <span style={styles.burbble}>
                    {cantidad !== 0 ? <BurbbleAlert value={cantidad}/> :null}
                </span>
                <button onClick={mostrarCarro} style={styles.carro}>Carro</button>
                {esCarroVisible ? <DetallesCarro carro={carro}/> : null}
            </div>
        );
    }
}

export default Carro;