import PillButton from '../../components/pill-button/pill-button.component';
import { useFormik } from "formik"
import contactSchema from '../../utils/validation_schemas/contact.schema';

const ContactForm = () => {
    const onSubmit = (values, actions) => {
        actions.resetForm()
    }

    const { values, handleBlur, handleChange, handleSubmit, errors, touched } = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: ""
        },
        validationSchema: contactSchema,
        onSubmit
    })

    return (
        <div className='flex flex-col space-y-8 bg-backdrop p-8 rounded ' >
            <div>
                <h1 className='text-6xl text-white uppercase font-Kizard' >Need More ... </h1>
                <p className='text-white uppercase' >Get yourself custom beats</p>
                <p className='text-white uppercase' >Tell us what you need and we will get back to you</p>
            </div>
            <div>
                <h1 className='text-4xl text-white uppercase font-Kizard' >Write to Us</h1>
                <div className="flex flex-col justify-center" >
                    <form className="w-full mx-auto rounded-lg flex flex-col space-y-4" onSubmit={handleSubmit} >
                        <div>
                            <input
                                style={errors.name && touched.name ? { border: "1px solid red" } : {}}
                                onChange={handleChange}
                                value={values.name}
                                onBlur={handleBlur}
                                placeholder="Full Name"
                                name="name"
                                className="rounded-lg w-full bg-white  p-2 focus:border-blue focus:bg-bg focus:outline-none focus:text-white"
                                type="text"
                            />
                            {errors.name && touched.name ? <p className="text-red-300 " >{errors.name}</p> : null}
                        </div>
                        <div>
                            <input
                                style={errors.email && touched.email ? { border: "1px solid red" } : {}}
                                onChange={handleChange}
                                value={values.email}
                                onBlur={handleBlur}
                                placeholder="Your Email"
                                name="email"
                                className="rounded-lg w-full bg-white  p-2 focus:border-blue focus:bg-bg focus:outline-none focus:text-white"
                                type="email"
                            />
                            {errors.email && touched.email ? <p className="text-red-300 " >{errors.email}</p> : null}
                        </div>
                        <div>
                            <textarea
                                rows={4}
                                value={values.message}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                name="message"
                                placeholder='Write Your Message ...'
                                className="rounded-lg w-full bg-white  p-2 focus:border-blue focus:bg-bg focus:outline-none focus:text-white"
                            />
                            {errors.message && touched.message ? <p className="text-red-300 " >{errors.message}</p> : null}
                        </div>
                        <PillButton color="p">Send</PillButton>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;