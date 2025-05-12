<?php
/*
    Manages the product related operations for the database.
*/
require_once "EntityModel.php";

class ProductModel extends EntityModel
{
    function __construct($db, $productID = null)
    {
        parent::__construct($db, "Product");
        parent::defineKey("ProductID", $productID);
        parent::defineField("StoreID");
        parent::defineField("ProductName");
        parent::defineField("Description");
        parent::defineField("Price");
        parent::defineField("ShippingOptions");
        parent::defineField("ProductImage");

        if ($productID !== null) {
            parent::load();
        }
    }

    // Saves or creates a product in the database.
    public function saveProduct()
    {
        $dbConn = $this->db->dbConn;

        $storeID = $this->getStoreID();
        $productName = $this->getProductName();
        $description = $this->getDescription();
        $price = $this->getPrice();
        $shippingOptions = $this->getShippingOptions();
        $productImage = $this->getProductImage();
        $productID = $this->getID();

        if ($productID) {
            $stmt = $dbConn->prepare("UPDATE {$this->table} SET 
                StoreID = ?, 
                ProductName = ?, 
                Description = ?, 
                Price = ?, 
                ShippingOptions = ?, 
                ProductImage = ?
                WHERE ProductID = ?");
            
            $stmt->bind_param("issdssi", $storeID, $productName, $description, $price, $shippingOptions, $productImage, $productID);
        } else {
            $stmt = $dbConn->prepare("INSERT INTO {$this->table} 
                (StoreID, ProductName, Description, Price, ShippingOptions, ProductImage) 
                VALUES (?, ?, ?, ?, ?, ?)");

            $stmt->bind_param("issdss", $storeID, $productName, $description, $price, $shippingOptions, $productImage);
        }

        $result = $stmt->execute();
        $stmt->close();

        return $result;
    }

    // Updates product details in the database.
    public function updateProduct($productId, $productName, $description, $price, $shippingOptions)
    {
        $dbConn = $this->db->dbConn;

        $stmt = $dbConn->prepare("UPDATE Product SET 
            ProductName = ?, 
            Description = ?, 
            Price = ?, 
            ShippingOptions = ? 
            WHERE ProductID = ?");

        $stmt->bind_param("ssdsi", $productName, $description, $price, $shippingOptions, $productId);
        $result = $stmt->execute();
        $stmt->close();

        if (!$result) {
            error_log("Failed to update product: " . $dbConn->error);
        } else {
            error_log("Product updated successfully for ProductID: $productId");
        }

        return $result;
    }

    // Sets the Store ID for the product.
    public function setStoreID($value)
    {
        $this->setValue("StoreID", $value);
    }

    // Sets the product name.
    public function setProductName($value)
    {
        $this->setValue("ProductName", $value);
    }

    // Sets the product description.
    public function setDescription($value)
    {
        $this->setValue("Description", $value);
    }

    // Sets the products price.
    public function setPrice($value)
    {
        $this->setValue("Price", $value);
    }

    // Sets the shipping option for the product.
    public function setShippingOptions($value)
    {
        $this->setValue("ShippingOptions", $value);
    }

    // Sets the image for the product.
    public function setProductImage($value)
    {
        $this->setValue("ProductImage", $value ? bin2hex($value) : null);
    }

    // Gets all the products for the store.
    public function getAllProducts()
    {
        $dbConn = $this->db->dbConn;

        $stmt = $dbConn->prepare("SELECT ProductID, StoreID, ProductName, Description, Price, ShippingOptions, ProductImage FROM {$this->table}");
        $stmt->execute();
        $result = $stmt->get_result();

        $products = [];
        while ($row = $result->fetch_assoc()) {
            $products[] = $row;
        }
        $stmt->close();

        return $products;
    }

    // Gets specific product by ID.
    public function getProductById($productId)
    {
        $dbConn = $this->db->dbConn;

        $stmt = $dbConn->prepare("SELECT Product.ProductID, ProductName, Description, Price, ShippingOptions, ProductImage, Store.StoreName
                                FROM Product
                                JOIN Store ON Product.StoreID = Store.StoreID
                                WHERE ProductID = ?");
        $stmt->bind_param("i", $productId);
        $stmt->execute();
        $result = $stmt->get_result();
        $product = $result->fetch_assoc();
        $stmt->close();

        return $product ?: null;
    }

    // Gets the prodcuts from a specific store.
    public function getProductsByStoreID($storeID)
    {
        $dbConn = $this->db->dbConn;

        $stmt = $dbConn->prepare("SELECT ProductID, ProductName, Description, Price, ShippingOptions 
                                FROM {$this->table} 
                                WHERE StoreID = ?");
        $stmt->bind_param("i", $storeID);
        $stmt->execute();
        $result = $stmt->get_result();

        $products = [];
        while ($row = $result->fetch_assoc()) {
            $products[] = $row;
        }
        $stmt->close();

        return $products;
    }

    // Gets the store ID.
    public function getStoreID()
    {
        return $this->data["StoreID"] ?? null;
    }

    //Gets the product name,
    public function getProductName()
    {
        return $this->data["ProductName"] ?? null;
    }

    // Gets product description.
    public function getDescription()
    {
        return $this->data["Description"] ?? null;
    }

    // Gets product price.
    public function getPrice()
    {
        return $this->data["Price"] ?? null;
    }

    // Gets product shipping options.
    public function getShippingOptions()
    {
        return $this->data["ShippingOptions"] ?? null;
    }

    // Gets the product image.
    public function getProductImage()
    {
        return $this->data["ProductImage"] ?? null;
    }
}
?>
