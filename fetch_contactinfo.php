<?php
// Database connection
$conn = mysqli_connect("127.0.0.1:3306", "u613173283_contactinfo", "Md@998960", "u613173283_asgroup");


// Check connection
if ($conn === false) {
    die("ERROR: Could not connect. " . mysqli_connect_error());
}

// Query to retrieve data
$sql = "SELECT name, email, subject, message FROM contactinfo";
$result = mysqli_query($conn, $sql);

// Fetch data and store in an array
$contactInfo = [];
if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        $contactInfo[] = $row;
    }
}

// Close connection
mysqli_close($conn);

// Return data as JSON
header('Content-Type: application/json');
echo json_encode($contactInfo);
?>
