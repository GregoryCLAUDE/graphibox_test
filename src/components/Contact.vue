<template>
  <div class="">

  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-container>
      <b-row>

        <!-- left align elements-->
        <b-navbar-brand href="">
          <img src="./photos/logo/icon.png" class="logoSmall" fluid alt="logo">
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    </b-row>
  </b-container>
    <!-- right align elements-->
    <b-navbar-nav class="ml-auto">
      <b-nav-item href="">Home</b-nav-item>
      <b-nav-item href="">News</b-nav-item>
      <b-nav-item href="">Contact</b-nav-item>
    </b-navbar-nav>

  </b-navbar>
  <b-container>
    <b-row type="dark">
      <b-col cols="4" type="dark">
        <!-- section nous contacter -->
        <h1>Nous contacter</h1>
        <h4>
          <b>
            Informations
          </b>
        </h4>
        <p>9 rue des Tuileries</p>
        <p>32200 Gimont</p>
        <br>
        <p>Téléphone</p>
        <b-link href="+33562678820">+33(0)562678820</b-link>
        <br>
        <p>E-mail</p>
        <b-link href="contact@graphibox.net"></b-link>
        <br>
        <p>Assistance</p>
        <b-link href="https://faq.graphibox.fr/">Questions Fréquentes</b-link>
        <b-link href="https://support.graphibox.fr/">Support Client</b-link>

      </b-col>
      <b-col cols="8">
        <b-row>
          <!--carte maps-->
          <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d2888.069048062445!2d0.8710916!3d43.6259218!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sfr!4v1574647747488!5m2!1sfr!2sfr" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
        </b-row>
        <b-row>
          <!-- formulaire de contact-->
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="Nous ne partagerons pas votre email."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2"
      label="coordonnées"
      label-for="input-1"
      decriptions="vos coordonnées resterons confidentielles">
      <b-form-input
      id="input-1"
      v-model="form.name"
      type="text"
      required
      placeholder="Enter name"
      ></b-form-input>
      <b-form-input
      id="input-1"
      v-model="form.firstname"
      type="text"
      required
      placeholder="Enter firstname"
      ></b-form-input>
      <b-form-input
      id="input-1"
      v-model="form.phone"
      type="phone"
      required
      placeholder="Enter phone"
      ></b-form-input>
    </b-form-group>
    <b-form-input
    id="input-1"
    v-model="form.text"
    type="text"
    required
    placeholder="Enter object"
    ></b-form-input>
    <b-form-textarea
    id="input-1"
    v-model="text"
    type="text"
    rows="3"
    max-rows="6"
    required
    placeholder="Enter message"
    ></b-form-textarea>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'Contact',
  data() {
      return {
        form: {
          name: '',
          firstname: '',
          phone: '',
          email: '',
          object: '',
          message: ''
        },

        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reinnitialise les valeurs du formulaire
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // pour eviter les problemes de formulaire
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
}
</script>
<style media="screen">
.logoSmall{
  width: 10%;
  height: auto;

}
</style>
