import React from 'react';
import { Link } from 'react-router-dom';

export default function index() {
    return (
        <div>
            Home
            <Link to='/logout'>Log out</Link>
        </div>
    )
}
