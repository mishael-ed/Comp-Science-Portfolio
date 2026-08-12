import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Contact.css'

// ─── Web3Forms setup ──────────────────────────────────────────────────────────
// 1. Go to https://web3forms.com
// 2. Enter mishaeledegwa@gmail.com and click "Create Access Key"
// 3. Check your Gmail for the key and paste it below — done.
const WEB3FORMS_KEY = '9af89887-6048-4611-b0ac-b762eb6dfe77'
// ─────────────────────────────────────────────────────────────────────────────

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const navigate = useNavigate()
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return
    setStatus('sending')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: (formRef.current.elements.namedItem('name') as HTMLInputElement)?.value,
          email: (formRef.current.elements.namedItem('email') as HTMLInputElement)?.value,
          phone: (formRef.current.elements.namedItem('phone') as HTMLInputElement)?.value,
          country: (formRef.current.elements.namedItem('country') as HTMLInputElement)?.value,
          message: (formRef.current.elements.namedItem('message') as HTMLTextAreaElement)?.value,
        }),
      })

      const data = await res.json()
      console.log('Web3Forms response:', data)
      if (res.ok && data.success) {
        setStatus('success')
        formRef.current.reset()
      } else {
        setStatus('error')
      }
    } catch (err) {
      console.error('Form error:', err)
      setStatus('error')
    }
  }

  return (
    <div className="contact-page">
      <nav className="contact-nav">
        <button onClick={() => navigate(-1)} className="contact-back">← Back to Portfolio</button>
      </nav>

      <div className="contact-wrapper">
        <div className="contact-header">
          <h1 className="contact-title">Work With Me</h1>
          <p className="contact-subtitle">Tell me a bit about your project and I'll get back to you.</p>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="contact-form" noValidate>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                required
                autoComplete="name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                required
                autoComplete="email"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+1 234 567 8900"
                autoComplete="tel"
              />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <select id="country" name="country" autoComplete="country-name">
                <option value="">Select your country</option>
                <option>Afghanistan</option><option>Albania</option><option>Algeria</option><option>Andorra</option><option>Angola</option><option>Argentina</option><option>Armenia</option><option>Australia</option><option>Austria</option><option>Azerbaijan</option><option>Bahamas</option><option>Bahrain</option><option>Bangladesh</option><option>Belarus</option><option>Belgium</option><option>Belize</option><option>Benin</option><option>Bhutan</option><option>Bolivia</option><option>Bosnia and Herzegovina</option><option>Botswana</option><option>Brazil</option><option>Brunei</option><option>Bulgaria</option><option>Burkina Faso</option><option>Burundi</option><option>Cambodia</option><option>Cameroon</option><option>Canada</option><option>Chad</option><option>Chile</option><option>China</option><option>Colombia</option><option>Congo</option><option>Costa Rica</option><option>Croatia</option><option>Cuba</option><option>Cyprus</option><option>Czech Republic</option><option>Denmark</option><option>Djibouti</option><option>Dominican Republic</option><option>Ecuador</option><option>Egypt</option><option>El Salvador</option><option>Estonia</option><option>Ethiopia</option><option>Fiji</option><option>Finland</option><option>France</option><option>Gabon</option><option>Gambia</option><option>Georgia</option><option>Germany</option><option>Ghana</option><option>Greece</option><option>Guatemala</option><option>Guinea</option><option>Haiti</option><option>Honduras</option><option>Hungary</option><option>Iceland</option><option>India</option><option>Indonesia</option><option>Iran</option><option>Iraq</option><option>Ireland</option><option>Israel</option><option>Italy</option><option>Jamaica</option><option>Japan</option><option>Jordan</option><option>Kazakhstan</option><option>Kenya</option><option>Kuwait</option><option>Kyrgyzstan</option><option>Laos</option><option>Latvia</option><option>Lebanon</option><option>Liberia</option><option>Libya</option><option>Lithuania</option><option>Luxembourg</option><option>Madagascar</option><option>Malawi</option><option>Malaysia</option><option>Maldives</option><option>Mali</option><option>Malta</option><option>Mauritania</option><option>Mauritius</option><option>Mexico</option><option>Moldova</option><option>Monaco</option><option>Mongolia</option><option>Montenegro</option><option>Morocco</option><option>Mozambique</option><option>Myanmar</option><option>Namibia</option><option>Nepal</option><option>Netherlands</option><option>New Zealand</option><option>Nicaragua</option><option>Niger</option><option>Nigeria</option><option>North Korea</option><option>Norway</option><option>Oman</option><option>Pakistan</option><option>Panama</option><option>Paraguay</option><option>Peru</option><option>Philippines</option><option>Poland</option><option>Portugal</option><option>Qatar</option><option>Romania</option><option>Russia</option><option>Rwanda</option><option>Saudi Arabia</option><option>Senegal</option><option>Serbia</option><option>Sierra Leone</option><option>Singapore</option><option>Slovakia</option><option>Slovenia</option><option>Somalia</option><option>South Africa</option><option>South Korea</option><option>South Sudan</option><option>Spain</option><option>Sri Lanka</option><option>Sudan</option><option>Sweden</option><option>Switzerland</option><option>Syria</option><option>Taiwan</option><option>Tajikistan</option><option>Tanzania</option><option>Thailand</option><option>Togo</option><option>Trinidad and Tobago</option><option>Tunisia</option><option>Turkey</option><option>Turkmenistan</option><option>Uganda</option><option>Ukraine</option><option>United Arab Emirates</option><option>United Kingdom</option><option>United States</option><option>Uruguay</option><option>Uzbekistan</option><option>Venezuela</option><option>Vietnam</option><option>Yemen</option><option>Zambia</option><option>Zimbabwe</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={7}
              placeholder="Tell me about your project..."
              required
            />
          </div>

          <button
            type="submit"
            className="contact-submit"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="form-feedback success">Message sent! I'll get back to you soon.</p>
          )}
          {status === 'error' && (
            <p className="form-feedback error">Something went wrong. Please try again or email me directly at mishaeledegwa@gmail.com</p>
          )}
        </form>
      </div>
    </div>
  )
}
