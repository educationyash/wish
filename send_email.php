<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "myyasheducational@gmail.com";
    $subject = "Message from Rohan";
    
    $message = $_POST['message'];
    
    // Handle file upload
    $photo = $_FILES['photo']['tmp_name'];
    $photoName = $_FILES['photo']['name'];
    $photoType = $_FILES['photo']['type'];
    
    // Read file content and encode to base64
    $fileContent = file_get_contents($photo);
    $encodedContent = base64_encode($fileContent);

    // Email headers
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-Type: multipart/mixed; boundary=\"boundary-string\"" . "\r\n";

    // Email body
    $body = "--boundary-string\r\n";
    $body .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $body .= "Content-Transfer-Encoding: 7bit\r\n";
    $body .= "\r\n" . $message . "\r\n";
    
    // Attach photo
    $body .= "--boundary-string\r\n";
    $body .= "Content-Type: $photoType; name=\"$photoName\"\r\n";
    $body .= "Content-Disposition: attachment; filename=\"$photoName\"\r\n";
    $body .= "Content-Transfer-Encoding: base64\r\n";
    $body .= "\r\n" . $encodedContent . "\r\n";
    $body .= "--boundary-string--";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "Greeting sent successfully!";
    } else {
        echo "Error sending greeting.";
    }
}
?>
