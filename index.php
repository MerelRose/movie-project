<?php 
ob_start(); // Start output buffering
$page = "home";
if(isset($_GET["page"])) {
    $page = $_GET["page"];
}
?>
<!DOCTYPE html>
<head>
    <title>PicturePlex</title>
    <link rel="stylesheet" href="styles/style.css">
</head>
<body>
    <div>
        <?php include("pages/" .$page. ".html"); ?>
    </div>
    <?php include("nav.html"); ?>
</body>
</html>