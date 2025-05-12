using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CollectableSpawner : MonoBehaviour
{
    [System.Serializable]
    public struct SpawnableObject
    {
        public GameObject prefab;
        [Range(0f, 1f)]
        public float spawnChance;
    }

    public SpawnableObject[] objects;
    public GameObject glowPrefab;  // Reference to the glow effect prefab

    public float minSpawnRate = 0.1f;
    public float maxSpawnRate = 4f;

    private void OnEnable()
    {
        Invoke(nameof(Spawn), Random.Range(minSpawnRate, maxSpawnRate));
    }

    private void OnDisable()
    {
        CancelInvoke();
    }

    private void Spawn()
    {
        float spawnChance = Random.value;

        foreach (var obj in objects)
        {
            if (spawnChance < obj.spawnChance)
            {
                GameObject collectable = Instantiate(obj.prefab);
                collectable.transform.position += transform.position;

                // Instantiate the glow sprite and set it behind the collectable
                GameObject glow = Instantiate(glowPrefab, collectable.transform.position, Quaternion.identity);
                glow.GetComponent<SpriteRenderer>().sortingOrder = collectable.GetComponent<SpriteRenderer>().sortingOrder - 1;

                break;
            }

            spawnChance -= obj.spawnChance;
        }

        Invoke(nameof(Spawn), Random.Range(minSpawnRate, maxSpawnRate));
    }
}
