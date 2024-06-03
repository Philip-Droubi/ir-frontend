import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import Error from '@/assets/json/Error.json'
import Lottie from "react-lottie-player";

export default function NotFound() {
    return (
        <div className='bg-neutral-100 flex flex-col text-center items-center justify-center min-h-screen py-8 px-4'>
            <Lottie
                className=""
                loop
                animationData={Error}
                play
                style={
                    { width: '140px', height: "140px" }
                }
            />
            <h1 className='font-extrabold text-8xl'>404</h1>
            <p className='text-3xl mb-3'>OoPs! Page Not Found</p>
            <Link to={'/'}>
                <Button variant="contained" className={`text-blue-600`} color='error'>Go Back Home</Button>
            </Link>
        </div>
    )
}