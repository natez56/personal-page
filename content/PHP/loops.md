---
title: "PHP Loops"
cover: "https://unsplash.it/1152/300/?random?SuperLong"
category: "php"
date: "12/04/2018"
tags:
  - programming
  - PHP
---

## For Loop

```php
<?php
    $a = 0;
    $b = 0;

    for ($i = 0; $i < 5; $i++) {
        $a += 10;
        $b += 5;
    }

    echo $a // 50
    echo $b // 25
?>
```

## While Loop

```php
<?php
    $i = 0;
    $num = 50;

    while ($i < 10) {
        $num--;
        $i++;
    }

    echo ("Loop stopped at i = $i and num = $num"); // i = 10 num = 40
?>
```

## Do While

```php
<?php
    $i = 0;
    $num = 0;

    do {
        $i++;
    }

    while ($i < 10);
    echo ("Loop stopped at i = $i"); // 10
?>
```

## foreach

```php
<?php
    $array = array(1, 2, 3, 4, 5);

    foreach( $array as $value ) {
        echo "Value is $value <br />";
    }
?>
```

## break

```php
<?php
    $i = 0;

    while ($i < 10) {
        $i++;
        if ($i == 3) break;
    }
    echo "Loop stopped at i = $i"; // 3
?>
```

## continue

```php
<?php
    $array = array(1, 2, 3, 4, 5);

    foreach($array as $value) {
        if ($value == 3) continue;
        echo "Value is $value <br />"; // 1, 2, 4, 5
    }
?>
```