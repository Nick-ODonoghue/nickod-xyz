"use client"

export default function Contact() {
  return (
    <section id='contact' className=' px-3 h-auto flex flex-col items-center pt-28'>
      <h2 className=' text-4xl sm:text-5xl lg:text-6xl text-purple-600 font-semibold mb-6 mr-auto '>.contact()</h2>
      <form
        action='https://formsubmit.co/03e978b50190ebb4f042816526b1a7ee'
        method='post'
        className=' flex flex-col gap-6 w-full lg:max-w-2xl border-2 border-slate-800 p-6 rounded-md'
      >
        {/* Remove formsubmit Captsha */}
        <input type='hidden' name='_captcha' value='false' />
        {/* Set Email Subject */}
        <input type='hidden' name='_subject' value='New submission!' />
        {/* Set Redirect */}
        <input type='hidden' name='_next' value='https://NickOD.xyz' />

        <div className=' flex flex-col'>
          <label className=' text-lg font-semibold text-purple-600 mb-2' htmlFor='name'>
            Name
          </label>
          <input
            className=' bg-slate-100 border-none rounded-md py-2 px-4 '
            type='text'
            name='name'
            placeholder='Name'
          />
        </div>
        <div className=' flex flex-col'>
          <label className=' text-lg font-semibold text-purple-600 mb-2' htmlFor='email'>
            Email
          </label>
          <input
            className=' bg-slate-100 border-none rounded-md py-2 px-4'
            type='email'
            name='email'
            placeholder='Email'
          />
        </div>
        <div className=' flex flex-col'>
          <label className=' text-lg font-semibold text-purple-600 mb-2' htmlFor='message'>
            Message
          </label>
          <textarea
            className=' bg-slate-100 border-none rounded-md py-2 px-4 resize-none'
            name='message'
            rows={10}
            placeholder='Message'
          />
        </div>
        <button className=' bg-purple-600 text-white font-semibold py-2 px-4 rounded-md shadow-lg hover:bg-purple-400 hover:shadow-none hover:text-black transition-all duration-500'>
          Send
        </button>
      </form>
    </section>
  )
}
