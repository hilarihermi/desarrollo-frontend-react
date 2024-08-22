import { useState, useEffect } from "react";


const Contador = () => {
    const [contador, setContador] = useState(0); //maneja vriables de estado
    //funcion
    const handleContador1 = ()  => {
        setContador(contador + 1);

    };
    const handleContador2 = ()  => {
        setContador(contador - 1);
    };
  //maejo de estados en react
    // Esta funcion especial se ejecuta cuando el componente sehaya montado se ejecuta una sola vez
    useEffect(() => {
        setContador(12);
    }, []);

    ///esta funciona se ejecuta cuando el valor aya cambiado, el valor del contador
    useEffect(() => {
        if (contador === 15) {
            alert("El contador es 15");
        }
    }, [contador]);
    ///esta funcion especial se ejecuta cuando el componete se desmonta solo se ejecuta una vez
    useEffect(() => {
        return() =>{
            console.log('el componente se desmonto');
        } 
    });
  
    return(
        <>
            <h4>Componente Contador</h4>
            <h5>{contador}</h5>
            <div>
                <button onClick={handleContador1} > Aumentar</button>
                <button onClick={handleContador2}> Disminuir</button>
            </div>
        </>
    );
};

export default Contador;