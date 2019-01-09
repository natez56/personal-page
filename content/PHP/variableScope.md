---
title: "PHP Variable Scope"
cover: "https://unsplash.it/1152/300/?random?SuperLong"
category: "php"
date: "12/04/2018"
tags:
  - programming
  - PHP
---

## Local Variables

```php
<?php
    $x = 4; // Global scope

    function assignx () {
        $x = 0; // Function scope
        print "\$x inside of function is $x. <br />"
    }

    assignx(); // 0
    print "\$x outside of function is $x. <br />"; // 4
?>
```

## Function Scope

```php
<?php
    function multiply($value) {
        $value = $value * 10;
        return $value;
    }

    $retval = multiply(10);
    print "Return value is $retval\n"; // 100
?>
```

## Global Variables

```php
<?php
    $somevar = 15;

    function addit() {
        Global $somevar;
        $somevar++;

        print "Somevar is $somevar";
    }

    addit(); // 16
?>
```

## Static Variables

```php
<?php
    function keep_track() {
        STATIC $count = 0;
        $count++;
        print $count;
        print "<br />";
    }

    keep_track(); // 1
    keep_track(); // 2
    keep_track(); // 3
?>
```

## Constant

```php
<?php
    define("MINSIZE", 50);

    echo MINSIZE;
    echo constant("MINSIZE");
?>
```

## Magic Constants

```php
<?php
    __LINE__ // Line number of file
    __FILE__ // Full path and filename of the file
    __FUNCTION__ // The function name
    __CLASS__ // The class name
    __METHOD__ // The class method name
?>
```
