<template>
    <h2 class="text-center py-3">Let's Work😉</h2>
 <div>
  
  <div class="container">        

        <div class="content m-4">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.839271244068!2d18.590175975423115!3d-33.99666197317795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc450aa3634887%3A0x3b4dab4be975b211!2s87%20Ingqanga%20Cres%2C%20Crossroads%2C%20Cape%20Town%2C%207750!5e0!3m2!1sen!2sza!4v1688567720311!5m2!1sen!2sza" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <!-- FORM -->

        <form action="https://formspree.io/f/meqwvrbd" method="POST" class="contact">
            <div>
                <p>Full name</p>
                <label>
                    <input class="flex" type="text" placeholder="Full name">
                </label>
            </div>
            <div>
                <p>Email</p>
                <label>
                    <input class="flex" type="email" placeholder="Email">
                </label>
            </div>
            <div>
                <p>Subject</p>
                <labe>
                    <input class="flex" type="text" placeholder="Subject">
                </labe>
            </div>
            <div>
                <p>Message</p>
                <label>
                    <textarea name="message" class="message" placeholder="Your message"></textarea>
                </label>
            </div>
            <div  >
                <input class="btn" type="submit" value="Submit">
            </div>
        </form>

        <!-- FORM -->
    </div>

    </div>
    



</template>
<script>
export default {
    
}
</script>
<style scoped>
.container{
    display: flex;
    justify-content: center;
}


.contact{
    background-image: url(https://i.postimg.cc/nLqZ8Sqp/pexels-vin-cius-vieira-ft-4424355.jpg);
    /* box-shadow: 6px 6px 6px 6px purple; */
    display: flex;
    flex-direction: column;
    width: 30%;
    min-height: 20vh;
    align-items: center;
    border-radius: 8px;
    margin-inline: auto;
    margin-bottom: 60px;

}

.content{
    width: 400px;
    height: 400px;
    margin: 0 0 0 160px;
}

input{
    background-color: rgb(205, 133, 205);
    color: ghostwhite;
    margin-top: 20px;
    width: 300px;
    height: 40px;
    border-radius: 8px;
    border: 2px rgb(255, 0, 166) solid;
    
}
.message{
    background-color: rgb(205, 133, 205);
    width: 300px;
    height: 80px;
    margin-top: 20px;
    border: 2px rgb(255, 0, 166) solid;
    border-radius: 8px;
}

.btn{
    margin-top: 20px;
    width: 80px;
    border-radius: 6px;
    margin-bottom: 20px;

}

.btn:hover{
    background-color: blueviolet;
}
p{
    color:aliceblue;
    margin-top:10px;
}

/* Media Queries */
@media (max-width: 700px) {
  .contact {
    width: 80%;
  }

  .content {
    width: 100%;
    margin: 0;
  }

  input {
    width: 80%;
  }

  .message {
    width: 80%;
  }
}

@media (max-width: 300px) {
  .contact {
    width: 100%;
  }
  .message{
    width: 150px;
    height: 60px;
  }
  .content {
    display: none;
  }
}
    
</style>