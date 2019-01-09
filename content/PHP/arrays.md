---
title: "PHP Arrays"
cover: "https://unsplash.it/1152/300/?random?SuperLong"
category: "php"
date: "12/04/2018"
tags:
  - programming
  - PHP
---

## Numeric Array

```php
<?php
    // First Method to create an array
    $numbers = array(1, 2, 3, 4, 5);

    foreach ($numbers as $value) {
        echo "Value is $value <br />";
    }

    // Second method
    $numbers[0] = "one";
    $numbers[1] = "two";
    $numbers[2] = "three";
    $numbers[3] = "four";
    $numbers[4] = "five";

    foreach ($numbers as $value) {
        echo "Value is $value <br />";
    }
?>
```

## Associative Array

```php
<?php
    // First method to create array
    $salaries = array("mohammad" => 2000, "qadir" => 1000, "zara" => 500);

    echo "Salary of mohammad is " . $salaries['mohammad'] . "<br />";

    // Second method to create array
    $salaries['mohammad'] = "high";

    echo "Salary of mohammad is " . $salries['mohammad'] . "<br />";
?>
```

## Multidimensional Array

```php
<?php
    $marks = array(
        "mohammad" => array (
            "physics" => 35,
            "maths" => 30,
            "chemistry" => 39
        ),

        "qadir" => array (
            "physics" => 30,
            "maths" => 32,
            "chemistry" => 29
        )
    );

    // Accessing multi-dimensional array values
    echo "Marks for mohammad in physics : ";
    echo $marks['mohammad']['physics'] . "<br />";

    echo "Marks for qadir in maths : ";
    echo $marks['qadir']['maths'] . "<br />";
?>
```
