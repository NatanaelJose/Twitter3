import { useState } from "react";
import { auth, createAccountwithEmail } from "./services/firebaseConfig";
import { redirect } from "react-router-dom";
import defaultProfilePic from '../assets/images/bluebird.jpg'

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await createAccountwithEmail(auth, email, password);
      redirect("/");
    } catch (error) {
      console.error("Erro ao fazer login com e-mail e senha:", error);
    }
  };

  return (
    <div className="w-full h-screen flex flex-row items-center justify-center from-sky-700 via-sky-600 to-sky-500 bg-gradient-to-tl">
      <div className="w-2/3 h-4/5 flex flex-row rounded-xl shadow-sm shadow-gray-700">
        <div className="w-1/2 h-full rounded-l-xl bg-white">
          <h1>Login</h1>
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Fazer Login</button>
        </div>
        <div className="w-1/2 h-full">
          <img className="h-full w-full rounded-r-xl object-cover" src={defaultProfilePic} alt="blue-bird-banner" />
        </div>
      </div>
    </div>
  );

}
