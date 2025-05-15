using System;
using System.Drawing;
using System.IO;
using System.Windows.Forms;
using ChessMaze.Controller;
using ChessMazeGame.Model;


namespace ChessMazeGame.View
{
    /// <summary>
    /// Main Form for the Chess Maze Game. 
    /// Handles all the features that the Level Designer uses for creating a game.
    /// </summary>
    public partial class ChessMazeForm : Form
    {
        private ChessMazeController Controller;
        private const int DefaultGridSize = 4;
        private const int DefaultTileSize = 80;

        /// <summary>
        /// Initializes a new instance of the class.
        /// Sets up default values, creates the grids, and resizes.
        /// </summary>
        public ChessMazeForm()
        {
            InitializeComponent();
            Controller = new ChessMazeController();
            textBoxRows.Text = DefaultGridSize.ToString();
            textBoxColumns.Text = DefaultGridSize.ToString();
            ResizePanelToFitGrid(DefaultGridSize, DefaultGridSize);
            CreateGrid(DefaultGridSize, DefaultGridSize);
            this.Resize += ChessMazeForm_Resize;
            comboBoxPieceType.SelectedIndex = 0;
            comboBoxPieceColour.SelectedIndex = 0;
        }

        /// <summary>
        /// Handles resize events and adjusts the boards layout accordingly.
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void ChessMazeForm_Resize(object sender, EventArgs e)
        {
            if (int.TryParse(textBoxRows.Text, out int rows) &&
                int.TryParse(textBoxColumns.Text, out int columns))
            {
                ResizePanelToFitGrid(rows, columns);
            }
        }

        /// <summary>
        /// Resizes the Board Panel to fit the grid size.
        /// </summary>
        /// <param name="rows"></param>
        /// <param name="columns"></param>
        private void ResizePanelToFitGrid(int rows, int columns)
        {
            int tileSize = DefaultTileSize;
            boardPanel.Width = columns * tileSize;
            boardPanel.Height = rows * tileSize;
            boardPanel.Location = new Point((this.ClientSize.Width - boardPanel.Width) / 2, (this.ClientSize.Height - boardPanel.Height) / 2);
        }

        /// <summary>
        /// Sets the Boards Rows and Columns based on user input.
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void ButtonSetBoardSize_Click(object sender, EventArgs e)
        {
            try
            {
                if (!int.TryParse(textBoxRows.Text, out int rows) || !int.TryParse(textBoxColumns.Text, out int columns))
                {
                    throw new ArgumentException("Rows and Columns must be numbers!");
                }

                Controller.SetBoardSize(rows, columns);
                ResizePanelToFitGrid(rows, columns);
                CreateGrid(rows, columns);
            }
            catch (ArgumentException ex)
            {
                MessageBox.Show($"Error: {ex.Message}");
            }
        }

        /// <summary>
        /// Creates a grid of buttons based on the user input specifications.
        /// </summary>
        /// <param name="rows"></param>
        /// <param name="columns"></param>
        private void CreateGrid(int rows, int columns)
        {
            boardPanel.Controls.Clear();

            int tileSize = Math.Min(boardPanel.Width / columns, boardPanel.Height / rows);
            int startX = (boardPanel.Width - (tileSize * columns)) / 2;
            int startY = (boardPanel.Height - (tileSize * rows)) / 2;

            for (int row = 0; row < rows; row++)
            {
                for (int col = 0; col < columns; col++)
                {
                    Button tile = new Button
                    {
                        Size = new Size(tileSize, tileSize),
                        Location = new Point(startX + col * tileSize, startY + row * tileSize),
                        BackColor = (row + col) % 2 == 0 ? Color.White : Color.Gray,
                        Tag = new Position(row, col)
                    };
                    tile.Click += Tile_Click;
                    boardPanel.Controls.Add(tile);
                }
            }
        }

        /// <summary>
        /// Sets the Level Name based on user input.
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void ButtonSetLevelName_Click(object sender, EventArgs e)
        {
            string levelName = textBoxLevelName.Text.Trim();
            try
            {
                Controller.SetLevelName(levelName);
                MessageBox.Show($"Level name set to: {levelName}");
            }
            catch (InvalidOperationException ex)
            {
                MessageBox.Show($"Error: {ex.Message}");
            }
        }

        /// <summary>
        /// Sets the Level Difficulty based on user input.
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void ButtonSetDifficulty_Click(object sender, EventArgs e)
        {
            try
            {
                string difficultyInput = textBoxLevelDifficulty.Text.Trim();
                if (Enum.TryParse(difficultyInput, true, out LevelDifficulty selectedDifficulty))
                {
                    Controller.SetLevelDifficulty(selectedDifficulty);
                    MessageBox.Show($"Difficulty set to {selectedDifficulty}!");
                }
                else
                {
                    Controller.SetLevelDifficulty((LevelDifficulty)(-1));
                }
            }
            catch (ArgumentException ex)
            {
                MessageBox.Show(ex.Message);
            }
        }

