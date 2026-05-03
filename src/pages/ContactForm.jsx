import Navbar from "../components/helper/Navbar";
import Divider from "../components/helper/Divider";
import Footer from "../components/helper/Footer";
import HeroPic from "../assets/ContactFormPic.png";
import { useState } from "react";
import { createContactFrom } from "../service/ContactFormService";
import SuccessDialogue from "../components/helper/SuccessDialogue";

const ContactForm = () => {
    // Form
    const initialFormData = { // Init
        topic: [],
        timing: [],
        contactName: "",
        email: "",
        message: "",
        agreement: false,
    };

    const [formData, setFormData] = useState(initialFormData)

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }))

        console.log(formData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            createContactFrom(formData);
            setFormData(initialFormData);
            setErrors({});
            setShowSuccess(true);
        }
    }

    // Error
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let newErrors = {};

        if (formData.topic.length === 0) {
            newErrors.topic = "Please select at least one topic.";
        }

        if (formData.timing.length === 0) {
            newErrors.timing = "Please choose a preferred timing.";
        }

        if (!formData.contactName.trim() || !formData.email.trim() || !formData.message.trim()) {
            newErrors.particular = "Please fill in all the fields.";
        }

        if (!formData.agreement) {
            newErrors.agreement = "Please check the box to show that you have agreed to the term."
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    // Data Handling
    const topics = [
        "INSURANCE",
        "CONTRACT CHECK",
        "PENSION SCHEME",
        "ASSET BUILDING",
        "PROPERTY",
    ]

    const timings = [
        "MORNING (8-12)",
        "NOON (12-14)",
        "AFTERNOON (14-17)",
        "EVENING (17-19)",
    ]

    const toggleTopic = (selectedTopic) => {
        setFormData((prev) => ({
            ...prev,
            topic: prev.topic.includes(selectedTopic)
                ? prev.topic.filter((item) => item !== selectedTopic)
                : [...prev.topic, selectedTopic],
        }));
    };

    const toggleTiming = (selectedTiming) => {
        setFormData((prev) => ({
            ...prev,
            timing: prev.timing.includes(selectedTiming)
                ? prev.timing.filter((item) => item !== selectedTiming)
                : [...prev.timing, selectedTiming]
        }))
    }

    // Dialogue box
    const [showSuccess, setShowSuccess] = useState(false);

    return (
        <section id="ContactFormSection" className="bg-gray-50 flex flex-col relative">
            <SuccessDialogue isOpen={showSuccess} onClose={() => setShowSuccess(false)} dialogueMessage={"Your form has been submitted. We will reach out to you as soon as possible."} />
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
                <form onSubmit={handleSubmit} className="p-8">
                    <div id="TopicSection" className="mb-8">
                        <div id="TopicLabel" className="mb-4 flex justify-between">
                            <h3 className="text-gray-600 font-oswald font-light text-sm">WHAT IS IMPORTANT TO YOU</h3>
                            {errors.topic && (
                                <h3 className="text-red-500 text-xs font-extralight">{errors.topic}</h3>
                            )}
                        </div>
                        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 text-center text-xs text-gray-800 font-montserrat leading-relaxed tracking-wider">
                            {topics.map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() => toggleTopic(item)}
                                    className={`
                                ${item === "PROPERTY"
                                            ? "lg:col-span-2 mx-auto w-full lg:w-1/2"
                                            : ""
                                        }
                                py-6 rounded-xl border shadow-sm cursor-pointer transition-all
                                ${formData.topic.includes(item)
                                            ? "bg-blue text-white border-blue scale-105"
                                            : "bg-gray-100 border-gray-200 hover:bg-white hover:-translate-y-1 hover:text-blue hover:border-blue"
                                        }
                            `}
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                    <Divider />
                    <div id="TimingSection" className="mb-8">
                        <div id="TimingLabel" className="mb-4 flex justify-between">
                            <h3 className="text-gray-600 font-oswald font-light text-sm">WHEN IS BEST FOR YOU</h3>
                            {errors.timing && (
                                <h3 className="text-red-500 text-xs font-extralight">{errors.timing}</h3>
                            )}
                        </div>
                        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 text-center text-xs text-gray-800 font-montserrat leading-relaxed tracking-wider">
                            {timings.map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() => toggleTiming(item)}
                                    className={`
                                        py-6 rounded-xl border shadow-sm cursor-pointer transition-all
                                ${formData.timing.includes(item)
                                            ? "bg-blue text-white border-blue scale-105"
                                            : "bg-gray-100 border-gray-200 hover:bg-white hover:-translate-y-1 hover:text-blue hover:border-blue"
                                        }
                                `}>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                    <Divider />
                    <div id="ParticularSection" className="mb-8">
                        <div id="ParticularLabel" className="mb-4 flex justify-between">
                            <h3 className="text-gray-600 font-oswald font-light text-sm">PARTIUCLARS</h3>
                            {errors.particular && (
                                <h3 className="text-red-500 text-xs font-extralight">{errors.particular}</h3>
                            )}
                        </div>
                    </div>
                    <div id="MessageSection">
                        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 text-center text-xs text-gray-800 font-montserrat leading-relaxed tracking-wider">
                            <div className="flex flex-col">
                                <input
                                    type="text"
                                    id="NameField"
                                    name="contactName"
                                    value={formData.contactName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue focus:border-transparent transition-all relative" placeholder="Your Name" />
                            </div>
                            <input
                                type="email"
                                id="EmailField"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue focus:border-transparent transition-all" placeholder="Your Email" />
                            <textarea
                                rows="6"
                                id="MessageField"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="lg:col-span-2 mx-auto w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 focus:bg-white focus:ring-1 focus:ring-blue focus:border-transparent transition-all resize-none" placeholder="Tell Us More of What You Need" />
                        </div>
                    </div>
                    <div id="ActionButtonSection">
                        <div id="AgreementCheckBox">
                            <div className="flex items-center gap-2 py-4">
                                <input type="checkbox" name="agreement" checked={formData.agreement} onChange={handleChange} className="h-6 w-5" id="AgreementCheckBoxInput" />
                                <label htmlFor="AgreementCheckBoxInput" className="text-xs text-gray-600 font-light">I have read the information stated in the privacy policy page, and hereby agree that my contact details will be stored and processed.</label>
                            </div>
                            {errors.agreement && (
                                <h3 className="text-red-500 text-xs font-extralight pb-2">{errors.agreement}</h3>
                            )}
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