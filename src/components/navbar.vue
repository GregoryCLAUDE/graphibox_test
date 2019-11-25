<template id="navbar">
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
      <b-nav-item href="">home</b-nav-item>
      <b-nav-item href="">about</b-nav-item>
      <b-nav-item href="">Contact</b-nav-item>
    </b-navbar-nav>

  </b-navbar>
</template>

<script>

export default{}

</script>

<style media="screen">
.logoSmall{
  width: 10%;
  height: auto;

}
</style>
