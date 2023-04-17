import './ItemCount.css';
//import Button from '../Button/Button'; 


import React, { useState, useEffect } from 'react';

export const ItemCount = (props, initial, stock, onAdd ) => {
    const [count, setCount] = useState(props.initial);
    const [message, setMessage] = useState('')

    const decrease = () => {
        setMessage('')
        if (count > 1) {
            setCount(count - 1)
        } else {
            setMessage('No puede comprar menos de 1')
        }
    }


    const increase = () => {
        setMessage('')
        if (count < props.stock) {
            setCount(count + 1)
        } else {
                setMessage('No puede agregar mas productos')
            }
            setCount(count + 1);
        }
    

        useEffect(() => {
            setCount(parseInt(props.initial));

        }, [props.initial]);

        //const reset = () => {
        //    setCount(initial)
        //    setMessage('')
        //}

        return (
            <div className='counter'>
                {/*<Button label="restar" handleClick={decrease}/>
                <Button label="sumar" handleClick={increase}/>
                <Button label="reiniciar" handleClick={reset}/>*/}
                <button disabled={count <= 1} onClick={decrease}>-</button>
                <span>{count}</span>
                <button disabled={count >= stock} onClick={increase}>+</button>
                <div>
                    <button disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al Carrito</button>
                </div>
                <h3>Cantidad Disponible: {props.stock}</h3>
                <h2 className='h2'>{message}</h2>
            </div>
        );

    }
    

    export default ItemCount;
