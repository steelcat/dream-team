<?php
require_once(__DIR__.'/PHPImageWorkshop/ImageWorkshop.php');
require_once(__DIR__.'/Download/Download.php');
$image = new Download;
$image = $image->imageResult($_GET['x'],$_GET['y']);
header("Content-Description: File Transfer\r\n");
header("Pragma: public\r\n");
header("Expires: 0\r\n");
header("Cache-Control: must-revalidate, post-check=0, pre-check=0\r\n");
header("Cache-Control: public\r\n");
header("Content-type: image/jpeg\r\n");
header("application/x-download");
header('Content-Disposition: filename="result.jpg"');
imagejpeg($image, '../files/result.jpg', 95);