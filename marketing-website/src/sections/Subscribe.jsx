import Button from '../components/Button'
const Subscribe = () => {
  return (
   <section className="max-container flex justify-between items-center max-lg:flex-col gap-10">
    <h3 className="font-palanquin  text-4xl font-bold text-center leading-[68px] lg:max-w-md" id="contact-us">Sign Up for
        <span className="text-coral-red"> Update </span>
        & Newsletter
      </h3>
      <div className='flex lg:max-w-[40%] w-full items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'>
        <input type="text" placeholder="subscribe@ojo.com" className="input"/>
        <div className='flex max-sm:justify-end items-center max-sm:w-full'>
          <Button label='Sign Up' fullWidth/>
        </div>
      </div>
   </section>
  )
}

export default Subscribe