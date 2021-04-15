<template>
 <div id="CV">
        <div id="title">       
            <h2>{{form.specialité}}</h2>
        </div> 
        <div class="formation">       
           <h4>Personal Information</h4>          
        </div>
        <div id="Create">        
            <h4>{{form.name}}</h4>
            <p>{{form.age}}</p>
            <p>{{form.address}}</p>
            <p>{{form.phone}}</p>
            <email>{{form.email}}</email>
        </div>



        <div class="formation">       
           <h4>FORMATION</h4>          
        </div>

	      <table>
              <tbody>
			            <tr>
                      <td>{{form.date1}}</td>
                      <th>{{form.formation}}</th>
			            </tr>
                </tbody>
        </table>
    
        <div class="formation">       
           <h4>EXPÉRIENCES PROFESSIONNELLES</h4>   
        </div>

        <table>
              <tbody>
			            <tr>
                      <td>{{form.date2}}</td>
                      <th>{{form.experience}}</th>
			            </tr>
              </tbody>
        </table>   

        <div class="formation">       
           <h4>LANGUES</h4>
        </div>

	      <table>
              <tbody>
			              <tr>
                      <th>{{form.langue}}</th>
			              </tr>
                </tbody>
        </table> 
                  <div class="actions">
      <button @click="generateReport">download now</button>
            <button type="button" id="btn2" class="secondary">Cancel</button>
          </div>


  </div> 

</template>


 <script>
 import VueHtml2pdf from "vue-html2pdf";
  export default {

    data() {
      return {
        form: {},
        show: false
      }
    },
        components: {
        VueHtml2pdf
    },
    methods: {
        generateReport () {
            print()
        }
    },
    mounted() {

      this.form = JSON.parse(localStorage.getItem('form'))

    },
  };


</script>