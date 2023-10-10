import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import { slideIn } from '../utils/motion'
import SectionWrapper from '../hoc/SectionWrapper'
import EarthCanvas from './canvas/Earth'

function Contacts() {
  const formRef = useRef<HTMLFormElement | null>(null)
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { target } = e
    const { name, value } = target

    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .send(
        'service_8zp8g7w',
        'template_ehkk3e7',
        {
          from_name: form.name,
          to_name: 'Ahmad Saleem',
          from_email: form.email,
          to_email: 'ahmadsaleem94@hotmail.com',
          message: form.message,
        },
        'K4jzHZp-2sG0XzDQA'
      )
      .then(
        () => {
          setLoading(false)
          alert('Thank you. I will get back to you as soon as possible.')

          setForm({
            name: '',
            email: '',
            message: '',
          })
        },
        (error) => {
          setLoading(false)
          console.error(error)

          alert('Ahh, something went wrong. Please try again.')
        }
      )
      .catch((error) => {
        console.error(error)
      })
  }
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div
          className={`flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row`}
        >
          <motion.div
            variants={slideIn('left', 'tween', 0.2, 1)}
            className="bg-black-100 rounded-2xl p-8"
          >
            <div className=" mb-8 items-center gap-4">
              <p className="text-secondary text-[14px] uppercase tracking-wider text-white sm:text-[18px]">
                Get in touch
              </p>
              <h3 className="xs:text-[40px] text-[30px] font-black text-white sm:text-[50px] md:text-[60px]">
                Contact.
              </h3>
            </div>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-12 flex flex-col gap-8"
            >
              <label className="flex flex-col">
                <span className="mb-4 font-medium text-white">Your Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your good name?"
                  className="bg-tertiary placeholder:text-secondary rounded-lg border-none py-4 px-6 font-medium text-white outline-none text-black"
                />
              </label>
              <label className="flex flex-col">
                <span className="mb-4 font-medium text-white">Your email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your web address?"
                  className="bg-tertiary placeholder:text-secondary rounded-lg border-none py-4 px-6 font-medium text-white outline-none text-black"
                />
              </label>
              <label className="flex flex-col">
                <span className="mb-4 font-medium text-white">
                  Your Message
                </span>
                <textarea
                  rows={7}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What you want to say?"
                  className="bg-tertiary placeholder:text-secondary rounded-lg border-none py-4 px-6 font-medium text-white outline-none"
                />
              </label>
              <div className="button-container">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-tertiary shadow-primary w-fit justify-start rounded-xl py-3 px-8 font-bold text-white shadow-md outline-none hover:bg-white hover:text-black relative z-10"
                >
                  {loading ? 'Sending...' : 'Send'}
                </motion.button>
              </div>
            </form>
          </motion.div>

          <motion.div
            variants={slideIn('right', 'tween', 0.2, 1)}
            className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
          >
            <EarthCanvas />
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}

export default SectionWrapper(Contacts, 'contacts')
