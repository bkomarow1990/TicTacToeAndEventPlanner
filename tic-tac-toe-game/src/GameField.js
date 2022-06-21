import Cell from './Cell';
const GameField = ({cells, onClick}) =>(
    <div className='field'>
        {cells.map((cell, ind)=>(
            <Cell key={ind} value={cell} onClick={() => onClick(ind)}></Cell>
        ))}
    </div>
);
export default GameField;