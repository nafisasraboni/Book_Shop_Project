
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" rel="stylesheet" />
  <link rel="stylesheet" href="style.css">
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-light" style="position: sticky;    background-color: #d2dbe3">
  <a class="navbar-brand" href="#">The bookshelf</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item ">
        <a class="nav-link" href="index1.php">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="about.php">About</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="products.php">Products</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="contact.php">Contact</a>
      </li>
    
    </ul>

    

    <ul style="display: flex;">

    <div>
    <div a class="nav-link">
    <a href="search.php" class="fas fa-search"></a>
</div>
            
            
            

</div>
    <div class="nav-link">
      <a href="admin.php"> Admin</a>
    </div>

      <div a class="nav-link">

       <a href="login.php"> <i class="fa fa-solid fa-user"></i></a>
      </div>
      <div class="nav-link">

        <a href="cart.php"><i class="fa fa-solid fa-cart-plus" ></i></a>
      </div>
      
    </ul>

  </div>
</nav>
<!-- search_form.php -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Search Form</title>
    <link rel="stylesheet" href="syle1.css">
    <style>
        .image {
            width: 200px; 
            height: 300px; 
            object-fit: cover; 
        }
    </style>
</head>
<body>
    
    <h2 style="margin-left:30rem;">Search Form</h2>
    <form action="search.php" method="GET">
        <input type="text" name="query" placeholder="Search something" style="margin-left:30rem;">
        <button type="submit">Search</button>
    </form>

</body>
</html>

    
    

</body>
</html>
<?php

if (isset($_GET['query'])) {
  
    $search_query = $_GET['query'];

    // Connect to your database (replace 'localhost', 'username', 'password', and 'database' with your actual database details)
    $conn = mysqli_connect('localhost', 'root', '', 'shop_db') or die('connection');

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Prepare the SQL query to search for the query in a 'products' table (replace 'products' with your actual table name)
    $sql = "SELECT * FROM `products` WHERE name LIKE '%$search_query%'";

    // Execute the query
    $result = $conn->query($sql);

    // Check if there are any results
    if ($result->num_rows > 0) {
        // Output data of each row
        while($row = $result->fetch_assoc()) {
          echo '<div style="margin-left:25rem;">';
            echo 'Product Name: ' . $row['name'] . '<br>';
            echo '<img src="uploaded_img/' . $row['image'] . '" alt="" class="image">';
            echo '<div class="name">' . $row['name'] . '</div>';
            echo '<div class="price">$' . $row['price'] . '/-</div>';
            echo '<form method="post" action="cart.php">';
            echo '<input type="hidden" name="product_id" value="' . $row['id'] . '">';
            echo '<button type="submit">Add to Cart</button>';
            echo '</form>';
            echo '</div>';
            echo "<hr>";
        }
    } else {
        echo "No results found.";
    }

    // Close the database connection
    $conn->close();
}
?>
