import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="max-w-2xl mx-auto px-4 py-8">
            <ul className="flex space-x-8 justify-end">
                <li>
                    <Link to="/" className="text-white hover:text-white">
                        home
                    </Link>
                </li>
                <li>
                    <Link to="/projects" className="text-gray-800 hover:text-gray-600">
                        projects
                    </Link>
                </li>
                <li>
                    <Link to="/contact" className="text-gray-800 hover:text-gray-600">
                        contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
}; 