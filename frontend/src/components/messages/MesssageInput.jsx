import { BsSend } from "react-icons/bs";

const MesssageInput = () => {
    return (
        <form className="px-4 my-3 relative">
            <div className="w-full">
                <input type="text" 
                className="border text-sm rounded-lg w-full p-2.5 bg-gray-700 border-gray-600 text-white" 
                placeholder="Send a message"/>
            </div>
            <button type="submit" className="absolute top-0 bottom-0 right-5  flex items-center pe-3"><BsSend/></button>
            {/*inset-y-0 means top:0 and bottom:0 and end-0 means the right (or left in RTL) position of the element to 0, */}
        </form>
    );
}

export default MesssageInput;