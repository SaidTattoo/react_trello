import React, { useState } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Card from './Card';

const Dashboard = () => {

    const itemsFromBackend = [
        {
            id: 1,
            content: "Twitch",
            img: "https://www.destreaming.es/wp-content/uploads/2021/06/Twitch-tamanos-de-imagen-y-banner.jpg",
            etiquetas: [{
                texto: "Urgente",
                color: "Tomato"
            }, {
                texto: "En espera",
                color: "Turquoise"
            }]
        },
        { id: 2, content: "Nike", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6yQvLAErXDgNpoux8ofLehT1eURG4HAafAQ&usqp=CAU" },
        { id: 3, content: "Third task", img: null },
        { id: 4, content: "Fourth task", img: null },
        { id: 5, content: "Fifth task", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEUMKgzJY27DQzywh2-rp2JWfYion7eurWBfcVKBPX-mgvhh_p521tOeNmgkUR3EyEscA&usqp=CAU" }
    ];
    const columnsFromBackend = [
        {
            name: "BACKLOG",
            items: itemsFromBackend
        },
        {
            name: "POR HACER",
            items: []
        },
        {
            name: "EN PROCESO",
            items: []
        },
        {
            name: "QA",
            items: []
        },
        {
            name: "FINALIZADO",
            items: []
        }
    ];

 
    return (
        <div className="container">
            <DragDropContext onDragEnd={(result) => {
                
            }} >
                <div className="logo">
                    <svg width="30" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="border-all" className="svg-inline--fa fa-border-all fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#148F77" d="M416 32H32A32 32 0 0 0 0 64v384a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32zm-32 64v128H256V96zm-192 0v128H64V96zM64 416V288h128v128zm192 0V288h128v128z"></path></svg>
                    <h2>SUPER DASHBOARD KANBAN</h2>
                </div>
                <Droppable droppableId='all-columns' direction='horizontal' type='column'>
                    {(provided) => <div className="boards-container">
                        {columnsFromBackend.map((board, index) => (
                            <div key={index} {...provided.droppableProps}
                                ref={provided.innerRef}
                                className="boards-container__board">
                                <h1>{board.name}</h1>
                                <Card items={board.items} />
                                {provided.placeholder}
                            </div>
                        ))}
                    </div>}
                </Droppable>
            </DragDropContext>
        </div>
    )
}

export default Dashboard