<?php
require_once(__DIR__.'/PHPImageWorkshop/ImageWorkshop.php');
require_once(__DIR__.'/Download/Download.php');
$image = new Download;
$resultimage = $image->imageResult($_GET['x'],$_GET['y']);
$downloadimage = $image->fileForceDownload(imagejpeg($resultimage, null, 95));