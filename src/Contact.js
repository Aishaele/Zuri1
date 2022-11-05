// import Frame from "./Frame.svg"

const Contact = () => {
    const name = 'Aisha'
  return (
    <div className='contact-div'>
        <h1> Contact Me</h1>
        <p> Hi there, contact me to ask me about anything you have in mind.</p>

        <form action="form" className="form">
            <div className="F-L">
                <div className="style-input">
                    <label htmlFor=" First_name"> First name</label> <br />
                    <input id='first_name' type="text" placeholder='Enter your first name'/>
                </div>
                <div>
                    <label htmlFor="Last_name"> Last name</label> <br />
                    <input id='last_name' type="text" placeholder='Enter your last name' />
                </div>
            </div>
            <div className="email">
                <label htmlFor="Email">Email</label> <br />
                <input id='email' type="Email"  placeholder='yourname@gmail.com'/>
            </div>
            <div className="message">
                <label htmlFor="message"> Message</label><br />
                <textarea name="message" id="message" cols="30" rows="10" placeholder="Send me a message and I'll reply you as soon as possible..."></textarea>
            </div>
        </form>
            <div className='frame'> 
                <input className="checkbox" type="checkbox" />
                <p>You agree to providing your data to {name} who may contact you.</p> 
            </div>

        <button id='btn_btn'> Send message</button>
    </div>
  )
}

export default Contact