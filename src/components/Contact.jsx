import '../styles/Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="section fade-in">
        <h2>Contact Me</h2>
        <form id="contact-form">
            <input type="text" id="name" placeholder="Your Name" required />
            <textarea id="message" placeholder="Your Message" required></textarea>
            <button type="submit">Send Email</button>
        </form>

        <h2>Find Me Online</h2>
        <div className="project-list">
            <a href="https://github.com/sujankumarroy" target="_blank" className="btn">GitHub</a>
            <a href="https://linkedin.com/in/SKR0411" target="_blank" className="btn">LinkedIn</a>
            <a href="mailto:sujanroy63836@gmail.com" className="btn">Email</a>
        </div>
    </section>
  )
}

export default Contact