<?php
/*
 * Watermark & Download Image PHP Class 0.0.1
 *
 * Apply Watermark to Image & Download It
 *
 * Copyright 2015, Vitaly Shutov
 * https://steelcat.org
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

class Download extends PHPImageWorkshop\ImageWorkshop
{
    public static function imageResult($x,$y) {
        $originalLayer = Download::initFromPath('../files/original.png');
        $watermarkLayer = Download::initFromPath('../files/watermark.jpg');
        $originalLayer->addLayer(1, $watermarkLayer, $x, $y, "LT");
        $image = $originalLayer->getResult();
        return $image;
    }
}