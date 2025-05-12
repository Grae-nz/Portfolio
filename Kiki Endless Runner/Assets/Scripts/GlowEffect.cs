using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GlowEffect : MonoBehaviour
{
    public float maxScale = 5.0f;
    public float minScale = 0.5f;
    public float scaleSpeed = 2;

    private bool isScalingUp = true;

    private void Update()
    {
        if (isScalingUp)
        {
            
            transform.localScale += Vector3.one * scaleSpeed * Time.deltaTime;
            if (transform.localScale.x >= maxScale)
            {
                transform.localScale = new Vector3(maxScale, maxScale, maxScale);
                isScalingUp = false;
            }
        }
        else
        {
            
            transform.localScale -= Vector3.one * scaleSpeed * Time.deltaTime;
            if (transform.localScale.x <= minScale)
            {
                transform.localScale = new Vector3(minScale, minScale, minScale);
                isScalingUp = true;
            }
        }
    }
}