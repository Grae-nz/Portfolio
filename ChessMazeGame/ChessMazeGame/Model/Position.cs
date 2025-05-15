using System;


namespace ChessMazeGame.Model
{
    /// <summary>
    /// Represents a position on the chess board with row and column coordinates.
    /// </summary>
    public class Position : IPosition
    {
        /// <summary>
        /// Constrctor that initializes a position on the board based on the row and collumn specified.
        /// </summary>
        /// <param name="row"></param>
        /// <param name="column"></param>
        public Position(int row, int column)
        {
            Row = row;
            Column = column;
        }

        /// <summary>
        /// Gets the row number of the position.
        /// </summary>
        public int Row { get; private set; }

        /// <summary>
        /// Gets the column number of the position.
        /// </summary>
        public int Column { get; private set; }
    }
}