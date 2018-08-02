<template>
  <div class="hello">
    <x-header :title="title" :left-options="{showBack: false}"></x-header>
    <search @on-change="getSearchResult" :results="searchResults" position="absolute" auto-scroll-to-top top="46px" @on-focus="onFocus" @on-cancel="onCancel" @on-submit="onSubmit"  v-model="searchValue" ref="search"></search>
    <swiper :list="demoList" dots-position="right">
    </swiper>
    <!-- <router-link v-for="(item, i) in gridList" :key="i" :to="{ name: 'groupdetail', params: { id: item.label} }">{{item.label}}</router-link> -->
    <grid :cols='5' :show-lr-borders="false" :show-vertical-dividers="false" >
      <grid-item link='/groupdetail?id=${item.label}' :label="item.label" v-for="(item, i) in gridList" :key="i">
          <img slot="icon" :src="item.img" alt="">
      </grid-item>
    </grid>
    <div class="divider">
      <divider>精选推荐</divider>
    </div>
    <card :footer="{title: '更多'}" @on-click-footer="loadMore">
      <div slot="header" class="card-header">
        <div class="card-header-left">
          <icon type="info-circle"></icon>
          <span>生活专营店</span>
        </div>
        <div class="card-header-right">
          <span>商品数量:11</span>
          <span>|</span>
          <span>销量:845</span>
        </div>
      </div>
      <div slot="content" class="card-padding">
        <div class="card-content" >
          <img class="img" :src="item.img" alt="item.title" v-for="(item, i) in imgList" :key="i">
        </div>
      </div>
    </card>
    <load-more :show-loading="showloading" :tip="loadTips"></load-more>
  </div>
</template>
<script>
import { XHeader, Swiper, SwiperItem, Search, Grid, GridItem, Card } from 'vux'

const imgList = [
  {
    img: 'http://placeholder.qiniudn.com/800x300/FF3B3B/ffffff',
    title: '送你一朵花'
  },
  {
    img: 'http://placeholder.qiniudn.com/800x300/FFEF7D/ffffff',
    title: '送你一次旅行'
  },
  {
    img: 'http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff',
    title: '送你一顿美食'
  },
  {
    img: 'http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff',
    title: '送你一个笑脸'
  }
]
const swiperList = imgList.map((one, index) => ({
  url: 'javascript',
  img: one.img,
  title: one.title
}))
const gridList = [
  {
    label: '女装',
    img: require('../assets/icon_nav_article.png')
  },
  {
    label: '男装',
    img: require('../assets/icon_nav_cell.png')
  },
  {
    label: '数码',
    img: require('../assets/icon_nav_button.png')
  },
  {
    label: '食品',
    img: require('../assets/icon_nav_actionSheet.png')
  },
  {
    label: '鞋靴',
    img: require('../assets/icon_nav_dialog.png')
  },
  {
    label: '内衣',
    img: require('../assets/icon_nav_button.png')
  },
  {
    label: '美妆',
    img: require('../assets/icon_nav_panel.png')
  },
  {
    label: '箱包',
    img: require('../assets/icon_nav_icons.png')
  },
  {
    label: '家电',
    img: require('../assets/icon_nav_toast.png')
  },
  {
    label: '百货',
    img: require('../assets/icon_nav_button.png')
  }
]
export default {
  name: 'home',
  components: {
    XHeader,
    Swiper,
    SwiperItem,
    Search,
    Grid,
    GridItem,
    Card
  },
  methods: {
    getSearchResult (val) {
      console.log('on-change', val)
      this.searchResults = val ? getResult(this.searchValue) : []
    },
    onSubmit () {
      this.$refs.search.setBlur()
      this.$vux.toast.show({
        type: 'text',
        position: 'top',
        text: 'on submit'
      })
    },
    onFocus () {
      console.log('on Focus')
    },
    onCancel () {
      console.log('on Cancel')
    },
    loadMore () {
      console.log('获取更多数据')
      this.showloading = true
      this.loadTips = '正在加载'
    }
    // this.$router
  },
  data () {
    return {
      showloading: false,
      loadTips: '',
      title: '小店微商城',
      demoList: swiperList,
      imgList: imgList,
      gridList: gridList,
      searchResults: [],
      searchValue: ''
    }
  }
}
function getResult (val) {
  let rs = []
  for (let i = 0; i < 20; i++) {
    rs.push({
      title: `${val} result: ${i + 1} `,
      other: i
    })
  }
  return rs
}
</script>

<style scoped>
.weui-grid {
  padding: 10px 10px;
  background-color: #ffffff;
}
.weui-grid:after {
  border-bottom: none;
}
.divider {
  width: 80%;
  padding: 0% 10%;
  margin: 6px auto;
  box-sizing: border-box;
}
.divider .vux-divider {
  padding: 0
}
.vux-slider > .vux-swiper > .vux-swiper-item > a > .vux-swiper-desc {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1.4em;
    font-size: 16px;
    padding: 20px 50px 12px 13px;
    margin: 0;
    background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.7) 100%);
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.7) 100%);
    color: #fff;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.5);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
}
.card-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.card-header-left {
  font-size: 16px;
}
.card-header-right {
  font-size: 14px;
}
.card-content {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
}
.card-content .img {
  width: 24%;
  height: 80px;
  margin: 2px;
  box-sizing: border-box;
}
</style>
