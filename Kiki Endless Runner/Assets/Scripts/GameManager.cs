using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class GameManager : MonoBehaviour
{
    public static GameManager Instance { get; private set; }

    public float initialGameSpeed = 5f;
    public float gameSpeedIncrease = 0.1f;
    public float gameSpeed { get; private set; }

    public TextMeshProUGUI gameOverText;
    public Button playAgain;
    public Button mainMenu;
    public Button quitGame;


    private Player player;
    private ObstacleSpawner obstacleSpawner;
    private CollectableSpawner collectableSpawner;

    private void Awake()
    {
        if (Instance == null) {
            Instance = this;
        } else {
            DestroyImmediate(gameObject);
        }
    }

    private void OnDestroy()
    {
        if (Instance == this) {
            Instance = null;
        }
    }

    private void Start()
    {
        player = FindObjectOfType<Player>();
        obstacleSpawner = FindObjectOfType<ObstacleSpawner>();
        collectableSpawner = FindObjectOfType<CollectableSpawner>();

        NewGame();
    }

    public void NewGame()
    {
    Obstacle[] obstacles = FindObjectsOfType<Obstacle>();

    foreach (var obstacle in obstacles) {
        Destroy(obstacle.gameObject);
    }

    Collectables[] collectables = FindObjectsOfType<Collectables>();

    foreach (var collectable in collectables) {
        Destroy(collectable.gameObject);
    }
    
    gameSpeed = initialGameSpeed;
    enabled = true;

    player.gameObject.SetActive(true);
    obstacleSpawner.gameObject.SetActive(true);
    collectableSpawner.gameObject.SetActive(true);
    gameOverText.gameObject.SetActive(false);
    playAgain.gameObject.SetActive(false);
    mainMenu.gameObject.SetActive(false);
    quitGame.gameObject.SetActive(false);

    if (player.sm != null)
    {
        player.sm.scoreCount = 0;
    }
    }

    public void GameOver()
    {
        gameSpeed = 0f;
        enabled = false;

        player.gameObject.SetActive(false);
        obstacleSpawner.gameObject.SetActive(false);
        collectableSpawner.gameObject.SetActive(false);
        gameOverText.gameObject.SetActive(true);
        playAgain.gameObject.SetActive(true);
        mainMenu.gameObject.SetActive(true);
        quitGame.gameObject.SetActive(true);
    }

    private void Update()
    {
        gameSpeed += gameSpeedIncrease * Time.deltaTime;
    }

    public void LoadMainMenu()
    {
        SceneManager.LoadScene("MainMenu");
    }

    public void QuitGame()
    {
        Application.Quit();
    }
}
