import React from 'react';
import { useState } from 'react';
import Chessboard from "chessboardjsx";
import { ChessInstance, ShortMove } from "chess.js";
import { Chess } from 'chess.js';
import Header from './header';

const Black: React.FC = () => {

    const [chess] = useState<ChessInstance>(
        new Chess("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR b KQkq - 0 1")
    );

    const [fen, setFen] = useState(chess.fen());

    const handleMove = (move: ShortMove) => {
        if (chess.move(move)) {
            setTimeout(() => {
                const moves = chess.moves();

                if (moves.length > 0) {
                    const computerMove = moves[Math.floor(Math.random() * moves.length)];
                    chess.move(computerMove);
                    setFen(chess.fen());
                }
            }, 300);

            setFen(chess.fen());
        }
    };


    return (
        <div className='d-flex flex-column'>
            <Header />
            <Chessboard
                width={400}
                position={fen}
                orientation='black'
                onDrop={(move) =>
                    handleMove({
                        from: move.sourceSquare,
                        to: move.targetSquare,
                        promotion: "q",
                    })
                }
            />
        </div>
    );
};

export default Black;