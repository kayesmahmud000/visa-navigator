import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaLocationDot,  FaXTwitter } from "react-icons/fa6";
import { MdEmail,  } from "react-icons/md";
import { Link } from "react-router-dom";
import PageHeading from "../Components/PageHeading";
import { BiWorld } from "react-icons/bi";


const Contact = () => {
    return (
        <div >   <div className="container  mx-auto ">
              <div className="py-5  ">
              <PageHeading title={"Contact Us"} subtitle={""}></PageHeading>
              </div>
            
        <div className="flex my-10 px-2 justify-around  items-center flex-col-reverse  lg:flex-row">
            <div className=" text-center lg:text-left ">
                <div className='mt-5'>
                <div className="space-y-3">
                   <h2 className="text-3xl  font-bold ">Contact information</h2>
                   <p className="lg:w-4/6">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                   <div className="my-4">
                   <div className="my-4">
                    <p className="flex items-center gap-2 lg:w-4/5"><FaLocationDot className="text-red-500"></FaLocationDot> Road : 7, Block G, House: 4300, Dhaka-1212
                    Banani, Dhaka, Bangladesh</p>
                   </div>
                   <div className="border-t lg:w-4/6 border-gray-300 my-4"></div>
                   <div>
                   <p className="flex items-center gap-2 lg:w-4/5"><FaPhoneAlt className="text-red-500"></FaPhoneAlt> +880 1701294444</p>
                   </div>
                   <div className="border-t lg:w-4/6 border-gray-300 my-4"></div>
                   <div>
                   <p className="flex items-center gap-2 lg:w-4/6"><MdEmail className="text-red-500"></MdEmail> visanavi2222@gamil.com</p>
                   </div>
                   <div className="border-t lg:w-4/6 border-gray-300 my-4"></div>
                   <div>
                   <p className="flex items-center gap-2 w-4/5"><BiWorld className="text-red-500"></BiWorld> https://navi-visa.web.app/</p>
                   </div>
                   <div className="border-t lg:w-4/6 border-gray-300 my-4"></div>
                   </div>
                   </div>
                </div>
                <div className="my-7 flex gap-5">
                   
                    <div>
                        <Link href="https://www.facebook.com" target="_blank"> <FaFacebook className="text-blue-600" size={30}></FaFacebook></Link>
                    </div>
                    <div>
                        <FaInstagram className="text-red-600" size={30}></FaInstagram>
                    </div>
                    <div>
                        <FaXTwitter className="text-black-600" size={30}></FaXTwitter>
                    </div>
                </div>

            </div>
            <div className="card   w-full  max-w-xl shadow-2xl">
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text ">Name</span>
                        </label>
                        <input type="text" placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control lg:gap-2 lg:flex-row">
                        <div className="lg:w-1/2">
                            <label className="label">
                                <span className="label-text ">Email</span>
                            </label>
                            <input type="email" placeholder="Email" className="input w-full input-bordered" />
                        </div>
                        <div className="lg:w-1/2">
                            <label className="label">
                                <span className="label-text ">Mobile</span>
                            </label>
                            <input type="text" placeholder="Mobile" className="input w-full input-bordered" />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text ">Comments/ Questions</span>
                        </label>
                        <textarea className="textarea textarea-bordered " rows={4} placeholder="Your Massage"></textarea>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn outline-none border-none bg-[#e63746] hover:border-[#e63746] text-white hover:bg-white hover:text-black ">Submit Massage</button>
                    </div>
                </form>
            </div>
        </div>
        
    </div> 
        </div>
    );
};

export default Contact;