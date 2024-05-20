<?php
// Database configuration
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "blog_database";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch blog posts from the database
$sql = "SELECT title, image, content, alt_text FROM blog_posts";
$result = $conn->query($sql);

$blog_posts = [];
if ($result->num_rows > 0) {
    // Output data of each row
    while($row = $result->fetch_assoc()) {
        $blog_posts[] = $row;
    }
} else {
    echo "0 results";
}
$conn->close();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<div id="header">
    <div class="container">
        <nav>
            <img src="image/alpha.png" class="logo">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="blog.php">Blog</a></li>
                <li><a href="gallery.html">Gallery</a></li>
            </ul>
        </nav>
        <div class="header-text">
            <h1>Hi, there<span>Scroll down</span> <br>maybe there is something interesting for you</h1>
        </div>
    </div>
</div>
<!---blog-->
<div id="blog">
    <div class="container">
        <div class="row">
            <?php foreach ($blog_posts as $post): ?>
            <div class="blog-post">
                <img src="<?php echo $post['image']; ?>" alt="<?php echo $post['alt_text']; ?>">
                <div class="blog-content">
                    <h1 class="blog-title"><?php echo $post['title']; ?></h1>
                    <p><?php echo $post['content']; ?></p>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</div>
<script src="https://unpkg.com/scrollreveal"></script>
<script src="smooth-reveal.js"></script>
<audio autoplay loop id="audio-background">
    <source src="video/Rough Days.mp4" type="audio/mp4">
</audio>
</body>
</html>
