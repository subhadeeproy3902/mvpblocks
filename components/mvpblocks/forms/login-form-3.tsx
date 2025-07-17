'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Loader2,
  ArrowRight,
  Palette,
  Users,
  Cloud,
  ShieldCheck,
  Github,
} from 'lucide-react';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      alert('Login successful! (This is a demo)');
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 overflow-hidden">
      <style jsx>{`
        .login-btn {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          position: relative;
          overflow: hidden;
          }
          .login-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s;
          }
          .login-btn:hover::before {
          left: 100%;
          }
      `}</style>
      <div className="max-w-6xl w-full z-10">
        <div className="rounded-[40px] overflow-hidden shadow-2xl bg-white">
          <div className="grid lg:grid-cols-2 min-h-[700px]">

            {/* Left Side */}
            <div className="relative brand-side text-white bg-cover bg-[url('https://cdn.midjourney.com/299f94f9-ecb9-4b26-bead-010b8d8b01d9/0_0.png?w=800&q=80')] p-12 rounded-3xl m-4">
              <div>
                <div className="text-lg font-semibold mb-12 uppercase">PixelForge Studio</div>
                <h1 className="text-6xl font-medium mb-4">Create, Design, and Innovate</h1>
                <p className="text-xl opacity-80 mb-12">Join thousands of creators who trust PixelForge Studio to bring their vision to life</p>

                <div className="space-y-6">
                  {[
                    { icon: <Palette size={16} />, title: 'Advanced Design Tools', desc: 'Professional-grade tools for every project' },
                    { icon: <Users size={16} />, title: 'Team Collaboration', desc: 'Work together seamlessly in real-time' },
                    { icon: <Cloud size={16} />, title: 'Cloud Storage', desc: 'Access your projects from anywhere' },
                    { icon: <ShieldCheck size={16} />, title: 'Enterprise Security', desc: 'Bank-level security for your data' },
                  ].map(({ icon, title, desc }, i) => (
                    <div key={i} className="feature-item flex items-center animate-fadeInUp" style={{ animationDelay: `${0.2 * (i + 1)}s` }}>
                      <div className="w-8 h-8 backdrop-blur-sm bg-white/20 rounded-lg flex items-center justify-center mr-4 text-white">
                        {icon}
                      </div>
                      <div>
                        <div className="font-semibold">{title}</div>
                        <div className="text-sm opacity-70">{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex flex-col justify-center p-12">
              <div className="max-w-md w-full mx-auto">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-light uppercase">Welcome back</h2>
                  <p className="text-sm text-stone-600 mt-2">Sign in to continue your creative journey</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 uppercase">Email address</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="custom-input block w-full pl-10 pr-3 py-3 border rounded-lg text-sm border-stone-300"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium mb-2 uppercase">Password</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="custom-input block w-full pl-10 pr-12 py-3 border rounded-lg text-sm border-stone-300"
                        placeholder="Enter your password"
                      />
                      <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <EyeOff className="w-5 h-5 text-gray-400" /> : <Eye className="w-5 h-5 text-gray-400" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center text-sm text-stone-700">
                      <input type="checkbox" className="h-4 w-4 text-orange-600 border-stone-300 rounded" />
                      <span className="ml-2">Remember me</span>
                    </label>
                    <a href="#" className="text-sm text-orange-600 hover:text-orange-500">Forgot password?</a>
                  </div>

                  <button
                    type="submit"
                    className="login-btn relative w-full flex justify-center items-center py-3 px-4 text-sm font-medium rounded-lg text-white transition-all duration-300"
                    disabled={loading}
                  >
                    {loading ? (
                      <><Loader2 className="w-5 h-5 animate-spin" /><span className="ml-2">Signing in...</span></>
                    ) : (
                      "Sign in to your account"
                    )}
                  </button>

                  <div className="relative text-sm text-stone-500 text-center">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-stone-300"></div>
                    </div>
                    <span className="relative px-2 bg-white">Or continue with</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <button type="button" className="flex justify-center items-center py-2.5 px-4 border rounded-lg shadow-sm text-sm border-stone-300 text-stone-700 bg-white hover:bg-stone-50">
                      <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
                      <span className="ml-2">Google</span>
                    </button>
                    <button type="button" className="flex justify-center items-center py-2.5 px-4 border rounded-lg shadow-sm text-sm border-stone-300 text-stone-700 bg-white hover:bg-stone-50">
                      <Github className="w-5 h-5" />
                      <span className="ml-2">GitHub</span>
                    </button>
                  </div>
                </form>

                <div className="text-center mt-8 text-sm text-stone-600">
                  Don&apos;t have an account? <a href="#" className="text-orange-600 hover:text-orange-500">Sign up for free</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}