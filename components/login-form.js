import React from 'react';

export default function LoginForm({ onLogin }) {

    async function handleSubmit(event) {
        event.preventDefault();
        onLogin(event.target.username.value, event.target.password.value);
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto my-8 px-8 py-6 bg-white shadow-md rounded-lg">
            <fieldset autoComplete='off'>
                <legend className="text-2xl font-semibold text-center mb-4">Log In</legend>
                <div className="mb-4">
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                    <input name="username" className="mt-1 px-3 py-2 border shadow-sm border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 w-full" />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input type="password" name="password" className="mt-1 px-3 py-2 border shadow-sm border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 w-full" />
                </div>
                <button className="w-full py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-md transition duration-300 ease-in-out">Log In</button>
            </fieldset>
        </form>
    );
}
