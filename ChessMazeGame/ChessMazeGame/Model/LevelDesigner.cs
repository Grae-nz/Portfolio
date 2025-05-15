using System;
using System.Windows.Forms;

namespace ChessMazeGame.Model
{
    /// <summary>
    /// Creates and manages the implementation of a level design.
    /// </summary>
    public class LevelDesigner : ILevelDesigner
    {
        private string levelName;
        private string levelInstructions;
        private LevelDifficulty levelDifficulty;
        public IBoard Board { get; private set; }
        public IPosition startPosition;
        public IPosition endPosition;
        private bool piecePlaced;


        /// <summary>
        /// Constructor to intialize a default board.
        /// </summary>
        public LevelDesigner()
        {
            Board = new Board(4, 4);
            piecePlaced = false;
            levelName = "";
            levelInstructions = "";
            levelDifficulty = LevelDifficulty.None;
            startPosition = null;
            endPosition = null;
        }

        /// <summary>
        /// Sets the name of the level.
        /// </summary>
        /// <param name="name"></param>
        public void SetLevelName(string name)
        {
            levelName = name;

            if (string.IsNullOrWhiteSpace(levelName))
            {
                throw new InvalidOperationException("Level name has not been set!");
            }
        }

        /// <summary>
        /// Sets the difficulty of the level.
        /// </summary>
        /// <param name="difficulty"></param>
        /// <exception cref="ArgumentException"></exception>
        public void SetLevelDifficulty(LevelDifficulty difficulty)
        {
            if (!Enum.IsDefined(typeof(LevelDifficulty), difficulty))
            {
                throw new ArgumentException("Invalid difficulty level entered!");
            }
            levelDifficulty = difficulty;
        }

        /// <summary>
        /// Sets the instructions for the level.
        /// </summary>
        /// <param name="instructions"></param>
        public void SetLevelInstructions(string instructions)
        {
            levelInstructions = instructions;
            if (string.IsNullOrWhiteSpace(levelInstructions))
            {
                throw new InvalidOperationException("Level instructions has not been set!");
            }
        }

        /// <summary>
        /// Sets the size of the board by number of Rows and Columns,
        /// Throws error if invalid and sets the board size if valid.
        /// </summary>
        /// <param name="rows"></param>
        /// <param name="columns"></param>
        /// <exception cref="ArgumentException"></exception>
        public void SetBoardSize(int rows, int columns)
        {
            const int MaxLimit = 8;

            if (rows != columns)
            {
                throw new ArgumentException("Invalid grid size. Rows must equal Columns!");
            }

            if (rows <= 0 && columns <= 0)
            {
                throw new ArgumentException("Please enter the number of Rows and Columns!");
            }

            if (rows > MaxLimit || columns > MaxLimit)
            {
                throw new ArgumentException($"The maximum grid size is {MaxLimit}x{MaxLimit}!");
            }

            Board = new Board(rows, columns);
        }

        /// <summary>
        /// Places Pieces onto the board,
        /// Throws error if Piece is out of bounds or,
        /// Piece Type or Colour wasn't set or,
        /// Invalid Piece Type or Colour was entered.
        /// </summary>
        /// <param name="type"></param>
        /// <param name="colour"></param>
        /// <param name="position"></param>
        /// <exception cref="ArgumentException"></exception>
        public void PlacePiece(IPiece piece, IPosition position)
        {
            if (piece.Type == PieceType.Empty && piece.Colour == PieceColour.None)
            {
                throw new ArgumentException("Piece Type and Colour was not set!");
            }

            if (piece.Type == PieceType.Empty && piece.Colour != PieceColour.None)
            {
                throw new ArgumentException("PieceType was not set!");
            }

            if (piece.Colour == PieceColour.None && piece.Type != PieceType.Empty)
            {
                throw new ArgumentException("PieceColour was not set!");
            }

            if (Board.Cells[position.Row, position.Column] != null)
            {
                throw new InvalidOperationException("A piece is already in this location!");
            }

            Board.Cells[position.Row, position.Column] = piece;
            piecePlaced = true;
        }

        /// <summary>
        /// Checks the placedPieces array if a posiiton exists on the board,
        /// If position exists returns the Piece in the cell,
        /// If empty throws message saying there isn't.
        /// </summary>
        /// <param name="position"></param>
        /// <returns></returns>
        /// <exception cref="ArgumentException"></exception>
        public IPiece GetPlacedPiece(IPosition position)
        {
            if (position.Row < 0 || position.Column < 0 || position.Row >= Board.Rows || position.Column >= Board.Columns)
            {
                throw new ArgumentException(nameof(position), "Piece position is outside the board size!");
            }

            IPiece piece = Board.Cells[position.Row, position.Column];
            if (piece != null)
            {
                return piece;
            }
            throw new ArgumentException("No piece is placed at the given position.");
        }


