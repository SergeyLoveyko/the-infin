<script setup lang="ts">
// import { AppCol } from '#components';

</script>

<template>
  <div class="wrapper">
  <!-- <div class="row">
    <div class="col">Box 1</div>
    <div class="col">Box 2</div>
    <div class="col">Box 3</div>
  </div> -->
  <section class="hero">
      <AppRow>
        <AppCol :span="2">
          <div class="grid-content bg-info-dark">
            Col-4
          </div>
        </AppCol>
        <AppCol :span="4">
          <div class="grid-content bg-info-light-5">
            Col-4
          </div>
        </AppCol>
        <AppCol :span="4">
          <div class="grid-content bg-info-dark">
            Col-4
          </div>
        </AppCol>
        <AppCol :span="4">
          <div class="grid-content bg-info-light-5">
            Col-4
          </div>
        </AppCol>
        <AppCol :span="4">
          <div class="grid-content bg-info-dark">
            Col-4
          </div>
        </AppCol>
        <AppCol :span="4">
          <div class="grid-content bg-info-light-5">
            Col-4
          </div>
        </AppCol>
      </AppRow>
      <div class="row">
        <AppCol :span="24">
          <div class="grid-content bg-info-dark">
            Col-24
          </div>
        </AppCol>
      </div>
      <div class="row">
        <AppCol :span="12">
          <div class="grid-content bg-info-dark">
            Col-12
          </div>
        </AppCol>
        <AppCol :span="12">
          <div class="grid-content bg-info-light-5">
            Col-12
          </div>
        </AppCol>
      </div>
      <div class="row">
        <AppCol :span="8">
          <div class="grid-content bg-info-dark">
            Col-8
          </div>
        </AppCol>
        <AppCol :span="8">
          <div class="grid-content bg-info-light-5">
            Col-8
          </div>
        </AppCol>
        <AppCol :span="8">
          <div class="grid-content bg-info-dark">
            Col-8
          </div>
        </AppCol>
      </div>
      <AppRow>
        <AppCol :span="4">
          <div class="grid-content bg-info-dark">
            Col-4
          </div>
        </AppCol>
        <AppCol :span="4">
          <div class="grid-content bg-info-light-5">
            Col-4
          </div>
        </AppCol>
        <!-- <AppCol :span="89"> -->
        <AppCol :span="4">
          <div class="grid-content bg-info-dark">
            Col-4
          </div>
        </AppCol>
        <AppCol :span="4">
          <div class="grid-content bg-info-light-5">
            Col-4
          </div>
        </AppCol>
        <AppCol :span="4">
          <div class="grid-content bg-info-dark">
            Col-4
          </div>
        </AppCol>
        <AppCol :span="4">
          <div class="grid-content bg-info-light-5">
            Col-4
          </div>
        </AppCol>
      </AppRow>
    </section>
  </div>
</template>

<style scoped>

.hero {
  padding: 106px 18px 30px 18px;
}

.row {
  padding-bottom: 30px;
}

.col {
  flex: 1 1 30%;
  min-width: 150px;
  background-color: #409EFF;
  color: white;
  padding: 20px;
  text-align: center;
  border-radius: 6px;
}


.el-row {
  margin-bottom: 20px;
}

.el-row:last-child {
  margin-bottom: 0;
}

.el-col {
  border-radius: 4px;
}

/* .grid-content {
  border-radius: 4px;
  min-height: 36px;
} */

.bg-purple-dark {
  background-color: #5c3ea1;
  color: white;
}

.bg-purple {
  background-color: #7c54d6;
  color: white;
}

.bg-purple-light {
  background-color: #b1a7e9;
  color: #333;
}

.bg-blue {
  background-color: #409EFF;
  color: white;
}

.bg-green {
  background-color: #67C23A;
  color: white;
}

.bg-red {
  background-color: #F56C6C;
  color: white;
}


</style>