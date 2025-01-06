
import { useContext, useState } from 'react';
import Swal from 'sweetalert2'
import PageHeading from '../Components/PageHeading';
import { authContext } from '../Provider/AuthProvider';

const AddVisa = () => {
    const { users } = useContext(authContext)

    const [validPassport, setValidPassport] = useState("");
    const [visaApplication, setVisaApplication] = useState("");
    const [recentPassport, setRecentPassport] = useState("");

    const handleAddVisa = e => {
        e.preventDefault();
        const form = e.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const visType = form.visType.value;
        const processing = form.processing.value;
        const description = form.description.value;
        const age = parseInt(form.age.value);
        const fee = parseInt(form.fee.value);
        const validity = form.validity.value;
        const application_method = form.application_method.value;
        const email = users.email;

        const requirement_document = [
            validPassport,
            visaApplication,
            recentPassport,
        ]



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
            requirement_document,
            email
        };

        fetch("https://visa-nevigator.vercel.app/addVisas", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(visaCollection)
        })
            .then(res => res.json())
            .then(data => {
                
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Visa Added successful!',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })

        ;
    };

    return (
        <div className=''>
            <div className="card rounded-none   w-full max-w-7xl px-4 mx-auto ">
               <div className=' mt-24 '>
               <PageHeading title={"Add a New Visa"} subtitle={"Complete the Form to Add Visa Details"}></PageHeading>
               </div>

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
                            <select name="visType" id=" visa" className="input text-black input-bordered w-full">
                                <option  value="Student" className=''>Select visa type</option>
                                <option className='text-black' value="Student">Student Visa</option>
                                <option className='text-black' value="Tourist">Tourist visa</option>
                                <option className='text-black' value="Official">Official visa</option>
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
                                    <input type="checkbox" name="validPassport" value={'Valid passport'} checked={validPassport} onChange={(e) => setValidPassport(e.target.value)} />
                                    <span className="label-text"> Valid passport</span>
                                </label>
                                <label>
                                    <input type="checkbox" name="visaApplication" value={" Visa application form"} checked={visaApplication} onChange={(e) => setVisaApplication(e.target.value)} />
                                    <span className="label-text"> Visa application form</span>
                                </label>
                                <label>
                                    <input type="checkbox" name="recentPassport" value={"Recent passport-sized photograph"} checked={recentPassport} onChange={(e) => setRecentPassport(e.target.value)} />
                                    <span className="label-text"> Recent passport-sized photograph</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#e63746] hover:border-[#e63746] text-white hover:bg-white hover:text-black">Add New Visa</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddVisa;
