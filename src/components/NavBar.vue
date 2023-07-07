<template>
<!-- 
    <nav class="nav">
    <logo>XB</logo>
    <router-link class="active" to="/">Home</router-link>
    <router-link class="active" to="/about">About</router-link>
    <router-link class="active" to="/education">Education</router-link>
    <router-link class="active" to="/projects">Projects</router-link>
    <router-link class="active" to="/contact">Contact</router-link>


    </nav> -->

<!-- <nav class="navbar">
    <a href="#" class="navbar-logo">XB</a>
    <ul class="navbar-menu">
      <li><a href="/">Home</a></li>
      <li><a href="about">About</a></li>
      <li class="navbar-dropdown">
        <a href="#">Resume</a>
        <div class="navbar-dropdown-content">
          <a href="education">Education</a>
          <a href="skills">Skills</a>
        </div>
      </li>
      <li><a href="testimonials">Testimonials</a></li>
      <li><a href="projects">Projects</a></li>
      <li><a href="contact">Contact</a></li>
    </ul> -->

  <nav class="navbar">
  <div class="container-fluid">
    <a href="/" class="navbar-logo">XB</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="about">About</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Resume
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="education">Education</a></li>
            <li><a class="dropdown-item" href="skills">Skills</a></li>
            <li><hr class="dropdown-divider"></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="testimonials">Testimonials</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="projects">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


<nav class="navbar bg-body-tertiary fixed-top">
  <div class="container-fluid">
    <a href="/" class="navbar-logo">XB</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <a href="/" class="navbar-logo">XB</a>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="about">About</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Resume
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="education">Education</a></li>
            <li><a class="dropdown-item" href="skills">Skills</a></li>
            <li><hr class="dropdown-divider"></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="testimonials">Testimonials</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="projects">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="contact">Contact</a>
        </li>
        </ul>
      </div>
    </div>
  </div>
</nav>


  <!-- </nav> -->




    
</template>

<script>
export default {
    
}
</script>
<style scoped>
    .navbar {
      background-color:rgba(222, 84, 142, 1) !important;
      height: 100px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 50px;
    }

    .navbar-logo {
      color: #e3d3dd;
      font-size: 30px;
      text-decoration: none;
      font-weight: bold;
    }

    .offcanvas-header, .offcanvas-body{      
      background-color:rgba(222, 84, 142, 1) !important;
    }

    .navbar-menu {
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: flex;
    }

    .navbar-menu li {
      margin-left: 20px;
    }

    .navbar-menu li a {
      color: #fff;
      text-decoration: none;
      font-size: 18px;
      padding: 10px;
      border-radius: 5px;
      transition: background-color 0.3s ease;
    }

    .navbar-menu li a:hover {
      background-color: #fff;
      color: #000;
    }

    .navbar-dropdown {
      position: relative;
    }

    .navbar-dropdown-content {
      display: none;
      position: absolute;
      background-color: #f15687;
      min-width: 100px;
      box-shadow: 0px 8px 16px 0px rgba(211, 21, 116, 0.2);
      z-index: 1;
    }

    .navbar-dropdown:hover .navbar-dropdown-content {
      display: block;
    }

    .navbar-dropdown-content a {
      color: #fff;
      text-decoration: none;
      display: block;
      padding: 10px 15px;
    }

    .navbar-dropdown-content a:hover {
      background-color: #fff;
      color: #000;
    }
    
/* Hamburger Menu Icon */
/* .hamburger-menu {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
}

.hamburger-menu .line {
  width: 30px;
  height: 3px;
  background-color: #fff;
  margin: 3px;
  transition: transform 0.3s ease;
}

.navbar-mobile {
  display: none;
  flex-direction: column;
  align-items: center;
  background-color: rgba(222, 84, 142, 1);
  padding: 10px;
  position: absolute;
  top: 100px;
  left: 0;
  right: 0;
}

.navbar-mobile li {
  margin: 10px 0;
}

.navbar-mobile li a {
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.navbar-mobile li a:hover {
  background-color: #fff;
  color: #000;
} */

/* Media Queries */
/* @media (max-width: 700px) {
  .navbar {
    padding: 0 20px;
  }

  .navbar-menu {
    display: none;
  }

  .hamburger-menu {
    display: flex;
  }

  .navbar-mobile {
    display: flex;
  }

  .navbar-mobile li {
    margin: 10px 0;
  }

  .navbar-mobile li a {
    padding: 10px;
  }
} */

@media (max-width: 300px) {
  .navbar {
    flex-direction: column;
    height: auto;
    padding: 0 10px;
  }

  .navbar-logo {
    margin-bottom: 10px;
  }

  .navbar-menu li {
    margin: 5px 0;
  }

  .navbar-menu li a {
    font-size: 14px;
    padding: 6px;
  }
}
</style>
