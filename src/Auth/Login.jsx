import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";



const LoginPage = () => {

  const location = useLocation()
  // console.info(location)



  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  //---------- Context use----------------------

  const { LoginUser, setUser } = useContext(AuthContext)

  const HandleLogin = (e) => {
    e.preventDefault();
    LoginUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user)
        navigate(location.state ? location.state : '/')
      })
      .catch((error) => {
        // console.log(error)
        alert(error.massage + ' ' + 'Password or Email is wrong...')
      });

  }

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="p-8 rounded-lg  max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">Welcome Back</h2>

        <form onSubmit={HandleLogin} className="space-y-6">
          {/* Email Field */}
          <div className="">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 "
              placeholder="Email Address"
              required
            />
          </div>

          {/* Password Field */}
          <div className="">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              placeholder="Password"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-indigo-600 transition duration-300"
          >
            Log In
          </button>
        </form>

        <button className="btn btn-sm rounded-full btn-warning w-full my-5">Log in With Google
          <img src="https://img.icons8.com/fluency/50/google-logo.png" alt="google-logo" className="w-5 shadow-lg border rounded-full" />
        </button>

        {/* Footer Text */}
        <p className="text-center text-gray-600 mt-6">
          Don’t have an account? <Link to='/auth/signUp' className="text-indigo-500 font-semibold hover:underline">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
