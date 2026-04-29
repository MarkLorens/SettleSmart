import Navbar from "../components/Navbar";
import Divider from "../components/Divider";
import Footer from "../components/Footer";
import HeroPic from "../assets/ContactFormPic.png";

const ContactForm = () => {
    return (
        <section id="ContactFormSection" className="bg-gray-50 flex flex-col">
            <Navbar />
            <div className="max-w-4xl mx-auto mt-30 px-4 sm:px-6 lg:px-6 py-8 w-full mb-8 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden ">
                <div className="mb-8 text-center space-y-8 py-8" id="Title">
                    <div className="w-40 h-40 mx-auto">
                        <img src={HeroPic} alt="Sion Picture" className="w-full h-full rounded-full shadow-2xl object-cover" />
                    </div>
                    <div className="max-w-fit text-center mx-auto">
                        <p className="text-gray-600 font-montserrat text-sm bg-gray-200 px-3 py-2 rounded-lg shadow-sm">
                            Non-Binding and Free of Charge
                        </p>
                    </div>
                    <h3 className="text-5xl font-bold text-gray-900 font-oswald">
                        Let us Talk
                    </h3>
                    <p className="text-gray-600 font-montserrat text-sm">
                        Choose your concern and we will discuss.
                    </p>
                </div>
                <form action="#" className="p-8">
                    <div id="TopicSection" className="mb-8">
                        <div id="TopicLabel" className="mb-4">
                            <h3 className="text-gray-600 font-oswald font-light text-sm">WHAT IS IMPORTANT TO YOU</h3>
                        </div>
                        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 text-center text-xs text-gray-800 font-montserrat leading-relaxed tracking-wider">
                            <div id="TopicCard1" className="bg-gray-100 border-gray-200 border shadow-sm rounded-xl py-6 hover:bg-white hover:-translate-y-1 hover:text-blue hover:border-blue cursor-pointer transition-all">
                                INSURANCE
                            </div>
                            <div id="TopicCard2" className="bg-gray-100 border-gray-200 border shadow-sm rounded-xl py-6 hover:bg-white hover:-translate-y-1 hover:text-blue hover:border-blue cursor-pointer transition-all">
                                CONTRACT CHECK
                            </div>
                            <div id="TopicCard3" className="bg-gray-100 border-gray-200 border shadow-sm rounded-xl py-6 hover:bg-white hover:-translate-y-1 hover:text-blue hover:border-blue cursor-pointer transition-all">
                                PENSION SCHEME
                            </div>
                            <div id="TopicCard4" className="bg-gray-100 border-gray-200 border shadow-sm rounded-xl py-6 hover:bg-white hover:-translate-y-1 hover:text-blue hover:border-blue cursor-pointer transition-all">
                                ASSET BUILDING
                            </div>
                            <div id="TopicCard5" className="lg:col-span-2 mx-auto w-full lg:w-1/2 bg-gray-100 border-gray-200 border shadow-sm rounded-xl py-6 hover:bg-white hover:-translate-y-1 hover:text-blue hover:border-blue cursor-pointer transition-all">
                                PROPERTY
                            </div>
                        </div>
                    </div>
                    <Divider />
                    <div id="TimingSection" className="mb-8">
                        <div id="TimingLabel" className="mb-4">
                            <h3 className="text-gray-600 font-oswald font-light text-sm">WHEN IS BEST FOR YOU</h3>
                        </div>
                        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 text-center text-xs text-gray-800 font-montserrat leading-relaxed tracking-wider">
                            <div id="TimingCard1" className="bg-gray-100 border-gray-200 border shadow-sm rounded-xl py-6 hover:bg-white hover:-translate-y-1 hover:text-blue hover:border-blue cursor-pointer transition-all">
                                MORNING (8-12)
                            </div>
                            <div id="TimingCard2" className="bg-gray-100 border-gray-200 border shadow-sm rounded-xl py-6 hover:bg-white hover:-translate-y-1 hover:text-blue hover:border-blue cursor-pointer transition-all">
                                NOON (12-14)
                            </div>
                            <div id="TimingCard3" className="bg-gray-100 border-gray-200 border shadow-sm rounded-xl py-6 hover:bg-white hover:-translate-y-1 hover:text-blue hover:border-blue cursor-pointer transition-all">
                                AFTERNOON (14-17)
                            </div>
                            <div id="TimingCard4" className="bg-gray-100 border-gray-200 border shadow-sm rounded-xl py-6 hover:bg-white hover:-translate-y-1 hover:text-blue hover:border-blue cursor-pointer transition-all">
                                EVENING (17-19)
                            </div>
                        </div>
                    </div>
                    <Divider />
                    <div id="ParticularSection" className="mb-8">
                        <div id="ParticularLabel" className="mb-4">
                            <h3 className="text-gray-600 font-oswald font-light text-sm">PARTIUCLARS</h3>
                        </div>
                    </div>
                    <div id="MessageSection">
                        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 text-center text-xs text-gray-800 font-montserrat leading-relaxed tracking-wider">
                            <input type="text" id="NameField" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue focus:border-transparent transition-all" placeholder="Your Name" />
                            <input type="email" id="EmailField" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue focus:border-transparent transition-all" placeholder="Your Email" />
                            <textarea rows="6" id="NameField" className="lg:col-span-2 mx-auto w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 focus:bg-white focus:ring-1 focus:ring-blue focus:border-transparent transition-all resize-none" placeholder="Tell Us More of What You Need" />
                        </div>
                    </div>
                    <div id="ActionButtonSection">
                        <div id="AgreementCheckBox" className="flex items-center gap-2 py-6">
                            <input type="checkbox" className="h-6 w-5" name="agreementcheckboxinput" id="AgreementCheckBoxInput" />
                            <label htmlFor="agreementCheckBoxinput" className="text-xs text-gray-600 font-light">I have read the information stated in the privacy policy page, and hereby agree that my contact details will be stored and processed.</label>
                        </div>
                        <div id="SubmitButton">
                            <button
                                type="submit"
                                className="flex-1 px-8 py-3 bg-blue text-white rounded-lg hover:bg-blue/90 cursor-pointer transition-colors font-medium w-full"
                            >
                                Send Request
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </section>
    );
}

export default ContactForm;