const Controller = () => {
    return (
        <div className="flex space-x-4">
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                -1
            </button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                -10
            </button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                -100
            </button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                +100
            </button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                +10
            </button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                +1
            </button>
        </div>
    );
};

export default Controller;
