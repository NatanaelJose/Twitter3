import { useState } from "react";
import { auth, loginAccountwithEmail } from "./services/firebaseConfig";
import defaultProfilePic from '../assets/images/bluebird.jpg'

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await loginAccountwithEmail(auth, email, password);
      window.location.replace("/"); // Substitui a URL atual pela página inicial
    } catch (error) {
      console.error("Erro ao fazer login com e-mail e senha:", error);
    }
  };

  return (
    <div className="w-full h-screen box-border flex flex-row items-center justify-center from-sky-600 via-sky-500 to-sky-400 bg-gradient-to-tl">
      <div className="w-2/3 h-4/5 flex flex-row shadow-sm shadow-gray-700">
        <form className="w-1/2 h-full flex flex-col p-6 bg-white justify-center" autoComplete="on">
          <h1 className="text-center font-bold font-sans text-2xl mb-5">Login</h1>
          <div className="flex flex-col mb-6">
            <label className="font-sans text-lg mb-2" htmlFor="email">E-mail</label>
            <input
              className="border-b text-base focus:outline-none transition duration-500 ease-in-out focus:border-b-2 focus:border-sky-500"
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-6">
            <label className="font-sans text-lg mb-2" htmlFor="password">Senha</label>
            <input
              className="border-b text-base focus:outline-none transition duration-500 ease-in-out focus:border-b-2 focus:border-sky-500"
              id="password"
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <input />
          <button className="text-white bg-sky-500 text-lg font-bold p-3" type="submit" onClick={handleLogin}>Fazer Login</button>
        </form>
        <div className="w-1/2 h-full">
          <img className="h-full w-full object-cover select-none" src={defaultProfilePic} alt="blue-bird-banner" />
        </div>
      </div>
    </div>
  );

}

export default LoginPage;