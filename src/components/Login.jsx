import sideImage from '../images/login2.jpg'

const Login = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block'>
                <img className='w-full h-full object-cover' src={sideImage} alt="logo" />
            </div>

            <div className='bg-gray-800 flex flex-col justify-center'>
                <form className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg shadow-lg'>
                    <div className='animate__animated animate__backInDown text-2xl cursor-pointer flex items-center font-[Poppins] text-indigo-600'>
                        <h2 className='font-bold pl-14'><ion-icon name="prism"></ion-icon> PrismaRegistros</h2>
                    </div>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label>Usuario</label>
                        <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type='text' />
                    </div>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label>Contraseña</label>
                        <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type='password' />
                    </div>
                    <div className='flex justify-between text-gray-400 py-2'>
                        <p className='flex items-center'><input className='mr-2' type='checkbox' /> Recordarme</p>
                        <p>Olvidaste tu contraseña?</p>
                    </div>
                    <button className='w-full my-5 py-2 bg-blue-500 hover:bg-blue-600 transition-colors text-white font-semibold rounded-lg'>Ingresar</button>
                </form>
            </div>
        </div>
    )
}

export default Login