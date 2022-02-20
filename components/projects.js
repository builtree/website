import Link from "next/link";
import React from "react";

function Projects() {
    return (
        <div className=" max-w-7xl mx-auto">
            <h2 className="text-xl font-bold text-[#0B4870] underline underline-offset-8 decoration-[#FFA62B] text-center py-12">
                Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-10 items-center justify-center justify-items-center py-8">
                <div className="relative max-w-2xl">
                    <img src="/project_illustration.svg" />
                </div>
                <div className="relative max-w-2xl">
                    <p className="font-semibold text-justify text-base text-[#0B4870] ">
                        <span className="block">Projects can be intimidating, especially when you can see the source.</span>
                        <span className="block pt-4">But it doesn’t matter if you are a beginner or a pro, there’s always something you can help with.</span>
                        <span className="block pt-4">Admins and Mentors at Builtree are here to help you navigate through the project and find where you can make a difference.</span>
                    </p>
                </div>
            </div>
            <div className="flex mx-10 items-center justify-center py-8">
                <p className="text-[#0B4870] text-center">
                    <span className="text-4xl font-bold">We <span className="text-red-500">❤️</span> Open Source!</span>
                    <span className="block pt-4 text-2xl font-semibold">and strive to keep most of projects open to everyone.</span>
                    <Link href="/projects"><span className="block hover:font-bold hover:text-orange-400 pt-4 text-lg font-semibold">Check out our projects →</span></Link>
                </p>
            </div>
        </div>
    );
}

export default Projects;
