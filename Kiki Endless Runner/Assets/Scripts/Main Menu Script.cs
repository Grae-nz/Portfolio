using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class MainMenuScript : MonoBehaviour
{
    public void PlayGame()
    {
        SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex + 1);
    }

    public void Instructions()
    {
        SceneManager.LoadScene("Instructions");
    }

    public void QuitGame()
    {
        Application.Quit();
    }
}
