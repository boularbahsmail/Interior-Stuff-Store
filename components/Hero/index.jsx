import React from "react";

const Hero = () => {
    return (
        <div className="py-16 text-center sm:py-20">
            <h1 className="text-5xl my-0  font-bold text-black max-w-3xl m-auto sm:text-7xl sm:my-3">
                Make Your Interior More Minimalistic
            </h1>
	    <h2 className="text-gray-700 my-6 text-md sm:text-xl sm:my-8">
	    	Browse, Choose & Order. Very Simple
	    </h2>
	    <div className="grid grid-cols-1 gap-6 py-10 px-6 md:grid-cols-3 sm:grid-cols-2 sm:px-unset">
	    	<div className="scale-100 md:scale-75">
                        <img src="https://bit.ly/3ocvIeP" alt="Couche-Image" />
                </div>
	    	<div className="scale-100 md:scale-125">
                        <img src="https://bit.ly/3yTtOVB" alt="Couche-Image" />
                </div>
	    	<div className="scale-100 md:scale-75">
	    		<img src="https://bit.ly/3RIkHzz" alt="Couche-Image" />
                </div>
	    </div>
        </div>
    );
}

export default Hero;
