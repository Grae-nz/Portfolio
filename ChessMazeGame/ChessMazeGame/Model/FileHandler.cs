using System;
using System.IO;
using System.Text.Json;




namespace ChessMazeGame.Model
{
    /// <summary>
    /// Provides functionality for handling file operations related to levels and games.
    /// </summary>
    public class FileHandler : IFileHandler
    {

        /// <summary>
        /// Saves a level to a specified file path.
        /// </summary>
        /// <param name="level">The level to save.</param>
        /// <param name="filePath">The file path to save the level to.</param>
        public void SaveLevel(ILevel level, string filePath)
        {
            filePath = @"C:\Users\Grae-\OneDrive\Desktop\C# Ass#3\TestLevel.json";
            try
            {
                string mockJson =
                    "{\n" +
                    $"  \"LevelName\": \"{level.LevelName}\",\n" +
                    $"  \"LevelInstructions\": \"{level.LevelInstructions}\",\n" +
                    $"  \"LevelDifficulty\": \"{level.LevelDifficulty}\",\n" +
                    $"  \"StartPosition\": {{ \"Row\": {level.StartPosition.Row}, \"Column\": {level.StartPosition.Column} }},\n" +
                    $"  \"EndPosition\": {{ \"Row\": {level.EndPosition.Row}, \"Column\": {level.EndPosition.Column} }},\n" +
                    $"  \"PlayerPosition\": {{ \"Row\": {level.Player.CurrentPosition.Row}, \"Column\": {level.Player.CurrentPosition.Column} }},\n" +
                    $"  \"BoardSize\": {{ \"Rows\": {level.Board.Rows}, \"Columns\": {level.Board.Columns} }},\n" +
                    $"  \"Pieces\": [\n";

                for (int row = 0; row < level.Board.Rows; row++)
                {
                    for (int col = 0; col < level.Board.Columns; col++)
                    {
                        IPiece piece = level.Board.Cells[row, col];
                        if (piece != null && piece.Type != PieceType.Empty)
                        {
                            mockJson += $"    {{ \"Type\": \"{piece.Type}\", \"Colour\": \"{piece.Colour}\", \"Position\": {{ \"Row\": {row}, \"Column\": {col} }} }},\n";
                        }
                    }
                }

                mockJson = mockJson.TrimEnd(',', '\n') + "\n  ]\n}";
                File.WriteAllText(filePath, mockJson);
            }
            catch (Exception ex)
            {
                throw new InvalidOperationException($"Failed to save level to {filePath}!", ex);
            }
        }

        /// <summary>
        /// Loads a level from a specified file path and throws an error if it dosen't exist.
        /// </summary>
        /// <param name="filePath">The file path to load the level from.</param>
        /// <returns>The loaded level.</returns>
        public ILevel LoadLevel(string filePath)
        {
            IBoard board = new Board(5, 5);

            board.Cells[0, 0] = new Piece(PieceType.King, PieceColour.Black);
            board.Cells[0, 1] = new Piece(PieceType.Pawn, PieceColour.White);
            board.Cells[0, 2] = new Piece(PieceType.Pawn, PieceColour.White);
            board.Cells[0, 3] = new Piece(PieceType.Pawn, PieceColour.White);
            board.Cells[0, 4] = new Piece(PieceType.Rook, PieceColour.White);
            board.Cells[1, 0] = new Piece(PieceType.Knight, PieceColour.White);
            board.Cells[1, 1] = new Piece(PieceType.Pawn, PieceColour.White);
            board.Cells[1, 2] = new Piece(PieceType.Pawn, PieceColour.White);
            board.Cells[1, 3] = new Piece(PieceType.Bishop, PieceColour.White);
            board.Cells[1, 4] = new Piece(PieceType.Pawn, PieceColour.White);
            board.Cells[2, 0] = new Piece(PieceType.Pawn, PieceColour.White);
            board.Cells[2, 1] = new Piece(PieceType.Pawn, PieceColour.White);
            board.Cells[2, 2] = new Piece(PieceType.Pawn, PieceColour.White);
            board.Cells[2, 3] = new Piece(PieceType.Pawn, PieceColour.White);
            board.Cells[2, 4] = new Piece(PieceType.Bishop, PieceColour.White);
            board.Cells[3, 0] = new Piece(PieceType.Pawn, PieceColour.White);
            board.Cells[3, 1] = new Piece(PieceType.Pawn, PieceColour.White);
            board.Cells[3, 2] = new Piece(PieceType.Knight, PieceColour.White);
            board.Cells[3, 3] = new Piece(PieceType.Pawn, PieceColour.White);
            board.Cells[3, 4] = new Piece(PieceType.Pawn, PieceColour.White);
            board.Cells[4, 0] = new Piece(PieceType.Rook, PieceColour.White);
            board.Cells[4, 1] = new Piece(PieceType.Pawn, PieceColour.White);
            board.Cells[4, 2] = new Piece(PieceType.Pawn, PieceColour.White);
            board.Cells[4, 3] = new Piece(PieceType.Pawn, PieceColour.White);
            board.Cells[4, 4] = new Piece(PieceType.King, PieceColour.White);

            IPosition startPosition = new Position(0, 0);
            IPosition endPosition = new Position(4, 4);
            IPlayer player = new Player(startPosition);

            return new Level(
                board,
                startPosition,
                endPosition,
                player,
                "Mock Level",
                "Instructions...",
                LevelDifficulty.Easy
            );
        }

        /// <summary>
        /// Saves a game to a specified file path.
        /// </summary>
        /// <param name="game">The game to save.</param>
        /// <param name="filePath">The file path to save the game to.</param>
        public void SaveGame(IGame game, string filePath)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// Loads a game from a specified file path.
        /// </summary>
        /// <param name="filePath">The file path to load the game from.</param>
        /// <returns>The loaded game.</returns>
        public IGame LoadGame(string filePath)
        {

            throw new NotImplementedException();
        }
    }
}
