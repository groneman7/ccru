// import Link from "next/link";

export default function HomePage() {
    return (
        <div className="flex flex-1 flex-col">
            <div>
                Main Banner
                <div>Welcome to CCRU</div>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget lorem
                    sit amet orci laoreet.{" "}
                </div>
            </div>
            <div className="flex items-center justify-around bg-slate-700 p-4">
                <img
                    className="w-56"
                    src="ukcom.svg"
                    alt="University of Kentucky College of Medicine"
                />
                <img
                    className="w-56"
                    src="sep.png"
                    alt="St. Elizabeth Physicians"
                />
                <div className="w-56 text-white">Emergency Shelter of Northern Kentucky</div>
                <div className="w-56 text-white">Fresh Start Shower Ministry</div>
                <div className="w-56 text-white">Nurse Advocay Center for the Underserved</div>
            </div>
            <div>What we do</div>
            <div>Gallery</div>
            <div>Testimonials</div>
            <div>About us</div>
            <div>Call to action</div>
        </div>
    );
}
