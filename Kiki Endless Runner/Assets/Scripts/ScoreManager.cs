using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class ScoreManager : MonoBehaviour
{
    public int scoreCount;
    public int highScoreCount;
    public TextMeshProUGUI scoreText;
    public TextMeshProUGUI highScoreText;
    public AudioClip pointReachedSound; // The sound to play when points reach multiples of 50

    private AudioSource audioSource;
    private int lastPlayedSoundAtScore = 0;

    void Start()
    {
        // Load the high score at the start of the game
        highScoreCount = PlayerPrefs.GetInt("HighScore", 0);
        highScoreText.text = "High Score: " + highScoreCount.ToString();
        audioSource = GetComponent<AudioSource>();
    }

    void Update()
    {
        scoreText.text = "Score: " + scoreCount.ToString();
        // Update the high score text only if the current score is higher
        if (scoreCount > highScoreCount)
        {
            highScoreCount = scoreCount;
            highScoreText.text = "High Score: " + highScoreCount.ToString();
            // Save the new high score
            PlayerPrefs.SetInt("HighScore", highScoreCount);
        }

        // Check if the score is a multiple of 50 or has crossed a multiple of 50
        if ((scoreCount % 50 == 0 && scoreCount != lastPlayedSoundAtScore) || (scoreCount / 50 > lastPlayedSoundAtScore / 50))
        {
            PlayPointReachedSound();
            lastPlayedSoundAtScore = scoreCount;
        }
    }

    void PlayPointReachedSound()
    {
        if (audioSource != null && pointReachedSound != null)
        {
            audioSource.PlayOneShot(pointReachedSound);
        }
    }
}
