import React from 'react'

import './Menu.css'

export default function Menu() {
    return (
        <div className="Menu">
            <nav >
                <a href="/cadastrar">Cadastrar</a>
                <a href="/membros">Membros</a>
            </nav>
        </div>
    );
}