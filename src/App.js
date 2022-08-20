
// import { useState } from "react";

// import LOGO from './gdsclogonew.png'
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const App = () => {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//  const handleLogin = (e) => {
//   e.preventDefault()
//   console.log(email, password);
//   if(password.length<6){
//     toast.error('Password must be at least 6 characters long')
//   }
//   else if(!email.includes('@') || !email.includes('.') || email.length<6 ){
//     toast.error('Email is not valid')
//   }
// else{
//   toast.success("Successfully logged in")
//   setEmail('')
//   setPassword('')

// }
//   }
//   return (
//     <>
//       <ToastContainer
//         position="bottom-center"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         className='toast'
//         pauseOnFocusLoss
//         draggable
        
//       />
//       <div className="container">
//         <div className="left"></div>
//         <div className="right">
//           <form onSubmit={handleLogin}>
//             <div className="formHeader">
//               <img src={LOGO} alt="gdsc" />
//               <h1>
//                 Sign <span style={{ color: "#FE2C26" }}>i</span>
//                 <span style={{ color: "#2884FB" }}>n</span>
//               </h1>
//             </div>
//             <div className="formGroup">
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 name="email"
//                 required
//               />
//             </div>
//             <div className="formGroup">
//               <label htmlFor="password">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 name="password"
//                 required
//               />
//             </div>
//             <button type="submit" className="btn">
//               Login
//             </button>

//             <div className="formFooter">
//               <span>
//                 Don't have an account{" "}
//                 <button
//                   style={{ color: "#FE2C26" }}
//                   type={"button"}
//                   onClick={() => alert("This link is Not Active !")}
//                 >
//                   Register
//                 </button>
//               </span>

//               <button
//                 onClick={() => alert("This link is Not Active !")}
//                 type="button"
//                 style={{ color: "#2884FB" }}
//               >
//                 Forgot Password?
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );

// };

// export default App;


import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Cart from './pages/Cart'
import Home from './pages/Home'
import {Provider} from 'react-redux'
import store from './store/store'
const App = () => {
  return (
    <div className="app">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App