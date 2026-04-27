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
  </head>
  <body>
  


  <!-- Navbar  <span class="sr-only">(current)</span>-->
  <nav class="navbar navbar-expand-lg navbar-light" style="position: sticky;    background-color: #d2dbe3">
  <a class="navbar-brand" href="#">The bookshelf</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item ">
        <a class="nav-link" href="index1.php">Home</a>
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











<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us</title>
    <link rel = "stylesheet" type = "text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel = "stylesheet" type = "text/css" href="style5.css">
</head>
<body>
    <section class="contact">
    <div class="container">
    <h2>Contact Us</h2>
    <div class="contact-wrapper">
    <div class="contact-form">
    <h3>Send us a message</h3>
    <form>
        <div class="form-group">
        <input type="text" name="name" placeholder="Your Name">
        </div>
        <div class="form-group">
            <input type="email" name="email" placeholder="Your Email">
            </div>
        <div class="form-group">
            <textarea name="message" placeholder="Your Message"></textarea>
            </div>
    <button type="submit">Send Message</button>
    </form>
    </div>
    <div class="contact info">
    <h3>Contact Information</h3>
    <p><i class="fas fa-phone"></i>+880 1751 855 644</p>
    <p><i class="fas fa-envelope"></i>info@bookshelf.com</p>
    <p><i class="fas fa-map-maker-alt"></i>123 Street, Laxmipur, Rajshai, Bangladesh</p>
    </div>
    </div>
    </div>
    </section>
</body>
</html>