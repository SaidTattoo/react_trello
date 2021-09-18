import React from 'react'
import { Draggable } from 'react-beautiful-dnd'


const Card = ({ items }) => {
    return (items ?
        <div >
            {items.map((e, i) => (
                <Draggable key={i} draggableId={e.id} index={i} >
                    {(draggableProvider, snapshot) =>
                        <div  {...draggableProvider.props}
                            ref={draggableProvider.innerRef}
                            {...draggableProvider.dragHandleProps}
                            isDragging={snapshot.isDragging}
                            className="boards-container__board__card">
                            {e.img ? <img src={e.img} alt={e.content} /> : ""}
                            <div className="content">
                                {e.etiquetas ? e.etiquetas.map((j, i) => (<span className="badge" style={{ backgroundColor: j.color }} key={i}>{j.texto}</span>)) : ""}
                                <p>{e.content}</p>
                            </div>
                        </div>}
                </Draggable>
            ))}
        </div>
        : "")
}
export default Card