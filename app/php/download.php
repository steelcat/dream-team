<?php
require_once(__DIR__.'/PHPImageWorkshop/ImageWorkshop.php');
require_once(__DIR__.'/Download/Download.php');
$image = new Download;
$resultimage = $image->imageResult($_GET['x'],$_GET['y']);
header('Content-type: image/jpeg');
imagejpeg($resultimage, '../files/result.jpg', 95);
$image->fileForceDownload('../files/result.jpg');