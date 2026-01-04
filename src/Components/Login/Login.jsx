
import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaEye, FaArrowLeft, FaCheckCircle, FaBuilding } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const { signIn, signInWihGoogle } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(() => {
        toast.success("Welcome back to HomeNest!");
        navigate(location.state || "/");
      })
      .catch((error) => {
        setError("Account not found. Please check your credentials.");
        toast.error("Authentication Failed");
      });
  };
  const handleGoogleSignIn = () => {
    signInWihGoogle()
      .then((result) => {
        toast.success("Logged in successfully");
        navigate(location.state || "/");
      })
      .catch((error) => {
        toast.error("error");
      });
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row min-h-screen bg-base-100 font-sans selection:bg-primary/30">
      
   
      <div className=" lg:flex lg:w-[40%] bg-[#0f172a] relative items-center justify-center p-12 overflow-hidden">
       
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] -ml-32 -mb-32"></div>

        <div className="z-10 w-full max-w-sm">
          <div className="flex items-center gap-2 mb-12">
             <div className="p-2 bg-primary rounded-lg text-white">
                <FaBuilding size={24} />
             </div>
             <span className="text-2xl font-black text-white tracking-tighter">HomeNest</span>
          </div>

          <h1 className="text-5xl font-extrabold text-white leading-[1.1] mb-8">
            The modern way to <span className="text-primary italic">manage</span> your assets.
          </h1>

         
          <div className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl shadow-2xl">
            <div className="flex gap-1 mb-3 text-amber-400">
               {[...Array(5)].map((_, i) => <FaCheckCircle key={i} size={12} className="text-primary" />)}
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4 italic">
              "HomeNest transformed how we track property revenue. The dashboard is intuitive and incredibly fast. A game changer for real estate."
            </p>
            <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-secondary"></div>
               <div>
                  <p className="text-white font-bold text-sm">Fahmida Rahman</p>
                  <p className="text-gray-500 text-xs font-medium uppercase tracking-tighter">Director, HomeNest</p>
               </div>
            </div>
          </div>
        </div>
      </div>


      <div className="w-full lg:w-[60%] flex items-center justify-center p-6 sm:p-12 lg:p-20 relative bg-base-100">
        

        <div className="absolute top-8 left-8 right-8 flex justify-between items-center">
             <Link to="/" className="btn btn-ghost btn-sm gap-2 text-base-content/50 hover:text-primary">
                <FaArrowLeft /> Home
             </Link>
             <p className="text-sm font-medium text-base-content/50 hidden sm:block">
                No account? <Link to="/auth/register" className="text-primary font-bold hover:underline">Sign up for free</Link>
             </p>
        </div>

        <div className="w-full max-w-[420px] animate__animated animate__fadeInUp">
          <div className="text-center lg:text-left mb-10">
            <h2 className="text-4xl font-black text-secondary mb-3 tracking-tight">Sign In</h2>
            <p className="text-base-content/60 font-medium">Manage your properties with ease.</p>
          </div>

          <button
            onClick={() => handleGoogleSignIn()}
            className="btn btn-outline w-full border-base-300 hover:bg-base-200 h-14 rounded-2xl gap-3 font-bold text-base-content normal-case transition-all active:scale-[0.98]"
          >
            <FcGoogle size={24} />
            Continue with Google
          </button>

          <div className="divider my-8 text-xs font-bold text-base-content/30 tracking-[0.2em] uppercase">or use email</div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-base-content/40 ml-1">Email Address</label>
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                className="input input-bordered w-full h-14 bg-base-200/50 border-base-300 focus:border-primary focus:bg-base-100 rounded-2xl transition-all"
                required
              />
            </div>

            <div className="space-y-2 relative">
              <div className="flex justify-between items-center ml-1">
                 <label className="text-xs font-black uppercase tracking-widest text-base-content/40">Password</label>
                
              </div>
              <div className="relative">
                <input
                  name="password"
                  type={show ? "text" : "password"}
                  placeholder="••••••••"
                  className="input input-bordered w-full h-14 bg-base-200/50 border-base-300 focus:border-primary focus:bg-base-100 rounded-2xl transition-all pr-12"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-base-content/30 hover:text-primary transition-colors"
                >
                  {show ? <FaEye size={20} /> : <IoEyeOff size={20} />}
                </button>
              </div>
            </div>

            {error && (
              <p className="text-xs font-bold text-error bg-error/10 p-3 rounded-xl border border-error/20">
                {error}
              </p>
            )}

            <button type="submit" className="btn btn-primary w-full h-14 rounded-2xl text-white font-bold text-lg shadow-xl shadow-primary/30 transition-all hover:shadow-primary/40 active:scale-[0.98]">
              Login 
            </button>
          </form>

         
        </div>
      </div>

      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
};

export default Login;