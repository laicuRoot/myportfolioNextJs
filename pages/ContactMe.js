import React from "react";
import { useForm } from "react-hook-form";
import Layout from '../components/Layout/Layout';
import { motion } from "framer-motion";

export default function ContactMe() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("First Name")); // watch input value by passing the name of it

  return(
    <Layout>
      <div className="container mx-auto m-5">
        <h1 className="text-6xl font-bold text-center">Contact Me</h1>
        <form className="w-full max-w-lg mx-auto" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-wrap justify-center -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className='block uppercase tracking-wide text-black text-xs font-bold mb-2' htmlFor='grid-first-name'>
                First Name:
                </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="First Name"
                name="firstName"
                ref={register({
                  required: true
                })}
              />
              {errors.firstName && <p className='text-red-500 m-1'>First Name is required</p>}
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className='block uppercase tracking-wide text-black text-xs font-bold mb-2' htmlFor='grid-last-name'>
                Last Name:
                </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-black border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-last-name"
                type="text"
                placeholder="Last Name"
                name="lastName"
                ref={register({
                  required:true
                })}
              />
              {errors.lastName && <p className='text-red-500 m-1'>Last Name is required</p>}
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
                htmlFor="grid-email"
              >
                Email:
                </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-email"
                type="email"
                placeholder="Your Email"
                name="email"
                ref={register({ 
                  required: true 
                  })}
              />
              {errors.email && <p className='text-red-500 m-1'>Email is required</p>}
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
                htmlFor="grid-textarea"
              >
                Ask me anything!
                </label>
              <textarea
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name='text area'
                id="grid-textarea"
                rows='10'
                cols='30'
                type="text"
                placeholder="Go ahead, contact me if you have a project in mind!"
                ref={register({
                  required: true
                })}
              />
            </div>
          </div>

          {errors.exampleRequired && <span>This field is required</span>}
          <motion.div className=' block rounded-full lg:inline-block lg:mt-0 font-bold text-black hover:shadow-md' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <input className='bg-black text-white rounded-full py-2 px-4' type="submit" /></motion.div>
        </form>
      </div>
    </Layout>
  )
}

// export default function ContactMe(){
//   const { register, handleSubmit, errors } = useForm();
//   const onSubmit = (data )=> {
//     preventDefault();
//     console.log(data)
//   };
//   console.log(errors);
//     return (


//             <div className='flex flex-wrap -mx-3'>
//               <motion.div 
//               className=' w-full px-3' 
//               whileHover={{ 
//                   scale: 1.1
//                   }} 
//               whileTap={{ scale: 0.8 }}>
//                   <input
//                   className='bg-white hover:bg-gray-500 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'
//                   type='submit'> 
//                   Submit 
//                   </input>
//                 </motion.div>
//             </div>
//           </form>
//         </div>
//       </Layout>
//     );
// }