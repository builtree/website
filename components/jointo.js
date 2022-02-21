import Image from "next/image";
import React from "react";
import Background from "./background";

function JoinTo() {
    return (
        <div className="max-w-7xl mx-auto">
            {/* Background */}
            <h2 className="text-lg font-bold text-[#0B4870] text-center pt-12">
                JOIN TO
            </h2>
            <div className="flex flex-wrap gap-10 mx-10 items-center justify-center py-8">
                <div className="flex flex-col border shadow-lg text-center w-56 h-72 items-center">
                    <div className="relative h-24 w-24 m-6">
                        <Image
                            src="/jointo_gear.svg"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    <h3 className="text-base p-2 font-bold text-[#0B4870] text-center">
                        Acquire New Skills
                    </h3>
                    <p className="text-slate-500 text-sm px-3">
                        Get guidance from experienced mentors and Upskill while working on amazing projects or building your own!
                    </p>
                </div>
                <div className="flex flex-col border shadow-lg text-center w-56 h-72 items-center">
                    <div className="relative h-24 w-24 m-6">
                        <Image
                            src="/jointo_collab.svg"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    <h3 className="text-base p-2 font-bold text-[#0B4870] text-center">
                        Collaborate and Build
                    </h3>
                    <p className="text-slate-500 text-sm px-3">
                        Be a part of an active community, share ideas, meet people and build something great together.
                    </p>
                </div>
                <div className="flex flex-col border shadow-lg text-center w-56 h-72 items-center">
                    <div className="relative h-24 w-24 m-6">
                        <Image
                            src="/jointo_bulb.svg"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    <h3 className="text-base p-2 font-bold text-[#0B4870] text-center">
                        Turn Ideas Into Products
                    </h3>
                    <p className="text-slate-500 text-sm px-3">
                        {`Got an idea in your mind and don't know where to get started? Propose your idea and make it real.`}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default JoinTo;
