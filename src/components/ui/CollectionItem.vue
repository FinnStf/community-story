<script setup>
import LikeButton from '../buttons/LikeButton.vue';
</script>

<template>
    <div class="story-box">
        <div class="story">
            <h1 class="story-title">Title</h1>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed
                diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.</p>´
            <a>Weiterleses...</a>
        </div>
        <div class="btn-wrapper">
           <LikeButton></LikeButton>
        </div>
    </div>
</template>
<style>
.story-box{
    padding: 2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.story{
    margin: 0rem 5rem 0rem 0rem;
}
.story-title{
    margin-bottom: .5rem;
}</style>