        /// <summary>
        /// Sets the Level Instructions based on user input.
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void ButtonSetInstructions_Click(object sender, EventArgs e)
        {
            string instructions = textBoxLevelInstructions.Text.Trim();
            try
            {
                Controller.SetLevelInstructions(instructions);
                MessageBox.Show($"Level instructions set to: {instructions}");
            }
            catch (InvalidOperationException ex)
            {
                MessageBox.Show($"Error: {ex.Message}");
            }
        }

        /// <summary>
        /// Handles the click events on the grid tiles to (Depending on selected dropdown mode),
        /// Place/Remove Pieces, and set Start/End positions.
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void Tile_Click(object sender, EventArgs e)
        {
            Button clickedTile = sender as Button;
            if (clickedTile == null) return;

            string mode = comboBoxPositions.SelectedItem?.ToString();

            if (string.IsNullOrEmpty(mode))
            {
                MessageBox.Show("Please select a mode from the dropdown.");
                return;
            }

            var position = (Position)clickedTile.Tag;

            switch (mode)
            {
                case "Place Piece":
                    PlacePiece(clickedTile, position);
                    break;

                case "Remove Piece":
                    RemovePiece(clickedTile, position);
                    break;

                case "Set Start Position":
                    SetStartPosition(clickedTile, position);
                    break;

                case "Set End Position":
                    SetEndPosition(clickedTile, position);
                    break;            
            }
        }

        /// <summary>
        /// Places a Piece and image on the board and throws error if image dosen't exist.
        /// </summary>
        /// <param name="tile"></param>
        /// <param name="position"></param>
        private void PlacePiece(Button tile, Position position)
        {
            try
            {
                PieceType pieceType = (PieceType)Enum.Parse(typeof(PieceType), comboBoxPieceType.SelectedItem.ToString());
                PieceColour pieceColour = (PieceColour)Enum.Parse(typeof(PieceColour), comboBoxPieceColour.SelectedItem.ToString());
                IPiece piece = new Piece(pieceType, pieceColour);
                Controller.PlacePiece(piece, position);

                string imagePath = $"Images/{pieceColour.ToString().ToLower()}_{pieceType.ToString().ToLower()}.png";

                if (!File.Exists(imagePath))
                {
                    MessageBox.Show($"Image for {pieceColour} {pieceType} not found.");
                    return;
                }

                tile.BackgroundImage = Image.FromFile(imagePath);
                tile.BackgroundImageLayout = ImageLayout.Stretch;
            }
            catch (Exception ex)
            {
                MessageBox.Show($"Error placing piece: {ex.Message}");
            }
        }

        /// <summary>
        /// Removes a Piece and it's image from the board.
        /// </summary>
        /// <param name="tile"></param>
        /// <param name="position"></param>
        private void RemovePiece(Button tile, Position position)
        {
            try
            {
                Controller.RemovePiece(position);
                tile.BackgroundImage = null;
                tile.BackgroundImageLayout = ImageLayout.None;
            }
            catch (Exception ex)
            {
                MessageBox.Show($"Error removing piece: {ex.Message}");
            }
        }

        /// <summary>
        /// Sets the Start Posaition on the board and adds the colour.
        /// </summary>
        /// <param name="tile"></param>
        /// <param name="position"></param>
        private void SetStartPosition(Button tile, Position position)
        {
            try
            {
                Controller.SetStartPosition(position);
                tile.BackColor = Color.Green;
                MessageBox.Show("Start position set!");
            }
            catch (Exception ex)
            {
                MessageBox.Show($"Error: {ex.Message}");
            }
        }

        /// <summary>
        /// Sets the End Position on the board and adds the colour.
        /// </summary>
        /// <param name="tile"></param>
        /// <param name="position"></param>
        private void SetEndPosition(Button tile, Position position)
        {
            try
            {
                Controller.SetEndPosition(position);
                tile.BackColor = Color.Orange;
                MessageBox.Show("End position set!");
            }
            catch (Exception ex)
            {
                MessageBox.Show($"Error: {ex.Message}");
            }
        }

        /// <summary>
        /// Resets the Board to the default state,
        /// and changes the text boxes back to their initial values.
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void ButtonResetBoard_Click(object sender, EventArgs e)
        {
            try
            {
                Controller.ResetBoard();
                boardPanel.Controls.Clear();
                ResizePanelToFitGrid(DefaultGridSize, DefaultGridSize);
                CreateGrid(DefaultGridSize, DefaultGridSize);
                textBoxLevelName.Text = "";
                textBoxLevelInstructions.Text = "";
                textBoxLevelDifficulty.Text = "";
                textBoxRows.Text = DefaultGridSize.ToString();
                textBoxColumns.Text = DefaultGridSize.ToString();

                MessageBox.Show("Board has been reset successfully!");
            }
            catch (InvalidOperationException ex)
            {
                MessageBox.Show($"Error: {ex.Message}");
            }
        }

