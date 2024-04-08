import React from 'react';
import { Formik } from 'formik';
import headerMainImg from '../../assets/form.jpg';
import Map from './map';
function Contact() {
  return (
    <div className="bg-black py-24">
      <div className="container mx-auto px-4 lg:w-3/4">
        <div className="text-center flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2 text-white text-left">
            <h4 className="text-5xl font-bold mb-8">Let's Talk?</h4>
            <p className="text-lg mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              voluptates deserunt, molestiae soluta cumque eum.
            </p>

            <Formik
              initialValues={{ name: '', email: '', address: '' }}
              validate={(values) => {
                const errors = {};

                if (!values.name) {
                  errors.name = 'Name is required';
                } else if (!/^[A-Za-z\s]*$/.test(values.name)) {
                  errors.name = 'Invalid name format';
                }

                if (!values.email) {
                  errors.email = 'Email is required';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = 'Invalid email address';
                }

                if (!values.address) {
                  errors.address = 'Address is required';
                }

                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      className="bg-gray-800 text-white px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-title"
                    />
                    {errors.name && touched.name && (
                      <span className="text-white">{errors.name}</span>
                    )}
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      className="bg-gray-800 text-white px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-title"
                    />
                    {errors.email && touched.email && (
                      <span className="text-white">{errors.email}</span>
                    )}
                  </div>

                  <div>
                    <input
                      type="text"
                      name="address"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.address}
                      className="bg-gray-800 text-white px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-title"
                    />
                    {errors.address && touched.address && (
                      <span className="text-white">{errors.address}</span>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-title text-white px-4 py-2 rounded-md w-full hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-title"
                  >
                    Contact Us
                  </button>
                </form>
              )}
            </Formik>
          </div>

          <div className="lg:w-1/2">
            <img
              src={headerMainImg}
              alt="about"
              className="w-full h-auto lg:h-full object-cover"
            />
          </div>
        </div>
      </div>
      <Map/>
    </div>
  );
}

export default Contact;