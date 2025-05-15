using System;


namespace ChessMazeGame.Model
{
    /// <summary>
    /// Represents a player in the Chess Maze game.
    /// </summary>
    public class Player : IPlayer
    {
        /// <summary>
        /// Constructor that creates a Player object with speficic starting position.
        /// </summary>
        /// <param name="startPosition"></param>    
        public Player(IPosition startPosition)
        {
            CurrentPosition = startPosition;
        }

        /// <summary>
        /// Gets or sets the current position of the player on the board.
        /// </summary>
        public IPosition CurrentPosition { get; set; }

        /// <summary>
        /// Determines if the player can move to a new position on the board.
        /// </summary>
        /// <param name="newPosition">The new position to move to.</param>
        /// <param name="board">The game board.</param>
        /// <returns>True if the move is possible, otherwise false.</returns>
        public bool CanMove(IPosition newPosition, IBoard board)
        {
            {
                throw new NotImplementedException();
            }
        }

        /// <summary>
        /// Moves the player to a new position on the board.
        /// </summary>
        /// <param name="newPosition">The new position to move to.</param>
        /// <param name="board">The game board.</param>
        public void Move(IPosition newPosition, IBoard board)
        {
            {
                throw new NotImplementedException();
            }
        }
    }
}