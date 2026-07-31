import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-gray-100 mt-5 p-6'>
       <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6'>
          {/* About section  */}
          <div>
            <h2 className='text-lg font-bold mb-2'> Job Portal </h2>
            <p className='text-gray-600 text-sm'>
              Finding the right job made easy. 
              We connect job seekers with their dream careers and help employers find the perfect candidates.
            </p>

          </div>
          {/* Address section */}
          <div>
            <h2 className='text-lg font-bold mb-2'> Address </h2>
            <p className='text-gray-600 text-sm'>
              123 Main Street, Surat, India
            </p>
            <p className='text-gray-600 text-sm'>
              Email: info@jobportal.com
            </p>
          </div>
          {/* Social Media section */}
          <div>
            <h2 className='text-lg font-bold mb-2'> Follow Us </h2>
            <div className='flex space-x-4'>
              <a href="#" className='text-gray-600 hover:text-blue-500'>
                <FaFacebookF className='fab fa-facebook-f'></FaFacebookF>
              </a>
              <a href="#" className='text-gray-600 hover:text-blue-500'>
                <FaTwitter className='fab fa-twitter'></FaTwitter>
              </a>
              <a href="#" className='text-gray-600 hover:text-blue-500'>
                <FaLinkedinIn className='fab fa-linkedin-in'></FaLinkedinIn>
              </a>
            </div>
          </div>
          {/* Bottom Line */}
          <div className='md:col-span-3 border-t border-gray-200 py-4 text-center'>
            <p className='text-gray-600 text-sm'>
              &copy; {new Date().getFullYear()} Job Portal. All rights reserved.
            </p>
          </div>
        </div>
     
    </footer>
  )
}

export default Footer