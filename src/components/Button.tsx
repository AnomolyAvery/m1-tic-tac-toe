import classNames from "@/utils/classNames";

type Props = {
    color: 'blue' | 'red' | 'green' | 'yellow' | 'purple' | 'pink' | 'orange' | 'gray' | 'black' | 'white';
    onClick: () => void;
    children: React.ReactNode;
}

const Button: React.FC<Props> = ({ children, onClick, color = 'blue' }) => {
    return (
        <button
            className={
                classNames(
                    'px-4 py-2 text-lg font-medium rounded-md',
                    color === 'blue' ? 'bg-blue-600 hover:bg-blue-800' : '',
                    color === 'red' ? 'bg-red-600 hover:bg-red-800' : '',
                    color === 'green' ? 'bg-green-600 hover:bg-green-800' : '',
                    color === 'yellow' ? 'bg-yellow-600 hover:bg-yellow-800' : '',
                    color === 'purple' ? 'bg-purple-600 hover:bg-purple-800' : '',
                    color === 'pink' ? 'bg-pink-600 hover:bg-pink-800' : '',
                    color === 'orange' ? 'bg-orange-600 hover:bg-orange-800' : '',
                    color === 'gray' ? 'bg-gray-600 hover:bg-gray-800' : '',
                    color === 'black' ? 'bg-black-600 hover:bg-black-800' : '',
                    color === 'white' ? 'bg-white-600 hover:bg-white-800' : ''
                )
            }
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;