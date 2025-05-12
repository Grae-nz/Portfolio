using UnityEngine;

public class AutoResizeCollider : MonoBehaviour
{
    private BoxCollider boxCollider;
    private SpriteRenderer spriteRenderer;

    void Start()
    {
        boxCollider = GetComponent<BoxCollider>();
        spriteRenderer = GetComponent<SpriteRenderer>();
        // Initial resize
        ResizeColliderToSprite();
    }

    void LateUpdate()
    {
        // Update resize to account for sprite animation changes
        ResizeColliderToSprite();
    }

    private void ResizeColliderToSprite()
    {
        if (spriteRenderer != null && boxCollider != null)
        {
            Bounds spriteBounds = spriteRenderer.bounds;
            // Convert the local bounds size to world size
            Vector3 worldSize = spriteBounds.size;
            // Adjust the collider size
            boxCollider.size = new Vector3(worldSize.x, worldSize.y, boxCollider.size.z);
            // Adjust the collider center
            boxCollider.center = new Vector3(spriteBounds.center.x - transform.position.x, 
                                             spriteBounds.center.y - transform.position.y, 
                                             boxCollider.center.z);
        }
    }
}
