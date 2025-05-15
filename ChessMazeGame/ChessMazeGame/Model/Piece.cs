using System;


namespace ChessMazeGame.Model
{
    /// <summary>
    /// Represents a chess piece with a specific type.
    /// </summary>
    public class Piece : IPiece
    {
        /// <summary>
        /// Constrcutor to set the Piece type and colours.
        /// </summary>
        /// <param name="type"></param>
        /// <param name="colour"></param>
        public Piece(PieceType type, PieceColour colour)
        {
            Type = type;
            Colour = colour;
        }

        /// <summary>
        /// Gets the type of the chess piece.
        /// </summary>
        public PieceType Type { get; private set; }

        /// <summary>
        /// Gets the colour of the chess piece.
        /// </summary>
        public PieceColour Colour { get; private set; }

    }
}
