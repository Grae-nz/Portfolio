using System;


namespace ChessMazeGame.Model
{
    /// <summary>
    /// Represents a level in the Chess Maze game.
    /// </summary>
    public class Level : ILevel
    {
        /// <summary>
        /// Constructor for the Level class that initializes a level based on the specified Board,
        /// Start position, End position and player being set up.
        /// </summary>
        /// <param name="board"></param>
        /// <param name="startPosition"></param>
        /// <param name="endPosition"></param>
        /// <param name="player"></param>
        public Level(IBoard board, IPosition startPosition, IPosition endPosition, IPlayer player, string name, string instructions, LevelDifficulty levelDifficulty)
        {
            Board = board;
            StartPosition = startPosition;
            EndPosition = endPosition;
            Player = player;
            LevelName = name;
            LevelInstructions = instructions;
            LevelDifficulty = levelDifficulty;
        }

        /// <summary>
        /// Gets the game board for this level.
        /// </summary>
        public IBoard Board { get; private set; }
        
        /// <summary>
        /// Gets the start position for this level.
        /// </summary>
        public IPosition StartPosition { get; private set; }
        
        /// <summary>
        /// Gets the end position for this level.
        /// </summary>
        public IPosition EndPosition { get; private set; }
        
        /// <summary>
        /// Gets the player for this level.
        /// </summary>
        public IPlayer Player { get; private set; }

        /// <summary>
        /// Gets the name of the level.
        /// </summary>
        public string LevelName { get; private set; }

        /// <summary>
        /// Gets the instructions for the level.
        /// </summary>
        public string LevelInstructions { get; private set; }

        /// <summary>
        /// Gets the difficulty of the level.
        /// </summary>
        public LevelDifficulty LevelDifficulty { get; private set; }

        /// <summary>
        /// Determines if the level is completed.
        /// </summary>
        public bool IsCompleted
        {
            get
            {
                return Player.CurrentPosition.Equals(EndPosition);
            }
        }
    }
}