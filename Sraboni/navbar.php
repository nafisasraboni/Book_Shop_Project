

<!doctype html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" rel="stylesheet" />
  <link rel="stylesheet" href="style.css">
  <title>homepage</title>





  
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-light" style="position: sticky;    background-color: #d2dbe3">
  <a class="navbar-brand" href="#">The bookshelf</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item ">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="products.php">Products</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contact us</a>
      </li>
    
    </ul>

    

    <ul style="display: flex;">


    <div class="nav-link">
      <a href="admin.php"> Admin</a>
    </div>
<div>

  <form class="form-inline my-2 my-lg-0" action="search.php" method="get">
    <input class="form-control mr-sm-2" name="search"  type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
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