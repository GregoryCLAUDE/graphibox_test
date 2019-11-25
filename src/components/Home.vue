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
        <b-nav-item href="/Home">Accueil</b-nav-item>
        <b-nav-item href="/News">News</b-nav-item>
        <b-nav-item href="/Contact">Contact</b-nav-item>
      </b-navbar-nav>

    </b-navbar>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!--slide 1-->
      <b-carousel-slide>
        <template v-slot:img>
          <img class="d-block img-fluid w-100" width="1024" height="480" src="./photos/slide/graphibox_SLIDE1.jpg" alt="slide1">
        </template>
      </b-carousel-slide>

      <!-- Slide2 -->
      <b-carousel-slide>
        <template v-slot:img>
          <img class="d-block img-fluid w-100" width="1024" height="480" src="./photos/slide/graphibox_SLIDE2.jpg" alt="slide2">
        </template>
      </b-carousel-slide>

      <!-- Slide3 -->
      <b-carousel-slide>
        <template v-slot:img>
          <img class="d-block img-fluid w-100" width="1024" height="480" src="./photos/slide/graphibox_SLIDE3.jpg" alt="slide3">
        </template>
      </b-carousel-slide>
    </b-carousel>
    <b-jumbotron>
      <p>Vous souhaitez développer votre présence sur internet, attirer plus de prospects, faire connaître vos produits et vos services ou encore devenir expert dans votre domaine ?</p>
      <p>Graphibox vous accompagne dans votre stratégie de communication sur internet et sur vos réseaux sociaux (Facebook, Twitter, Instagram, LinkedIn etc…). La mise en place d’une stratégie Social Média vous permettra de répondre au plus près à vos objectifs.</p>
      <p>Cette stratégie se compose d’une analyse de vos besoins, présentation et choix des médias utilisés, création d’une ligne éditoriale, planning des publications, axes d’amélioration de l’existant, gestion et la modération de votre communauté et la mise en place de rapports mensuels.</p>
      <p>La création d’un blog va vous permettra également de communiquer sur ces différents points en devenant expert dans votre domaine tout en améliorant le référencement naturel et en augmentant le trafic de votre site web.</p>
      <p>Optez pour une communication digitale complète et efficace en vous distinguant de vos concurrents tout en gagnant en notoriété.</p>
    </b-jumbotron>
      <b-card img-src="./photos/locaux/locaux4.jpg" img-alt="Card image" img-left>
        <b-card-text>
          <h1><b>Notre Agence</b></h1>
        </b-card-text>
        <b-card-text>
        <b>GRAPHIBOX</b> est une agence web implantée dans le <b>Gers</b> à Gimont (32200) depuis l’an 2000. Une entreprise dans l'air du temps, qui s’adapte aux <b>nouvelles technologies</b>.
        </b-card-text>
        <b-card-text>
          Pour se faire <b>Graphibox</b> se compose d'une équipe experte et passionnée qui vous accompagne dans la réalisation de tous vos projets de <b>communication internet</b>.
        </b-card-text>
        <b-card-text>
          u'il s'agisse de la réalisation d'un site Internet ou d'une application en Intranet, d'un relookage ou de la refonte de votre site web actuel, de l'hébergement dédié, mutualisé ou encore virtualisé, de la réservation et de la gestion de nom de domaine, ou encore de la gestion de vos adresses emails professionnelles ou personnelles, nous vous garantissons une écoute et un conseil de qualité ainsi que flexibilité et réactivité.
        </b-card-text>
        <b-card-text>
          De 2000 à 2018, soit <b>18 ans d'expérience</b> à votre service !
        </b-card-text>
        <b-card-text>
          Fort de nos <b>18 ans d’expérience</b>, nous répondons à vos besoins dans le domaine de la création ou refonte d'identité visuelle, du référencement de site Internet, ainsi que la mise en place de stratégie web.
