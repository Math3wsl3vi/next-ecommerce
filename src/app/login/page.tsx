"use client"
import Spinner from '@/components/Spinner'
import { auth } from './../../../FirebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'



const Login = () => {
  const [email, setEmail ] = useState('');
  const [password, setPassword ] = useState('');
  const [isLoading, setisLoading ] = useState(false);
  const [message, setMessage ] = useState<string | null>(null)
  const router = useRouter();


  const handleSignUp = () => {
    console.log('user signed up', {email, password})
  }


  const login = async () => {
    setisLoading(true)
    try {
      const response = await signInWithEmailAndPassword( auth, email, password );
      setMessage('Login successful')
      router.push('/')
    } catch (error) {
      console.log(error)
      setMessage('user not registered')
    }finally{
      setisLoading(false);
    }
  }

  return (
    <div className='md:mx-32 md:p-24 p-3 bg-slate-100 items-center flex justify-center flex-col relative my-10 overflow-hidden'>
        <div className='absolute -top-40 -left-[280px] hidden md:block '>
        <Image 
         src='/hero3.png'
         alt='thing'
         width={500}
         height={500}
         className='mb-5'
        />
        </div>
        <h1 className='text-2xl md:text-4xl font-serif my-4'>Welcome to Mauatitude</h1>
        <h1 className='text-2xl md:text-xl font-sans my-4 text-meow'>Login To Continue</h1>
        <div className='flex justify-center'>
      <Image 
         src='/hbdr.png'
         alt='thing'
         width={400}
         height={30}
         className='mb-5'
        />
      </div>
      <div className='flex gap-4 flex-col w-[90%] md:w-1/2'>
      <div className='flex flex-col gap-2'>
        <input 
        type="text" 
        name='name' 
        placeholder='Enter your Email' 
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
        className='outline-none border border-gray-300 p-2 bg-transparent rounded-md'/>
      </div>
      <div className='flex flex-col gap-2 relative'>
        <input 
        type="password" 
        name='name' 
        placeholder='Enter your Password' 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        className='outline-none border border-gray-300 p-2 bg-transparent rounded-md'/>
        <div className='absolute top-2.5 right-2 cursor-pointer font-sans text-meow text-sm'>Show</div>
      </div>
      <div>
        <p className='font-sans text-meow'>Don't have an Account?<Link href='/signup'> <span className='font-medium text-primary cursor-pointer'>Create one.</span></Link></p>
      </div>
     
     
     <div className='flex justify-center flex-col items-center' onClick={()=>login()}>
      {message && <p className='text-primary text-lg'>{message}</p>}
     {isLoading ? 
        (
          <div className='ring-1 ring-primary p-2 rounded-md'>
            <Spinner size={20} color='#222' isLoading/>
          </div>
      ) :( 
        <button className='ring-1 ring-primary p-2 rounded-md text-primary hover:bg-primary hover:text-white md:w-1/2'>
          Continue
          </button>)}
      </div> 
     
     </div>
      <div className='absolute -bottom-40 -right-[130px] hidden md:block '>
        <Image 
         src='/hero.png'
         alt='thing'
         width={500}
         height={500}
         className='mb-5'
        />
        </div>
    </div>
  )
}

export default Login















// "use client"
// import { useWixContext } from '@/hooks/useWixClient';
// import { LoginState } from '@wix/sdk';
// import Image from 'next/image';
// import { usePathname, useRouter } from 'next/navigation';
// import React, { useState } from 'react'
// import Cookies from 'js-cookie';

// enum MODE {
//   LOGIN = "LOGIN",
//   REGISTER = "REGISTER",
//   RESET_PASSWORD = "RESET_PASSWORD",
//   EMAIL_VERIFICATION = "EMAIL_VERIFICATION"
// }

// const LoginPage = () => {
//   const myWixClient = useWixContext();
//   const router = useRouter();


//   const isLoggedIn = myWixClient.auth.loggedIn()
//   console.log(isLoggedIn)

//   if(isLoggedIn){
//     router.push('/')
//   }


//   const [mode, setMode ] =useState(MODE.LOGIN)
//   const [username, setUsername ] = useState("");
//   const [email, setEmail ] = useState(""); 
//   const [password, setPassword ] = useState(""); 
//   const [isLoading, setIsLoading ] = useState(false); 
//   const [error, setError ] = useState(""); 
//   const [message, setMessage ] = useState(""); 
//   const [emailCode, setEmailCode ] = useState("")

//   const pathname = usePathname();


//   const formTitle = mode === MODE.LOGIN ? "Log In" : mode === MODE.REGISTER ? "Register" :  mode === MODE.RESET_PASSWORD ?"Reset your Password" : "Verify your Email"
//   const buttonTitle = mode === MODE.LOGIN ? "Login" : mode === MODE.REGISTER ? "Register" :  mode === MODE.RESET_PASSWORD ?"Reset" : "Verify"


//   const handleSubmit = async(e:React.FormEvent)=>{
//     e.preventDefault();
//     setIsLoading(true)
//     setError("");

//     try {
//       let response;

      
    
