import { signIn } from 'next-auth/react';

const Login = () => {
  return (
    <main className={''}>
      Not signed in <br />
      <button onClick={() => signIn('google')}>Sign in with Google</button>
    </main>
  );
};

export default Login;
