namespace ChessMazeGame.View
{
    partial class ChessMazeForm
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.textBoxRows = new System.Windows.Forms.TextBox();
            this.textBoxColumns = new System.Windows.Forms.TextBox();
            this.boardPanel = new System.Windows.Forms.Panel();
            this.setBoardSize = new System.Windows.Forms.Button();
            this.textBoxLevelDifficulty = new System.Windows.Forms.TextBox();
            this.setLevelDifficulty = new System.Windows.Forms.Button();
            this.textBoxLevelName = new System.Windows.Forms.TextBox();
            this.setLevelName = new System.Windows.Forms.Button();
            this.textBoxLevelInstructions = new System.Windows.Forms.TextBox();
            this.setInstructions = new System.Windows.Forms.Button();
            this.comboBoxPieceType = new System.Windows.Forms.ComboBox();
            this.comboBoxPieceColour = new System.Windows.Forms.ComboBox();
            this.comboBoxPositions = new System.Windows.Forms.ComboBox();
            this.resetBoardButton = new System.Windows.Forms.Button();
            this.buttonCreateLevel = new System.Windows.Forms.Button();
            this.LabelHeader = new System.Windows.Forms.Label();
            this.labelLevelName = new System.Windows.Forms.Label();
            this.labelLevelDifficulty = new System.Windows.Forms.Label();
            this.labelLevelInstructions = new System.Windows.Forms.Label();
            this.labelRows = new System.Windows.Forms.Label();
            this.labelColumns = new System.Windows.Forms.Label();
            this.buttonControls = new System.Windows.Forms.Label();
            this.buttonLoadLevel = new System.Windows.Forms.Button();
            this.buttonSaveLevel = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // textBoxRows
            // 
            this.textBoxRows.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right)));
            this.textBoxRows.Location = new System.Drawing.Point(1064, 97);
            this.textBoxRows.Name = "textBoxRows";
            this.textBoxRows.Size = new System.Drawing.Size(44, 20);
            this.textBoxRows.TabIndex = 0;
            this.textBoxRows.Text = "4";
            // 
            // textBoxColumns
            // 
            this.textBoxColumns.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right)));
            this.textBoxColumns.Location = new System.Drawing.Point(1123, 97);
            this.textBoxColumns.Name = "textBoxColumns";
            this.textBoxColumns.Size = new System.Drawing.Size(44, 20);
            this.textBoxColumns.TabIndex = 1;
            this.textBoxColumns.Text = "4";
            // 
            // boardPanel
            // 
            this.boardPanel.Anchor = System.Windows.Forms.AnchorStyles.Top;
            this.boardPanel.BackColor = System.Drawing.SystemColors.ActiveBorder;
            this.boardPanel.Location = new System.Drawing.Point(382, 72);
            this.boardPanel.MinimumSize = new System.Drawing.Size(10, 10);
            this.boardPanel.Name = "boardPanel";
            this.boardPanel.Size = new System.Drawing.Size(474, 436);
            this.boardPanel.TabIndex = 3;
            // 
            // setBoardSize
            // 
            this.setBoardSize.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right)));
            this.setBoardSize.BackColor = System.Drawing.SystemColors.Info;
            this.setBoardSize.Location = new System.Drawing.Point(1064, 123);
            this.setBoardSize.Name = "setBoardSize";
            this.setBoardSize.Size = new System.Drawing.Size(113, 23);
            this.setBoardSize.TabIndex = 4;
            this.setBoardSize.Text = "Confirm Board Size";
            this.setBoardSize.UseVisualStyleBackColor = false;
            this.setBoardSize.Click += new System.EventHandler(this.ButtonSetBoardSize_Click);
            // 
            // textBoxLevelDifficulty
            // 
            this.textBoxLevelDifficulty.Location = new System.Drawing.Point(10, 186);
            this.textBoxLevelDifficulty.Name = "textBoxLevelDifficulty";
            this.textBoxLevelDifficulty.Size = new System.Drawing.Size(107, 20);
            this.textBoxLevelDifficulty.TabIndex = 5;
            // 
            // setLevelDifficulty
            // 
            this.setLevelDifficulty.BackColor = System.Drawing.SystemColors.Info;
            this.setLevelDifficulty.Location = new System.Drawing.Point(10, 212);
            this.setLevelDifficulty.Name = "setLevelDifficulty";
            this.setLevelDifficulty.Size = new System.Drawing.Size(107, 23);
            this.setLevelDifficulty.TabIndex = 6;
            this.setLevelDifficulty.Text = "Confirm Difficulty";
            this.setLevelDifficulty.UseVisualStyleBackColor = false;
            this.setLevelDifficulty.Click += new System.EventHandler(this.ButtonSetDifficulty_Click);
            // 
            // textBoxLevelName
            // 
            this.textBoxLevelName.ForeColor = System.Drawing.SystemColors.WindowText;
            this.textBoxLevelName.Location = new System.Drawing.Point(12, 85);
            this.textBoxLevelName.Name = "textBoxLevelName";
            this.textBoxLevelName.Size = new System.Drawing.Size(106, 20);
            this.textBoxLevelName.TabIndex = 7;
            // 
            // setLevelName
            // 
            this.setLevelName.BackColor = System.Drawing.SystemColors.Info;
            this.setLevelName.Location = new System.Drawing.Point(11, 111);
            this.setLevelName.Name = "setLevelName";
            this.setLevelName.Size = new System.Drawing.Size(106, 23);
            this.setLevelName.TabIndex = 8;
            this.setLevelName.Text = "Confirm Name";
            this.setLevelName.UseVisualStyleBackColor = false;
            this.setLevelName.Click += new System.EventHandler(this.ButtonSetLevelName_Click);
            // 
            // textBoxLevelInstructions
            // 
            this.textBoxLevelInstructions.Location = new System.Drawing.Point(10, 291);
            this.textBoxLevelInstructions.Name = "textBoxLevelInstructions";
            this.textBoxLevelInstructions.Size = new System.Drawing.Size(106, 20);
            this.textBoxLevelInstructions.TabIndex = 9;
            // 
            // setInstructions
            // 
            this.setInstructions.BackColor = System.Drawing.SystemColors.Info;
            this.setInstructions.Location = new System.Drawing.Point(10, 317);
            this.setInstructions.Name = "setInstructions";
            this.setInstructions.Size = new System.Drawing.Size(107, 23);
            this.setInstructions.TabIndex = 10;
            this.setInstructions.Text = "Confirm Instructions";
            this.setInstructions.UseVisualStyleBackColor = false;
            this.setInstructions.Click += new System.EventHandler(this.ButtonSetInstructions_Click);
            // 
            // comboBoxPieceType
            // 
            this.comboBoxPieceType.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right)));
            this.comboBoxPieceType.AutoCompleteCustomSource.AddRange(new string[] {
            "Empty",
            "King",
            "Rook",
            "Bishop",
            "Knight",
            "Pawn"});
            this.comboBoxPieceType.FormattingEnabled = true;
            this.comboBoxPieceType.Items.AddRange(new object[] {
            "Empty",
            "King",
            "Rook",
            "Bishop",
            "Knight",
            "Pawn"});
            this.comboBoxPieceType.Location = new System.Drawing.Point(1064, 243);
            this.comboBoxPieceType.Name = "comboBoxPieceType";
            this.comboBoxPieceType.Size = new System.Drawing.Size(121, 21);
            this.comboBoxPieceType.TabIndex = 11;
            this.comboBoxPieceType.Text = "Set Piece Type";
            // 
            // comboBoxPieceColour
            // 
            this.comboBoxPieceColour.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right)));
            this.comboBoxPieceColour.AutoCompleteCustomSource.AddRange(new string[] {
            "None",
            "Black",
            "White"});
            this.comboBoxPieceColour.FormattingEnabled = true;
            this.comboBoxPieceColour.Items.AddRange(new object[] {
            "None",
            "Black",
            "White"});
            this.comboBoxPieceColour.Location = new System.Drawing.Point(1064, 269);
            this.comboBoxPieceColour.Name = "comboBoxPieceColour";
            this.comboBoxPieceColour.Size = new System.Drawing.Size(121, 21);
            this.comboBoxPieceColour.TabIndex = 12;
            this.comboBoxPieceColour.Text = "Set Piece Colour";
            // 
            // comboBoxPositions
            // 
            this.comboBoxPositions.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right)));
            this.comboBoxPositions.AutoCompleteCustomSource.AddRange(new string[] {
            "Place Piece",
            "Remove Piece",
            "Start Position",
            "End Position"});
            this.comboBoxPositions.FormattingEnabled = true;
            this.comboBoxPositions.Items.AddRange(new object[] {
            "Place Piece",
            "Remove Piece",
            "Set Start Position",
            "Set End Position"});
            this.comboBoxPositions.Location = new System.Drawing.Point(1064, 216);
            this.comboBoxPositions.Name = "comboBoxPositions";
            this.comboBoxPositions.Size = new System.Drawing.Size(131, 21);
            this.comboBoxPositions.TabIndex = 13;
            this.comboBoxPositions.Text = "Select...";
            // 
            // resetBoardButton
            // 
            this.resetBoardButton.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right)));
            this.resetBoardButton.BackColor = System.Drawing.SystemColors.GradientInactiveCaption;
            this.resetBoardButton.Font = new System.Drawing.Font("Tahoma", 11.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.resetBoardButton.Location = new System.Drawing.Point(1064, 378);
            this.resetBoardButton.Name = "resetBoardButton";
            this.resetBoardButton.Size = new System.Drawing.Size(114, 37);
            this.resetBoardButton.TabIndex = 14;
            this.resetBoardButton.Text = "Reset Board";
            this.resetBoardButton.UseVisualStyleBackColor = false;
            this.resetBoardButton.Click += new System.EventHandler(this.ButtonResetBoard_Click);
            // 
            // buttonCreateLevel
            // 
            this.buttonCreateLevel.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right)));
            this.buttonCreateLevel.BackColor = System.Drawing.SystemColors.Info;
            this.buttonCreateLevel.Font = new System.Drawing.Font("Tahoma", 11.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.buttonCreateLevel.Location = new System.Drawing.Point(1064, 317);
            this.buttonCreateLevel.Name = "buttonCreateLevel";
            this.buttonCreateLevel.Size = new System.Drawing.Size(113, 37);
            this.buttonCreateLevel.TabIndex = 15;
            this.buttonCreateLevel.Text = "Create Level";
            this.buttonCreateLevel.UseVisualStyleBackColor = false;
            this.buttonCreateLevel.Click += new System.EventHandler(this.ButtonCreateLevel_Click);
            // 
            // LabelHeader
            // 
            this.LabelHeader.Anchor = System.Windows.Forms.AnchorStyles.Top;
            this.LabelHeader.AutoSize = true;
            this.LabelHeader.BackColor = System.Drawing.SystemColors.ActiveCaption;
            this.LabelHeader.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.LabelHeader.Font = new System.Drawing.Font("Tahoma", 24F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.LabelHeader.Location = new System.Drawing.Point(473, 12);
            this.LabelHeader.Name = "LabelHeader";
            this.LabelHeader.Size = new System.Drawing.Size(297, 41);
            this.LabelHeader.TabIndex = 16;
            this.LabelHeader.Text = "LEVEL DESIGNER";
            // 
            // labelLevelName
            // 
            this.labelLevelName.AutoSize = true;
            this.labelLevelName.BackColor = System.Drawing.SystemColors.ActiveCaption;
            this.labelLevelName.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.labelLevelName.Font = new System.Drawing.Font("Tahoma", 9.75F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.labelLevelName.Location = new System.Drawing.Point(12, 64);
            this.labelLevelName.Name = "labelLevelName";
            this.labelLevelName.Size = new System.Drawing.Size(82, 18);
            this.labelLevelName.TabIndex = 17;
            this.labelLevelName.Text = "Level Name";
            // 
            // labelLevelDifficulty
            // 
            this.labelLevelDifficulty.AutoSize = true;
            this.labelLevelDifficulty.BackColor = System.Drawing.SystemColors.ActiveCaption;
            this.labelLevelDifficulty.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.labelLevelDifficulty.Font = new System.Drawing.Font("Tahoma", 9.75F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.labelLevelDifficulty.Location = new System.Drawing.Point(10, 165);
            this.labelLevelDifficulty.Name = "labelLevelDifficulty";
            this.labelLevelDifficulty.Size = new System.Drawing.Size(104, 18);
            this.labelLevelDifficulty.TabIndex = 18;
            this.labelLevelDifficulty.Text = "Level Difficulty";
            // 
            // labelLevelInstructions
            // 
            this.labelLevelInstructions.AutoSize = true;
            this.labelLevelInstructions.BackColor = System.Drawing.SystemColors.ActiveCaption;
            this.labelLevelInstructions.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.labelLevelInstructions.Font = new System.Drawing.Font("Tahoma", 9.75F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.labelLevelInstructions.Location = new System.Drawing.Point(10, 270);
            this.labelLevelInstructions.Name = "labelLevelInstructions";
            this.labelLevelInstructions.Size = new System.Drawing.Size(126, 18);
            this.labelLevelInstructions.TabIndex = 19;
            this.labelLevelInstructions.Text = "Level Instructions";
            // 
            // labelRows
            // 
            this.labelRows.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right)));
            this.labelRows.AutoSize = true;
            this.labelRows.BackColor = System.Drawing.SystemColors.ActiveCaption;
            this.labelRows.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.labelRows.Font = new System.Drawing.Font("Tahoma", 9.75F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.labelRows.Location = new System.Drawing.Point(1064, 76);
            this.labelRows.Name = "labelRows";
            this.labelRows.Size = new System.Drawing.Size(44, 18);
            this.labelRows.TabIndex = 20;
            this.labelRows.Text = "Rows";
            // 
            // labelColumns
            // 
            this.labelColumns.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right)));
            this.labelColumns.AutoSize = true;
            this.labelColumns.BackColor = System.Drawing.SystemColors.ActiveCaption;
            this.labelColumns.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.labelColumns.Font = new System.Drawing.Font("Tahoma", 9.75F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.labelColumns.Location = new System.Drawing.Point(1123, 76);
            this.labelColumns.Name = "labelColumns";
            this.labelColumns.Size = new System.Drawing.Size(62, 18);
            this.labelColumns.TabIndex = 21;
            this.labelColumns.Text = "Columns";
            // 
            // buttonControls
            // 
            this.buttonControls.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right)));
            this.buttonControls.AutoSize = true;
            this.buttonControls.BackColor = System.Drawing.SystemColors.ActiveCaption;
            this.buttonControls.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.buttonControls.Font = new System.Drawing.Font("Tahoma", 9.75F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.buttonControls.Location = new System.Drawing.Point(1064, 195);
            this.buttonControls.Name = "buttonControls";
            this.buttonControls.Size = new System.Drawing.Size(63, 18);
            this.buttonControls.TabIndex = 22;
            this.buttonControls.Text = "Controls";
            // 
            // buttonLoadLevel
            // 
            this.buttonLoadLevel.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right)));
            this.buttonLoadLevel.Font = new System.Drawing.Font("Tahoma", 11.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.buttonLoadLevel.Location = new System.Drawing.Point(1064, 502);
            this.buttonLoadLevel.Name = "buttonLoadLevel";
            this.buttonLoadLevel.Size = new System.Drawing.Size(113, 37);
            this.buttonLoadLevel.TabIndex = 23;
            this.buttonLoadLevel.Text = "Load Level";
            this.buttonLoadLevel.UseVisualStyleBackColor = true;
            this.buttonLoadLevel.Click += new System.EventHandler(this.ButtonLoadLevel_Click);
            // 
            // buttonSaveLevel
            // 
            this.buttonSaveLevel.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right)));
            this.buttonSaveLevel.Font = new System.Drawing.Font("Tahoma", 11.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.buttonSaveLevel.Location = new System.Drawing.Point(1064, 459);
            this.buttonSaveLevel.Name = "buttonSaveLevel";
            this.buttonSaveLevel.Size = new System.Drawing.Size(113, 37);
            this.buttonSaveLevel.TabIndex = 24;
            this.buttonSaveLevel.Text = "Save Level";
            this.buttonSaveLevel.UseVisualStyleBackColor = true;
            this.buttonSaveLevel.Click += new System.EventHandler(this.ButtonSaveLevel_Click);
            // 
            // ChessMazeForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1237, 661);
            this.Controls.Add(this.buttonSaveLevel);
            this.Controls.Add(this.buttonLoadLevel);
            this.Controls.Add(this.buttonControls);
            this.Controls.Add(this.labelColumns);
            this.Controls.Add(this.labelRows);
            this.Controls.Add(this.labelLevelInstructions);
            this.Controls.Add(this.labelLevelDifficulty);
            this.Controls.Add(this.labelLevelName);
            this.Controls.Add(this.LabelHeader);
            this.Controls.Add(this.buttonCreateLevel);
            this.Controls.Add(this.resetBoardButton);
            this.Controls.Add(this.comboBoxPositions);
            this.Controls.Add(this.comboBoxPieceColour);
            this.Controls.Add(this.comboBoxPieceType);
            this.Controls.Add(this.setInstructions);
            this.Controls.Add(this.textBoxLevelInstructions);
            this.Controls.Add(this.setLevelName);
            this.Controls.Add(this.textBoxLevelName);
            this.Controls.Add(this.setLevelDifficulty);
            this.Controls.Add(this.textBoxLevelDifficulty);
            this.Controls.Add(this.setBoardSize);
            this.Controls.Add(this.boardPanel);
            this.Controls.Add(this.textBoxColumns);
            this.Controls.Add(this.textBoxRows);
            this.MinimumSize = new System.Drawing.Size(1100, 700);
            this.Name = "ChessMazeForm";
            this.Text = "Chess Maze Game";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.TextBox textBoxRows;
        private System.Windows.Forms.TextBox textBoxColumns;
        private System.Windows.Forms.Panel boardPanel;
        private System.Windows.Forms.Button setBoardSize;
        private System.Windows.Forms.TextBox textBoxLevelDifficulty;
        private System.Windows.Forms.Button setLevelDifficulty;
        private System.Windows.Forms.TextBox textBoxLevelName;
        private System.Windows.Forms.Button setLevelName;
        private System.Windows.Forms.TextBox textBoxLevelInstructions;
        private System.Windows.Forms.Button setInstructions;
        private System.Windows.Forms.ComboBox comboBoxPieceType;
        private System.Windows.Forms.ComboBox comboBoxPieceColour;
        private System.Windows.Forms.ComboBox comboBoxPositions;
        private System.Windows.Forms.Button resetBoardButton;
        private System.Windows.Forms.Button buttonCreateLevel;
        private System.Windows.Forms.Label LabelHeader;
        private System.Windows.Forms.Label labelLevelName;
        private System.Windows.Forms.Label labelLevelDifficulty;
        private System.Windows.Forms.Label labelLevelInstructions;
        private System.Windows.Forms.Label labelRows;
        private System.Windows.Forms.Label labelColumns;
        private System.Windows.Forms.Label buttonControls;
        private System.Windows.Forms.Button buttonLoadLevel;
        private System.Windows.Forms.Button buttonSaveLevel;
    }
}

