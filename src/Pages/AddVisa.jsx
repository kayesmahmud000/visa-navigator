import React from 'react';

const AddVisa = () => {
    return (
        <div>
           
            <div className="card bg-[#f2faef] w-full  shrink-0 ">
                <h2 className='text-4xl font-bold text-center my-6'> Add a New Visa</h2>
              
                <p className='text-center font-semibold'>Complete the Form to Add Visa Details</p>
                <form className="card-body">
                <div className="md:flex mb-4">
                            <div className="form-control md:w-1/2 mr-5">
                                <label className="label">
                                    <span className="label-text"> Country Image</span>
                                </label>
                                <input type="text" name="photo" placeholder="Country image url" className="input input-bordered w-full" required />
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Country Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Country name" className="input input-bordered w-full" required />
                            </div>
                        </div>
                <div className="md:flex mb-4">
                            <div className="form-control md:w-1/2 mr-5">
                                <label className="label">
                                    <span className="label-text"> Visa Type</span>
                                </label>
                               <select name="Visa type" id=" visa" className="input input-bordered w-full">
                               <option value="Student" className='text-gray-400'>Select visa type</option>
                                <option value="Student">Student Visa</option>
                                <option value="Student">Tourist visa</option>
                                <option value="Student">Official visa</option>
                                
                                </select>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Processing Time</span>
                                </label>
                                <input type="text" name="processing" placeholder="processing" className="input input-bordered w-full" required />
                            </div>
                        </div>
                <div className="md:flex mb-4">
                            <div className="form-control md:w-1/2 mr-5">
                                <label className="label">
                                    <span className="label-text"> Description</span>
                                </label>
                                <input type="text" name="description" placeholder="description" className="input input-bordered w-full" required />
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Age Restriction.</span>
                                </label>
                                <input type="text" name="age" placeholder="Age restriction" className="input input-bordered w-full" required />
                            </div>
                        </div>
                <div className="md:flex mb-4">
                            <div className="form-control md:w-1/2 mr-5">
                                <label className="label">
                                    <span className="label-text"> Fee</span>
                                </label>
                                <input type="text" name="fee" placeholder="fee" className="input input-bordered w-full" required />
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Validity</span>
                                </label>
                                <input type="text" name="validity" placeholder="validity" className="input input-bordered w-full" required />
                            </div>
                        </div>
                <div className="md:flex mb-4">
                            <div className="form-control md:w-1/2 mr-5">
                                <label className="label">
                                    <span className="label-text">Application Method</span>
                                </label>
                                <input type="text" name="application_method" placeholder="Application method" className="input input-bordered w-full" required />
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Required_documents</span>
                                </label>
                               <div className='grid grid-cols-2 gap-2 justify-between'>
                               <label>
                               <input type="checkbox" name="ValidPassport" id=""/>
                               <span className="label-text">  Valid passport</span>
                                </label> 
                               <label>
                               <input type="checkbox" name="ValidPassport" id=""/>
                               <span className="label-text">  Visa application form</span>
                                </label> 
                               <label>
                               <input type="checkbox" name="ValidPassport" id=""/>
                               <span className="label-text">  Recent passport-sized photograph</span>
                                </label> 
                               </div>
                            </div>
                        </div>

                    <div className="form-control mt-6">
                        <button className="btn bg-[#5c7cfa] text-lg text-white">Login</button>
                    </div>
                </form>
               
               
            </div>
        </div>
    );
};

export default AddVisa;