import React from 'react'


const Card = ({ items }) => {
    return (items ?
        <div >
            {items.map((e, i) => (

                <div key={i} className="boards-container__board__card">
                    {e.img ? <img src={e.img} alt={e.content} /> : ""}
                    <div className="content">
                        {e.etiquetas ? e.etiquetas.map((j, i) => (<span className="badge" style={{backgroundColor:j.color}} key={i}>{j.texto}</span>)) : ""}
                        <p>{e.content}</p>
                    </div>
                </div>
            ))}
        </div>
        : "")
}
export default Card