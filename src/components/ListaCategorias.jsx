import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { busca } from '../api/api';

import '../assets/css/blog.css';

const ListaCategorias = () => {
    const [ categorias, setCategorias ] = useState([]);

    useEffect(() => {
        busca(`/categorias`, setCategorias);
    }, []);

    return(
        <ul className="lista-categorias container flex">
            {
                categorias.map((categoria, index) => (
                    <li key={ index } className={`lista-categorias__categoria lista-categorias__categoria--${categoria.id}`}>
                        <Link to={`/categoria/${categoria.id}`}>
                            { categoria.nome }
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
};

export default ListaCategorias;
