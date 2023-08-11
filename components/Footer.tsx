import React from 'react';

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-6 mt-60">
            <div className="container mx-auto flex justify-center items-center">
                <div className="text-center">
                    <p className="text-lg font-semibold">Stay Connected</p>
                    <div className="flex justify-center space-x-4 mt-4">
                        <a href="#" className="text-gray-400 hover:text-gray-300 transition duration-300">
                            <i className="fab fa-facebook-f text-xl"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-300 transition duration-300">
                            <i className="fab fa-twitter text-xl"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-300 transition duration-300">
                            <i className="fab fa-instagram text-xl"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-300 transition duration-300">
                            <i className="fab fa-linkedin-in text-xl"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
