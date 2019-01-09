---
title: "PHP Conditionals"
cover: "https://unsplash.it/1152/300/?random?SuperLong"
category: "php"
date: "12/04/2018"
tags:
  - programming
  - PHP
---

## If statement

```php
<?php
    $d = date("D");

    if ($d == "Fri")
        echo "Have a nice weekend!";

    elseif ($d == "Sun")
        echo "Have a nice Sunday!";

    else
        echo "Have a nice day!";
?>
```

## Switch statement

```php
<?php
    $d = date("D");

    switch ($d) {
        case "Mon":
            echo "Today is Monday";
            break;

        case "Tue":
            echo "Today is Tuesday";
            break;

        case "Wed":
            echo "Today is Wednesday";
            break;

        default:
            echo "Some day in Thurs-Sunday"
    }
?>
```
