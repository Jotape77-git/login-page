export default function App() {

  function login() {
    alert("Login Executado!")
  }


  return (
    <div className="w-full h-screen bg-[url('../public/Netflix.jpg')]">
      <div className="w-full h-full bg-black/50 flex items-center justify-center relative">
      <img src="/Nomeflix.svg" alt="" width="200px" className="absolute top-5 left-[300px]" />
      <div className="w-[500px] h-auto min-h-[400px] bg-black/70 py-[30px] px-[60px]">
      <h1 className="font-bold text-[30px]" >Entrar</h1>

      <form
      onSubmit={login}
      className="flex flex-col gap-[20px] mt-[20px]"
      >
        <input 
         type="email"
         placeholder="Email ou número"
         className="w-full h-[40px] bg-[#2727276a] border border-gray-400 pl-4"
         />

        <input 
        type="password"
        placeholder="Senha"
        className="w-full h-[40px] bg-[#2727276a] border border-gray-400 pl-4"
        />

        <button 
        type="submit" 
        className="w-full h-[40px] bg-[#e50816] rounded-sm border-none font-bold">
          Entrar
        </button>


      </form>
      </div>
      </div>
    </div>
  )
}