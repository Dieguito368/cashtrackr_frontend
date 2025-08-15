import Image from "next/image";

const Logo = () => (
    <Image 
        alt="Logo CashTrackr"
        className="w-full" 
        height={ 0 } 
        priority 
        src="/logo.svg" 
        width={ 0 } 
    />
);

export default Logo;