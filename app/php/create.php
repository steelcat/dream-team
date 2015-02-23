<?php
require_once(__DIR__.'/PHPImageWorkshop/ImageWorkshop.php');
require_once(__DIR__.'/CreateDownload/CreateDownload.php');
$image = new CreateDownload;
$resultimage = $image->imageResult($_GET['original'],$_GET['watermark'],$_GET['x'],$_GET['y'],$_GET['opacity']);
header('Content-type: image/jpeg');
imagejpeg($resultimage, '../files/result.jpg', 95);