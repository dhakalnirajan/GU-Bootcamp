<?php
$servername = "your_database_host"; // Replace with your database host
$username = "your_database_username"; // Replace with your database username
$password = "your_database_password"; // Replace with your database password
$dbname = "foodflow_cart"; // Replace with your desired database name

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Create database
$sql = "CREATE DATABASE IF NOT EXISTS $dbname";
if ($conn->query($sql) === TRUE) {
    echo "Database created successfully";
} else {
    echo "Error creating database: " . $conn->error;
}

$conn->close();
?>