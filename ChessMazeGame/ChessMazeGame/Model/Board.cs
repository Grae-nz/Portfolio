using System;


namespace ChessMazeGame.Model
{
    /// <summary>
    /// Represents a chess board with a grid of cells containing pieces.
    /// </summary>
    public class Board : IBoard
    {
        /// <summary>
        /// Constrcutor for the Board class that initializes the board size and cells.
        /// </summary>
        /// <param name="rows"></param>
        /// <param name="columns"></param>
        public Board(int rows, int columns)
        {
            Rows = rows;
            Columns = columns;
            Cells = new IPiece[rows, columns];
        }

        /// <summary>
        /// Gets the number of rows on the board.
        /// </summary>
        public int Rows { get; }

        /// <summary>
        /// Gets the number of columns on the board.
        /// </summary>
        public int Columns { get; }

        /// <summary>
        /// Gets the array of cells on the board, each containing a piece.
        /// </summary>
        public IPiece[,] Cells { get; private set; }

        /// <summary>
        /// Gets the piece at a specific position on the board.
        /// </summary>
        /// <param name="position">The position to check.</param>
        /// <returns>The piece at the specified position.</returns>
        public IPiece GetPieceAt(IPosition position)
        {
            {
                throw new NotImplementedException();
            }
        }

        /// <summary>
        /// Places a piece at a specific position on the board.
        /// </summary>
        /// <param name="piece">The piece to place.</param>
        /// <param name="position">The position to place the piece at.</param>
        public void PlacePiece(IPiece piece, IPosition position)
        {
            {
                throw new NotImplementedException();
            }
        }

        /// <summary>
        /// Removes a piece from a specific position on the board.
        /// </summary>
        /// <param name="position">The position to remove the piece from.</param>
        public void RemovePiece(IPosition position)
        {
            {
                throw new NotImplementedException();
            }
        }

        /// <summary>
        /// Moves a piece from one position to another on the board.
        /// </summary>
        /// <param name="from">The starting position of the piece.</param>
        /// <param name="to">The destination position of the piece.</param>
        public void MovePiece(IPosition from, IPosition to)
        {
            {
                throw new NotImplementedException();
            }
        }

        /// <summary>
        /// Determines if a position is valid on the board.
        /// </summary>
        /// <param name="position">The position to check.</param>
        /// <returns>True if the position is valid, otherwise false.</returns>
        public bool IsValidPosition(IPosition position)
        {
            {
                throw new NotImplementedException();
            }
        }

        /// <summary>
        /// Determines if a move from one position to another is legal.
        /// </summary>
        /// <param name="from">The starting position of the move.</param>
        /// <param name="to">The destination position of the move.</param>
        /// <returns>True if the move is legal, otherwise false.</returns>
        public bool IsMoveLegal(IPosition from, IPosition to)
        {
            {
                throw new NotImplementedException();
            }
        }
    }
}
