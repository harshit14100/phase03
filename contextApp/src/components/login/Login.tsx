
const Login = () => {
  return (
    <div>
      <form className="justify-center items-center flex flex-col p-11">
        <div className="flex flex-col ">
          <h1 className="text-2xl">Login</h1>
            <label for="name" className="hidden">
            Full Name
                </label>
                <input
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                    />
                </div>

                <div className="flex flex-col mt-2">
                    <label for="email" className="hidden">
                        Email
                    </label>
                    <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                   />
            </div>
         <div className="flex flex-col mt-2">
                    <label for="Password" className="hidden">
                        Email
                    </label>
                    <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="password"
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                   />
            </div>
             <button
                type="submit"
                className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300 cursor-pointer"
            >
                Submit
            </button>
      </form>
    </div>
  )
}

export default Login