L'équipe de <b>Graphibox</b> vous propose ainsi un accompagnement à long terme, avant, pendant et après la phase de conception de votre projet.
        </b-card-text>
    </b-card>
    <h1><b>Notre Savoir-Faire</b></h1>
    <b-card-group deck>
      <b-card img-src="./photos/entreprises/conception.jpg" img-alt="Card image" img-right>
        <b-card-text>
          <h4>Conception</h4>
        </b-card-text>

        <b-card-text>
          La conception d’un projet de communication passe d’abord par plusieurs étapes essentielles :
          <ul>
            <li>La prise de rendez-vous afin de vous rencontrer et découvrir vos attentes, votre objectif </li>
            <li>Vous conseiller sur votre projet de communication ; Que se soit sur le choix d’une nouvelle identité visuelle adaptée ou bien d’un relookage d’un projet existant, de l’ergonomie de votre futur site web, ou encore, de vous informer sur les différentes contraintes techniques relatives à votre projet... </li>
            <li>Vous guider vers les outils les plus adaptés afin de servir au mieux votre projet sur différents supports de visibilité ;</li>
            <li>Etablir un planning et une stratégie la plus efficace pour optimiser et rentabiliser votre outil de communication, tout en respectant votre budget ;</li>
            <li>Préparer le suivi et la maintenance de votre projet afin de vous permettre, une fois en ligne, de mettre facilement à jour le contenu de votre site Internet : textes, photos, vidéos...</li>
          </ul>
          Pour toutes ses étapes, nous vous accompagnons et restons à votre écoute afin de réaliser pour vous un site sur mesure et adapté à vos besoins.
        </b-card-text>
      </b-card>
    <b-card img-src="./photos/entreprises/developpement.jpg" img-alt="Card image" img-left >
      <b-card-text>
        <h4>Développement</h4>
      </b-card-text>
      <b-card-text>
        Nous développons vos projets de communication avec vous.<br>
        Durant la phase de développement, nous mettons à votre disposition les moyens de suivre l'évolution de la construction de votre projet en temps réel car la communication entre vous et nous est essentielle avant toute publication finale.<br>
        Que vous soyez une PME, PMI, un auto-entreprenneur, un artisan, un organisme de tourisme, un commerçant, etc..., nous concevons vos projets pour tous types de secteurs d'activités (services, tourisme, vins & spriritueux, Agro-alimentaire, e-commerce, collectivités, bâtiment, ...).<br>
        Les nouvelles technologies évoluent vite. Nous nous tenons à jour de cette évolution afin de répondre à tous vos besoins (CMS, sites ou applications pour mobiles & smartphones, responsive design, contenus dynamiques,...).<br>
        Pour les e-commerce, nous prennons en charge le développement des modules de paiement sécurisés (Paybox, Systempay, PayPal, Kwixo,.... ). De même pour les modules de livraison en relais colis (TNT, Chronorelais,...).<br>
        Nous développons également pour vous les outils qui vous permettent de gérer de manière autonome vos contenus dynamiques en temps réel (Backoffice, gestion des données, imports/exports web-services,...).
      </b-card-text>
    </b-card>

    <b-card img-src="./photos/entreprises/hebergement.jpg" img-alt="Card image" img-right >
      <b-card-text>Hébergement</b-card-text>
      <b-card-text>
        L'hébergement de votre projet, une étape à ne pas négliger !<br>
        Nous mettons au service de vos besoins les meilleures solutions d'hébergement sécurisé ; Serveurs dédiés, virtualisation, cloud computing,... notre structure d'hébergement répondra à toutes vos attentes.<br>
        Notre prestation d'hébergement prend en compte technologie, sécurité, bande passante, stockage, tolérance de panne..., tous les critères essentiels afin de vous garantir une qualité de service 24h/24h pour votre projet Internet.<br>
        Nous pouvons prendre en charge pour vous :
        <ul>
          <li>
            La réservation et la gestion de votre nom de domaine ;
          </li>
          <li>
            L'hébergement et la sauvegarde des fichiers de données de votre projet Internet ;
          </li>
          <li>
            La mise en ligne et la maintenance de votre projet Internet sur le World Wide Web ;
          </li>
          <li>
            La gestion et la maintenance de votre messagerie professionnelle associée à votre nom de domaine (boîtes e-mails personnalisées) ;
          </li>
        </ul>
      </b-card-text>
    </b-card>
  </b-card-group>
</div>
</template>

<script type="text/javascript">
export default {
  name: 'Home',
  data () {
    return {
      slide: 0,
      sliding: null
    }, {

    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
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
