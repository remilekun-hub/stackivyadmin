import {FormEvent} from 'react'
import logo from '../assets/logo.svg'
import hero from '../assets/heroimg.svg'
import {Link, useNavigate} from 'react-router-dom'

function Signin() {
    const navigate = useNavigate()

    const handleSubmit = (e:FormEvent)=> {
        e.preventDefault()
       navigate('/verify-otp')
    }

  return (
<section>
    <div className='xl:grid xl:grid-cols-2 mx-auto'>
      <div className='mx-auto px-4 md:px-[10%] lg:px-[10%] xl:w-full '>
        <div>
        <header className='h-[100px] flex items-center'>
          <nav>
              <Link to={'/'}>
                <img src={logo} alt="stackivy logo"/>
              </Link>
            </nav>
          </header>
           {/* hero section */}
          <div className=''>
              <div className='mt-6'>
                <h1 className='text-[#116B89] font-medium text-[20px] leading-6 mb-3'>Welcome to the admin dashboard </h1>
                <p className='text-[#999999] leading-6'>Sign in to Stackivy’s admin dashboard and start putting things right</p>
              </div>

              <form className='mt-10' onSubmit={handleSubmit}>
                
            

                <label htmlFor="" className='flex flex-col gap-1 mb-4'>
                  <p>Email</p>

                <input type="email" name="" id="" className='w-full outline-0 p-5 border-[#F0F0F0] border-[2px] rounded-[4px]' placeholder='Enter Name'/>                    
                </label>

                <label htmlFor="" className='flex flex-col gap-1 mb-4'>
                  <p>Password</p>

                <input type="password" name="" id="" className='w-full outline-0 p-5 border-[#F0F0F0] border-[2px] rounded-[4px]' placeholder='Enter Name'/>                    
                </label>

                <div className='flex justify-between items-center'>
                    <div>
                        <label htmlFor="">
                            <input type="checkbox" className='cursor-pointer'/>
                           <span className='ml-1'> Remember Password</span>
                        </label>
                    </div>

                    <span className='text-[#116B89] font-normal text-[13px] leading-[22px]'>
                        <Link to={'/forgot-password'}>Forgot Password?
                        </Link>
                    </span>
                </div>
                <button className='mb-4 bg-[#116B89] p-5 w-full text-white rounded-full text-[14px] leading-[22px] font-medium mt-7 hover:bg-[#0E5971] focus:bg-[#0E5971] transition'>Create Account</button>

                <p className='text-[13px] leading-[22px] font-normal text-center'>Don't  have an account? <span className='text-[#116B89]'><Link to={'/sign-up'}>Create Account</Link></span></p>
              </form>
          </div>
        </div>
          
            
                 
              
              
              

      </div>
      <div className='hidden xl:block max-h-screen'>
           
        <img src={hero} alt="stack ivy hero img" className='w-full h-full object-cover object-center' />
            
      </div>
    </div>
  </section>
  )
}

export default Signin