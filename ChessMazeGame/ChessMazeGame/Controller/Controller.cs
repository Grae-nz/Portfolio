using ChessMazeGame.Model;
using System;


namespace ChessMaze.Controller
{
    /// <summary>
    /// Controls the interactions and operations between the Model and View.
    /// </summary>
    public class ChessMazeController
    {
        private LevelDesigner levelDesigner;
        private FileHandler fileHandler;

        /// <summary>
        /// Initializes a new instance of the leveldesigner class and FileHandler.
        /// </summary>
        public ChessMazeController()
        {
            levelDesigner = new LevelDesigner();
            fileHandler = new FileHandler();
        }

        /// <summary>
        /// Sets the Board Size.
        /// </summary>
        /// <param name="rows"></param>
        /// <param name="columns"></param>
        public void SetBoardSize(int rows, int columns)
        {
            levelDesigner.SetBoardSize(rows, columns);
        }

        /// <summary>
        /// Sets the Level Name.
        /// </summary>
        /// <param name="name"></param>
        public void SetLevelName(string name)
        {
            levelDesigner.SetLevelName(name);
        }

        /// <summary>
        /// Sets the Level Difficulty.
        /// </summary>
        /// <param name="difficulty"></param>
        public void SetLevelDifficulty(LevelDifficulty difficulty)
        {
            levelDesigner.SetLevelDifficulty(difficulty);
        }

        /// <summary>
        /// Sets the Level Instructions.
        /// </summary>
        /// <param name="instructions"></param>
        public void SetLevelInstructions(string instructions)
        {
            levelDesigner.SetLevelInstructions(instructions);
        }

        /// <summary>
        /// Places a Piece on the Board by position.
        /// </summary>
        /// <param name="piece"></param>
        /// <param name="position"></param>
        public void PlacePiece(IPiece piece, IPosition position)
        {
            levelDesigner.PlacePiece(piece, position);
        }

        /// <summary>
        /// Sets the Start Position.
        /// </summary>
        /// <param name="position"></param>
        public void SetStartPosition(IPosition position)
        {
            levelDesigner.SetStartPosition(position);
        }

        /// <summary>
        /// Sets the End Position.
        /// </summary>
        /// <param name="position"></param>
        public void SetEndPosition(IPosition position)
        {
            levelDesigner.SetEndPosition(position);
        }

        /// <summary>
        /// Removes a Piece from the Board.
        /// </summary>
        /// <param name="position"></param>
        public void RemovePiece(IPosition position)
        {
            levelDesigner.RemovePiece(position);
        }

        /// <summary>
        /// Resets the current Board/Level Designer.
        /// </summary>
        public void ResetBoard()
        {
            levelDesigner.ResetBoard();
        }

        /// <summary>
        /// Resets the start and end positions.
        /// </summary>
        public void ResetStartEndPositions()
        {
            levelDesigner.ResetStartEndPositions();
        }



        /// <summary>
        /// Creates a Level.
        /// Checks if all necessary values are there to be able to create.
        /// </summary>
        /// <returns></returns>
        public ILevel CreateLevel()
        {
            return levelDesigner.CreateLevel();
        }

        /// <summary>
        /// Saves the current Level Design.
        /// </summary>
        /// <param name="filePath"></param>
        public void SaveLevel(string filePath)
        {
            ILevel currentLevel = CreateLevel();
            fileHandler.SaveLevel(currentLevel, filePath);
        }

        /// <summary>
        /// Loads a previously made Level.
        /// </summary>
        /// <param name="filePath"></param>
        /// <returns></returns>
        public ILevel LoadLevel(string filePath)
        {
            return fileHandler.LoadLevel(filePath);
        }



    }
}