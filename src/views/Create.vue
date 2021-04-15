<template>
  <h2 class="title">Inserer votre information</h2>

  <form @submit.prevent="handelSubmit">

    <div>

    <div class="form-group">
      <label for="name">Full Name</label>
      <input
        type="text"
        class="form-control"
        id="name"
        v-model="form.name"
      />    
    </div>

 <div class="form-group">
      <label for="age">Age</label>
      <input
        type="text"
        class="form-control"
        id="age"
        v-model="form.age"

      />
    </div>

    <div class="form-group">
      <label for="address">Address</label>
      <input
        type="text"
        class="form-control"
        id="address"
        v-model="form.address"
      />
    </div>

    <div class="form-group">
      <label for="phone">Phone</label>
      <input
        type="text"
        class="form-control"
        id="phone"
        v-model="form.phone"
      />
    </div>

    <div class="form-group">
      <label for="email">EMAIL</label>
      <input
        type="email"
        class="form-control"
        id="email"
        v-model="form.email"
      />
    </div>

    <div class="form-group">
      <label for="specialité">Specialité</label>
      <input
        type="text"
        class="form-control"
        id="specialité"
        v-model="form.specialité"
      />
    </div>


    </div>

    <div>
         <div class="form-group">
        <label for="date1">Date </label>
        <input type="text" class="form-control" id="date1"   v-model="form.date1">
        
      </div>


    <div class="form-group">
        <label for="experience">Experience</label>
        <input type="text" class="form-control" id="experience1"  v-model="form.experience">
        
      </div>

       <div class="form-group">
        <label for="date2">Date </label>
        <input type="text" class="form-control" id="date1"    v-model="form.date2">
        
      </div>

    <div class="form-group">
        <label for="formation">Formation </label>
        <input type="text" class="form-control" id="formation1"    v-model="form.formation">
        </div>
        

<div class="form-group">
        <label for="Langue">Langue </label>
        <input type="text" class="form-control" id="langue1"    v-model="form.langue">
        
      </div>

      </div>

   

    <button type="submit" id="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
export default {
  name: "Create",
  data() {
    return {

      form: {

      name: "",
      age: "",
      address: "",
      phone: "",      
      email: "",
      specialité: "",
      date1:"",
      experience:"",
      date2:"",
      formation:"",
      Langue:"",

      }

     
    };
  },
  methods : {
    handelSubmit(){

       localStorage.setItem('form',JSON.stringify(this.form));
       router.push("Create")

    }
  }
};
</script>
