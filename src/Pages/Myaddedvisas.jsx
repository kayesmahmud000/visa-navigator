import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../Provider/AuthProvider';

import Swal from 'sweetalert2';
import PageHeading from '../Components/PageHeading';

const Myaddedvisas = () => {
    const { users } = useContext(authContext)
    const [myVisa, setMyVisa] = useState([])
    const [isModal, setIsModal] = useState(false);
    const [selectVisa ,setSelectVisa]=useState(null);
    

  
    useEffect(() => {

        fetch(`http://localhost:5000/addVisa/${users?.email}`)
            .then(res => res.json())
            .then(data => setMyVisa(data))

    }, [users])

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/addVisa/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Visa has been deleted.",
                                icon: "success"
                            });
                            const remainVisa = myVisa.filter(visa => visa._id !== id )
                            setMyVisa(remainVisa)
                        }
                    })

            }
        });
    }

    const handleUpdate = (visa) => {
        setSelectVisa(visa)
        setIsModal(true)
    }
    
    const handleUpdateFrom = e => {
        e.preventDefault()
        const form = e.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const visType = form.visType.value;
        const processing = form.processing.value;
        const age = parseInt(form.age.value);
        const fee = parseInt(form.fee.value);
        const validity = form.validity.value;
        const application_method = form.application_method.value;
        
        const updateVisa= {photo, name, visType, processing, age, fee, validity, application_method}
        console.log(updateVisa)

        fetch(`http://localhost:5000/addVisa/${selectVisa._id}`, {
            method:'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(updateVisa)
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data)
            if(data.result.modifiedCount>0){
                Swal.fire({
                    title: 'Visa Update successful!',
                    icon: 'success',
                    confirmButtonText: 'Ok'

                })
                // const newVisa =myVisa.map(visa => visa._id === selectVisa._id ? data : visa)
            setMyVisa([data.updatedDocument]);
            setIsModal(false)
            }
           
        })
        .catch(error=>{
            console.log(error)
        })
       
    }
    console.log(myVisa)
    return (
        <div className='min-h-screen'>
            <div>
                <PageHeading title={" Your Visa Submissions"} subtitle={"Update or delete your added visa information"}></PageHeading>
            </div>

            <div className='max-w-4xl mx-auto my-10  rounded-md'>
                {
                    myVisa?.map(visa => <div key={visa._id} className="  ">
                        <div className=" flex flex-col border border-gray-300  mb-10 p-5 bg-slate-200 rounded-md text-black lg:flex-row  ">
                            <img
                                src={visa.photo}
                                className=" w-60  rounded-lg  object-cover   " />
                            <div>
                                <div className="card-body">
                                    <h2 className="card-title text-4xl">
                                        {visa.name}

                                    </h2>
                                    <div className='font-semibold mr-2' >Visa Type: <span className="badge  font-normal  badge-outline">{visa.visType}</span></div>



                                    <div className="card-actions grid grid-cols-2 gap-5 ">


                                        <div className='font-semibold' >Validity: <span className=" font-normal  ">{visa.validity}</span></div>
                                        <div className='font-semibold' >Processing Time: <span className="  font-normal ">{visa.processing}</span></div>
                                        <div className='font-semibold' >Application Method: <span className="  font-normal ">{visa.application_method}</span></div>


                                        <div className='font-semibold' >Fee: <span className=" font-normal  "> $ {visa.fee} </span></div>

                                    </div>
                                    <div>
                                        <button onClick={()=>handleUpdate(visa)} className="btn bg-[#e63746] border-none text-white hover:bg-white hover:text-black mr-4">Update </button>
                                        <button onClick={() => handleDelete(visa._id)} className="btn bg-[#e63746] border-none text-white hover:bg-white hover:text-black">Delete </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>)
                }
                {
                    myVisa?.length === 0 && <p className='my-32 text-3xl text-[#e63746] font-bold text-center'>You not added any visa</p>
                }

                {isModal && selectVisa && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="bg-white text-center justify-center items-start p-6 rounded-md shadow-md">

                            <form onSubmit={handleUpdateFrom} className="card-body">
                                <div className="md:flex mb-4">
                                    <div className="form-control md:w-1/2 mr-5">
                                        <label className="label">
                                            <span className="label-text"> Country Image</span>
                                        </label>
                                        <input type="text" name="photo" defaultValue={selectVisa.photo} className="input input-bordered w-full" required />
                                    </div>
                                    <div className="form-control md:w-1/2">
                                        <label className="label">
                                            <span className="label-text">Country Name</span>
                                        </label>
                                        <input type="text" name="name" defaultValue={selectVisa.name} className="input input-bordered w-full" required />
                                    </div>
                                </div>
                                <div className="md:flex mb-4">
                                    <div className="form-control md:w-1/2 mr-5">
                                        <label className="label">
                                            <span className="label-text"> Visa Type</span>
                                        </label>
                                        <select name="visType" id=" visa" defaultValue={selectVisa.visType} className="input input-bordered w-full">
                                            <option value="Student" className='text-gray-400'>Select visa type</option>
                                            <option value="Student">Student Visa</option>
                                            <option value="Tourist">Tourist visa</option>
                                            <option value="Official">Official visa</option>
                                        </select>
                                    </div>
                                    <div className="form-control md:w-1/2">
                                        <label className="label">
                                            <span className="label-text">Processing Time</span>
                                        </label>
                                        <input type="text" name="processing" defaultValue={selectVisa.processing} className="input input-bordered w-full" required />
                                    </div>
                                </div>
                                <div className="md:flex mb-4">
                                    <div className="form-control md:w-1/2 mr-5">
                                        <label className="label">
                                            <span className="label-text">Age Restriction.</span>
                                        </label>
                                        <input type="text" name="age"defaultValue={selectVisa.age} className="input input-bordered w-full" required />
                                    </div>
                                    <div className="form-control md:w-1/2 ">
                                        <label className="label">
                                            <span className="label-text"> Fee</span>
                                        </label>
                                        <input type="text" name="fee" defaultValue={selectVisa.fee} className="input input-bordered w-full" required />
                                    </div>
                                </div>
                              <div  className="md:flex mb-4">
                              <div className="form-control md:w-1/2 mr-5">
                                        <label className="label">
                                            <span className="label-text">Validity</span>
                                        </label>
                                        <input type="text" name="validity" defaultValue={selectVisa.validity} className="input input-bordered w-full" required />
                                    </div>
                                    <div className="form-control md:w-1/2">
                                        <label className="label">
                                            <span className="label-text">Application Method</span>
                                        </label>
                                        <input type="text" name="application_method" defaultValue={selectVisa.application_method} className="input input-bordered w-full" required />
                                    </div>

                              </div>

                                <div className="form-control mt-6">
                                    <button  className="btn  bg-[#e63746]  text-white hover:bg-white hover:border hover:border-[#e63746] hover:text-black">Update</button>
                                </div>
                            </form>

                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Myaddedvisas;


// import React, { useContext, useEffect, useState } from 'react';
// import { authContext } from '../Provider/AuthProvider';
// import Swal from 'sweetalert2';

// const MyAddedVisas = () => {
//   const { users } = useContext(authContext);
//   const [myVisa, setMyVisa] = useState([]);
//   const [isModal, setIsModal] = useState(false);
//   const [selectedVisa, setSelectedVisa] = useState(null);

//   useEffect(() => {
//     if (users?.email) {
//       fetch(`http://localhost:5000/addVisa/${users.email}`)
//         .then(res => res.json())
//         .then(data => setMyVisa(data))
//         .catch(error => console.error(error));
//     }
//   }, [users]);

//   const handleDelete = (id) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!"
//     }).then((result) => {
//       if (result.isConfirmed) {
//         fetch(`http://localhost:5000/addVisa/${id}`, {
//           method: "DELETE"
//         })
//           .then(res => res.json())
//           .then(data => {
//             if (data.deletedCount > 0) {
//               Swal.fire("Deleted!", "Your visa has been deleted.", "success");
//               setMyVisa(myVisa.filter(visa => visa._id !== id));
//             }
//           })
//           .catch(error => console.error(error));
//       }
//     });
//   };

//   const handleUpdate = (visa) => {
//     setSelectedVisa(visa);
//     setIsModal(true);
//   };

//   const handleUpdateForm = (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const updatedVisa = Object.fromEntries(formData.entries());

//     fetch(`http://localhost:5000/addVisa/${selectedVisa._id}`, {
//       method: "PUT",
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(updatedVisa)
//     })
//       .then(res => res.json())
//       .then(data => {
//         setMyVisa(myVisa.map(visa => visa._id === selectedVisa._id ? data : visa));
//         setIsModal(false);
//       })
//       .catch(error => console.error(error));
//   };

//   return (
//     <div className='min-h-screen'>
//       <h2>This is my add visa page</h2>
//       <div className='max-w-4xl mx-auto rounded-md'>
//         {myVisa.length === 0 ? (
//           <p className='text-3xl text-[#e63746] font-bold text-center'>You have not added any visas</p>
//         ) : (
//           myVisa.map(visa => (
//             <div key={visa._id} className="flex flex-col border border-gray-300 mb-10 p-5 bg-slate-200 rounded-md text-black lg:flex-row">
//               <img src={visa.photo} className="w-60 rounded-lg object-cover" alt="country" />
//               <div className="card-body">
//                 <h2 className="card-title text-4xl">{visa.name}</h2>
//                 <div className='font-semibold mr-2'>Visa Type: <span className="badge font-normal badge-outline">{visa.visType}</span></div>
//                 <div className="card-actions grid grid-cols-2 gap-5">
//                   <div className='font-semibold'>Validity: <span className="font-normal">{visa.validity}</span></div>
//                   <div className='font-semibold'>Processing Time: <span className="font-normal">{visa.processing}</span></div>
//                   <div className='font-semibold'>Application Method: <span className="font-normal">{visa.application_method}</span></div>
//                   <div className='font-semibold'>Fee: <span className="font-normal">${visa.fee}</span></div>
//                 </div>
//                 <div>
//                   <button onClick={() => handleUpdate(visa)} className="btn bg-[#e63746] border-none text-white hover:bg-white hover:text-black mr-4">Update</button>
//                   <button onClick={() => handleDelete(visa._id)} className="btn bg-[#e63746] border-none text-white hover:bg-white hover:text-black">Delete</button>
//                 </div>
//               </div>
//             </div>
//           ))
//         )}
//         {isModal && selectedVisa && (
//           <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//             <div className="bg-white text-center justify-center items-start p-6 rounded-md shadow-md">
//               <form onSubmit={handleUpdateForm} className="card-body">
//                 <div className="md:flex mb-4">
//                   <div className="form-control md:w-1/2 mr-5">
//                     <label className="label"><span className="label-text">Country Image</span></label>
//                     <input type="text" name="photo" defaultValue={selectedVisa.photo} className="input input-bordered w-full" required />
//                   </div>
//                   <div className="form-control md:w-1/2">
//                     <label className="label"><span className="label-text">Country Name</span></label>
//                     <input type="text" name="name" defaultValue={selectedVisa.name} className="input input-bordered w-full" required />
//                   </div>
//                 </div>
//                 <div className="md:flex mb-4">
//                   <div className="form-control md:w-1/2 mr-5">
//                     <label className="label"><span className="label-text">Visa Type</span></label>
//                     <select name="visType" defaultValue={selectedVisa.visType} className="input input-bordered w-full">
//                       <option value="Student">Student Visa</option>
//                       <option value="Tourist">Tourist Visa</option>
//                       <option value="Official">Official Visa</option>
//                     </select>
//                   </div>
//                   <div className="form-control md:w-1/2">
//                     <label className="label"><span className="label-text">Processing Time</span></label>
//                     <input type="text" name="processing" defaultValue={selectedVisa.processing} className="input input-bordered w-full" required />
//                   </div>
//                 </div>
//                 <div className="md:flex mb-4">
//                   <div className="form-control md:w-1/2 mr-5">
//                     <label className="label"><span className="label-text">Description</span></label>
//                     <input type="text" name="description" defaultValue={selectedVisa.description} className="input input-bordered w-full" required />
//                   </div>
//                   <div className="form-control md:w-1/2">
//                     <label className="label"><span className="label-text">Age Restriction</span></label>
//                     <input type="text" name="age" defaultValue={selectedVisa.age} className="input input-bordered w-full" required />
//                   </div>
//                 </div>
//                 <div className="md:flex mb-4">
//                   <div className="form-control md:w-1/2 mr-5">
//                     <label className="label"><span className="label-text">Fee</span></label>
//                     <input type="text" name="fee" defaultValue={selectedVisa.fee} className="input input-bordered w-full" required />
//                   </div>
//                   <div className="form-control md:w-1/2">
//                     <label className="label"><span className="label-text">Validity</span></label>
//                     <input type="text" name="validity" defaultValue={selectedVisa.validity} className="input input-bordered w-full" required />
//                   </div>
//                 </div>
//                 <div className="md:flex mb-4">
//                   <div className="form-control md:w-1/2 mr-5">
//                     <label className="label"><span className="label-text">Application Method</span></label>
//                     <input type="text" name="application_method" defaultValue={selectedVisa.application_method} className="input input-bordered w-full" required />
//                   </div>
//                 </div>
//                 <div className="form-control mt-6">
//                   <button className="btn bg-[#e63746] text-white hover:bg-white hover:border hover:border-[#e63746] hover:text-black">Update</button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MyAddedVisas;
