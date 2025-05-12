using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Bushes : MonoBehaviour
{
    private Material backgroundMaterial;
    private float offset;

    private void Awake()
    {
        // Assuming your background sprite is using a material with a shader that supports texture offset
        backgroundMaterial = GetComponent<SpriteRenderer>().material;
    }

    private void Update()
    {
        float speed = GameManager.Instance.gameSpeed * 0.03f; // Adjust the multiplier to control the speed relative to the ground
        offset += speed * Time.deltaTime;
        backgroundMaterial.mainTextureOffset = new Vector2(offset, 0);
    }
}