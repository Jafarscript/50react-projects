import { star } from "../assets/icons"
const ReviewCard = ({customerName, rating, feedback,imgURL}) => {
  return (
    <div className="flex flex-col justify-center items-center">
        <img src={imgURL} alt="" width={100} height={100} className="rounded-full object-cover" />
        <p className="info-text text-center mt-6 max-w-sm">{feedback}</p>
        <div className="mt-3 flex justify-start gap-2.5">
            <img src={star} alt="rating" width={24} height={24}/>
            <p className="text-xl font-montserrat leading-normal text-slate-gray">({rating})</p>
        </div>
        <h3 className="mt-1 text-3xl leading-normal font-bold font-palanquin text-center">{customerName}</h3>
    </div>
  )
}

export default ReviewCard