import React from "react";

const Servicios = ({id}) =>{
    return (
        <section id={id} className="min-h-screen bg-gray-100">
            <div className="bg-gray-100 py-8 mt-14">
            <div className="container mx-auto px-4">
                <div className="flex justify-center">
                    <div className="w-full max-w-2xl bg-white shadow-md rounded-lg">
                        <div className="bg-blue-500 text-white text-center py-4 rounded-t-lg">
                            <h1 className="text-2xl font-bold">Servicios</h1>
                        </div>

                        <div className="p-6">
                            <p className="text-gray-700">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )

 }



 export default Servicios;