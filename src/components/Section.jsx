import { useState } from "react";

function Section({ title, children }) {
    const [open, setOpen] = useState(false);

    return (
        <div
            onClick={() => setOpen(!open)}
            className="bg-white px-4 py-4 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-100 cursor-pointer transition-all"
        >
            <div className="w-full flex justify-between items-center">
                <h3 className="text-xl font-semibold">{title}</h3>
                <span
                    className={`transition-transform duration-600 ${open ? "rotate-180" : ""
                        } text-blue/50`}
                >
                    ▼
                </span>
            </div>

            <div
                className={`overflow-auto px-2 transition-all duration-600 ${open ? "max-h-125 mt-4" : "max-h-0"
                    }`}
            >
                <div className="text-gray-700">{children}</div>
            </div>
        </div>
    );
}

export default Section;