        /// <summary>
        /// Sets the starting position of the board level,
        /// Throws errors if invalid (Not selected/Out of bounds) and sets start position if valid.
        /// </summary>
        /// <param name="position"></param>
        /// <exception cref="InvalidOperationException"></exception>
        /// <exception cref="ArgumentNullException"></exception>
        public void SetStartPosition(IPosition position)
        {
            if (startPosition != null)
            {
                throw new InvalidOperationException("Start position has already been set!");
            }

            if (position == null)
            {
                throw new ArgumentNullException(nameof(position), "Please select a start position.");
            }
            startPosition = position;
        }

        /// <summary>
        /// Sets the ending position of the board level,
        /// Throws errors if invalid (Not selected/Out of bounds) and sets end position if valid.
        /// </summary>
        /// <param name="position"></param>
        /// <exception cref="ArgumentException"></exception>
        public void SetEndPosition(IPosition position)
        {
            if(endPosition != null)
            {
                throw new InvalidOperationException("End position has already been set!");
            }

            if (position == null)
            {
                throw new ArgumentNullException(nameof(position), "Please select a end position.");
            }
            endPosition = position;
        }


        /// <summary>
        /// Removes Pieces from the board,
        /// Throws errors if Piece selected is out of bounds or,
        /// If no Piece exists in the selected cell.
        /// </summary>
        /// <param name="position"></param>
        /// <exception cref="ArgumentException"></exception>
        public void RemovePiece(IPosition position)
        {
            if (Board.Cells[position.Row, position.Column] == null)
            {
                throw new InvalidOperationException("No piece is in this cell!");
            }

            Board.Cells[position.Row, position.Column] = null;
        }

        /// <summary>
        /// Resets the state of the board,
        /// If board is in it's default state with nothing enetered throws error.
        /// </summary>
        /// <exception cref="ArgumentException"></exception>
        public void ResetBoard()
        {
            bool defaultBoard = string.IsNullOrEmpty(levelName) &&
                string.IsNullOrEmpty(levelInstructions) &&
                levelDifficulty == LevelDifficulty.None &&
                Board.Rows == 4 && Board.Columns == 4 &&
                startPosition == null &&
                endPosition == null &&
                piecePlaced == false;

            if (defaultBoard)
            {
                throw new InvalidOperationException("The board is already in its default state!");
            }

            for (int row = 0; row < Board.Rows; row++)
            {
                for (int column = 0; column < Board.Columns; column++)
                {
                    Board.Cells[row, column] = null;
                }
            }

            Board = new Board(4, 4);
            startPosition = null;
            endPosition = null;
            levelName = "";
            levelDifficulty = LevelDifficulty.None;
            levelInstructions = "";
            piecePlaced = false;
        }

        /// <summary>
        /// Resets the start and end positions of the board.
        /// </summary>
        public void ResetStartEndPositions()
        {
            startPosition = null;
            endPosition = null;
        }

        /// <summary>
        /// Creates a level.
        /// Throws errors if no Level name entered,
        /// Level Difficulty entered,
        /// Level Instructions enetred,
        /// No Pieces placed.
        /// </summary>
        /// <param name="width"></param>
        /// <param name="height"></param>
        /// <returns></returns>
        /// <exception cref="ArgumentException"></exception>
        public ILevel CreateLevel(int width = 0, int height = 0)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(levelName))
                {
                    throw new InvalidOperationException("Level name has not been set!");
                }

                if (levelDifficulty == LevelDifficulty.None)
                {
                    throw new InvalidOperationException("Level difficulty has not been set!");
                }

                if (string.IsNullOrWhiteSpace(levelInstructions))
                {
                    throw new InvalidOperationException("Level instructions have not been set!");
                }

                if (!piecePlaced)
                {
                    throw new InvalidOperationException("No Pieces were placed!");
                }

                if (startPosition == null)
                {
                    throw new InvalidOperationException("Start position has not been set!");
                }

                if (endPosition == null)
                {
                    throw new InvalidOperationException("End position has not been set!");
                }

                IPlayer player = new Player(startPosition);

                return new Level(Board, startPosition, endPosition, player, levelName, levelInstructions, levelDifficulty);
            }

            catch (InvalidOperationException error)
            {
                throw new InvalidOperationException(
                    $"Board creation failed: {error.Message}", error);
            }
        }    
    }
}

