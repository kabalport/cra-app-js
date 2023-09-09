import React from 'react';

const BasicSidebar = () => {
    return (
        <aside className="bg-gray-300 p-4">
            <ul className="space-y-2">
                <li><a href="/" className="text-blue-500">Home</a></li>
                <li><a href="/about" className="text-blue-500">About</a></li>
            </ul>
        </aside>
    );
};

export default BasicSidebar;