        /// <summary>
        /// Creates the Level or shows errors if must needed values not entered.
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void ButtonCreateLevel_Click(object sender, EventArgs e)
        {
            try
            {
                ILevel createdLevel = Controller.CreateLevel();
                MessageBox.Show(
                    $"Level '{createdLevel.LevelName}' created successfully!\n" +
                    $"Difficulty: {createdLevel.LevelDifficulty}\n" +
                    $"Start Position: Row {createdLevel.StartPosition.Row}, Column {createdLevel.StartPosition.Column}\n" +
                    $"End Position: Row {createdLevel.EndPosition.Row}, Column {createdLevel.EndPosition.Column}"
                );
            }
            catch (InvalidOperationException ex)
            {
                MessageBox.Show($"Error creating level: {ex.Message}");
            }
        }

        /// <summary>
        /// Saves the current state of the Board if passes 'CreateLevel'.
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void ButtonSaveLevel_Click(object sender, EventArgs e)
        {
            try
            {
                Controller.SaveLevel("MockPath.json");
                ILevel currentLevel = Controller.CreateLevel();
                MessageBox.Show($"Level '{currentLevel.LevelName}' saved successfully!");
            }
            catch (Exception ex)
            {
                MessageBox.Show($"Error saving level: {ex.Message}");
            }
        }

        /// <summary>
        /// Loads an existing level and updates the board with values.
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void ButtonLoadLevel_Click(object sender, EventArgs e)
        {
            try
            {
                Controller.ResetStartEndPositions();
                boardPanel.Controls.Clear();
                ILevel loadedLevel = Controller.LoadLevel("MockPath.json");
                Controller.SetBoardSize(loadedLevel.Board.Rows, loadedLevel.Board.Columns);
                ResizePanelToFitGrid(loadedLevel.Board.Rows, loadedLevel.Board.Columns);
                CreateGrid(loadedLevel.Board.Rows, loadedLevel.Board.Columns);
                UpdateBoardWithLoadedLevel(loadedLevel);

                MessageBox.Show($"Level '{loadedLevel.LevelName}' loaded successfully!");
            }
            catch (FileNotFoundException ex)
            {
                MessageBox.Show($"Error: {ex.Message}");
            }
        }

        /// <summary>
        /// Updates the boards user interface by inserting/placing values.
        /// </summary>
        /// <param name="loadedLevel"></param>
        private void UpdateBoardWithLoadedLevel(ILevel loadedLevel)
        {
            textBoxRows.Text = loadedLevel.Board.Rows.ToString();
            textBoxColumns.Text = loadedLevel.Board.Columns.ToString();
            textBoxLevelName.Text = loadedLevel.LevelName;
            textBoxLevelInstructions.Text = loadedLevel.LevelInstructions;
            textBoxLevelDifficulty.Text = loadedLevel.LevelDifficulty.ToString();
            Controller.SetLevelName(loadedLevel.LevelName);
            Controller.SetLevelInstructions(loadedLevel.LevelInstructions);
            Controller.SetLevelDifficulty(loadedLevel.LevelDifficulty);
            Controller.SetStartPosition(loadedLevel.StartPosition);
            Controller.SetEndPosition(loadedLevel.EndPosition);

            for (int row = 0; row < loadedLevel.Board.Rows; row++)
            {
                for (int col = 0; col < loadedLevel.Board.Columns; col++)
                {
                    IPiece piece = loadedLevel.Board.Cells[row, col];
                    if (piece != null && piece.Type != PieceType.Empty)
                    {
                        Controller.PlacePiece(piece, new Position(row, col));

                        Button tile = GetTileButtonByPosition(new Position(row, col));
                        if (tile != null)
                        {
                            string imagePath = $"Images/{piece.Colour.ToString().ToLower()}_{piece.Type.ToString().ToLower()}.png";
                            if (File.Exists(imagePath))
                            {
                                tile.BackgroundImage = Image.FromFile(imagePath);
                                tile.BackgroundImageLayout = ImageLayout.Stretch;
                            }
                        }
                    }
                }
            }

            Button startPositionTile = GetTileButtonByPosition(loadedLevel.StartPosition);
            if (startPositionTile != null) startPositionTile.BackColor = Color.Green;

            Button EndPositionTile = GetTileButtonByPosition(loadedLevel.EndPosition);
            if (EndPositionTile != null) EndPositionTile.BackColor = Color.Orange;
        }

        /// <summary>
        /// Gets the tile button at the specified position.
        /// </summary>
        /// <param name="position"></param>
        /// <returns></returns>
        private Button GetTileButtonByPosition(IPosition position)
        {
            foreach (Control control in boardPanel.Controls)
            {
                if (control is Button tile && tile.Tag is Position tilePosition)
                {
                    if (tilePosition.Row == position.Row && tilePosition.Column == position.Column)
                    {
                        return tile;
                    }
                }
            }
            return null;
        }

    }
}
