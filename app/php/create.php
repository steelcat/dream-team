<?php
require_once(__DIR__.'/PHPImageWorkshop/ImageWorkshop.php');
require_once(__DIR__.'/CreateDownload/CreateDownload.php');
$image = new CreateDownload;
$resultimage = $image->imageResult($original,$watermark,$_GET['x'],$_GET['y']);
header('Content-type: image/jpeg');
imagejpeg($resultimage, '../files/result.jpg', 95);