//       switch(mode){
//         case MODE.LOGIN:
//            response = await myWixClient.auth.login({
//             email,
//             password,
//           })
//           break;
//           case MODE.REGISTER:
//            response = await myWixClient.auth.register({
//             email,
//             password,
//             profile:{nickname: username},
//           })
//           break;
//           case MODE.RESET_PASSWORD:
//            response = await myWixClient.auth.sendPasswordResetEmail(
//             email,
//             pathname,
//           )
//           setMessage("Password reset email sent. Please check your emails")
//           break;
//           case MODE.EMAIL_VERIFICATION:
//            response = await myWixClient.auth.processVerification({
//             verificationCode:emailCode
//           })
//           break;
//           default:
//             break;
//       }
//       console.log(response)

//       switch (response?.loginState) {
//         case LoginState.SUCCESS:
//           setMessage("Login successful! You are now being Redirected")
//           router.push('/')

//           const tokens = await myWixClient.auth.getMemberTokensForDirectLogin(response.data.sessionToken!);

//           console.log(tokens)

//           Cookies.set("refreshToken" , JSON.stringify(tokens.refreshToken),{
//             expires:2,
//           })
//           myWixClient.auth.setTokens(tokens)
//           router.push('/')
//           break;
//         case LoginState.FAILURE:
//           if(response.errorCode === "invalidEmail" || response.errorCode === "invalidPassword"){
//             setError("Invalid email or password")
//           }else if(response.errorCode === "emailAlreadyExists") {
//             setError("email already exists")
//           }else if(response.errorCode === "resetPassword") {
//             setError("You need to reset your password")
//           }else{
//             setError("Something else is wrong with you!")
//           }

//         case LoginState.EMAIL_VERIFICATION_REQUIRED:
//           setMode(MODE.EMAIL_VERIFICATION)
//           case LoginState.OWNER_APPROVAL_REQUIRED:
//             setMessage("Owner Approval Required")
//         default:
//           break;

          
//       }

//     } catch (error) {
//       console.log(error)
//       setError("UUWII!! Something went horribly wrong")


//     } finally{
//       setIsLoading(false)
//     }
//   }
    
//   return (
//     <>
//     {/* campaign */}
//     <div className='bg-green-50 mx-52 justify-between h-60 hidden sm:flex'>
//         <div className='w-2/3 p-5'>
//         <h1 className='font-semibold text-4xl leading-[48px] text-gray-700'>House Plants for everyone</h1>
//         </div>
//         <div className='w-1/3 relative -py-2'>
//         <Image src={'/hero3.png'} fill sizes='' alt='image' className='object-cover'/>
//         </div>
//       </div>
    
//     <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-56 relative h-[calc(100vh-80px)] justify-center flex pt-32'>
//       <form  action="" className='flex flex-col gap-8 w-1/2' onSubmit={handleSubmit}>
//         <h1 className='text-2xl font-semibold'>{formTitle}</h1>
//         {mode === MODE.REGISTER ? (
//           <div className='flex flex-col gap-2'>
//             <label htmlFor="username" className='text-sm text-gray-700'>Username</label>
//             <input type="text" name='username' placeholder='Username' className='ring-2 ring-gray-300 rounded-md p-4'
//             onChange={e=> setUsername(e.target.value)}/>
//           </div>
//         ): (null)}
//         {
//           mode !== MODE.EMAIL_VERIFICATION ? 
//           (
//             <div className='flex flex-col gap-2'>
//             <label htmlFor="email" className='text-sm text-gray-700'>Email</label>
//             <input type="email" name='email' placeholder='Email Address' className='ring-2 ring-gray-300 rounded-md p-4'
//             onChange={e=> setEmail(e.target.value)}/>
//           </div>
//           ): (
//             <div className='flex flex-col gap-2'>
//             <label htmlFor="emailCode" className='text-sm text-gray-700'>Verification Code</label>
//             <input type="text" name='emailCode' placeholder='Code' className='ring-2 ring-gray-300 rounded-md p-4'
//             onChange={e=> setEmailCode(e.target.value)}/>
//           </div>

//           )
//         }
//         {mode === MODE.LOGIN ||mode === MODE.REGISTER ? 
//         (
//           <div className='flex flex-col gap-2'>
//             <label htmlFor="password" className='text-sm text-gray-700'>Password</label>
//             <input type="password" name='password' placeholder='Password' className='ring-2 ring-gray-300 rounded-md p-4'
//             onChange={e=> setPassword(e.target.value)}/>
//           </div>

//         ): (null)}

//         {mode === MODE.LOGIN && <div className='cursor-pointer text-sm underline' onClick={()=> setMode(MODE.RESET_PASSWORD)}>Forgot Password?</div> }

//         <button className='bg-primary rounded-md text-white p-2 disabled:cursor-not-allowed w-1/2' disabled={isLoading}>
//         {isLoading ? "si ungoje" :  buttonTitle}
//         </button>
//         {error && <div className='text-red-500'>{error}</div>}
//         {mode === MODE.LOGIN && (
//           <div onClick={()=> setMode(MODE.REGISTER)}
//           className='cursor-pointer'>
//             {"Don't"} have an account?
//           </div>
//         )}
//         {mode === MODE.REGISTER && (
//           <div onClick={()=> setMode(MODE.LOGIN)}
//           className='cursor-pointer'>
//             Already have an account? Login
//           </div>
//         )}
//         {mode === MODE.RESET_PASSWORD && (
//           <div onClick={()=> setMode(MODE.LOGIN)}
//           className='cursor-pointer'>
//             Go back to Login
//           </div>
//         )}
//       </form>
//       {message && <div className='text-green-600 text-sm'>{message}</div>}
      
//     </div>
//     </>
//   )
// }

// export default LoginPage