
import { useState } from 'react';
import Swal from 'sweetalert2'
import PageHeading from '../Components/PageHeading';

const AddVisa = () => {
    const [validPassport, setValidPassport] = useState(false);
    const [visaApplication, setVisaApplication] = useState(false);
    const [recentPassport, setRecentPassport] = useState(false);

    const handleAddVisa = e => {
        e.preventDefault();
        const form = e.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const visType = form.visType.value;
        const processing = form.processing.value;
        const description = form.description.value;
        const age =parseInt(form.age.value);
        const fee =parseInt( form.fee.value);
        const validity = form.validity.value;
        const application_method = form.application_method.value;

        const visaCollection = {
            photo,
            name,
            visType,
            processing,
            description,
            age,
            fee,
            validity,
            application_method,
            validPassport,
            visaApplication,
            recentPassport,
        };
        
        fetch("http://localhost:5000/addVisas", {
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(visaCollection)
        })
        .then(res =>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Visa Added successful!',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
            }
        })

        console.log(visaCollection); 
    };

    return (
        <div>
            <div className="card rounded-none bg-[#f2faef] w-full max-w-7xl px-4 mx-auto ">
                <PageHeading title={"Add a New Visa"} subtitle={"Complete the Form to Add Visa Details"}></PageHeading>
               
                <form onSubmit={handleAddVisa} className="card-body">
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
                            <select name="visType" id=" visa" className="input input-bordered w-full">
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
                                    <input type="checkbox" name="validPassport" checked={validPassport} onChange={() => setValidPassport(!validPassport)} />
                                    <span className="label-text"> Valid passport</span>
                                </label>
                                <label>
                                    <input type="checkbox" name="visaApplication" checked={visaApplication} onChange={() => setVisaApplication(!visaApplication)} />
                                    <span className="label-text"> Visa application form</span>
                                </label>
                                <label>
                                    <input type="checkbox" name="recentPassport" checked={recentPassport} onChange={() => setRecentPassport(!recentPassport)} />
                                    <span className="label-text"> Recent passport-sized photograph</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#5c7cfa] text-lg text-white">Add New Visa</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddVisa;
