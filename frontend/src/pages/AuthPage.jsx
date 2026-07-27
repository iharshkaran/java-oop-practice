import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AuthPage = ({ setUser, fetchData }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const BASE_URL = import.meta.env.VITE_API_URL;
        const endpoint = isLogin ? `${BASE_URL}/auth/login` : `${BASE_URL}/auth/register`;

        // email & password for login
        const payload = isLogin
            ? { email: formData.email, password: formData.password }
            : formData;
        // Login API response success hone ke baad:

        try {
            const response = await axios.post(endpoint, payload, { withCredentials: true });

            if (response.status === 200 || response.status === 201) {
                // 1. Safari/Chrome ke liye token localStorage me save karo
                if (response.data.token) {
                    localStorage.setItem('token', response.data.token);
                }

                // 2. User state update karo
                if (setUser) setUser(true);

                // 3. Notes fetch function run karo agar pass hua hai
                if (typeof fetchData === 'function') {
                    await fetchData();
                }

                // 4. Finally redirect karo
                window.location.href = "/notes";
            }

        } catch (err) {
            console.error("Auth Error Details:", err.response); // Debugging ke liye

            // backend error response
            setError(
                err.response?.data?.message ||
                err.message ||
                'Backend connection error!'
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#111111] text-white px-4">
            <div className="bg-[#222222] p-8 rounded-2xl shadow-2xl w-full max-w-md border border-[#444]">

                {/* Title */}
                <h2 className="text-3xl font-bold text-center mb-2 text-white">
                    {isLogin ? 'Welcome Back' : 'Create Account'}
                </h2>
                <p className="text-[#666] text-center text-sm mb-6">
                    {isLogin ? 'Login to access your notes' : 'Sign up to start taking notes'}
                </p>

                {/* Error Alert */}
                {error && (
                    <div className="bg-red-500/20 border border-red-500 text-red-300 p-3 rounded-lg text-sm mb-4 text-center">
                        {error}
                    </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">

                    {/* Username (Signup Only) */}
                    {!isLogin && (
                        <div>
                            <label className="block text-sm font-medium mb-1 text-slate-300">Username</label>
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                placeholder="johndoe"
                                required
                                className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#444] rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                            />
                        </div>
                    )}

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium mb-1 text-slate-300">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="user@example.com"
                            required
                            className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#444] rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium mb-1 text-slate-300">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="••••••••"
                            required
                            className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#444] rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 rounded-lg font-semibold transition duration-200 disabled:opacity-50 mt-2"
                    >
                        {loading ? 'Processing...' : isLogin ? 'Login' : 'Sign Up'}
                    </button>
                </form>

                {/* Toggle Login/Signup */}
                <div className="text-center mt-6 text-sm text-slate-400">
                    {isLogin ? "Don't have an account? " : "Already have an account? "}
                    <button
                        type="button"
                        onClick={() => {
                            setIsLogin(!isLogin);
                            setError('');
                        }}
                        className="text-indigo-400 hover:underline font-medium"
                    >
                        {isLogin ? 'Sign Up' : 'Login'}
                    </button>
                </div>

            </div>
        </div>
    );
};

export default AuthPage;