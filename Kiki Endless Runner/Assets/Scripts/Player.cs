using UnityEngine;

[RequireComponent(typeof(CharacterController))]
public class Player : MonoBehaviour
{
    private CharacterController character;
    private Vector3 direction;

    public float jumpForce = 8f;
    public float gravity = 9.81f * 2f;

    public ScoreManager sm;

    public AudioSource audioPlayer;
    public AudioSource audioCollectable;
    private void Awake()
    {
        character = GetComponent<CharacterController>();
    }

    private void OnEnable()
    {
        direction = Vector3.zero;
    }

    private void Update()
    {
        direction += gravity * Time.deltaTime * Vector3.down;

        if (character.isGrounded)
        {
            direction = Vector3.down;

            if (Input.GetMouseButton(0)) {
                direction = Vector3.up * jumpForce;
            }
        }

        character.Move(direction * Time.deltaTime);
    }

    private void OnTriggerEnter(Collider other)
    {
    if (other.CompareTag("Obstacle"))
    {
        audioPlayer.Play();
        GameManager.Instance.GameOver();
    }
    else if (other.CompareTag("Collectables"))
    {
        audioCollectable.Play();
        Collectables collectable = other.GetComponent<Collectables>();
        if (collectable != null)
        {
            sm.scoreCount += collectable.value;
        }
        Destroy(other.gameObject);
    }
    }
}
