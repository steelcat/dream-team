<?php
require_once(__DIR__.'/PHPImageWorkshop/ImageWorkshop.php');
require_once(__DIR__.'/Download/Download.php');
$image = new Download;
$image = $image->imageResult($_GET['x'],$_GET['y']);
header('Content-type: image/jpeg');
header('Content-Disposition: filename="butterfly.jpg"');
imagejpeg($image, '../files/result.jpg', 95);