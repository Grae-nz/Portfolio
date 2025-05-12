<?php
/*
    Manages the order related operations for the database.
*/
require_once "EntityModel.php";

class OrderModel extends EntityModel
{
    function __construct($db, $orderID = null)
    {
        parent::__construct($db, "Orders");
        parent::defineKey("OrderNum", $orderID);
        parent::defineField("OrderNum", "number");
        parent::defineField("BuyerID");
        parent::defineField("ProductID");
        parent::defineField("Quantity");
        parent::defineField("OrderDate");
        parent::defineField("ShippingOption");

        if ($orderID !== null) {
            parent::load();
        }
    }

    // Handles creating a new order.
    public function saveOrder($buyerID, $productID, $quantity, $shippingOption)
    {
        $dbConn = $this->db->dbConn;
        $orderDate = date('Y-m-d');
        $stmt = $dbConn->prepare("INSERT INTO {$this->table} (BuyerID, ProductID, Quantity, OrderDate, ShippingOption) VALUES (?, ?, ?, ?, ?)");
        $stmt->bind_param("iiiss", $buyerID, $productID, $quantity, $orderDate, $shippingOption);
        $result = $stmt->execute();
        $stmt->close();

        return $result ? $dbConn->insert_id : false;
    }

    // Gets all orders for a specific buyer.
    public function getOrdersByBuyerID($buyerID)
    {
        $dbConn = $this->db->dbConn;
        $stmt = $dbConn->prepare("SELECT * FROM {$this->table} WHERE BuyerID = ?");
        $stmt->bind_param("i", $buyerID);
        $stmt->execute();
        $result = $stmt->get_result();
        $orders = [];

        while ($order = $result->fetch_assoc()) {
            $orders[] = $order;
        }

        $stmt->close();
        return $orders;
    }

    // Sets the buyer ID for the order.
    public function setBuyerID($value)
    {
        $this->setValue("BuyerID", $value);
    }

    // Sets the product ID for the order.
    public function setProductID($value)
    {
        $this->setValue("ProductID", $value);
    }

    // Sets the quantity for the order.
    public function setQuantity($value)
    {
        $this->setValue("Quantity", $value);
    }

    // Sets the order date.
    public function setOrderDate($value)
    {
        $this->setValue("OrderDate", $value);
    }

    // Sets the shipping option for the order.
    public function setShippingOption($value)
    {
        $this->setValue("ShippingOption", $value);
    }

    // Gets the buyer ID.
    public function getBuyerID()
    {
        return $this->getValue("BuyerID");
    }

    // Gets the product ID.
    public function getProductID()
    {
        return $this->getValue("ProductID");
    }

    // Gets the quantity.
    public function getQuantity()
    {
        return $this->getValue("Quantity");
    }

    // Gets the order date.
    public function getOrderDate()
    {
        return $this->getValue("OrderDate");
    }

    // Gets the shipping option.
    public function getShippingOption()
    {
        return $this->getValue("ShippingOption");
    }
}
?>
