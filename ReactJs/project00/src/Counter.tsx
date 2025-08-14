import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-yellow-100 via-yellow-300 to-yellow-500">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-sm w-full">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 animate-pulse">Let's count the clicks 🎯</h2>
                <p className="text-lg text-gray-700 mb-6 transition-transform duration-300 ease-in-out hover:scale-105">
                    Your count value is:{" "}
                    <span className="font-semibold text-yellow-700 text-2xl animate-bounce">
                        {count}
                    </span>
                </p>
                <button
                    className="bg-yellow-600 hover:bg-yellow-700 transition-all duration-300 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:scale-105 active:scale-95"
                    onClick={() => setCount(count + 1)}
                >
                    Click me!
                </button>
            </div>
        </div>
    );
}

export default Counter;
