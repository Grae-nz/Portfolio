using System;


namespace ChessMazeGame.Model
{
    /// <summary>
    /// Represents a game session in the Chess Maze game.
    /// </summary>
    public class Game : IGame
    {
        /// <summary>
        /// Gets the current level being played.
        /// </summary>
        public ILevel CurrentLevel => throw new NotImplementedException();

        /// <summary>
        /// Loads a specified level into the game.
        /// </summary>
        public void LoadLevel(ILevel aLevel)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// Attempts to make a move to a new position.
        /// </summary>
        /// <param name="newPosition">The new position to move to.</param>
        /// <returns>True if the move is successful, otherwise false.</returns>
        public bool MakeMove(IPosition newPosition)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// Determines if the game is over.
        /// </summary>
        public bool IsGameOver => throw new NotImplementedException();

        /// <summary>
        /// Gets the count of moves made in the current game.
        /// </summary>
        /// <returns>The number of moves made.</returns>
        public int GetMoveCount()
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// Undoes the last move made in the game.
        /// </summary>
        public void Undo()
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// Restarts the current game level.
        /// </summary>
        public void Restart()
        {
            throw new NotImplementedException();
        }
    }
}
