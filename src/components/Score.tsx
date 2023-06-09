import './Score.css';

interface scoreProps {
    value: number
}

const Score = ({value}: scoreProps) =>{
    const getBorderColor = () => {
        if(value >= 7) return 'border-green-400';
        if(value > 4 && value < 7) return 'border-yellow-400';
        return 'border-red-400';
      }

    return (
        <span
            className={`score text-center text-white inline-block mx-2 my-3 py-2 px-2 border-4 bg-black bg-opacity-75 rounded-full ${getBorderColor()}`}
          >
            
            {value}
          </span>
    )
}

export default Score;