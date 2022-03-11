import { signIn } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video autoPlay muted controls={false} loop id="bg-video" className="w-full h-full object-cover">
          <source src="/video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
        <div className="p-5">
          <img src={'/logo.png'} alt="logo" />
        </div>
        <button onClick={() => signIn('google')} className="login-btn ">
          <FcGoogle size={18} /> <p>Sign in with Google</p>
        </button>
      </div>
    </div>
  );
};

export default Login;
