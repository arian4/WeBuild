import React from 'react'

export default function LoginModal({openModal}) {
  return (
    <div className={`bg-white absolute transition ${openModal ? 'scale-100':'scale-0'} left-0  top-20 sm:top-28 md:top-32 w-full p-4 flex items-center justify-center`}>
        <section>
            <h5 className='text-center font-bold text-xl'>Login Form</h5>
            <form action="">
                <input className='outline-0 bg-light_bg text-gray text-sm p-2 w-full mt-2' type="email" placeholder='Enter Your Email' />
                <input className='outline-0 bg-light_bg text-gray text-sm p-2 w-full mt-2' type="password" placeholder='Enter Your Password' />
                <div className='flex items-center justify-between my-3'>
                    <div>
                        <input type="checkbox" id="remember-me" />
                        <label className='ml-2' htmlFor="remember-me">Remember Me</label>
                    </div>
                    <a className='text-gray text-xs' href="#">forgot password</a>
                </div>
                <input className='btn w-full' type="submit" value="Login Now" />
            </form>
            <p className='text-sm text-center mt-2'>dont have an account <a className='text-yellow' href='#'>create one</a></p>
        </section>

    </div>
    
  )
}
