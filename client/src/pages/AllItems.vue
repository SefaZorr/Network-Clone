<template>
  <div>
    <div>
      <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
        <ol class="breadcrumb bread-crumb-m font-small mb-1 ms-l">
          <li class="breadcrumb-item c-gray">Ana Sayfa</li>
          <li class="breadcrumb-item" aria-current="page">
            Sizin için seçtiklerimiz
          </li>
        </ol>
        <hr class="my-0 w-100" />
      </nav>
    </div>

    <div class="custom-container mt-4 w-50">
      <p class="c-gray text-center c-gray">Sizin İçin Seçtiklerimiz</p>
      <div class="row">
        <div v-for="item in items" :key="item.id" class="col-3" >
          <item :itemSettings="{col:'col-6',textLocation:'text-end',color:'#1c1c1c',isHover:true, fontSize:'16px'}" 
                class="pointer" 
                :item="item" 
                @click="goToItemPage(item.id)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Item from "../components/Shared/appItems/item.vue";
export default {
  components: {
    Item,
  },
  created() {
    this.$store.dispatch("fetchItemsForHome");
  },
  computed: {
    items() {
      return this.$store.state.homeItems;
    },
  },
  methods: {
    goToItemPage(id) {
      this.$store.dispatch('fetchItem', id);
      this.$router.push({ name: 'ItemDetailPage',params: { id: id } });
    }
  }
};
</script>

<style>
.bread-crumb-m {
  margin-top: 140px;
}
.ms-l {
  margin-left: 15%;
}
</style>