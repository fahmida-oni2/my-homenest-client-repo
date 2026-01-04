import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaEye, FaArrowLeft, FaUser, FaCamera, FaEnvelope, FaLock } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const [show, setShow] = useState(false);
  const { createUser, setUser, updateUser, signInWihGoogle } = use(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    // Password Validation
    const regExp = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!regExp.test(password)) {
      toast.error(
        "Password must be 6+ characters with at least one Uppercase and one Lowercase letter."
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            toast.success("Account created! Welcome to HomeNest.");
            navigate("/");
          })
          .catch(() => {
            setUser(user);
            navigate("/");
          });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWihGoogle()
      .then(() => {
        toast.success("Signed in with Google!");
        navigate("/");
      })
      .catch(() => toast.error("Social sign-in failed"));
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row min-h-screen bg-base-100 font-sans selection:bg-primary/30">
  
      <div className=" lg:flex lg:w-[40%] bg-[#0f172a] relative items-center justify-center p-12 overflow-hidden">
      
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <div className="absolute top-10 left-10 w-32 h-32 rounded-full border-2 border-white animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full border border-primary animate-bounce duration-[5000ms]"></div>
        </div>

        <div className="z-10 text-white text-center">
          <h1 className="text-5xl font-black tracking-tighter mb-6 leading-tight">
            Start Your <br />
            <span className="text-primary italic">Journey</span> With Us.
          </h1>
          <p className="text-gray-400 max-w-xs mx-auto mb-10 font-medium">
            Join the most trusted property management platform. Secure, intuitive, and designed for you.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-sm text-left">
              <div className="p-3 bg-primary/20 text-primary rounded-xl font-bold italic">HN</div>
              <div>
                <p className="text-sm font-bold">Trusted by 5k+ Landlords</p>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-black">Verified Community</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[60%] flex items-center justify-center p-6 sm:p-12 lg:p-16 bg-base-100 relative">
        
        <Link to="/" className="absolute top-8 left-8 btn btn-ghost btn-sm gap-2 text-base-content/50 hover:text-primary transition-all">
          <FaArrowLeft /> Home
        </Link>

        <div className="w-full max-w-[480px] animate__animated animate__fadeIn">
          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-4xl font-black text-secondary tracking-tight">Create Account</h2>
            <p className="text-base-content/60 font-medium mt-1">Sign up to manage your HomeNest properties.</p>
          </div>

          <form onSubmit={handleRegister} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
            <div className="form-control md:col-span-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-base-content/40 ml-1 mb-2 block italic">Full Name</label>
              <div className="relative">
                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/30" />
                <input name="name" type="text" placeholder="Your Name" className="input input-bordered w-full h-14 pl-12 bg-base-200/50 border-base-300 focus:border-primary rounded-2xl transition-all" required />
              </div>
            </div>

         
            <div className="form-control md:col-span-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-base-content/40 ml-1 mb-2 block italic">Email Address</label>
              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/30" />
                <input name="email" type="email" placeholder="email@example.com" className="input input-bordered w-full h-14 pl-12 bg-base-200/50 border-base-300 focus:border-primary rounded-2xl transition-all" required />
              </div>
            </div>

          
            <div className="form-control md:col-span-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-base-content/40 ml-1 mb-2 block italic">Image URL <span className="lowercase">(optional)</span></label>
              <div className="relative">
                <FaCamera className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/30" />
                <input name="photo" type="url" placeholder="https://image.link" className="input input-bordered w-full h-14 pl-12 bg-base-200/50 border-base-300 focus:border-primary rounded-2xl transition-all" />
              </div>
            </div>

            <div className="form-control md:col-span-2 relative">
              <label className="text-[10px] font-black uppercase tracking-widest text-base-content/40 ml-1 mb-2 block italic">Password</label>
              <div className="relative">
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/30" />
                <input name="password" type={show ? "text" : "password"} placeholder="••••••••" className="input input-bordered w-full h-14 pl-12 pr-12 bg-base-200/50 border-base-300 focus:border-primary rounded-2xl transition-all" required />
                <button type="button" onClick={() => setShow(!show)} className="absolute right-4 top-1/2 -translate-y-1/2 text-base-content/30 hover:text-primary transition-colors">
                  {show ? <FaEye size={18} /> : <IoEyeOff size={18} />}
                </button>
              </div>
            </div>

            <button type="submit" className="btn btn-primary md:col-span-2 h-14 rounded-2xl text-white font-bold text-lg shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all mt-4">
             Sign Up
            </button>
          </form>

          <div className="divider my-8 text-[10px] font-black text-base-content/20 uppercase tracking-[0.3em]">Quick Sign Up</div>

          <button onClick={handleGoogleSignIn} className="btn btn-outline w-full h-14 border-base-300 rounded-2xl gap-3 font-bold hover:bg-base-200 hover:text-base-content transition-all normal-case">
            <FcGoogle size={24} />
            Join with Google
          </button>

          <p className="mt-8 text-center text-sm font-semibold text-base-content/60">
            Already a member? <Link to="/auth/login" className="text-primary font-black hover:underline underline-offset-4 ml-1">Log In</Link>
          </p>
        </div>
      </div>

      <Toaster position="bottom-center" />
    </div>
  );
};

export default Register;