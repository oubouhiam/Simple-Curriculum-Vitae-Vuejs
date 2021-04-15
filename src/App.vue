<template>
  <div id="nav">
    <router-link to="/">Creéer votre CV</router-link> 
    <router-link to="/Telecharger">Telecharger votre CV</router-link> 
  </div>
  <router-view/>
</template>

<style>
body{
  background-image: url(https://image.freepik.com/free-vector/white-abstract-background-design_23-2148825582.jpg);
  background-size: cover;
  background-repeat: no-repeat;

}
.title{
  text-align: center;
  margin-top: 30px;
  border: aqua 2px solid;
  border-radius: 20px;
  background-color: rgb(171, 255, 255);
  width: 20%;
  text-align: center;
  color: rgb(4, 4, 4);
}
label{
  margin-bottom: 10px;
}
.form-group{
  margin: 20px;
}
#submit{
justify-content: center;
}
form{
  width: 50%;
  margin-left: 25%;
  padding: 20px;
 

}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #007ed1;
}

#nav {
  padding: 30px;
  background-color: #cbe6e694;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  border: 1 px solid rgb(0, 182, 127);
  border-radius: 5px;
}

#nav a.router-link-exact-active {
  color: #30c8ff;
}

#CV{
  margin:40px;
    width: 60%;
    height: 90vh;
    margin-left: 25%;
    box-shadow: black;
  background-color: azure;
  text-align: center;
}

#Create{
    line-height: 0.9;
    margin: 20px;
    color: black;
    
}
#title{
    text-align: center;
    font-size: 22px;
    margin: 20px;
}

.formation{
    width: 100%;
    margin-top: 1%;
    color: rgb(60, 255, 245);
    float: left;
    margin: 20px;
}
table{
  text-align: center;
  margin: 20px;
}
td{
  width: 20%;
  color: rgb(0, 0, 0);
}
th{
  width: 1000%;

}
</style>
