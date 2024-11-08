<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Insert Page</title>
</head>

<body>
    <center>
        <?php
        // Database connection try now
        $conn = mysqli_connect("127.0.0.1:3306", "u613173283_aswmysql", "1A:@tePk;yz", "u613173283_asw");

        // Check connection
        if ($conn === false) {
            die("ERROR: Could not connect. " . mysqli_connect_error());
        }
date_default_timezone_set("Asia/Calcutta");
        // Taking input values from the form
        $name = $_POST['name'];
        $email = $_POST['email'];
        $subject = $_POST['subject'];
        $message = $_POST['message'];
        $datetime = date('Y-m-d H:i:s');

        // Inserting data into the database
        $sql = "INSERT INTO contact_form_information (name, mail, subject, message, created_on) VALUES ('$name', '$email', '$subject', '$message', '$datetime')";

        if (mysqli_query($conn, $sql)) {
            echo "<h3>Your details are sucessfully submitted..!</h3>";
            // echo nl2br("\nName: $name\nEmail: $email\nSubject: $subject\nMessage: $message\n");
        } else {
            echo "ERROR: Hush! Sorry $sql. " . mysqli_error($conn);
        }

        // Close connection
        mysqli_close($conn);
        ?>
    </center>
</body>

</html>
