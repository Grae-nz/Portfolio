using System;


namespace ChessMazeGame.Model
{
    /// <summary>
    /// Represents a level in the Chess Maze game.
    /// </summary>
    public interface ILevel
    {
        /// <summary>
        /// Gets the game board for this level.
        /// </summary>
        IBoard Board { get; }
       
        /// <summary>
        /// Gets the start position for this level.
        /// </summary>
        IPosition StartPosition { get; }
        
        /// <summary>
        /// Gets the end position for this level.
        /// </summary>
        IPosition EndPosition { get; }

        /// <summary>
        /// Gets the player for this level.
        /// </summary>
        IPlayer Player { get; }

        /// <summary>
        /// Determines if the level is completed.
        /// </summary>
        bool IsCompleted { get; }

        /// <summary>
        /// Gets the name of the level.
        /// </summary>
        string LevelName { get; }

        /// <summary>
        /// Gets the instructions for the level.
        /// </summary>
        string LevelInstructions { get; }

        /// <summary>
        /// Gets the difficulty of the level.
        /// </summary>
        LevelDifficulty LevelDifficulty { get; }
    }
}



