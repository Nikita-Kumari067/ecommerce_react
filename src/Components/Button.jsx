const buttonLabels = ['Men', 'Women', 'Kids', 'Furniture', 'Beauty', 'Fragrance', 'Groceries'];
export default function button() {
    return (
        <div>
        <div className="flex items-center justify-around">
            {buttonLabels.map((label, index) => (
                <button
                    key={index}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-6 border border-blue-700 rounded">
                    {label}
                </button>
            ))}
        </div>
        <div className="bg-blue-500 p-1 mt-6 w-[50%] rounded mx-auto">
            <h3 className="text-white-400 text-center text-lg">SALE UPTO 50% Grab it!</h3>
        </div>
        <div className="flex items-center justify-between mt-4">
            <img className="h-[700px]] w-[50%] rounded-md ml-2 shadow-lg shadow-blue-500/50"src={"./images/mennew.png"}></img>
            <img className="h-[7px]] w-[50%] rounded-md shadow-lg shadow-blue-500/50"src={"./images/perfume.png"}></img>
           
        </div>
        <div className="flex items-center justify-center mt-4">
        
        <img className="h-[700px]] w-[50%] rounded-md ml-2 shadow-lg shadow-blue-500/50"src={"./images/womendress.png"}></img>
            <img className="h-[700px]] w-[50%] rounded-md shadow-lg shadow-blue-500/50"src={"./images/shoes.png"}></img>

        </div>
    </div>



    );
};


