<template>
  <el-autocomplete
    popper-class="my-autocomplete"
    v-model="state3"
    :fetch-suggestions="querySearch"
    custom-item="my-item-zh"
    placeholder="请输入关键词"
    @select="handleSelect"
    icon="search"
    :on-icon-click="handleIconClick"
  ></el-autocomplete>
</template>

<script>
  import Vue from 'vue';
  Vue.component('my-item-zh', {
    functional: true,
    render: function (h, ctx) {
      var item = ctx.props.item;
      return h('li', ctx.data, [
        // h('div', { attrs: { class: 'name' } }, [item.value]),
        h('span', { attrs: { class: 'addr' } }, [item.address])
      ]);
    },
    props: {
      item: { type: Object, required: true }
    }
  });
  export default {
    data() {
      return {
        restaurants: [],
        state3: ''
      };
    },
    methods: {
      querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.address.indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          { "value": "room", "address": "room" },
          { "value": "lib", "address": "lib" },
          { "value": "room.door", "address": "door" },
          { "value": "room.platform", "address": "platform" },
          { "value": "lib.a1", "address": "A1" },
          { "value": "lib.a2", "address": "A2" },
          { "value": "lib.502", "address": "502" }
        ];
      },
      handleSelect(item) {
        window.bus.$emit('moveTo', item.value);
      },
      handleIconClick(ev) {
        console.log(ev);
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
    }
  }
</script>


<style>
.my-autocomplete {
  li {
    line-height: normal;
    padding: 7px;

    .name {
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .addr {
      font-size: 12px;
      color: #b4b4b4;
    }

    .highlighted .addr {
      color: #ddd;
    }
  }
}
</style>
