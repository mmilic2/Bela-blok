<?php session_start()?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <link href="index.css" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
</head>
<body>
    
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <a class="navbar-brand" href="#">Bela blok</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="register.php">Register</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="login.php">Sign in</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="logout.php">Logout</a>
            </li>    
          </ul>
        </div>  
    </nav>
    <br>
    <img src="https://lh3.googleusercontent.com/GmiaLxBQFVe_3siduhJhl3pjWrhkDOc2vaXMhFF5wvEkxjV2uJWeLbcLwbBkOxsFZWw=s180-rw" alt="Responsive image" width="300" height="150" class="rounded mx-auto d-block">
    <br>
    <br>
     <div class="container">
      <div class="row justify-content-center">
        <div class="d-flex justify-content-center align-items-center container">
          <div class="form-check-inline">
            <label class="form-check-label">
              <input class="form-check-input" type="checkbox" id="checkbox1" value="zvao1" aria-label="...">
            </label>
          </div>
          <div class="form-inline">
            <div class=".col-xs-4">
              <input class="form-control" type="number" value="" id="bodovi1" placeholder="Unesite broj bodova">
            </div>
          </div>
          <div class="form-inline">
            <div class=".col-xs-4">
              <input class="form-control" type="number" value="" id="bodovi2" placeholder="Unesite broj bodova">
            </div>
          </div>
          <div class="form-check-inline">
            <label class="form-check-label">
              <input class="form-check-input" type="checkbox" id="checkbox2" value="zvao2" aria-label="...">
            </label>
          </div>
        </div>
      </div>
    </div>
    <br>
    <div class="container">
        <div class="row justify-content-center">
          <div class="d-flex justify-content-center align-items-center container ">
            <div class="form-check-inline">
              <label class="form-check-label">
                <input class="form-check-input" type="checkbox" id="checkbox3" value="belot1" aria-label="...">
              </label>
            </div>
            <div class="form-inline">
              <div class=".col-xs-4">
                <input class="form-control" type="number" value="" id="zvanje1" placeholder="Unesite zvanje">
              </div>
            </div>
            <div class="form-inline">
              <div class=".col-xs-4">
                <input class="form-control" type="number" value="" id="zvanje2" placeholder="Unesite zvanje">
              </div>
            </div>
            <div class="form-check-inline">
              <label class="form-check-label">
                <input class="form-check-input" type="checkbox" id="checkbox4" value="belot2" aria-label="...">
              </label>
            </div>
          </div>
        </div>
      </div>
      <br>
      <div class="d-flex justify-content-center align-items-center container">
      <?php  if(!isset($_SESSION['loggedin'])): ?>
          <button disabled type="submit" class="btn btn-primary" onclick="Bodovanje()">Zapiši</button>
      <?php  else: ?>
        <button type="submit" class="btn btn-primary" onclick="Bodovanje()">Zapiši</button>
      <?php endif; ?>
      </div>
      <br>
      <div class="d-flex justify-content-center align-items-center container">
        <div class="col-md-4"></div>
        <div class="col-md-4">
            <table class="table table-striped"> 
                <thead class="thead-default">
                    <tr>
                        <th  id="ukupnoMi" style="text-align: right!important;">Mi: 0</th>
                        <th  id="ukupnoVi">Vi: 0</th>
                    </tr>
                </thead>

                <tbody id="rezultat">

                </tbody>
            </table>
            <p id="msg"></p>
        </div>
        <div class="col-md-4"></div>
    </div>
    <script src="rezultat.js"></script>
    <script src="main.js"></script>
</body>
</html>